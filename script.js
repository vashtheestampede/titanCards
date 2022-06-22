//Based on https://dev.to/mugas/flip-cards-with-javascript-2ad0

const cards = document.querySelectorAll(".card");

function flipCard() {
  this.classList.toggle("flipCard");
}
cards.forEach((card) => card.addEventListener("click", flipCard))