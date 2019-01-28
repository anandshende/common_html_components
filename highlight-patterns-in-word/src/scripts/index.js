var getAlphabetHTML = function (matchPattern) {
    var word = WORD;
    var highlightPattern = HIGHLIGHT_PATTERN;

    var str = '';
    var wordArray = [...word];

    wordArray.map((letter, index) => {
        var anchorText = letter;
        var textClass = '#294d71';
        var highlightClass = '';
        if (matchPattern && letter == highlightPattern[0]) {
            var subString = word.substr(index, highlightPattern.length);
            if (subString === highlightPattern) {
                wordArray.splice(index, highlightPattern.length, subString);
                textClass = '#8fcd92';
                anchorText = subString;
                highlightClass = 'class = "highlight-text"';
            }
        }
        str += `<a style="color: ${textClass};" ${highlightClass}>${anchorText}</a>`
    });
    return str;
};

var init = function () {
    var textContainer = document.getElementById('textContainer');
    textContainer.innerHTML = getAlphabetHTML(false);
    var highlightContainer = document.getElementById('highlightContainer');
    highlightContainer.innerHTML = getAlphabetHTML(true);
};

document.addEventListener("DOMContentLoaded", function (event) {
    init();
});