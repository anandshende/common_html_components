var Carousal = {
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
        var oldLeft = document.getElementById('slidesContainer').style.left;
        var slideElement = document.getElementsByClassName('slide')[0];
        var slide = window.getComputedStyle(slideElement);
        var slideOffsetWidth = slideElement.offsetWidth;
        var marginLeft = Number(slide.marginLeft.split('px')[0]);
        var marginRight = Number(slide.marginRight.split('px')[0]);
        var totalWidth = slideOffsetWidth + marginLeft + marginRight;
        var newLeft = (Number(oldLeft.split('px')[0]) - totalWidth) + 'px';
        document.getElementById('slidesContainer').style.left = newLeft;
    },

    prevSlide: function () {
        var oldLeft = document.getElementById('slidesContainer').style.left;
        var slideElement = document.getElementsByClassName('slide')[0];
        var slide = window.getComputedStyle(slideElement);
        var slideOffsetWidth = slideElement.offsetWidth;
        var marginLeft = Number(slide.marginLeft.split('px')[0]);
        var marginRight = Number(slide.marginRight.split('px')[0]);
        var totalWidth = slideOffsetWidth + marginLeft + marginRight;
        var newLeft = (Number(oldLeft.split('px')[0]) + totalWidth) + 'px';
        document.getElementById('slidesContainer').style.left = newLeft;
    }
};