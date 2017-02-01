// var initialNumb = getRandomNumb(min, max);
var initialNumb = Math.floor(Math.random() * 100 +1);
console.log(initialNumb);
var userInputGuess = document.querySelector('#user-guess');
var selGuessButton = document.querySelector('.guess-buttons');
var selClearButton = document.querySelector('.clear-buttons');
var selResetButton = document.querySelector('#reset-button');
var inputText = document.querySelector('#result-text');
var initialNumbValue = initialNumb.value;
var lastGuess = document.querySelector('#last-guess');
var min = 0;
var max = 100;


// function getRandomNumb (min, max) {
//   min = Math.ceil(min);
//   max = Math.floor(max);
//   return Math.floor(Math.random() * (max - min + 1)) + min;
// };

selGuessButton.addEventListener('click', function() {
  var findOut = userInputGuess.value;
  // return(findOut);
  getAnswer();
})

selClearButton.addEventListener('click', function(){
  userInputGuess.value = "";
})

selResetButton.addEventListener('click', function(){
  initialNumb = getRandomNumb(1, 100);
  userInputGuess.value = "";
})

function getAnswer(){
  var number = parseInt(userInputGuess.value);
  console.log(number);
  lastGuess.innerText = number;
  if (number > initialNumb && number < max) {
    inputText.innerText = "That is too high!"
  } else if (number < initialNumb && number > min) {
    inputText.innerText = "That is too low!"
  } else if (number === initialNumb) {
    inputText.innerText = "BOOM!"
  } else if (number > max || number < min) {
    inputText.innerText = "Please pick a number within " + min + "and " + max
  }
}
// within html start buttons on disabled, then enable them based on an action
// instead of click, use keyup
