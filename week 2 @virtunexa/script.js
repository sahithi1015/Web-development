const affirmations = [
  "You are capable of amazing things.",
  "Every day is a new beginning.",
  "You are enough just as you are.",
  "Your potential is limitless.",
  "Believe in yourself and all that you are.",
  "Positivity fuels productivity.",
  "Challenges are opportunities to grow.",
  "You radiate confidence and strength.",
  "Your thoughts shape your reality.",
  "You are resilient, resourceful, and strong."
  ];

const affirmationText = document.getElementById("affirmationText");
const newAffirmationBtn = document.getElementById("newAffirmationBtn");
const errorMessage = document.getElementById("errorMessage");

function getRandomAffirmation() {
  try {
    errorMessage.classList.add("hidden"); // Hide error message
    const randomIndex = Math.floor(Math.random() * affirmations.length);
    const affirmation = affirmations[randomIndex];
    affirmationText.textContent = affirmation;
  } catch (err) {
    console.error("Error fetching affirmation:", err);
    errorMessage.classList.remove("hidden");
  }
}

// Load one on start
window.onload = getRandomAffirmation;

// On button click
newAffirmationBtn.addEventListener("click", getRandomAffirmation);
