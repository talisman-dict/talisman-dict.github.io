import os
import requests
from bs4 import BeautifulSoup
import json
import re
import time
import random
from cardname_link_mapping import highland_expansion_fr

# Configuration
STATIC_DIR = "data/img"
DATA_FILE = "data/card_data.json"
JS_FILE = "data/card_data.js"
MAX_RETRIES = 5
INITIAL_DELAY = 2

if not os.path.exists(STATIC_DIR):
    os.makedirs(STATIC_DIR)

# Load existing data to avoid re-scraping successful ones if possible
existing_data = {}
if os.path.exists(DATA_FILE):
    try:
        with open(DATA_FILE, "r", encoding="utf-8") as f:
            existing_data = json.load(f)
            print(f"Loaded {len(existing_data)} existing records.")
    except Exception as e:
        print(f"Could not load existing data: {e}")


def slugify(text):
    text = text.lower()
    text = re.sub(r"[^a-z0-9]+", "_", text)
    return text.strip("_")


def get_with_backoff(url):
    delay = INITIAL_DELAY
    for attempt in range(MAX_RETRIES):
        try:
            # Using a browser-like User-Agent to avoid simple blocks
            headers = {
                "User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/91.0.4472.124 Safari/537.36"
            }
            response = requests.get(url, timeout=30, headers=headers)
            if response.status_code == 200:
                return response
            elif response.status_code == 429:
                print(f"  Rate limited (429). Waiting {delay}s...")
            else:
                print(f"  Attempt {attempt+1}: Status {response.status_code} for {url}")
        except Exception as e:
            print(f"  Attempt {attempt+1}: Connection error for {url}: {e}")

        time.sleep(delay + random.uniform(0, 1))
        delay *= 2
    return None


def scrape_card(french_name, url):
    response = get_with_backoff(url)
    if not response:
        return None

    soup = BeautifulSoup(response.content, "html.parser")

    # Extract Image
    infobox = soup.find("table", class_="infobox")
    img_tag = infobox.find("img") if infobox else soup.find("img")
    img_filename = ""

    if img_tag:
        img_url = img_tag.get("src")
        if not img_url.startswith("http"):
            img_url = "http://www.talismanwiki.com" + img_url

        # Extract English name for slug
        english_name_raw = url.split("/")[-1]
        img_filename = slugify(english_name_raw) + ".png"
        img_path = os.path.join(STATIC_DIR, img_filename)

        if not os.path.exists(img_path):
            img_response = get_with_backoff(img_url)
            if img_response and img_response.status_code == 200:
                with open(img_path, "wb") as f:
                    f.write(img_response.content)

    # Extract Info from Infobox or Paragraphs
    card_info = {
        "french_name": french_name,
        "english_name": url.split("/")[-1]
        .replace("%27", "'")
        .replace("%28", "(")
        .replace("%29", ")")
        .replace("_", " "),
        "wiki_url": url,
        "image_file": img_filename,
        "type": "Card",  # Default
        "card_type": "",
        "subtype": "",
        "rules": "",
    }

    if infobox:
        rows = infobox.find_all("tr")
        for row in rows:
            th = row.find("th")
            td = row.find("td")
            if th and td:
                label = th.get_text(separator=" ").strip().lower()
                value = td.get_text(separator=" ").strip()
                if "card type" in label:
                    card_info["card_type"] = value
                elif "sub type" in label or "subtype" in label:
                    card_info["subtype"] = value
                elif "character" in label:
                    card_info["type"] = "Character"
                    card_info["card_type"] = "Character"

    # Fallback/Additional check in paragraphs for card type and subtype
    content_div = soup.find("div", id="mw-content-text")
    if content_div:
        paragraphs = content_div.find_all("p", recursive=False)
        ordered_lists = content_div.find_all("ol", recursive=False)
        description_lists = content_div.find_all("dl", recursive=False)
        for p in paragraphs:
            b_tags = p.find_all("b")
            if len(b_tags) >= 1:
                label = b_tags[0].get_text().strip().lower()
                if "card type" in label and not card_info["card_type"]:
                    text = p.get_text().strip()
                    if ":" in text:
                        card_info["card_type"] = text.split(":", 1)[1].strip()
                elif ("sub type" in label or "subtype" in label) and not card_info[
                    "subtype"
                ]:
                    text = p.get_text().strip()
                    if ":" in text:
                        card_info["subtype"] = text.split(":", 1)[1].strip()
                elif "character" in label:
                    card_info["type"] = "Character"
                    card_info["card_type"] = "Character"

        # Check if it's a Space
        content_text = soup.get_text()
        if "Region:" in content_text and (
            "Number of" in content_text or "spaces in the game" in content_text
        ):
            card_info["type"] = "Space"

        # Additional check for Spaces in categories or infobox
        if (
            card_info["type"] == "Card"
            and not card_info["card_type"]
            and not card_info["subtype"]
        ):
            if infobox:
                if "Region" in [th.get_text().strip() for th in infobox.find_all("th")]:
                    card_info["type"] = "Space"

        # Extract Rules / Description
        rules_text = ""
        for tag in paragraphs + ordered_lists + description_lists:
            text = ""
            if tag.name == "ol":
                items = tag.find_all("li", recursive=False)
                text = "\n".join(
                    [f"{index}. {item.get_text()}" for index, item in enumerate(items)]
                )
            else:
                text = tag.get_text().strip()

            should_not_contain = [
                "Title:",
                "Card Type:",
                "Encounter Number:",
                "Copies of this Card:",
                "Character:",
                "Sub Type:",
                "Space:",
                "Region:",
                "spaces in the game:",
            ]
            if not text or any(keyword in text for keyword in should_not_contain):
                continue
            rules_text += text + "\n"

        card_info["rules"] = rules_text.strip()

    return card_info


def main():
    results = {}
    items = list(highland_expansion_fr.items())
    total = len(items)

    print(f"Starting scrape. Total items: {total}")

    for i, (fr_name, url) in enumerate(items):
        print(f"[{i+1}/{total}] Scraping: {fr_name}...")
        data = scrape_card(fr_name, url)
        if data:
            results[fr_name] = data
            # Save incrementally to JSON
            with open(DATA_FILE, "w", encoding="utf-8") as f:
                json.dump(results, f, ensure_ascii=False, indent=4)
            print(f"  Done. Type: {data['type']}")
        else:
            print(f"  FAILED to scrape {fr_name}")

        time.sleep(random.uniform(1, 3))

    # Final JS Save
    region_db = {}
    card_db = {}

    for name, data in results.items():
        if data["type"] == "Space":
            region_db[name] = {
                "french_name": data["french_name"],
                "english_name": data["english_name"],
                "wiki_url": data["wiki_url"],
                "image_file": data["image_file"],
                "type": "Space",
                "rules": data["rules"],
            }
        else:
            card_db[name] = {
                "french_name": data["french_name"],
                "english_name": data["english_name"],
                "wiki_url": data["wiki_url"],
                "image_file": data["image_file"],
                "type": data["type"],
                "card_type": data["card_type"],
                "subtype": data["subtype"],
                "rules": data["rules"],
            }

    with open(JS_FILE, "w", encoding="utf-8") as f:
        f.write("const cardDatabase = ")
        f.write(json.dumps(region_db, ensure_ascii=False, indent=2))
        f.write(json.dumps(card_db, ensure_ascii=False, indent=2))
        f.write(";")

    print(f"Scrape finished. Total records: {len(results)}")


if __name__ == "__main__":
    main()
