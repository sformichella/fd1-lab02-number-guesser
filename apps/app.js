import {
    guessButtonHandler,
    tryAgainHandler
} from './clickHandlers.js'


    // Fetch DOM stuff

let guessButton = document.getElementById('guess-button');
let tryAgainButton = document.getElementById('try-again-button');


    // Click Listeners

guessButton.addEventListener('click', guessButtonHandler);

tryAgainButton.addEventListener('click', tryAgainHandler);
