function displayWord(word) {
    let letters = word.split("").fill("_").join(" ");
    console.log(letters);
    eventKey(word);
}