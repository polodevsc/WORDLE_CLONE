#Functional Requirements

## Gameplay

6 rows to try to guess 5 letter word

Enter submits guess

Guesses must be in app dictionary

Guess colors
    - gray: "absent" letter not in word
    - yellow: "present" letter in word but in wrong position
    - green: "correct" letter in word and proper location

Hard Mode: must use present and correct letters

Guesses are saved in local storage


### Making a guess

Detect keypress
    -if a keypress is a letter
        - update "letters" and update tile markup
            -update tile markup based on "letters" value

    -if key press is backspace
        -delete last letter in "letters"
            -update tile markup based  on "letters"

### submit guess

Press enter will submit guess
    - compare each letter with solution word
    - update state color
    - if all letters match game is over and user wins
    - if all letters don't match and last row game over and user loses


## Design

Tiles 5x6 matrix
Virtual Keyboard

## Interactions



when submitting correct work
    tiles flip