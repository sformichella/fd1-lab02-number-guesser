 import {
     compareNumbers,
     toggleHidden,
     generateRandomNumber
 }  from './utils.js' 
    
    

    // Fetch DOM stuff and initiate guessLeft and correctGuess

let guessButton = document.getElementById('guess-button');
let tryAgainButton = document.getElementById('try-again-button');

let guessRange = document.getElementById('range');
let userGuess = document.getElementById('user-guess');
let guessesLeftMessage = document.getElementById('guesses-left');
let directionFeedback = document.getElementById('direction-feedback');
let correctGuessMessage = document.getElementById('correct-number');

let guessesLeft = 3;
let correctGuess = generateRandomNumber(Number(guessRange.value))
    
    // Click Handlers
    
export function guessButtonHandler() {

    guessesLeftMessage.textContent = ''
    if (userGuess.value === '') {
        guessesLeftMessage.textContent = 'Please enter a guess!';
        return;
    };

    guessesLeft--;

    if (guessesLeft < 1) {
        if (!compareNumbers(Number(userGuess.value), correctGuess)) {
            handleCorrectGuess();
            console.log('correct');
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



export function tryAgainHandler() {
    userGuess.value = '';
    correctGuessMessage.textContent = '';
    directionFeedback.textContent = '';

    correctGuess = Math.floor(Math.random() * Number(guessRange.value));

    toggleHidden(guessButton);
    toggleHidden(tryAgainButton);
}


    // Guess Handling Functions

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

    guessesLeftMessage.textContent = `You have ${guessesLeft} guesses left`
}

function handleNoMoreGuesses() {
    directionFeedback.textContent = "Oh no! You've no more guesses!"
    correctGuessMessage.textContent = `The correct number was ${correctGuess}`

    toggleHidden(guessButton);
    toggleHidden(tryAgainButton);

    guessesLeft = 3;
}