var openModal = function () {
    Modal.show();
    setTimeout(() => {
        AutoAdjust.autoAdjustFontSize();
    }, 300);
};

var svgCallback = function (evt, svgIcon) {
    switch (svgIcon) {
        case 'close':
            Modal.hide();
            break;
    }
};