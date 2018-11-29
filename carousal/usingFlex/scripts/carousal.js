var Carousal = {
    slidesCount: 0,
    currentSlide: 0,
    createSlides: function (slidesData) {
        this.slidesCount = slidesData.length;
        slidesData.map(function (slideBody) {
            var slideElement = document.createElement('div');
            slideElement.classList.add('slide');
            slideElement.innerText = slideBody;
            document.getElementById('slidesContainer').appendChild(slideElement);
        });
        this.show();
        this.showHideArrows();
    },

    show: function () {
        document.getElementById('popUp').style.display = 'flex';

        setTimeout(() => {
            // for animations, add 'pop-up-content-opaque'
            document.getElementById('popUpContent').classList.add('pop-up-content-opaque');
        }, 0);
    },

    hide: function () {
        document.getElementById('popUp').style.display = 'none';

        // for animations, remove 'pop-up-content-opaque'
        document.getElementById('popUpContent').classList.remove('pop-up-content-opaque');
    },

    nextSlide: function () {
        if (this.currentSlide == this.slidesCount - 1) return;
        var oldLeft = document.getElementById('slidesContainer').style.left;
        var totalWidth = this.getTotalElementWidth();
        var newLeft = (Number(oldLeft.split('px')[0]) - totalWidth) + 'px';
        document.getElementById('slidesContainer').style.left = newLeft;
        this.currentSlide++;
        this.showHideArrows();
    },

    prevSlide: function () {
        if (this.currentSlide == 0) return;
        var oldLeft = document.getElementById('slidesContainer').style.left;
        var totalWidth = this.getTotalElementWidth();
        var newLeft = (Number(oldLeft.split('px')[0]) + totalWidth) + 'px';
        document.getElementById('slidesContainer').style.left = newLeft;
        this.currentSlide--;
        this.showHideArrows();
    },

    getTotalElementWidth: function () {
        var slideElement = document.getElementsByClassName('slide')[0];
        var slide = window.getComputedStyle(slideElement);
        var slideOffsetWidth = slideElement.offsetWidth;
        var marginLeft = Number(slide.marginLeft.split('px')[0]);
        var marginRight = Number(slide.marginRight.split('px')[0]);
        var totalWidth = slideOffsetWidth + marginLeft + marginRight;
        return totalWidth;
    },

    showHideArrows: function () {
        if (this.currentSlide != 0) {
            this.applyArrowCss('leftArrow', false);
        } else {
            this.applyArrowCss('leftArrow', true);
        }
        if (this.currentSlide != this.slidesCount - 1) {
            this.applyArrowCss('rightArrow', false);
        } else {
            this.applyArrowCss('rightArrow', true);
        }
    },

    applyArrowCss: function (objectId, isAdd) {
        setTimeout(() => {
            var objectDoc = document.getElementById(objectId);
            var svgDoc = objectDoc.contentDocument;
            var svgItem = svgDoc.getElementsByClassName('arrow');
            for (var i = 0; i < svgItem.length; i++) {
                if (isAdd) {
                    svgItem[i].classList.add('disabled-arrow');
                } else {
                    svgItem[i].classList.remove('disabled-arrow');
                }
            }
        }, 300);
    },

};