// Array of affirmations imported from data.js
const affirmations = [
    "You are capable of achieving great things.",
    "Believe in yourself and your abilities.",
    "Every day is a new opportunity to grow.",
    "You are stronger than you think.",
    "Your potential is limitless.",
    "You are worthy of love and respect.",
    "Keep going; you are doing amazing.",
    "You have the power to create change.",
    "You are enough, just as you are.",
    "Success is within your reach."
];

// Function to display a random affirmation
function displayRandomAffirmation() {
    const randomIndex = Math.floor(Math.random() * affirmations.length);
    const affirmationElement = document.getElementById('affirmation');
    affirmationElement.textContent = affirmations[randomIndex];
}

// Event listener for the button
document.getElementById('get-affirmation').addEventListener('click', displayRandomAffirmation);

// Display an affirmation on page load
window.onload = displayRandomAffirmation;