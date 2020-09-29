
import {
    compareNumbers,
    handleCorrectGuess,
    handleIncorrectGuess,
    handleNoMoreGuesses,
    toggleHidden
} from './utils.js'

let guessesLeft = 5;


let guessButton =  document.getElementById('guess-button');
let tryAgainButton = document.getElementById('try-again-button');
let messageParagraph = document.getElementById('feedback-paragraph');
let correctGuessParagraph = document.getElementById('correct-guess-paragraph');
let userInput = document.getElementById('user-input');
let guessRangeElem = document.getElementById('guess-range');

let correctGuess = Math.floor(Math.random() * Number(guessRangeElem.value))
correctGuessParagraph.textContent = `The correct guess was ${correctGuess}`;

let userNumber = Number(userInput.value)
guessButton.addEventListener('click', guessButtonHandler);

tryAgainButton.addEventListener('click', tryAgainButtonHandler);



function guessButtonHandler() {
    if (userInput.value === '') {
        messageParagraph.textContent = 'Please enter a guess!!!';
        return;
    }

    guessesLeft--;

    if (guessesLeft < 1) {
        if (!compareNumbers(userNumber, correctGuess)) {
            handleCorrectGuess()
            console.log('No more guess, correct');
        }
        else {
            handleNoMoreGuesses()
            console.log('No more guess, incorrect');
        }
        return;
    }

    if (!compareNumbers(userNumber, correctGuess)) {
        handleCorrectGuess()
        console.log('correct');
    }
    else {
        handleIncorrectGuess()
        console.log('incorrect');
    }

    return;
}



function tryAgainButtonHandler () {
    messageParagraph.textContent = '';

    toggleHidden(guessButton);
    toggleHidden(tryAgainButton);
    toggleHidden(correctGuessParagraph);

    guessesLeft = 5;
    correctGuess = Math.floor(Math.random() * Number(guessRangeElem.value))

    console.log(guessesLeft);
}
