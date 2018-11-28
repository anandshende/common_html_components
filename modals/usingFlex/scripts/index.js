var openModal = function () {
    Modal.show();
};

var svgCallback = function (evt, svgIcon) {
    switch (svgIcon) {
        case 'close':
            Modal.hide();
            break;
    }
};