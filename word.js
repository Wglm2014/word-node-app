
//Word constructor uses letter.js to create inputted word using 'makeWord'
var Letter = require("./letter.js");

function Word(wordChars) {
    this.wordChars = wordChars;
    this.guessedChards = [];
}

Word.prototype.objectChards = function () {
    this.wordChars.forEach(element => {
        this.guessedChards.push(new Letter(element));
    });
}

Word.prototype.trueFalse = function (char) {
    let guessedLetters = "";
    this.guessedChards.forEach(element => {
        element.checkItOut(char);
        guessedLetters += element.returnCharHolder();
    });
    return guessedLetters;
}

module.exports = Word;