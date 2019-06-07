function compareChar(word, key) {
    let characters = "";
    word.map(function (newLetter, element) {
        if (key === element) { newLetter += key; } else { newLetter += "_"; }
        return newLetter;
    }, characters);
    displayWords(characters);
}