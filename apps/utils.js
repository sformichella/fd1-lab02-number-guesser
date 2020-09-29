

let guessButton =  document.getElementById('guess-button');
let tryAgainButton = document.getElementById('try-again-button');
let messageParagraph = document.getElementById('feedback-paragraph');
let correctGuessParagraph = document.getElementById('correct-guess-paragraph');
let userInput = document.getElementById('user-input');
let guessRangeElem = document.getElementById('guess-range');

let correctGuess = Math.floor(Math.random() * Number(guessRangeElem.value))
let userNumber = Number(userInput.value)



export function compareNumbers(num1, num2) {
    return Math.sign(num1 - num2);
}


export function toggleHidden(element) {
    element.classList.toggle('hidden');
}


export function handleCorrectGuess() {
    messageParagraph.textContent = 'Whoa! You guessed the number!';

    toggleHidden(guessButton);
    toggleHidden(tryAgainButton);

    console.log('yay');
}


export function handleIncorrectGuess() {
    if (compareNumbers(userNumber, correctGuess) === 1) {
        messageParagraph.textContent = 'Nope! Guess Lower!';
    };

    if (compareNumbers(userNumber, correctGuess) === -1) {
        messageParagraph.textContent = 'Nope! Guess Higher!';
    };

    console.log('nooo');
}

export function handleNoMoreGuesses() {
    messageParagraph.textContent = "Oh no! You've run out of guesses!";

    toggleHidden(guessButton);
    toggleHidden(tryAgainButton);
    toggleHidden(correctGuessParagraph)

    console.log('ahhhh');
}