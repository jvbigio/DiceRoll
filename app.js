// when click 'Roll Dice' button: roll dice randomly
// need img tag
const diceTriggerEl = document.querySelector('.dice__trigger');
const diceImageEl = document.querySelector('.dice__image');
const audioEl = document.getElementById('buttonSound');


// click on button roll dice, change image to random dice
// create a function for a random number between 1-6
function getRandomNumber() {
  return Math.floor(Math.random() * 6) + 1;
}

function showDice() {
  diceTriggerEl.addEventListener('click', function() {
    //diceImageEl.classList.toggle('flip'); // flips every other button click
    //audioEl.src = `sounds/button-09.mp3`;
    playSound();
    let myRandomNumber = getRandomNumber();
    diceImageEl.src = `images/dice${myRandomNumber}.png`;
  })
}

showDice();

// make an animation challenge:
// when you click 'Roll Dice' button, have an effect, sound effect, 
// then flip it and rotate dice
// 

function playSound() {
  audioEl.play();
}
