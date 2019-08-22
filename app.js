const diceTriggerEl = document.querySelector('.dice__trigger');
const diceImageEl = document.querySelector('.dice__image');
const audioEl = document.getElementById('buttonSound');

function getRandomNumber() {
  return Math.floor(Math.random() * 6) + 1;
}

function showDice() {
  diceTriggerEl.addEventListener('click', function() {
    diceImageEl.classList.toggle('flip');
    playSound();
    let myRandomNumber = getRandomNumber();
    diceImageEl.src = `images/dice${myRandomNumber}.png`;
  })
}

showDice();

function playSound() {
  audioEl.play();
}
