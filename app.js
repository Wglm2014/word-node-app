
const wordList = require("random-words");
const inquirer = require("inquirer");
const word = require("./word");

//chooses a ramdon word using random-words package
let wordToGuess = wordList().split("");
//create the new object containing the word array and letters objects
let userWord = new word(wordToGuess);
userWord.objectChards();
//counter of changes the user had
let chancesLeft = wordToGuess.length;
let wins = 0;
let lost = 0;

//console.log(wordToGuess);
displayWord("-");

function displayWord(key) {
    const guessedLetters = userWord.trueFalse(key);

    //console.log(userWord);
    console.log(guessedLetters);
    console.log("Changes Left: " + chancesLeft);
    const equal = (guessedLetters.split(" ").join("").trim() === userWord.wordChars.join("")) ? true : false;
    if (equal) {
        wins++;
        console.log(`CORRECT! you have ${wins} victorious!`);
        continueNext();
    }
    else if (chancesLeft === 0) {
        lost++;
        console.log(`OOPS MAYBE NEXT TIME, you have ${lost} fails!`);
        continueNext();
    } else {
        eventKey();
    }
}

function eventKey() {
    inquirer.prompt({
        type: "text",
        message: "Guess a letter! ",
        name: "key"
    }).then(keyPressed => {
        chancesLeft--;
        displayWord(keyPressed.key);
    });
}

//iquire if the user wants to keep playing
function continueNext() {
    inquirer.prompt({
        type: "confirm", message: "continue playing", name: "more"
    }).then(answer => {
        if (answer.more) {
            //re initialized all the values for a nuew word
            wordToGuess = wordList().split("");
            userWord = new word(wordToGuess);
            userWord.objectChards();
            chancesLeft = wordToGuess.length;
            displayWord("-");
        } else { console.log(" good bye"); }
    });
}
