var CarousalIndex = {
    openModal: function () {
        Carousal.createSlides(SLIDES_DATA);
    },

    objectOnload: function () {
        Carousal.showHideArrows();
    }
};

var openModal = function () {
    CarousalIndex.openModal();
};

var svgCallback = function (evt, svgIcon) {
    switch (svgIcon) {
        case 'close':
            Carousal.hide();
            break;
        case 'arrow-right':
            Carousal.nextSlide();
            break;
        case 'arrow-left':
            Carousal.prevSlide();
            break;

    }
};

var objectOnload = function (svgIcon) {
    switch (svgIcon) {
        case 'close':
            break;
        case 'arrow-right':
            CarousalIndex.objectOnload();
            break;
        case 'arrow-left':
            CarousalIndex.objectOnload();
            break;

    }
};