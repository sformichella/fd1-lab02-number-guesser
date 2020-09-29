import {
    compareNumbers, toggleHidden
} from './utils.js'



let userGuess = document.getElementById('user-guess');
let guessRange = document.getElementById('range');
let guessesLeftMessage = document.getElementById('guesses-left');
let directionFeedback = document.getElementById('direction-feedback');
let correctGuessMessage = document.getElementById('correct-number');

let guessButton = document.getElementById('guess-button');
let tryAgainButton = document.getElementById('try-again-button');

let correctGuess = Math.floor(Math.random() * Number(guessRange.value));

let guessesLeft = 3;


guessButton.addEventListener('click', guessButtonHandler);

tryAgainButton.addEventListener('click', tryAgainHandler);



function guessButtonHandler() {

    guessesLeftMessage.textContent = ''
    if (userGuess.value === '') {
        guessesLeftMessage.textContent = 'Please enter a guess!';
        return;
    };

    guessesLeft--;

    if (guessesLeft < 1) {
        if (!compareNumbers(Number(userGuess.value), correctGuess)) {
            handleCorrectGuess();
        }
        else {
            handleNoMoreGuesses();
        }
        return;
    }

    if (!compareNumbers(Number(userGuess.value), correctGuess)) {
        handleCorrectGuess()
    }
    else {
        handleIncorrectGuess()
    }
}



function handleCorrectGuess() {
    directionFeedback.textContent = 'Whoa! You guessed the number!'

    toggleHidden(guessButton);
    toggleHidden(tryAgainButton);

    guessesLeft = 3;
}

function handleIncorrectGuess() {
    let userNumber = Number(userGuess.value);

    if (compareNumbers(userNumber, correctGuess) === 1) {
        directionFeedback.textContent = 'Nope! Guess Lower!'
    }
    if (compareNumbers(userNumber, correctGuess) === -1) {
        directionFeedback.textContent = 'Nope! Guess Higher!'
    }
}

function handleNoMoreGuesses() {
    directionFeedback.textContent = "Oh no! You've no more guesses!"
    correctGuessMessage.textContent = `The correct number was ${correctGuess}`

    toggleHidden(guessButton);
    toggleHidden(tryAgainButton);

    guessesLeft = 3;
}

function tryAgainHandler() {
    userGuess.value = '';
    correctGuessMessage.textContent = '';
    directionFeedback.textContent = '';

    correctGuess = Math.floor(Math.random() * Number(guessRange.value));

    toggleHidden(guessButton);
    toggleHidden(tryAgainButton);
}