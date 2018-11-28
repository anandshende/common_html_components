var openModal = function () {
    Carousal.show();
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