const root = "9 Sep 2020 23:34:10"
const days = document.getElementById('days');
const hours = document.getElementById('hours');
const minutes = document.getElementById('minutes');
const seconds = document.getElementById('seconds');

function counterTimer() {
    const begin = new Date(root);
    const now = new Date();
    const totalSeconds = (now - begin) / 1000;
    const daysC = Math.floor(totalSeconds / 3600 / 24);
    const hoursC = Math.floor((totalSeconds / 3600) % 24);
    const minsC = Math.floor((totalSeconds / 60) % 60);
    const secondsC = Math.floor(totalSeconds % 60);

    days.innerHTML = formatTime(daysC);
    hours.innerHTML = formatTime(hoursC);
    minutes.innerHTML = formatTime(minsC);
    seconds.innerHTML = formatTime(secondsC);
}
function formatTime(time) {
    return time < 10 ? `0${time}` : time;
}
counterTimer();
setInterval(counterTimer, 1000);