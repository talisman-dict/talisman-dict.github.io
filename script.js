const searchInput = document.getElementById("cardSearch");
const resultContainer = document.getElementById("cardResult");
const suggestionsContainer = document.getElementById("suggestions");

// Note: cardDatabase is now expected to be globally available from data/card_data.js

function normalizeText(text) {
  if (!text) return "";
  return text
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .toLowerCase()
    .trim();
}

function renderCard(card) {
  suggestionsContainer.style.display = "none";
  if (!card) {
    resultContainer.innerHTML = '<p class="no-result">No results.</p>';
    return;
  }

  const imagePath = `data/img/${card.image_file}`;
  resultContainer.innerHTML = `
        <div class="talisman-card">
            <div class="card-header">
                <h2 class="card-name">${card.english_name}</h2>
                <h3 class="card-french-name">${card.french_name}</h3>
            </div>
            <div class="card-image-box">
                <img src="${imagePath}" alt="${card.english_name}" onerror="this.src='https://via.placeholder.com/300x220?text=Image+Manquante'">
            </div>
            <div class="card-info">
                ${card.description}
            </div>
        </div>
    `;
}

function showSuggestions(query) {
  const matches = Object.values(cardDatabase)
    .filter(
      (card) =>
        normalizeText(card.french_name).includes(query) ||
        normalizeText(card.english_name).includes(query),
    )
    .slice(0, 8); // Limit to 8 suggestions

  if (matches.length > 0) {
    suggestionsContainer.innerHTML = matches
      .map(
        (card) => `
      <div class="suggestion-item" data-name="${card.english_name}">
        <span class="eng">${card.english_name}</span>
        <span class="fra">${card.french_name}</span>
      </div>
    `,
      )
      .join("");
    suggestionsContainer.style.display = "block";
  } else {
    suggestionsContainer.style.display = "none";
  }
}

searchInput.addEventListener("input", (e) => {
  const query = normalizeText(e.target.value);
  if (query.length < 2) {
    suggestionsContainer.style.display = "none";
    resultContainer.innerHTML = "";
    return;
  }
  showSuggestions(query);
});

suggestionsContainer.addEventListener("click", (e) => {
  const item = e.target.closest(".suggestion-item");
  if (item) {
    const cardName = item.getAttribute("data-name");
    const card = Object.values(cardDatabase).find(
      (c) => c.english_name === cardName,
    );
    searchInput.value = card.english_name;
    renderCard(card);
  }
});

// Close suggestions when clicking outside
document.addEventListener("click", (e) => {
  if (
    !searchInput.contains(e.target) &&
    !suggestionsContainer.contains(e.target)
  ) {
    suggestionsContainer.style.display = "none";
  }
});
