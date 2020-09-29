# Number Guesser

### HTML

* Want a left section that has all of the interactive stuff
* Want a right section that displays messages based on how the game is going
* Need a guess button
* Need a reset button. I'm going to call it `try again` and hide it until the number of guesses runs out. 
* Maybe add a button to the title that just resets everything. 



### JavaScript

* Need `guessButtonHandler` that will
    1. Yell at the user is their input is empty. 
    2. Increment `guessesLeft` down by 1
    3. If `guessesLeft` is zero, then display "Oh no! You've run out of guesses!"
        * Additionally, unhide `try again` button
    4. If `guessesLeft` is not zero, check the guess and update DOM
        * call `checkGuess`
            * Outputs 1,0, or -1 if guess is too high, correct, or too low, respectively
        * call `feedbackMessage` with output of `checkGuess`
