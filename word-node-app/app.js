const wordList = require("random-words");
const inquirer = require("inquirer");

console.log(wordList());

displayWord(wordList());

function displayWord(word) {
    let letters = word.split("").fill("_").join(" ");
    console.log(letters);
    eventKey(word);
}

function eventKey(word) {
    inquirer.prompt({
        type: "text",
        message: "Please press a character: ",
        name: "key"
    }).then(keyPressed => {
        compareChar(word, keyPressed);
    });
}

function compareChar(word, key) {
    let characters = "";
    word.map(function (newLetter, element) {
        if (key === element) { newLetter += key; } else { newLetter += "_"; }

        return newLetter;
    }, characters);
    displayWords(characters);
}