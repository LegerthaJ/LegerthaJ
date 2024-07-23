// script.js

const nextButton = document.getElementById('next-fact-button');
const prevButton = document.getElementById('previous-fact-button');
let currentFact = 1;

function showFact(factNumber) {
    const factContainers = document.querySelectorAll('.fact-container');
    factContainers.forEach(container => container.classList.remove('active'));
    document.querySelector(`.fact-container.fact${factNumber}`).classList.add('active');
    currentFact = factNumber;
}

nextButton.addEventListener('click', () => {
    showFact((currentFact % 5) + 1);
});

prevButton.addEventListener('click', () => {
    showFact(currentFact === 1 ? 5 : currentFact - 1);
});

showFact(currentFact);