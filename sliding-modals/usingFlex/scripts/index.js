var SlidingModal = {
    dataIndex: 0,
    openModal: function () {
        PopUp.open();
        PopUp.renderData(slidesData[this.dataIndex]);
    },

    svgCallback: function (svgIcon) {
        switch (svgIcon) {
            case 'arrow-left':
                this.dataIndex = ((this.dataIndex - 1) >= 0) ? (this.dataIndex - 1) : slidesData.length - 1;
                PopUp.createNew(slidesData[this.dataIndex], 'pop-up-content-left', 'pop-up-content-from-right');
                break;
            case 'arrow-right':
                this.dataIndex = (this.dataIndex + 1) % slidesData.length;
                PopUp.createNew(slidesData[this.dataIndex], 'pop-up-content-right', 'pop-up-content-from-left');
                break;
            case 'close':
                PopUp.close();
        }
    }
}

document.addEventListener('DOMContentLoaded', function () {
});

var svgCallback = function ($event, svgIcon) {
    SlidingModal.svgCallback(svgIcon);
};

var openModal = function () {
    SlidingModal.openModal();
}