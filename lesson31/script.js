let timer = document.querySelector('.timer');
timer.setAttribute('style','margin: 0 auto; background-color: lightblue; border: 2px dashed white; color: darkblue; font-family:Snell Roundhand, cursive; font-size: 26px; text-align: center');

const dayToMs = 86400000;
const hourToMs = 3600000;
const minuteToMs = 60000;
const secToMs = 1000;

let NYDate = new Date(2024,0,1).getTime();
// let NYDate = new Date(2023,03,17,19,52,0).getTime();

const interval =  setInterval(() => {
    let todayDate = Date.now();
    let difference = NYDate - todayDate;
    // console.log(difference);

    let days = Math.floor(difference / dayToMs);
    let hours = Math.floor((difference % dayToMs) / hourToMs);
    let minutes = Math.floor((difference % hourToMs) / minuteToMs);
    let seconds = Math.floor((difference % minuteToMs) / secToMs);

    let daysLeft = document.getElementById('daysLeft');
    daysLeft.innerHTML = days;
    let hoursLeft = document.getElementById('hoursLeft');
    hoursLeft.innerHTML = hours;
    let minutesLeft = document.getElementById('minutesLeft');
    minutesLeft.innerHTML = minutes;
    let secondsLeft = document.getElementById('secondsLeft');
    secondsLeft.innerHTML = seconds;

if(difference<=0){
    clearInterval(interval);
    alert (`Happy New Year!!!`);
    }

}, 1000);