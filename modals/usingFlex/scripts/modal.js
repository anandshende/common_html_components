var Modal = {
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
    }
};