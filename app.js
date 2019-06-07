const wordList = require("random-words");
const inquirer = require("inquirer");

let word = wordList();
let pressedKeys = 0;

displayWord(word.split("").fill("_"));
console.log(word);

function displayWord(underWord) {
    console.log(underWord.join(" "));
    if (pressedKeys === word.length) {
        continueNext();
    } else {
        eventKey();
    }

}
function continueNext() {
    inquirer.prompt({
        type: "confirm", message: "continue playing", name: "more"
    }).then(answer => {
        if (answer.more) {
            word = wordList();
            displayWord();
        }
    });
}
function eventKey() {
    inquirer.prompt({
        type: "text",
        message: "Please press a character: ",
        name: "key"
    }).then(keyPressed => {
        compareChar(keyPressed.key);
    });
}

function compareChar(key) {
    let characters = "";
    const arrWord = word.split("");
    arrWord.forEach(element => {
        if (key === element) { characters += key; console.log(characters); } else { characters += "_"; }
    })
    console.log(characters);
    displayWord(characters.split(""));
}