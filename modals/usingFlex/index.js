var openModal = function () {
    document.getElementById('popUp').style.visibility = 'visible';
    document.getElementById('popUpContent').classList.add('pop-up-content-opaque');
};

document.addEventListener('DOMContentLoaded', function () {
    document.getElementById('popUp').style.visibility = 'hidden';
    document.getElementById('popUpContent').classList.remove('pop-up-content-opaque');
});