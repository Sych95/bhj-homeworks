const widgetBtn = document.querySelector('.chat-widget'),
    inputArea = document.getElementById('chat-widget__input'),
    messagesArea = document.querySelector('.chat-widget__messages');
    

let typedMessage, currentTime, messageList, counter, timerID,
    randomInfo = {
        isFirst: true,
        greeting: 0,
        lastNumber: '',
        newNumber:'',
    };

let messagesBotList = ['Добрый день!','Вы кто?', 'Как вы сюда попали?', 'Завтра днем будет полноденье', '...', 'Может хватит писать сюда', 'Эээ...'],
    
randomNumber = function (){
        randomInfo.lastNumber = randomInfo.newNumber;
        randomInfo.newNumber = Math.floor(Math.random() * (messagesBotList.length - 1) + 1);
        if(!randomInfo.isFirst && randomInfo.newNumber !== randomInfo.lastNumber){
            return randomInfo.newNumber;
        } else if(randomInfo.isFirst){
            randomInfo.isFirst = false; return randomInfo.greeting;
        } else if(randomInfo.lastNumber === randomInfo.newNumber){
            return randomNumber();
        }
    }

 function getCurrentTime () {
    let date = new Date;
    let hour = String(date.getHours());
    if(hour.length <2) {
        hour = `0${hour}`
    }
    let minute = String(date.getMinutes());
    if(minute.length <2) {
        minute = `0${minute}`
    }

    currentTime = hour + ':' + minute;
}

widgetBtn.addEventListener('click', function () {
    this.classList.add('chat-widget_active')
})

inputArea.addEventListener('input', function() {
    typedMessage = this.value;
})

inputArea.addEventListener('keydown', function(e) {
    if(e.key ==='Enter' && typedMessage !== undefined){

        clearTimeout(timerID)
        console.log(new Date)
        getCurrentTime()
        inputArea.value = ''
        messagesArea.innerHTML += `
            <div class="message message_client">
                <div class="message__time">${currentTime}</div>
                <div class="message__text">
                ${typedMessage}
                </div>
            </div>
            `;
            messagesArea.innerHTML += `
            <div class="message">
                <div class="message__time">${currentTime}</div>
                <div class="message__text">
                ${messagesBotList[randomNumber()]}
                </div>
            </div>
            `;
            scrollToLast();

            timerID = setTimeout(function() {
                console.log(new Date)
                messagesArea.innerHTML += `
            <div class="message">
                <div class="message__time">${currentTime}</div>
                <div class="message__text">
                Ты тут??
                </div>
            </div>
            `;
            scrollToLast()
            }, 30000)
        }
})

function scrollToLast () {
    messageList = Array.from(document.querySelectorAll('.message'));
    messageList[messageList.length -1].scrollIntoView(true)
}