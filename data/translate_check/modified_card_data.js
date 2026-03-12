const cardDatabase = {
  Cascade: {
    french_name: "Cascade",
    english_name: "Waterfall",
    wiki_url: "http://www.talismanwiki.com/Waterfall",
    image_file: "waterfall.png",
    description:
      'Region: Highland Region "Choose One"Either heal 1 life, replenish 1 fate, or gain 1 Spell, if your Craft allows. Number of Waterfall spaces in the game: 1 (     1 in the Highland Region;         )',
  },
  "Collines (Case du Plateau)": {
    french_name: "Collines (Case du Plateau)",
    english_name: "Hills Board Space",
    wiki_url: "http://www.talismanwiki.com/Hills_(Board_Space)",
    image_file: "hills_board_space.png",
    description:
      'Space: Hills Region: Outer Region, Middle Region, Highland Region, Outer Region (Cataclysm Board), Middle Region (Cataclysm Board) "Draw 1 Card"Do not draw a card if there is already one in this space.',
  },
  "La Crête": {
    french_name: "La Crête",
    english_name: "The Ridgeway",
    wiki_url: "http://www.talismanwiki.com/The_Ridgeway",
    image_file: "the_ridgeway.png",
    description:
      'Space: The Ridgeway Region: Highland Region "Cross the Ridgeway"Roll 1 die to see what dangers lurk on the Ridgeway:\n\n Marauders demand all your gold. Pay up or fight them with Strength 6\n\n Rock slide; lose 1 life\n\n Rock slide; lose 1 life\n\n Safe\n\n Safe\n\n A prospector leads you across; gain 1 gold',
  },
  Canyon: {
    french_name: "Canyon",
    english_name: "Canyon",
    wiki_url: "http://www.talismanwiki.com/Canyon",
    image_file: "canyon.png",
    description:
      'Space: Canyon Region: Highland Region "Draw 3 Cards"If there are already any cards in this space, draw only enough to take the total to three cards.',
  },
  "Entrée des Hautes Terres": {
    french_name: "Entrée des Hautes Terres",
    english_name: "Highland Entrance",
    wiki_url: "http://www.talismanwiki.com/Highland_Entrance",
    image_file: "highland_entrance.png",
    description:
      'Space: Highland Entrance Region: Highland Region "Draw 1 Card"Do not draw a card if there is already one in this space.',
  },
  Falaise: {
    french_name: "Falaise",
    english_name: "Cliff",
    wiki_url: "http://www.talismanwiki.com/Cliff",
    image_file: "cliff.png",
    description:
      'Space: Cliff Region: Highland Region "Draw 1 Card"Do not draw a card if there is already one in this space.',
  },
  Aire: {
    french_name: "Aire",
    english_name: "Eyrie",
    wiki_url: "http://www.talismanwiki.com/Eyrie",
    image_file: "eyrie.png",
    description:
      'Space: Eyrie Region: Highland Region "Fight the Eagle King"The Eagle King has Strength 8 and Craft 8.If you win, you may gain 1 Relic and move to any space in the Outer or Middle Region.If you are defeated or have a stand-off, move to the Crags.',
  },
  Glacier: {
    french_name: "Glacier",
    english_name: "Glacier",
    wiki_url: "http://www.talismanwiki.com/Glacier",
    image_file: "glacier.png",
    description:
      'Space: Glacier Region: Highland Region "Roll 2 Dice"If the score is less than your combined Strength and Craft move to any Hills in any Region.If the score is equal to or higher, lose your next turn.',
  },
  "Pont de Glace": {
    french_name: "Pont de Glace",
    english_name: "Ice Bridge",
    wiki_url: "http://www.talismanwiki.com/Ice_Bridge",
    image_file: "ice_bridge.png",
    description:
      'Space: Ice Bridge Region: Highland Region "Cross the Bridge"Roll 1 die and subtract the number of Followers you have.If the score is zero or less, the bridge gives way and you are killed!You may ditch any number of Followers before you roll the die.',
  },
  "Chemin de Montagne": {
    french_name: "Chemin de Montagne",
    english_name: "Mountain Pass",
    wiki_url: "http://www.talismanwiki.com/Mountain_Pass",
    image_file: "mountain_pass.png",
    description:
      'Space: Mountain Pass Region: Highland Region "Draw 1 Card"Draw 1 card even if there are already any cards in this space. On your next turn, instead of your normal move, roll 1 die:\n\n 1-3) No way across; encounter this space again\n\n 4-5) Move away normally\n\n 6) Move to the Lost City',
  },
  "Cité Perdue": {
    french_name: "Cité Perdue",
    english_name: "Lost City",
    wiki_url: "http://www.talismanwiki.com/Lost_City",
    image_file: "lost_city.png",
    description:
      'Space: Lost City Region: Highland Region "Roll 2 Dice"\n\n Lose 1 Craft\n Lose 1 Strength\n Lose 1 life\n Either lose 1 Follower or 1 life\n Lost; stay here until you roll a 4,5 or 6 for your move\n Gain 1 gold\n Gain 3 gold\n Gain a Talisman\n Gain 1 Armour from the Purchase Deck\n Gain 1 Weapon from the Purchase Deck\nGain one Relic from the Relic Deck',
  },
  Précipice: {
    french_name: "Précipice",
    english_name: "Precipice",
    wiki_url: "http://www.talismanwiki.com/Precipice",
    image_file: "precipice.png",
    description:
      'Space: Precipice Region: Highland Region "Draw 1 Card"Draw 1 card even if there are already any cards in this space. Discard all cards remaining on this space at the end of your turn.',
  },
  Ravin: {
    french_name: "Ravin",
    english_name: "Ravine",
    wiki_url: "http://www.talismanwiki.com/Ravine",
    image_file: "ravine.png",
    description:
      'Region: Highland Region "Draw 2 Cards"If there are already any cards in this space, draw only enough to take the total to two cards. Number of Ravine spaces in the game: 4 (     4 in the Highland Region;         )',
  },
  "Mine Abandonnée": {
    french_name: "Mine Abandonnée",
    english_name: "Ruined Mine",
    wiki_url: "http://www.talismanwiki.com/Ruined_Mine",
    image_file: "ruined_mine.png",
    description:
      'Region: Highland Region "Roll 1 Die"\n\n Attacked by a Cave Troll with Strength 6\n\n Attacked by a Wood Ghost with Craft 3\n\n Attacked by a Wraith with Craft 5\n\n Lost for 1 turn\n\n Gain 1 gold\n\n Gain 2 gold\n\n Gain 3 gold Number of Ruined Mine spaces in the game: 1 (     1 in the Highland Region;         )',
  },
  "Alchimiste (Personnage)": {
    french_name: "Alchimiste (Personnage)",
    english_name: "Alchemist Character",
    wiki_url: "http://www.talismanwiki.com/Alchemist_(Character)",
    image_file: "alchemist_character.png",
    description:
      "Character: Alchemist (Character) Start: City Alignment: Neutral",
  },
  Amphiptère: {
    french_name: "Amphiptère",
    english_name: "Amphiptere",
    wiki_url: "http://www.talismanwiki.com/Amphiptere",
    image_file: "amphiptere.png",
    description:
      "Title: Amphiptere Draconic Lord: Varthrax (Dragon Expansion only) Card Type: Enemy",
  },
  Arnkell: {
    french_name: "Arnkell",
    english_name: "Arnkell",
    wiki_url: "http://www.talismanwiki.com/Arnkell",
    image_file: "arnkell.png",
    description:
      "Title: Arnkell Card Type: Magic Object Instead of moving normally, you may discard Arnkell to teleport to any space in the same Region.You must ditch any Followers before you move.",
  },
  Astrologue: {
    french_name: "Astrologue",
    english_name: "Astrologer",
    wiki_url: "http://www.talismanwiki.com/Astrologer",
    image_file: "astrologer.png",
    description:
      "Title: Astrologer Card Type: Stranger The Astrologer will remain here for the rest of the game. Draw 3 Adventure Cards, place one facedown in front of you, and discard the other cards. You may place your facedown Adventure Card on top of its deck at the start of any character's turn.",
  },
  Avalanche: {
    french_name: "Avalanche",
    english_name: "Avalanche",
    wiki_url: "http://www.talismanwiki.com/Avalanche",
    image_file: "avalanche.png",
    description: "Title: Avalanche Card Type: Event Roll 1 die:",
  },
  "Maître des Bêtes": {
    french_name: "Maître des Bêtes",
    english_name: "Beastmaster",
    wiki_url: "http://www.talismanwiki.com/Beastmaster",
    image_file: "beastmaster.png",
    description:
      "Title: Beastmaster Card Type: Follower You may tame one Animal you encounter instead of attacking it. The Animal adds its Strength to yours during your next battle, and then journeys off to the discard pile along with this card.",
  },
  "Tempete de Neige": {
    french_name: "Tempete de Neige",
    english_name: "Blizzard",
    wiki_url: "http://www.talismanwiki.com/Blizzard",
    image_file: "blizzard.png",
    description:
      "Title: Blizzard Card Type: Event Winter has come with a vengeance and a Blizzard envelops the land. For two rounds, all characters, no matter what Region they are in, may only move one space per turn. The Blizzard then abates to the discard pile.",
  },
  "Sorcière au Chaudron": {
    french_name: "Sorcière au Chaudron",
    english_name: "Cauldron Crone",
    wiki_url: "http://www.talismanwiki.com/Cauldron_Crone",
    image_file: "cauldron_crone.png",
    description:
      "Title: Cauldron Crone Card Type: Stranger The Cauldron Crone will remain here for the rest of the game. Roll 1 die:",
  },
  "Spectre Glace": {
    french_name: "Spectre Glace",
    english_name: "Chill Wraith",
    wiki_url: "http://www.talismanwiki.com/Chill_Wraith",
    image_file: "chill_wraith.png",
    description: "Title: Chill Wraith Card Type: Enemy Sub Type: Spirit",
  },
  "Homme de Clan": {
    french_name: "Homme de Clan",
    english_name: "Clansman",
    wiki_url: "http://www.talismanwiki.com/Clansman",
    image_file: "clansman.png",
    description:
      "Title: Clansman Card Type: Follower Add 2 to your Strength during battle.You must reduce your attack score by 2 during psychic combat.",
  },
  "Dragon des Nuages": {
    french_name: "Dragon des Nuages",
    english_name: "Cloud Dragon",
    wiki_url: "http://www.talismanwiki.com/Cloud_Dragon",
    image_file: "cloud_dragon.png",
    description:
      "Title: Cloud Dragon Draconic Lord: Varthrax (Dragon Expansion only) Card Type: Enemy",
  },
  "Tisseur des Rochers": {
    french_name: "Tisseur des Rochers",
    english_name: "Crag Crawler",
    wiki_url: "http://www.talismanwiki.com/Crag_Crawler",
    image_file: "crag_crawler.png",
    description: "Title: Crag Crawler Card Type: Enemy Sub Type: Animal",
  },
  Cryomancien: {
    french_name: "Cryomancien",
    english_name: "Cryomancer",
    wiki_url: "http://www.talismanwiki.com/Cryomancer",
    image_file: "cryomancer.png",
    description: "Title: Cryomancer Card Type: Enemy Sub Type: Cultist",
  },
  "Éclat de Cristal": {
    french_name: "Éclat de Cristal",
    english_name: "Crystal Shard",
    wiki_url: "http://www.talismanwiki.com/Crystal_Shard",
    image_file: "crystal_shard.png",
    description:
      "Title: Crystal Shard Card Type: Magic Object Sub Type: Trinket",
  },
  Cyclope: {
    french_name: "Cyclope",
    english_name: "Cyclops",
    wiki_url: "http://www.talismanwiki.com/Cyclops",
    image_file: "cyclops.png",
    description:
      "Title: Cyclops Card Type: Stranger Roll 1 die to determine how the Cyclops reacts to you:",
  },
  Pierraube: {
    french_name: "Pierraube",
    english_name: "Dawnstone",
    wiki_url: "http://www.talismanwiki.com/Dawnstone",
    image_file: "dawnstone.png",
    description: "Title: Dawnstone Card Type: Magic Object Sub Type: Trinket",
  },
  Diamant: {
    french_name: "Diamant",
    english_name: "Diamond",
    wiki_url: "http://www.talismanwiki.com/Diamond",
    image_file: "diamond.png",
    description: "Title: Diamond Card Type: Object Sub Type: Trinket",
  },
  "Sang de Dragon": {
    french_name: "Sang de Dragon",
    english_name: "Dragon's Blood",
    wiki_url: "http://www.talismanwiki.com/Dragon%27s_Blood",
    image_file: "dragon_27s_blood.png",
    description:
      "Title: Dragon's Blood Card Type: Magic Object Sub Type: Trinket",
  },
  "Œil de Dragon": {
    french_name: "Œil de Dragon",
    english_name: "Dragon's Eye",
    wiki_url: "http://www.talismanwiki.com/Dragon%27s_Eye",
    image_file: "dragon_27s_eye.png",
    description:
      "Title: Dragon's Eye Card Type: Magic Object Sub Type: Trinket",
  },
  Aileffroi: {
    french_name: "Aileffroi",
    english_name: "Dreadwing",
    wiki_url: "http://www.talismanwiki.com/Dreadwing",
    image_file: "dreadwing.png",
    description:
      "Title: Dreadwing Card Type: Follower You may roll 2 dice and add them together to determine how far you move.If you roll the same result on both dice for your move, you may teleport to any space in the same Region instead.",
  },
  "Nid d'Aigle": {
    french_name: "Nid d'Aigle",
    english_name: "Eagle's Nest",
    wiki_url: "http://www.talismanwiki.com/Eagle%27s_Nest",
    image_file: "eagle_27s_nest.png",
    description:
      "Title: Eagle's Nest Card Type: Place Place this card on the Mountain Pass. The first character to visit may climb to the nest and collect the Talisman that the Eagle left behind. Discard the Eagle’s Nest once the Talisman has been collected.",
  },
  "Élémentaire de Terre": {
    french_name: "Élémentaire de Terre",
    english_name: "Earth Elemental",
    wiki_url: "http://www.talismanwiki.com/Earth_Elemental",
    image_file: "earth_elemental.png",
    description: "Title: Earth Elemental Card Type: Enemy Sub Type: Elemental",
  },
  Émeraude: {
    french_name: "Émeraude",
    english_name: "Emerald",
    wiki_url: "http://www.talismanwiki.com/Emerald",
    image_file: "emerald.png",
    description: "Title: Emerald Card Type: Object Sub Type: Trinket",
  },
  "Yeux du Faucon": {
    french_name: "Yeux du Faucon",
    english_name: "Eyes of the Hawk",
    wiki_url: "http://www.talismanwiki.com/Eyes_of_the_Hawk",
    image_file: "eyes_of_the_hawk.png",
    description:
      "Title: Eyes of the Hawk Cast on yourself after you have rolled a die for your move. You may move any number of spaces up to your die roll, instead of moving the full distance as indicated by the die roll. Copies of this Card: 2   (     2 in The Highland Expansion;            )",
  },

  Fauconnier: {
    french_name: "Fauconnier",
    english_name: "Falconer",
    wiki_url: "http://www.talismanwiki.com/Falconer",
    image_file: "falconer.png",
    description: "Title: Falconer Card Type: Enemy Sub Type: Spirit",
  },
  "Potion de Vol": {
    french_name: "Potion de Vol",
    english_name: "Flight Potion",
    wiki_url: "http://www.talismanwiki.com/Flight_Potion",
    image_file: "flight_potion.png",
    description:
      "Title: Flight Potion Card Type: Magic Object Sub Type: Trinket",
  },
  "Géant du Froid": {
    french_name: "Géant du Froid",
    english_name: "Friendly Giant",
    wiki_url: "http://www.talismanwiki.com/Friendly_Giant",
    image_file: "friendly_giant.png",
    description:
      "Title: Friendly Giant Card Type: Follower The Giant may fight in your place with a Strength of 6 or a Craft of 3. If the Giant wins, the creature is killed or the opposing character must lose 1 life, then you must ditch the Giant on your space. If the Giant loses or has a stand-off, it is killed and your turn immediately ends. Enemies killed may be taken as trophies.",
  },
  "Drake de Givre": {
    french_name: "Drakéide du Givre",
    english_name: "Frost Drake",
    wiki_url: "http://www.talismanwiki.com/Frost_Drake_(Adventure)",
    image_file: "frost_drake_adventure.png",
    description: "Title: Frost Drake Card Type: Enemy Sub Type: Dragon",
  },
  "Géant du Givre": {
    french_name: "Géant du Givre",
    english_name: "Frost Giant",
    wiki_url: "http://www.talismanwiki.com/Frost_Giant",
    image_file: "frost_giant.png",
    description: "Title: Frost Giant Card Type: Enemy Sub Type: Monster",
  },

  "Gong de Guerre": {
    french_name: "Gong de Guerre",
    english_name: "Gong of War",
    wiki_url: "http://www.talismanwiki.com/Gong_of_War",
    image_file: "gong_of_war.png",
    description:
      "Title: Gong of War Card Type: Place You may summon 1 character from any Region to fight. Place the character on this space and attack him as if you had encountered him (by battle, or by psychic combat if you are permitted). Once the Gong has been used, it crumbles to the discard pile.",
  },
  Harpie: {
    french_name: "Harpie",
    english_name: "Harpy",
    wiki_url: "http://www.talismanwiki.com/Harpy",
    image_file: "harpy.png",
    description: "Title: Harpy Card Type: Enemy Sub Type: Monster",
  },
  Aiglon: {
    french_name: "Aiglon",
    english_name: "Hatchling",
    wiki_url: "http://www.talismanwiki.com/Hatchling",
    image_file: "hatchling.png",
    description: "Title: Hatchling Card Type: Enemy Sub Type: Animal",
  },
  "Ermite (Hautes Terres)": {
    french_name: "Ermite (Hautes Terres)",
    english_name: "Hermit Highland",
    wiki_url: "http://www.talismanwiki.com/Hermit_(Highland)",
    image_file: "hermit_highland.png",
    description:
      "Title: Hermit Card Type: Stranger Roll 1 die and place the Hermit on the indicated space",
  },
  "Crevasse (Gouffre) Caché": {
    french_name: "Crevasse (Gouffre) Caché",
    english_name: "Hidden Chasm",
    wiki_url: "http://www.talismanwiki.com/Hidden_Chasm",
    image_file: "hidden_chasm.png",
    description:
      "Title: Hidden Chasm Card Type: Event If you have a Horse and Cart, Mule, Riding Horse, or Warhorse, they fall down the snow-covered chasm and are killed.Then discard this card.",
  },

  "Pilleurs (Pillards) des Hautes Terres": {
    french_name: "Pilleurs (Pillards) des Hautes Terres",
    english_name: "Highland Raiders",
    wiki_url: "http://www.talismanwiki.com/Highland_Raiders",
    image_file: "highland_raiders.png",
    description:
      "Title: Highland Raiders Card Type: Event Highland Raiders attack you and abduct all your Followers. They immediately imprison the Followers at the Ridgeway (place the cards there). The Raiders then sneak away to their hideout in the discard pile.",
  },

  Hippogriffe: {
    french_name: "Hippogriffe",
    english_name: "Hippogriff",
    wiki_url: "http://www.talismanwiki.com/Hippogriff",
    image_file: "hippogriff.png",
    description: "Title: Hippogriff Card Type: Enemy Sub Type: Monster",
  },
  "Grand-duc": {
    french_name: "Grand-duc",
    english_name: "Horned Owl",
    wiki_url: "http://www.talismanwiki.com/Horned_Owl",
    image_file: "horned_owl.png",
    description:
      "Title: Horned Owl Card Type: Follower Add 1 to your Craft.If you are instructed to lose one or more turns, you may discard the Horned Owl to negate the loss.",
  },
  "Bois de Pouvoir": {
    french_name: "Bois de Pouvoir",
    english_name: "Horns of Power",
    wiki_url: "http://www.talismanwiki.com/Horns_of_Power",
    image_file: "horns_of_power.png",
    description:
      "Title: Horns of Power Card Type: Magic Object Add 1 to your Strength and 1 to your Craft.",
  },

  "Sceptre de Glace": {
    french_name: "Sceptre de Glace",
    english_name: "Ice Sceptre",
    wiki_url: "http://www.talismanwiki.com/Ice_Sceptre",
    image_file: "ice_sceptre.png",
    description: "Title: Ice Sceptre Card Type: Magic Object Sub Type: Trinket",
  },
  "Chemin Glacé": {
    french_name: "Chemin Glacé",
    english_name: "Icy Path",
    wiki_url: "http://www.talismanwiki.com/Icy_Path",
    image_file: "icy_path.png",
    description:
      "Title: Icy Path Card Type: Place The Icy Path will remain here for the rest of the game. Roll 1 die:",
  },
  "Potion d'Invisibilité": {
    french_name: "Potion d'Invisibilité",
    english_name: "Invisibility Potion",
    wiki_url: "http://www.talismanwiki.com/Invisibility_Potion",
    image_file: "invisibility_potion.png",
    description:
      "Title: Invisibility Potion Card Type: Magic Object Sub Type: Trinket",
  },
  "Pierre d'Aimant": {
    french_name: "Pierre d'Aimant",
    english_name: "Lodestone",
    wiki_url: "http://www.talismanwiki.com/Lodestone",
    image_file: "lodestone.png",
    description:
      "Title: Lodestone Card Type: Object You must take the Lodestone. It counts as 2 Objects for your carrying limit. If you visit the Alchemist in the City, you may discard the Lodestone to gain 1 gold.",
  },

  "Fée de la Fortune": {
    french_name: "Fée de la Fortune",
    english_name: "Luck Fairy",
    wiki_url: "http://www.talismanwiki.com/Luck_Fairy",
    image_file: "luck_fairy.png",
    description:
      "Title: Luck Fairy Card Type: Stranger The Luck Fairy will remain here for the rest of the game. Roll 1 die:",
  },
  Pierrechance: {
    french_name: "Pierrechance",
    english_name: "Luckstone",
    wiki_url: "http://www.talismanwiki.com/Luckstone",
    image_file: "luckstone.png",
    description: "Title: Luckstone Card Type: Magic Object Sub Type: Trinket",
  },
  "Porte-Bonheur": {
    french_name: "Porte-Bonheur",
    english_name: "Lucky Charm",
    wiki_url: "http://www.talismanwiki.com/Lucky_Charm",
    image_file: "lucky_charm.png",
    description:
      "Title: Lucky Charm Card Type: Object You may discard the Charm when you are about to make a die roll. You choose which result on the die to use instead of rolling it.",
  },
  "Bouclier Magique": {
    french_name: "Bouclier Magique",
    english_name: "Magic Shield",
    wiki_url: "http://www.talismanwiki.com/Magic_Shield",
    image_file: "magic_shield.png",
    description: "Title: Magic Shield Card Type: Magic Object Sub Type: Armour",
  },
  Pie: {
    french_name: "Pie",
    english_name: "Magpie",
    wiki_url: "http://www.talismanwiki.com/Magpie",
    image_file: "magpie.png",
    description:
      "Title: Magpie Card Type: Follower Whenever you encounter a space, Objects in that space are considered to have an encounter number of 1 instead of 5.",
  },
  Manticore: {
    french_name: "Manticore",
    english_name: "Manticore",
    wiki_url: "http://www.talismanwiki.com/Manticore",
    image_file: "manticore.png",
    description: "Title: Manticore Card Type: Enemy Sub Type: Monster",
  },
  "Vol d'Esprit": {
    french_name: "Vol d'Esprit",
    english_name: "Mind Steal",
    wiki_url: "http://www.talismanwiki.com/Mind_Steal",
    image_file: "mind_steal.png",
    description:
      "Title: Mind Steal Cast on another character at any time. Look at that character's Spells and take one of your choice. Copies of this Card: 2   (     2 in The Highland Expansion;            )",
  },
  Mineur: {
    french_name: "Mineur",
    english_name: "Miner",
    wiki_url: "http://www.talismanwiki.com/Miner",
    image_file: "miner.png",
    description:
      "Title: Miner Card Type: Follower The Miner can carry an extra four Objects for you if you pay him 1 gold. If you do not pay him, he wanders off to the discard pile.If you lose the Miner, leave any surplus Objects of your choice in the space you are in.",
  },
  "Dragon des Montagnes": {
    french_name: "Dragon des Montagnes",
    english_name: "Mountain Dragon",
    wiki_url: "http://www.talismanwiki.com/Mountain_Dragon",
    image_file: "mountain_dragon.png",
    description:
      "Title: Mountain Dragon Draconic Lord: Varthrax (Dragon Expansion only) Card Type: Enemy",
  },
  "Lion des Montagnes": {
    french_name: "Lion des Montagnes",
    english_name: "Mountain Lion",
    wiki_url: "http://www.talismanwiki.com/Mountain_Lion",
    image_file: "mountain_lion.png",
    description: "Title: Mountain Lion Card Type: Enemy Sub Type: Animal",
  },

  "Sentier de Montagne": {
    french_name: "Sentier de Montagne",
    english_name: "Mountain Trail",
    wiki_url: "http://www.talismanwiki.com/Mountain_Trail",
    image_file: "mountain_trail.png",
    description:
      "Title: Mountain Trail Card Type: Place The Mountain Trail will remain here for the rest of the game. On your next turn, instead of your normal move, you may move to the Highland Entrance.NOTE: This card can only be used if the Highland board is in use.",
  },
  "Maigre Bete de la Nuit": {
    french_name: "Maigre Bete de la Nuit",
    english_name: "Night Gaunt Highland",
    wiki_url: "http://www.talismanwiki.com/Night_Gaunt_(Highland)",
    image_file: "night_gaunt_highland.png",
    description: "Title: Night Gaunt Card Type: Enemy Sub Type: Spirit",
  },
  Opale: {
    french_name: "Opale",
    english_name: "Opal",
    wiki_url: "http://www.talismanwiki.com/Opal",
    image_file: "opal.png",
    description: "Title: Opal Card Type: Object Sub Type: Trinket",
  },
  "Bassin de Courage (Vigueur)": {
    french_name: "Bassin de Courage (Vigueur)",
    english_name: "Pool of Fortitude",
    wiki_url: "http://www.talismanwiki.com/Pool_of_Fortitude",
    image_file: "pool_of_fortitude.png",
    description:
      "Title: Pool of Fortitude Card Type: Place Place a total of 2 Strength and 2 life here when revealed. You may drink at the Pool once per visit and either gain 1 Strength or gain 1 life by taking the appropriate counter. When all 4 counters have been taken, the Pool vanishes to the discard pile.",
  },

  Prospecteur: {
    french_name: "Prospecteur",
    english_name: "Prospector",
    wiki_url: "http://www.talismanwiki.com/Prospector",
    image_file: "prospector.png",
    description:
      "Title: Prospector Card Type: Stranger You may sell any of your gems to the Prospector; discard the Lodestone, Opal, Emerald, Ruby, or Diamond as if you were at the City and gain the indicated amount of gold. The Prospector will depart to the discard pile once a character sells him gems.",
  },
  Revenant: {
    french_name: "Revenant",
    english_name: "Revenant",
    wiki_url: "http://www.talismanwiki.com/Revenant",
    image_file: "revenant.png",
    description: "Title: Revenant Card Type: Enemy Sub Type: Spirit",
  },
  "Anneau de Protection": {
    french_name: "Anneau de Protection",
    english_name: "Ring of Protection",
    wiki_url: "http://www.talismanwiki.com/Ring_of_Protection",
    image_file: "ring_of_protection.png",
    description:
      "Title: Ring of Protection Card Type: Magic Object Sub Type: Trinket",
  },
  "Perce Roche": {
    french_name: "Perce Roche",
    english_name: "Rock Mauler",
    wiki_url: "http://www.talismanwiki.com/Rock_Mauler",
    image_file: "rock_mauler.png",
    description: "Title: Rock Mauler Card Type: Enemy Sub Type: Monster",
  },
  Truand: {
    french_name: "Truand",
    english_name: "Rogue",
    wiki_url: "http://www.talismanwiki.com/Rogue",
    image_file: "rogue.png",
    description: "Character: Rogue Start: Tavern Alignment: Neutral",
  },
  "Portail Runique": {
    french_name: "Portail Runique",
    english_name: "Rune Gate",
    wiki_url: "http://www.talismanwiki.com/Rune_Gate",
    image_file: "rune_gate.png",
    description:
      "Title: Rune Gate Card Type: Place On your next turn, instead of your normal move, you may teleport to any other faceup Rune Gate or any Runes space.Once the Rune Gate has been used, it vanishes to the discard pile.",
  },
  "Nymphe des Frissons": {
    french_name: "Nymphe des Frissons",
    english_name: "Shiver Nymph",
    wiki_url: "http://www.talismanwiki.com/Shiver_Nymph",
    image_file: "shiver_nymph.png",
    description: "Title: Shiver Nymph Card Type: Enemy Sub Type: Spirit",
  },
  Simulacre: {
    french_name: "Simulacre",
    english_name: "Simulacrum",
    wiki_url: "http://www.talismanwiki.com/Simulacrum",
    image_file: "simulacrum.png",
    description:
      "Title: Simulacrum Cast on yourself when you are about to engage in battle or psychic combat. Resolve the attack as normal, except that if your attack score is less than your opponent’s, you are not defeated and the attack is considered a stand-off instead. Copies of this Card: 2   (     2 in The Highland Expansion;            )",
  },
  "Havre Du Ciel (Céleste)": {
    french_name: "Havre Du Ciel (Céleste)",
    english_name: "Sky Haven",
    wiki_url: "http://www.talismanwiki.com/Sky_Haven",
    image_file: "sky_haven.png",
    description:
      "Title: Sky Haven Card Type: Place The Sky Haven will remain here for the rest of the game. You may heal up to your life value and replenish fate up to your fate value at the cost of one gold each.",
  },
  "Chercheur du Ciel": {
    french_name: "Chercheur du Ciel",
    english_name: "Sky Seeker",
    wiki_url: "http://www.talismanwiki.com/Sky_Seeker",
    image_file: "sky_seeker.png",
    description: "Title: Sky Seeker Card Type: Enemy Sub Type: Spirit",
  },
  "Sentinelle du Ciel": {
    french_name: "Sentinelle du Ciel",
    english_name: "Skyfall Sentry",
    wiki_url: "http://www.talismanwiki.com/Skyfall_Sentry",
    image_file: "skyfall_sentry.png",
    description: "Title: Skyfall Sentry Card Type: Enemy Sub Type: Monster",
  },
  "Gobelin des Neiges": {
    french_name: "Gobelin des Neiges",
    english_name: "Snow Goblin",
    wiki_url: "http://www.talismanwiki.com/Snow_Goblin",
    image_file: "snow_goblin.png",
    description: "Title: Snow Goblin Card Type: Enemy Sub Type: Monster",
  },
  "Potion d'Envoutement": {
    french_name: "Potion d'Envoutement",
    english_name: "Spellbound Potion",
    wiki_url: "http://www.talismanwiki.com/Spellbound_Potion",
    image_file: "spellbound_potion.png",
    description:
      "Title: Spellbound Potion Card Type: Magic Object Sub Type: Trinket",
  },
  Pierresort: {
    french_name: "Pierresort",
    english_name: "Spellstone",
    wiki_url: "http://www.talismanwiki.com/Spellstone",
    image_file: "spellstone.png",
    description: "Title: Spellstone Card Type: Magic Object Sub Type: Trinket",
  },
  "Ruisseau de Connaissance": {
    french_name: "Ruisseau de Connaissance",
    english_name: "Stream of Knowledge",
    wiki_url: "http://www.talismanwiki.com/Stream_of_Knowledge",
    image_file: "stream_of_knowledge.png",
    description:
      "Title: Stream of Knowledge Card Type: Place Place a total of 2 Craft and 2 life here when revealed. You may drink at the Stream once per visit and either gain 1 Craft or gain 1 life by taking the appropriate counter. When all 4 counters have been taken, the Stream vanishes to the discard pile.",
  },
  "Mage des Serres": {
    french_name: "Mage des Serres",
    english_name: "Talon Mage",
    wiki_url: "http://www.talismanwiki.com/Talon_Mage",
    image_file: "talon_mage.png",
    description: "Title: Talon Mage Card Type: Enemy Sub Type: Spirit",
  },

  Cretetonnerre: {
    french_name: "Cretetonnerre",
    english_name: "Thundercrest",
    wiki_url: "http://www.talismanwiki.com/Thundercrest",
    image_file: "thundercrest.png",
    description: "Title: Thundercrest Card Type: Enemy Sub Type: Animal",
  },
  Pisteur: {
    french_name: "Pisteur",
    english_name: "Tracker",
    wiki_url: "http://www.talismanwiki.com/Tracker",
    image_file: "tracker.png",
    description:
      "Title: Tracker Card Type: Stranger The Tracker will remain here for the rest of the game.On your next turn, instead of your normal move, you may move to any faceup Enemy in this Region.",
  },
  Pionnier: {
    french_name: "Pionnier",
    english_name: "Trailblazer",
    wiki_url: "http://www.talismanwiki.com/Trailblazer",
    image_file: "trailblazer.png",
    description:
      "Title: Trailblazer Card Type: Follower You may roll two dice for your movement in the Highland and choose one of the results to use for your move.",
  },
  "Coffre au Trésor (Hautes Terres)": {
    french_name: "Coffre au Trésor (Hautes Terres)",
    english_name: "Treasure Chest Highland",
    wiki_url: "http://www.talismanwiki.com/Treasure_Chest_(Highland)",
    image_file: "treasure_chest_highland.png",
    description:
      "Title: Treasure Chest Card Type: Object You may discard the Chest during your turn to roll 1 die and gain that much gold.If you have the Treasure Map, you may roll 1 additional die and gain that much gold.",
  },
  "Chasseur de Trésor (Hautes Terres)": {
    french_name: "Chasseur de Trésor (Hautes Terres)",
    english_name: "Treasure Hunter Highland",
    wiki_url: "http://www.talismanwiki.com/Treasure_Hunter_(Highland)",
    image_file: "treasure_hunter_highland.png",
    description:
      "Title: Treasure Hunter Card Type: Follower If you move into a space that contains one or more Objects, you may end your move there, instead of moving the full distance as indicated by the die roll. The Treasure Hunter departs to the discard pile if you lose a battle or psychic combat.",
  },
  "Carte au Trésor (Hautes Terres)": {
    french_name: "Carte au Trésor (Hautes Terres)",
    english_name: "Treasure Map Highland",
    wiki_url: "http://www.talismanwiki.com/Treasure_Map_(Highland)",
    image_file: "treasure_map_highland.png",
    description:
      "Title: Treasure Map Card Type: Object Whenever you exchange any Bag of Gold card, you gain 1 additional gold.You may discard the Treasure Map at the Crags to gain 2 gold.",
  },
  Mouflon: {
    french_name: "Mouflon",
    english_name: "Tuskgore",
    wiki_url: "http://www.talismanwiki.com/Tuskgore",
    image_file: "tuskgore.png",
    description: "Title: Tuskgore Card Type: Enemy Sub Type: Animal",
  },
  "Potion Instable": {
    french_name: "Potion Instable",
    english_name: "Unstable Potion",
    wiki_url: "http://www.talismanwiki.com/Unstable_Potion",
    image_file: "unstable_potion.png",
    description:
      "Title: Unstable Potion Card Type: Magic Object Sub Type: Trinket",
  },
  "Bâton de Marche": {
    french_name: "Bâton de Marche",
    english_name: "Walking Stick",
    wiki_url: "http://www.talismanwiki.com/Walking_Stick",
    image_file: "walking_stick.png",
    description:
      "Title: Walking Stick Card Type: Object After you roll the die for your move, you may add 1 to the score.",
  },
  Voyageur: {
    french_name: "Voyageur",
    english_name: "Wayfarer",
    wiki_url: "http://www.talismanwiki.com/Wayfarer",
    image_file: "wayfarer.png",
    description:
      "Title: Wayfarer Card Type: Follower You need not roll the die in the Crags unless you wish to. If you choose to roll, you may add up to 2 to the score.",
  },
  "Puits de Vie": {
    french_name: "Puits de Vie",
    english_name: "Well of Life",
    wiki_url: "http://www.talismanwiki.com/Well_of_Life",
    image_file: "well_of_life.png",
    description:
      "Title: Well of Life Card Type: Place Place a total of 2 fate and 2 life here when revealed. You may drink at the Well once per visit and either gain 1 fate or gain 1 life by taking the appropriate counter. When all 4 counters have been taken, the Well vanishes to the discard pile.",
  },
  Vouivre: {
    french_name: "Vouivre",
    english_name: "Wyvern",
    wiki_url: "http://www.talismanwiki.com/Wyvern",
    image_file: "wyvern.png",
    description:
      "Title: Wyvern Draconic Lord: Varthrax (Dragon Expansion only) Card Type: Enemy",
  },
  "Lueur d'Ymir": {
    french_name: "Lueur d'Ymir",
    english_name: "Ymir's Glow",
    wiki_url: "http://www.talismanwiki.com/Ymir%27s_Glow",
    image_file: "ymir_27s_glow.png",
    description:
      "Title: Ymir's Glow Card Type: Event Starting with yourself, each character may gain his full complement of Spells, according to his current Craft.Ymir’s Glow then darkens to the discard pile.",
  },
  Embuscade: {
    french_name: "Embuscade",
    english_name: "Ambush",
    wiki_url: "http://www.talismanwiki.com/Ambush",
    image_file: "ambush.png",
    description:
      "Move the closest Enemy in this Region to this space. If two or more Enemies are an equal distance away, you choose which Enemy is moved here. If there are no Enemies in this Region, draw 1 card instead. Then discard this card. Copies of this Card: 1   (     1 in The Highland Expansion;            )",
  },
  Corbeautempete: {
    french_name: "Corbeautempete",
    english_name: "Carrion Crows",
    wiki_url: "http://www.talismanwiki.com/Carrion_Crows",
    image_file: "carrion_crows.png",
    description:
      "If you are defeated, in addition to losing 1 life, you must discard all of your trophies. It will remain here until it is killed. Copies of this Card: 1   (     1 in The Highland Expansion;            )",
  },
  "Caverne (Hautes Terres)": {
    french_name: "Caverne (Hautes Terres)",
    english_name: "Cave (Highland)",
    wiki_url: "http://www.talismanwiki.com/Cave_(Highland)",
    image_file: "cave_highland.png",
    description:
      "See what you discover inside by rolling 1 die: Copies of this Card: 1   (     1 in The Highland Expansion;            )",
  },
  "Dents de Dragon": {
    french_name: "Dents de Dragon",
    english_name: "Dragon's Teeth",
    wiki_url: "http://www.talismanwiki.com/Dragon%27s_Teeth",
    image_file: "dragon_27s_teeth.png",
    description:
      "Title: Dragon's Teeth Card Type: Magic Object You may discard the Teeth when you are about to engage in battle. Roll 1 die and add the result to your attack score.",
  },
  "Serre d'Aigle": {
    french_name: "Serre d'Aigle",
    english_name: "Eagle Talon",
    wiki_url: "http://www.talismanwiki.com/Eagle_Talon",
    image_file: "eagle_talon.png",
    description:
      "Card Type: Magic Object Add 1 to your Strength. Copies of this Card: 1   (     1 in The Highland Expansion;            )",
  },
  Orage: {
    french_name: "Orage",
    english_name: "Electrical Storm",
    wiki_url: "http://www.talismanwiki.com/Electrical_Storm",
    image_file: "electrical_storm.png",
    description:
      "Title: Electrical Storm All characters in this Region that have any Armour or Weapons are struck by lightning and lose 1 life.The Storm then thunders off to the discard pile. Copies of this Card: 1   (     1 in The Highland Expansion;            )",
  },
  "Serviteur de l'Aigle": {
    french_name: "Serviteur de l'Aigle",
    english_name: "Eyrie Outrider",
    wiki_url: "http://www.talismanwiki.com/Eyrie_Outrider",
    image_file: "eyrie_outrider.png",
    description:
      "Title: Eyrie Outrider A keen-eyed Eyrie Outrider soars among the clouds above this area. It will remain here until it is killed. Copies of this Card: 2   (     2 in The Highland Expansion;            )",
  },
  "Avant-garde du Nid De l'Aigle (Aire)": {
    french_name: "Avant-garde du Nid De l'Aigle (Aire)",
    english_name: "Eyrie Vanguard",
    wiki_url: "http://www.talismanwiki.com/Eyrie_Vanguard",
    image_file: "eyrie_vanguard.png",
    description:
      "Title: Eyrie Vanguard Take the top 3 cards from the Highland deck without looking at them or changing their order, and place them on top of the Adventure deck. Then discard this card.NOTE:  The Adventure Card version of this card can only be used if the Highland board is in use. Copies of this Card: 3   (     3 in The Highland Expansion;            )",
  },
  "Griffe Féline": {
    french_name: "Griffe Féline",
    english_name: "Felclaw",
    wiki_url: "http://www.talismanwiki.com/Felclaw",
    image_file: "felclaw.png",
    description:
      "If your Craft is lower than your Strength, you must fight in psychic combat. Otherwise you must fight in battle.It will remain here until it is killed. Copies of this Card: 1   (     1 in The Highland Expansion;            )",
  },
  Gourou: {
    french_name: "Gourou",
    english_name: "Guru",
    wiki_url: "http://www.talismanwiki.com/Guru",
    image_file: "guru.png",
    description:
      "The Guru grants you a Spell, if your Craft allows. Look through the Spell discard pile and take one of your choice. Then mix together the Spell deck and Spell discard pile and shuffle them. Once the Guru has granted a Spell he vanishes to the discard pile. Copies of this Card: 1   (     1 in The Highland Expansion;            )",
  },
  "Potion de Soins": {
    french_name: "Potion de Soins",
    english_name: "Healing Potion",
    wiki_url: "http://www.talismanwiki.com/Healing_Potion",
    image_file: "healing_potion.png",
    description:
      "Title: Healing Potion Card Type: Magic Object You may discard this potion at any time to heal 1 life or prevent a Follower from being killed.",
  },
  Montagnard: {
    french_name: "Montagnard",
    english_name: "Highlander",
    wiki_url: "http://www.talismanwiki.com/Highlander",
    image_file: "highlander.png",
    description:
      "Character: Highlander Copies of this Card: 1   (     1 in The Highland Expansion;            )",
  },
  "Élémentaire de Glace": {
    french_name: "Élémentaire de Glace",
    english_name: "Ice Elemental",
    wiki_url: "http://www.talismanwiki.com/Ice_Elemental",
    image_file: "ice_elemental.png",
    description:
      "A giant Ice Elemental is drifting through this area. It will remain here until it is killed. Copies of this Card: 2   (    1 in The Frostmarch Expansion; 1 in The Highland Expansion;            )",
  },
  Kobold: {
    french_name: "Kobold",
    english_name: "Kobold",
    wiki_url: "http://www.talismanwiki.com/Kobold",
    image_file: "kobold.png",
    description:
      "A miscreant Kobold is roaming this area. It will remain here until it is killed. Copies of this Card: 2   (     2 in The Highland Expansion;            )",
  },
  "Glissement de Terrain": {
    french_name: "Glissement de Terrain",
    english_name: "Landslide",
    wiki_url: "http://www.talismanwiki.com/Landslide",
    image_file: "landslide.png",
    description:
      "Move your character to the Highland Entrance or to any faceup Mountain Trail. The Landslide then rolls off to the discard pile.NOTE: This card can only be used if the Highland board is in use. Copies of this Card: 2   (     2 in The Highland Expansion;            )",
  },
  "Leprechaun (Étranger)": {
    french_name: "Leprechaun (Étranger)",
    english_name: "Leprechaun (Stranger)",
    wiki_url: "http://www.talismanwiki.com/Leprechaun_(Stranger)",
    image_file: "leprechaun_stranger.png",
    description:
      "The Leprechaun will remain here for the rest of the game. Roll 1 die: Copies of this Card: 2   (     1 in The Highland Expansion;        1 in The Woodland Expansion;    )",
  },
  Éclair: {
    french_name: "Éclair",
    english_name: "Lightning Bolt",
    wiki_url: "http://www.talismanwiki.com/Lightning_Bolt",
    image_file: "lightning_bolt.png",
    description:
      "Title: Lightning Bolt Cast at any time on any character. That character is stunned (may do nothing apart from negating this Spell with Counterspell) for the duration of that turn. Copies of this Card: 2   (     2 in The Highland Expansion;            )",
  },
  "Élémentaire d'Eclair": {
    french_name: "Élémentaire d'Eclair",
    english_name: "Lightning Elemental",
    wiki_url: "http://www.talismanwiki.com/Lightning_Elemental",
    image_file: "lightning_elemental.png",
    description:
      "Title: Lightning Elemental This formidable entity dominates the horizon with its savage energies. It will remain here until it is killed. Copies of this Card: 1   (     1 in The Highland Expansion;            )",
  },
  "Marteau Eclair": {
    french_name: "Marteau Eclair",
    english_name: "Lightning Hammer",
    wiki_url: "http://www.talismanwiki.com/Lightning_Hammer",
    image_file: "lightning_hammer.png",
    description:
      "Title: Lightning Hammer Card Type: Magic Object Add 1 to your Strength during battle.Whenever you fight more than one Enemy at the same time, you may add 3 to your Strength instead of 1.",
  },
  "Entree Magique": {
    french_name: "Entree Magique",
    english_name: "Magic Gateway",
    wiki_url: "http://www.talismanwiki.com/Magic_Gateway",
    image_file: "magic_gateway.png",
    description:
      "You stumble across a magical portal. Roll 2 dice. If the score is equal to or less than your Craft, you may avoid the portal.If it is higher, you are teleported to the Lost City. The Magic Gateway then vanishes to the discard pile.NOTE: This card can only be used if the Highland board is in use. Copies of this Card: 1   (     1 in The Highland Expansion;            )",
  },
  "Heaume Magique": {
    french_name: "Heaume Magique",
    english_name: "Magic Helmet",
    wiki_url: "http://www.talismanwiki.com/Magic_Helmet",
    image_file: "magic_helmet.png",
    description:
      "Card Type: Magic Object If you are defeated in battle and just lost a life, roll 1 die.If you roll a 5 or 6, the Helmet protected you and you did not lose that life, though you still lost the battle. Copies of this Card: 1   (     1 in The Highland Expansion;            )",
  },
  "Masse Magique": {
    french_name: "Masse Magique",
    english_name: "Magic Mace",
    wiki_url: "http://www.talismanwiki.com/Magic_Mace",
    image_file: "magic_mace.png",
    description:
      "Card Type: Magic Object Add 2 to your Strength during battle. Copies of this Card: 1   (     1 in The Highland Expansion;            )",
  },
  "Chèvre de Montagne": {
    french_name: "Chèvre de Montagne",
    english_name: "Mountain Goat",
    wiki_url: "http://www.talismanwiki.com/Mountain_Goat",
    image_file: "mountain_goat.png",
    description:
      "An imposing Mountain Goat stubbornly refuses to leave this area. It will remain here until it is killed. Copies of this Card: 2   (     2 in The Highland Expansion;            )",
  },
  "Chemin Escarpe (Étroit)": {
    french_name: "Chemin Escarpe (Étroit)",
    english_name: "Narrow Path",
    wiki_url: "http://www.talismanwiki.com/Narrow_Path",
    image_file: "narrow_path.png",
    description:
      "The Narrow Path will remain here for the rest of the game. Roll one die for yourself, and one for each of your Followers.If a 1 or 2 is rolled for yourself, lose 1 life. If a 1 or 2 is rolled for a Follower, it is killed. Copies of this Card: 1   (     1 in The Highland Expansion;            )",
  },
  Fantasme: {
    french_name: "Phantasme",
    english_name: "Phantasm",
    wiki_url: "http://www.talismanwiki.com/Phantasm",
    image_file: "phantasm.png",
    description:
      "A terrifying Phantasm haunts this place. It will remain here until it is killed. Copies of this Card: 1   (     1 in The Highland Expansion;            )",
  },
  "Serre de Fureur": {
    french_name: "Serre de Fureur",
    english_name: "Rage Talon",
    wiki_url: "http://www.talismanwiki.com/Rage_Talon",
    image_file: "rage_talon.png",
    description:
      "Card Type: Magic Object Add 2 to your Strength during battle.If you defeat another character and force him to lose a life, the character cannot use Armour to prevent the loss of life. Copies of this Card: 1   (     1 in The Highland Expansion;            )",
  },

  "Potion de Renouvellement": {
    french_name: "Potion de Renouvellement",
    english_name: "Renewal Potion",
    wiki_url: "http://www.talismanwiki.com/Renewal_Potion",
    image_file: "renewal_potion.png",
    description:
      "Title: Renewal Potion Card Type: Magic Object You may discard this potion at any time to discard any of your Spells and then draw an equal number of Spells.",
  },
  Roc: {
    french_name: "Roc",
    english_name: "Roc",
    wiki_url: "http://www.talismanwiki.com/Roc",
    image_file: "roc.png",
    description:
      "It will remain here until it is killed. If you are defeated, in addition to losing 1 life, the Roc drops you in the Mountain Pass.NOTE: The Adventure Card version of this card can only be used if the Highland board is in use. Copies of this Card: 3   (     3 in The Highland Expansion;            )",
  },
  "Paroi Rocheuse": {
    french_name: "Paroi Rocheuse",
    english_name: "Rock Face",
    wiki_url: "http://www.talismanwiki.com/Rock_Face",
    image_file: "rock_face.png",
    description:
      "The Rock Face will remain here for the rest of the game. Roll 2 dice. If the score is less than the combined total of your Strength and Craft, you climb the Rock Face successfully. If the score is equal to or higher, you must either lose 1 life or discard 1 Follower. Copies of this Card: 1   (     1 in The Highland Expansion;            )",
  },
  Rubis: {
    french_name: "Rubis",
    english_name: "Ruby",
    wiki_url: "http://www.talismanwiki.com/Ruby",
    image_file: "ruby.png",
    description:
      "If you visit the Alchemist in the City, you may discard the Ruby to gain 3 gold. Copies of this Card: 3   (     3 in The Highland Expansion;            )",
  },

  "Rumeur de Richesses (Hautes Terres)": {
    french_name: "Rumeur de Richesses (Hautes Terres)",
    english_name: "Rumour of Riches (Highland)",
    wiki_url: "http://www.talismanwiki.com/Rumour_of_Riches_(Highland)",
    image_file: "rumour_of_riches_highland.png",
    description:
      "Title: Rumour of Riches A great wealth is rumoured to exist somewhere in the land. Roll 1 die and place 3 gold on the indicated space. The Rumour then passes to the discard pile.",
  },
  "Hibou Savant": {
    french_name: "Hibou Savant",
    english_name: "Sage Owl",
    wiki_url: "http://www.talismanwiki.com/Sage_Owl",
    image_file: "sage_owl.png",
    description:
      "The Sage Owl will remain here for the rest of the game. On your next turn, during movement, you may move any number of spaces up to your die roll, instead of moving the full distance as indicated by the die roll. Copies of this Card: 1   (     1 in The Highland Expansion;            )",
  },
  "Briseur d'Âme": {
    french_name: "Briseur d'Âme",
    english_name: "Soul Shatter",
    wiki_url: "http://www.talismanwiki.com/Soul_Shatter",
    image_file: "soul_shatter.png",
    description:
      "Cast on any character or creature who you are about to engage in psychic combat. If cast on a character, he loses 2 lives. If cast on a creature, it is killed. Enemies killed may be taken as trophies. Copies of this Card: 2   (     2 in The Highland Expansion;            )",
  },
  Épéesort: {
    french_name: "Épéesort",
    english_name: "Spellsword",
    wiki_url: "http://www.talismanwiki.com/Spellsword",
    image_file: "spellsword.png",
    description:
      "Card Type: Magic Object Add 1 to your Craft during psychic combat.When you use the Spellsword in psychic combat to defeat an Enemy or another character and then cause him to lose a life, you gain 1 Spell, if your Craft allows. Copies of this Card: 1   (     1 in The Highland Expansion;            )",
  },
  "Tisseur de Sorts": {
    french_name: "Tisseur de Sorts",
    english_name: "Spellweaver",
    wiki_url: "http://www.talismanwiki.com/Spellweaver",
    image_file: "spellweaver.png",
    description:
      "The Spellweaver will remain here for the rest of the game. Draw 3 Spells, keep one if your Craft allows, and discard the other Spells. Copies of this Card: 1   (     1 in The Highland Expansion;            )",
  },
  Lutin: {
    french_name: "Lutin",
    english_name: "Sprite",
    wiki_url: "http://www.talismanwiki.com/Sprite",
    image_file: "sprite.png",
    description:
      "Copies of this Card: 1   (     1 in The Highland Expansion;            )",
  },
  "Invocateur de l'Orage": {
    french_name: "Invocateur de l'Orage",
    english_name: "Storm Caller",
    wiki_url: "http://www.talismanwiki.com/Storm_Caller",
    image_file: "storm_caller.png",
    description:
      "If you have any Armour you lose 1 life before fighting the Storm Caller. He will remain here until he is killed. Copies of this Card: 2   (  1 in The Reaper Expansion;   1 in The Highland Expansion;            )",
  },
  "Corbeau de Tempête": {
    french_name: "Corbeau de Tempête",
    english_name: "Stormcrow",
    wiki_url: "http://www.talismanwiki.com/Stormcrow",
    image_file: "stormcrow.png",
    description:
      "This ominous creature has summoned a storm in this area. It will remain here until it is killed. Copies of this Card: 1   (     1 in The Highland Expansion;            )",
  },
  Ailetempête: {
    french_name: "Ailetempête",
    english_name: "Stormwing",
    wiki_url: "http://www.talismanwiki.com/Stormwing",
    image_file: "stormwing.png",
    description:
      "A fearsome Stormwing soars above this area, ready to strike at any moment. It will remain here until it is killed. Copies of this Card: 1   (     1 in The Highland Expansion;            )",
  },
  "Rocher (Roulant)": {
    french_name: "Rocher (Roulant)",
    english_name: "Tumbling Boulder",
    wiki_url: "http://www.talismanwiki.com/Tumbling_Boulder",
    image_file: "tumbling_boulder.png",
    description:
      "Title: Tumbling Boulder Copies of this Card: 2   (     2 in The Highland Expansion;            )",
  },
  Vagabond: {
    french_name: "Vagabond",
    english_name: "Vagabond",
    wiki_url: "http://www.talismanwiki.com/Vagabond",
    image_file: "vagabond.png",
    description:
      "You must take the Vagabond as a Follower. Whenever you roll a 1 for your move, your turn immediately ends.You may discard the Vagabond if you pay him 2 gold. Copies of this Card: 1   (     1 in The Highland Expansion;            )",
  },
  Valkyrie: {
    french_name: "Valkyrie",
    english_name: "Valkyrie",
    wiki_url: "http://www.talismanwiki.com/Valkyrie",
    image_file: "valkyrie.png",
    description:
      "Copies of this Card: 1   (     1 in The Highland Expansion;            )",
  },
  Vampire: {
    french_name: "Vampire",
    english_name: "Vampiress",
    wiki_url: "http://www.talismanwiki.com/Vampiress",
    image_file: "vampiress.png",
    description:
      "Copies of this Card: 1   (     1 in The Highland Expansion;            )",
  },
  "Éruption Volcanique": {
    french_name: "Éruption Volcanique",
    english_name: "Volcanic Eruption",
    wiki_url: "http://www.talismanwiki.com/Volcanic_Eruption",
    image_file: "volcanic_eruption.png",
    description:
      "Title: Volcanic Eruption Molten lava courses down the mountains. Roll 1 die for each faceup Adventure Card in this Region.On a roll of 1, 2, or 3, the Adventure Card is swept away to the discard pile. The Eruption then flows to the discard pile. Copies of this Card: 1   (     1 in The Highland Expansion;            )",
  },

  "Homme des Terres Sauvages": {
    french_name: "Homme des Terres Sauvages",
    english_name: "Wildlander",
    wiki_url: "http://www.talismanwiki.com/Wildlander",
    image_file: "wildlander.png",
    description:
      "Instead of rolling the die for movement, you may encounter the space you are in, as if you just landed there (either encounter the space or a character in the space). The Wildlander then wanders off to the discard pile. Copies of this Card: 1   (     1 in The Highland Expansion;            )",
  },
  "Chevauche Vent": {
    french_name: "Chevauche Vent",
    english_name: "Wind Rider",
    wiki_url: "http://www.talismanwiki.com/Wind_Rider",
    image_file: "wind_rider.png",
    description:
      "A merciless Wind Rider keeps a watchful eye on this area from above. It will remain here until it is killed. Copies of this Card: 2   (     2 in The Highland Expansion;            )",
  },
  "Fouetteur de Vent": {
    french_name: "Fouetteur de Vent",
    english_name: "Windlasher",
    wiki_url: "http://www.talismanwiki.com/Windlasher",
    image_file: "windlasher.png",
    description:
      "Spells cannot be cast on the Windlasher. It will remain here until it is killed. Copies of this Card: 1   (     1 in The Highland Expansion;            )",
  },
  "Amulette Lordvent": {
    french_name: "Amulette Lordvent",
    english_name: "Windlord Amulet",
    wiki_url: "http://www.talismanwiki.com/Windlord_Amulet",
    image_file: "windlord_amulet.png",
    description:
      "Title: Windlord Amulet Card Type: Magic Object Add 2 to your Craft during psychic combat.If you defeat another character and force him to lose a life, the character cannot use Armour to prevent the loss of life.",
  },
  "Rodeur Ailé": {
    french_name: "Rodeur Ailé",
    english_name: "Winged Stalker",
    wiki_url: "http://www.talismanwiki.com/Winged_Stalker",
    image_file: "winged_stalker.png",
    description:
      "Title: Winged Stalker A Winged Stalker is silently hunting for prey in this area. It will remain here until it is killed. Copies of this Card: 1   (     1 in The Highland Expansion;            )",
  },
};
