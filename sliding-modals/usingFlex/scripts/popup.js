var PopUp = {
    open: function () {
        document.getElementById('popUpContent').classList.remove('pop-up-content-right', 'pop-up-content-left');
        document.getElementById('popUp').style.display = 'flex';
        document.getElementById('popUp').style.visibility = 'visible';
    },

    close: function () {
        document.getElementById('popUp').style.visibility = 'hidden';
        document.getElementById('popUp').style.display = 'none';
    },

    renderData: function (data) {
        document.getElementById('popUpContent').innerText = data;
    },

    createNew: function (data, className, newClassName) {
        document.getElementById('popUpContent').classList.add(className);
        var popUpContent = document.getElementById('popUpContent');
        setTimeout(() => {
            popUpContent.parentNode.removeChild(popUpContent);
        }, 300);
        setTimeout(() => {
            var div = document.createElement('div');
            div.classList.add('pop-up-content', newClassName);
            div.id = 'popUpContent';
            div.innerText = data;
            var arrowContainer = document.getElementsByClassName('arrow-container')[1];
            arrowContainer.parentNode.insertBefore(div, arrowContainer);
        }, 300);
    }
}