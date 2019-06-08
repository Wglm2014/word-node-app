function Letter(char) {
    this.char = char;
    this.charGuessed = false;
}

Letter.prototype.returnCharHolder = function () {
    if (this.charGuessed) {
        return this.char;
    } else { return " _ " }
}

Letter.prototype.checkItOut = function (pressedKey) {
    if (pressedKey === this.char) {
        this.charGuessed = true;
    }
}

module.exports = Letter;
