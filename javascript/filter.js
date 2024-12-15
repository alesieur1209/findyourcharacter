// This function grabs only the selected tags from the form and returns them in a flat structure.
function getSelectedTagsForCategory(categoryName) {
    return Array.from(document.querySelectorAll(`input[name="${categoryName}"]`))
        .filter(checkbox => checkbox.checked)
        .map(checkbox => checkbox.value);
}

// Return all the selected tags for each category as a flat object.
function getSelectedTags() {
    return {
        gender: getSelectedTagsForCategory("gender"),
        hairColor: getSelectedTagsForCategory("hair color"),
        hairLength: getSelectedTagsForCategory("hair length"),
        hairTexture: getSelectedTagsForCategory("hair texture"),
        facialHair: getSelectedTagsForCategory("facial hair"),
        eyeColor: getSelectedTagsForCategory("eye color"),
        skinTone: getSelectedTagsForCategory("skin tone"),
        height: getSelectedTagsForCategory("height"),
        ageRange: getSelectedTagsForCategory("age range"),
        species: getSelectedTagsForCategory("species"),
        clothingCoverage: getSelectedTagsForCategory("clothing coverage"),
        complexity: getSelectedTagsForCategory("complexity"),
        sourceMedium: getSelectedTagsForCategory("source medium")
    };
}

const filterForm = document.getElementById('filterForm');

// Handle the form submission on the filter page
filterForm.addEventListener('submit', function(event) {
    event.preventDefault();

    // Get the selected tags
    const selectedTags = getSelectedTags();

    // Encode selectedTags into a query string
    const queryParams = new URLSearchParams(selectedTags).toString();

    // Navigate to the results page with the query string
    window.location.href = `results.html?${queryParams}`;
    
})
