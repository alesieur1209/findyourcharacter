import characters from "./characters.js"; // Assuming your character data is here

// Get the character name from the URL
const params = new URLSearchParams(window.location.search);
const characterName = params.get('name');

// Find the character in your data
const character = characters.find(c => c.name === characterName);

if (character) {
    // Populate character info
    document.getElementById('character-name').textContent = character.name;

    // Add images to the gallery
    const imageGallery = document.getElementById('thumbnail-container');
    const currentImage = document.getElementById('current-image');
    character.images.forEach((image, index) => {
        const img = document.createElement('img');
        img.src = image;
        img.alt = character.name;
        img.className = "thumbnail";
        img.addEventListener('click', () => {
            currentImage.src = image;
        });
        imageGallery.appendChild(img);

        // Set the first image as the default
        if (index === 0) {
            currentImage.src = image;
        }
    });

    // Add details to the details section
    const detailsList = document.getElementById('character-details');
    for (const [key, value] of Object.entries(character.details)) {
        const li = document.createElement('li');
        li.textContent = `${key}: ${value}`;
        detailsList.appendChild(li);
    }

    // Add tags
    const tagsContainer = document.getElementById('character-tags');
    character.tags.forEach(tag => {
        const span = document.createElement('span');
        span.className = "tag";
        span.textContent = tag;
        tagsContainer.appendChild(span);
    });
} else {
    document.body.innerHTML = '<p>Character not found.</p>';
}
