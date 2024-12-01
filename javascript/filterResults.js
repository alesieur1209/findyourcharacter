import { characters } from 'characters.js';

const genderTags = document.querySelectorAll('input[name="gender"]');
const hairColorTags = document.querySelectorAll('input[name="hair color"]');
const hairLengthTags = document.querySelectorAll('input[name="hair length"]');
const hairTextureTags = document.querySelectorAll('input[name="hair texture"]');
const facialHairTags = document.querySelectorAll('input[name="facial hair"]');
const eyeColorTags = document.querySelectorAll('input[name="eye color"]');
const skinToneTags = document.querySelectorAll('input[name="skin tone"]');
const heightTags = document.querySelectorAll('input[name="height"]');
const ageRangeTags = document.querySelectorAll('input[name="age range"]');
const speciesTags = document.querySelectorAll('input[name="species"]');
const clothingCoverageTags = document.querySelectorAll('input[name="clothing coverage"]');
const complexityTags = document.querySelectorAll('input[name="complexity"]');
const sourceMediumTags = document.querySelectorAll('input[name="source medium"]');

// Function to grab selected tags for any category
function getSelectedTagsForCategory(categoryName) {
    return Array.from(document.querySelectorAll(`input[name="${categoryName}"]`))
        .filter(checkbox => checkbox.checked)
        .map(checkbox => checkbox.value);
}

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


