let pollTitle = document.querySelector('#poll__title'),
    pollAnswers = document.querySelector('#poll__answers'),
    content = document.querySelector('.content'),
    card = document.querySelector('.card'),
    requestGet = new XMLHttpRequest(),
    answerList, voteId, data, answers,
    answerChecked = document.querySelector('.answer-checked'),
    closeBtn = document.querySelector('.close');

requestGet.open('GET', 'https://netology-slow-rest.herokuapp.com/poll.php');

requestGet.addEventListener('load', function (){
    responseGet = JSON.parse(this.response);
    let {id, data} = responseGet;
    answerList = data.answers; //array
    
    
    pollTitle.textContent = data.title;
    answerList.forEach((item,index) => {
        let nextAnswer = document.createElement('button');
        nextAnswer.classList.add('poll__answer');
        nextAnswer.textContent = item;
        pollAnswers.insertAdjacentElement('beforeend', nextAnswer)
    });

    answers = Array.from(document.querySelectorAll('.poll__answer'));
    answers.forEach((item,index) => {
        item.addEventListener('click', function(){
            let requestPost = new XMLHttpRequest();
            requestPost.open('POST', 'https://netology-slow-rest.herokuapp.com/poll.php ');
            requestPost.setRequestHeader( 'Content-type', 'application/x-www-form-urlencoded' );

            requestPost.onload = function () {
                let result = JSON.parse(this.response);
                result = result.stat;
                let body =document.querySelector('body');
                answerChecked.classList.add('active')
                closeBtn.addEventListener('click', function() {
                    answerChecked.classList.remove('active');

                    card.remove()
                    let allVotes = 0;
                    result.forEach(item =>{
                        allVotes =allVotes+item.votes;
                        console.log(allVotes)
                    })
                    result.forEach(item => {
                        let resultItem = document.createElement('div'),
                            percent = Math.round((item.votes/allVotes) * 100)
                        resultItem.textContent = `${item.answer}: ${percent}%`
                        content.insertAdjacentElement('beforeend', resultItem)
                    })
                })
            }

            requestPost.send(`vote=${id}&answer=${index}`);
        })
    })
})
requestGet.send();



