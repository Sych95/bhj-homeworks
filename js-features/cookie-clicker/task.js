let cookieImg = document.getElementById('cookie');
let clickCounter = document.getElementById('clicker__counter');

let firstClickTime,
    lastClickTime,
    clickFlag = true,
    speed;

cookieImg.onclick = function () {
    let clickSum = clickCounter.textContent;
    clickSum = Number(clickSum);
    clickSum += 1;
    clickSum = String(clickSum)
    clickCounter.textContent = clickSum;

    //увеличенное печенье только при первом нажатии и нечетных числах.
    if(clickSum % 2 !== 0 || clickSum === 1) {
        cookieImg.width = 250;
    } else cookieImg.width = 200;

    document.getElementById('clicker__speed').textContent = clickSpeed ();
    
}

function clickSpeed () {
    if (clickFlag === true) {
        firstClickTime = new Date();
        time = lastClickTime - firstClickTime
        clickFlag = false;
    } else {
        lastClickTime = new Date()
        time = lastClickTime - firstClickTime;
        clickFlag = true;
    }
    speed = 1/(time/1000);
    speed = Math.abs(speed);
    speed = speed.toFixed(2);

    if(isNaN(speed) !== true){
        return speed;
    }
}
