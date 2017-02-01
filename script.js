var initialNumb = getRandomNumb(min, max);
var userInputGuess = document.querySelector('#user-guess');
var selGuessButton = document.querySelector('.guess-buttons');
var selClearButton = document.querySelector('.clear-buttons');
var selResetButton = document.querySelector('#reset-button');
var inputText = document.querySelector('#result-text');
var initialNumbValue = initialNumb.value;
var min = 0;
var max = 100;


function getRandomNumb (min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  console.log('initialNumb')
  return Math.floor(Math.random() * (max - min + 1)) + min;
};

selGuessButton.addEventListener('click', function() {
  var findOut = userInputGuess.value;
  return(findOut);
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
  inputText.innerText = number;
  if number > initialNumb {
    inputText.innerText = "That is too high!"
  } else if number < initialNumb {
    inputText.innerText = "That is too low!"
  } else if number == initialNumb {
    inputText.innerText = "BOOM!"
  } else {
    inputText.innerText = "Something went wrong!"
  }
  }
