const quotes = [
  "Every bug is a lesson in disguise.",
  "First make it work, then make it better.",
  "Great code is built one line at a time.",
  "Keep coding, keep growing.",
];
const quoteBtn = document.getElementById("quoteBtn");
const displayField = document.getElementById("displayField");

quoteBtn.addEventListener("click", () => {
  let randomIndex = Math.floor(Math.random() * quotes.length);
  displayField.textContent = quotes[randomIndex];
});
