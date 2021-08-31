let countDown = document.getElementById("timer");

setInterval(function () {
    if(countDown.textContent > 0){
        countDown.textContent -= 1;
        console.log(countDown.textContent)
    }
}, 1000)

let advancedTimer = document.getElementById('newTimer').textContent;

function timer(){
    if (document.getElementById('newTimer').textContent ==='00:00:00') {
        clearInterval(timerStart);
    } else {
        hour = advancedTimer.slice(0,2),
        minute = advancedTimer.slice(3,5),
        seconds = advancedTimer.slice(6,8)
    
        hour = Number(hour);
        minute = Number(minute);
        seconds = Number(seconds);
    
        seconds = seconds - 1;
        if(seconds < 0) {
            minute = minute - 1;
            seconds = 59;
        }
        if(minute <0) {
            hour = hour - 1
            minute = 59;
        }
        if(hour >=10){
            hour = String(hour);
        } else hour = '0'+ String(hour)
        if(minute >=10){
            minute = String(minute)
        } else minute = '0' + String(minute)
        if(seconds >=10){
            seconds = String(seconds)
        } else seconds = '0' + String(seconds)
    
        advancedTimer = hour + ':' + minute + ':' + seconds;
        document.getElementById('newTimer').textContent = advancedTimer
    }
  }
  
  let timerStart = setInterval(()=>timer(), 1000)