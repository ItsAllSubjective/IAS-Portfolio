const display = document.getElementById("timer-count");
let timer = null;
let startTime = 0;
let elapsedTime = 0;
let isRunning = false;

function start() {
    
    if(!isRunning){
        startTime = Date.now() - elapsedTime;
        timer = setInterval(update, 10);
        console.log(timer);
        isRunning = true;
    }

}
function stop() {
    
    if(isRunning) {
        clearInterval(timer);
        elapsedTime = Date.now() - startTime;
        isRunning = false;
    }
}
function reset() {
    clearInterval(timer);
    startTime = 0;
    elapsedTime = 0;
    isRunning = false;
    display.textContent = "00:00:00:00"
}
function update() {
    
    const currentTime = Date.now();
    elapsedTime = currentTime - startTime;

    let hours = Math.floor(elapsedTime / (1000 * 60 * 60));
    let minutes = Math.floor(elapsedTime / (1000 * 60) % 60);
    let seconds = Math.floor(elapsedTime / 1000 % 60);
    let milliseconds = Math.floor(elapsedTime % 1000 / 10);

    hours = String(hours).padStart(2, "0");
    minutes = String(minutes).padStart(2, "0");
    seconds = String(seconds).padStart(2, "0");
    milliseconds = String(milliseconds).padStart(2, "0");

    display.textContent = `${hours}:${minutes}:${seconds}:${milliseconds}`;
}


// CLOCK


function updateClock(){

    const now = new Date();
    let hours = now.getHours();
    const meridiem = hours >= 12 ? " PM" : " AM";
    hours = hours % 12 || 12;
    hours = hours.toString().padStart(2, 0);
    const minutes = now.getMinutes().toString().padStart(2, 0);
    const seconds = now.getSeconds().toString().padStart(2, 0);
    const ms2Digit = Math.floor(now.getMilliseconds() / 10);
    const milliseconds = ms2Digit.toString().padStart(2, '0');    
    const timeSpring = `${hours}:${minutes}:${seconds}:${milliseconds}${meridiem}`;
    document.getElementById("clock").textContent = timeSpring;
}

updateClock();
setInterval(updateClock, 1000);