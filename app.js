var min = 0;
var sec = 0;
var msec = 0;
var minHeading = document.getElementById("min");
var secHeading = document.getElementById("sec");
var msecHeading = document.getElementById("msec");
var interval;
var button = document.getElementById("start");

function startTimer() {
    button.disabled = true;
    function timer() {
        msec++;
        msecHeading.innerHTML = msec;
        if (msec >= 100) {
            sec++;
            secHeading.innerHTML = sec;
            msec = 0;
            msecHeading.innerHTML = msec;
        }
        else if (sec >= 60) {
            min++;
            minHeading.innerHTML = min;
            sec = 0;
            secHeading.innerHTML = sec;
        }
    }
    interval = setInterval(timer, 10);
}

function pauseTimer() {
    button.disabled = false;
    clearInterval(interval);
}

function resetTimer() {
    button.disabled = false;
    clearInterval(interval);
    min = 0;
    sec = 0;
    msec = 0;
    minHeading.innerHTML = 0;
    secHeading.innerHTML = 0;
    msecHeading.innerHTML = 0;
}