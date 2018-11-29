var AutoAdjust = {
    autoAdjustFontSize: function () {
        var textElement = document.getElementById('autoAdjustFontSize');
        var computedtextElement = window.getComputedStyle(textElement);

        var currentFontSize = Number(computedtextElement.fontSize.split('px')[0]);
        var textElementWd = Number(computedtextElement.width.split('px')[0]);
        var textElementHt = Number(computedtextElement.height.split('px')[0]);

        var parentElement = textElement.parentElement;
        var parentWidth = parentElement.offsetWidth;
        var parentHeight = parentElement.offsetHeight;

        var wdRatio = parentWidth / textElementWd;
        var htRatio = parentHeight / textElementHt;

        var newHt, newWd, ratio;
        if (wdRatio > htRatio) {
            newHt = wdRatio * textElementHt;
            ratio = wdRatio;
            if (newHt > parentHeight) {
                newHt = htRatio * textElementHt;
                newWd = htRatio * textElementWd;
                ratio = htRatio;
            }
        } else {
            newWd = htRatio * textElementWd;
            ratio = htRatio;
            if (newWd > parentWidth) {
                newHt = wdRatio * textElementHt;
                newWd = wdRatio * textElementWd;
                ratio = wdRatio;
            }
        }
        var newFontSize = currentFontSize * ratio;
        textElement.style.fontSize = newFontSize + 'px';
    }
};
