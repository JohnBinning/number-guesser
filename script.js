
var userInputGuess = document.querySelector('#user-guess');
var selGuessButton = document.querySelector('.guess-buttons');
var selClearButton = document.querySelector('.clear-buttons');
var selResetButton = document.querySelector('#reset-button');
var selSubmitButton = document.querySelector('.user-range-button')
var resultText = document.querySelector('#result-text');
var lastGuess = document.querySelector('#last-guess');
var lastGuessWas = document.querySelector('#last-guess-was');
var minVal = 1;
var maxVal = 100;
var answer;

function getRandomNumb(minVal, maxVal){
  maxVal = parseInt(maxVal, 10)
  minVal = parseInt(minVal, 10)
  answer = Math.floor(Math.random() * (maxVal - minVal)) + minVal;
  console.log(answer, "answer");
  return answer;
}

window.onload = function() {
  getRandomNumb(minVal, maxVal);
}

selGuessButton.addEventListener('click', function() {
  var findOut = userInputGuess.value;
  getAnswer();
})

selSubmitButton.addEventListener('click', function(){
  minVal = document.querySelector(".min-input").value;
  maxVal = document.querySelector(".max-input").value;
  if (maxVal < minVal){
    alert('Maximum must be higher than minimum');
  } else {
    getRandomNumb(minVal, maxVal);
  }
})

selClearButton.addEventListener('click', function(){
  userInputGuess.value = "";
})

// resets the input, the statements about the guess, and the "answer"
selResetButton.addEventListener('click', function(){
  getRandomNumb(minVal, maxVal);
  userInputGuess.value = "";
  lastGuess.innerText ="";
  lastGuessWas.innerText ="";
  resultText.innerText = "Enter a number to play!";
})

// turns user input from string to number, tells them if the guess was correct
// lastGuess.innerText = number - this is placing the guess on the screen
function getAnswer(){
  var number = parseInt(userInputGuess.value, 10);
  console.log(number);
  lastGuess.innerText = number;
  if (number > answer && number < maxVal) {
    resultText.innerText = "That is too high!";
  } else if (number < answer && number > minVal) {
    resultText.innerText = "That is too low!";
  } else if (number === answer) {
    resultText.innerText = "BOOM!";
    minVal = parseInt(minVal, 10) -10
    maxVal = parseInt(maxVal, 10) +10
    document.querySelector('.min-input').value = minVal
    document.querySelector('.max-input').value = maxVal
    alert('Congrats you win! Range is increased by 10 on both sides');
    getRandomNumb(minVal, maxVal);
  } else if (number > maxVal || number < minVal) {
    resultText.innerText = "Please pick a number within " + minVal + " and " + maxVal;
  } else
  resultText.innerText = "Try entering a number";
  }

// enables all buttons when value is entered into the guess box
userInputGuess.addEventListener('keyup', function(){
  selGuessButton.disabled = false;
  selClearButton.disabled = false;
  selResetButton.disabled = false;
})
