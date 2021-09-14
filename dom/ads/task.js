let rotatorList = Array.from(document.querySelectorAll('.rotator')),
    currentCase, currentCaseIndex, newCase, nextCaseIndex,rotatorCaseList;


function nextCase () {
    rotatorList.forEach(rotatorListItem => {
        //добавляет идентефикатор активности ротатора
        rotatorListItem.classList.add('current_rotator');
        //находим все элементы внутри активного(!) ротатора
        rotatorCaseList = Array.from(document.querySelectorAll('.current_rotator > .rotator__case'));
        
        //проходим по элементам активного ротатора
        rotatorCaseList.forEach((item, index) => {
            //находим активный кейс по классу и сохраняем его, а также его индекс
            if(item.classList.contains('rotator__case_active')){
                currentCase = item;
                currentCaseIndex = index;
                //удаляем класс активного кейсас
                item.classList.remove('rotator__case_active')
            }
        })

        console.log(`currentCase ${currentCaseIndex}`);
        console.log(`rotatorCaseList ${rotatorCaseList.length}`);

        //нужно задать индекс следующего элемента, исходя из информации об активном
        if(currentCaseIndex < rotatorCaseList.length -1){
            nextCaseIndex = currentCaseIndex + 1;
        } else {nextCaseIndex = 0}

        console.log(`nextCaseIndex ${nextCaseIndex}`)

        newCase = rotatorCaseList[nextCaseIndex];
        newCase.classList.add('rotator__case_active')
        rotatorListItem.classList.remove('current_rotator');

        console.log(`\n`)
    })

    //     clearInterval(interval)

}

 let interval = setInterval(nextCase,1000)


