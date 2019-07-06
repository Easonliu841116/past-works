; (function () {
    var getHr = document.querySelector('.hour-hand1');
    var getMn = document.querySelector('.minute-hand1');
    var getSc = document.querySelector('.second-hand1');

    function setClock() {
        var getTime = new Date();
        var hr = (getTime.getHours() * 360 / 12 - 90) + getTime.getMinutes() * (360 / 12) / 60;
        var mn = (getTime.getMinutes() * 360 / 60) + getTime.getSeconds() * (360 / 60) / 60;
        var sc = getTime.getSeconds() * 360 / 60 - 180;

        getHr.style.transform = `rotate(${hr}deg)`;
        getMn.style.transform = `rotate(${mn}deg)`;
        getSc.style.transform = `rotate(${sc}deg)`;

    }

    setClock();

    function animationHandler() {
        setClock();
        window.requestAnimationFrame(animationHandler);
    }

    window.requestAnimationFrame(animationHandler);
}())