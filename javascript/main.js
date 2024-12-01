const filterForm = document.getElementById('filterForm');
const submitButton = document.querySelector('.filter-submit-button');

submitButton.addEventListener('click', function(event) {
    event.preventDefault();

    const fieldsets = filterForm.querySelectorAll('fieldset');
    for (let fieldset of fieldsets) {
        const checkboxes = fieldset.querySelectorAll('input[type="checkbox"]');
        let isChecked = false;
        
        for (let checkbox of checkboxes) {
            if (checkbox.checked) {
                isChecked = true;
                break;
            }
        }

        if (!isChecked) {
            alert('Please select at least one option in each category.');
            return;
        }
    }

    // Get the selected tags from the filters
    //const selectedTags = getSelectedTags();

    // Filter the characters based on the selected tags
    //const filteredCharacters = filterCharacters(selectedTags);

    // Display the filtered characters (this part will depend on your display logic)
    //displayFilteredCharacters(filteredCharacters);
});