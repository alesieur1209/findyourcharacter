import { characters } from "./characters.js";

// Filter characters by tags
function filterCharacters(selectedTags) {
    const flattenTags = Object.values(selectedTags).flat().filter(tag => tag !== "");
    return characters.filter(character => {
        return flattenTags.every(tag => character.tags.includes(tag));
    });
}

// Search characters by name
function findCharacterByName(name) {
    const lowerCaseName = name.toLowerCase();
    return characters.filter(character =>
        character.name.toLowerCase().includes(lowerCaseName)
    );
}


// Display results
function displayResults(results) {
    const resultsContainer = document.querySelector("#results-container");
    resultsContainer.innerHTML = "";

    if (results.length === 0) {
        resultsContainer.innerHTML = "<p>No characters found.</p>";
        return;
    }

    results.forEach(character => {
        const characterCard = document.createElement("div");
        characterCard.className = "character-card";
        characterCard.innerHTML = `
            <img src="${character.images[0]}" alt="${character.name}">
            <h3>${character.name}</h3>
        `;
        characterCard.addEventListener("click", () => {
            window.location.href = `character.html?name=${encodeURIComponent(character.name)}`;
        });
        resultsContainer.appendChild(characterCard);
    });
}

// Main logic for handling queries
const queryParams = new URLSearchParams(window.location.search);
const query = queryParams.get('query'); // Name search term
const selectedTags = {};

// Extract tag filters
queryParams.forEach((value, key) => {
    if (key !== 'query') {
        selectedTags[key] = value.split(",");
    }
});

// Determine which filtering to apply
let results = [];
if (query) {
    // Search by name
    results = findCharacterByName(query);
} else if (Object.keys(selectedTags).length > 0) {
    // Filter by tags
    results = filterCharacters(selectedTags);
}

// Display results
if (results.length > 0) {
    displayResults(results);
} else {
    const resultsContainer = document.querySelector("#results-container");
    resultsContainer.innerHTML = "<p>No characters found.</p>";
}
