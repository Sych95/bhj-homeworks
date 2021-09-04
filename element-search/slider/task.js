let imgList = document.querySelectorAll('.slider__item')

const nextArrow = document.querySelector('.slider__arrow_next');
const prevArrow = document.querySelector('.slider__arrow_prev');

let itemAmout = imgList.length - 1;

function nextSlide () {
    let indexActive, currentItem, newItem;
    imgList.forEach((item, index) => {
        if(item.classList.contains('slider__item_active')) {
            indexActive = index;
        }
    })
    currentItem = imgList[indexActive]
    currentItem.classList.remove('slider__item_active');

    if(indexActive !== itemAmout){
        newItem = imgList[indexActive + 1];
    } else newItem = imgList[0];

    newItem.classList.add('slider__item_active')
}

function previousSlide () {
    let indexActive, currentItem, newItem;
    imgList.forEach((item, index) => {
        if(item.classList.contains('slider__item_active')) {
            indexActive = index;
        }
    })
    currentItem = imgList[indexActive]
    currentItem.classList.remove('slider__item_active');

    if(indexActive !== 0){
        newItem = imgList[indexActive - 1];
    } else newItem = imgList[itemAmout];

    newItem.classList.add('slider__item_active');
}

nextArrow.onclick = function() {
    nextSlide ();
    activeDotAssign();
}

prevArrow.onclick = function() {
    previousSlide();
    activeDotAssign();
}



let dotList = document.querySelectorAll('.slider__dot');

let activeDotAssign = function() {
    let newActiveIndex, newActiveDot;
    imgList.forEach((item, index) => {
        if(item.classList.contains('slider__item_active')){
            newActiveIndex = index;
        }
    })

    dotList.forEach(itemDot => itemDot.classList.remove('slider__dot_active'));
    newActiveDot = dotList[newActiveIndex];
    newActiveDot.classList.add('slider__dot_active');
}

dotList.forEach((item,index) => item.onclick = function() {
    let indexActive, currentItem, newItem;
    imgList.forEach((item, index) => {
        if(item.classList.contains('slider__item_active')) {
            indexActive = index;
        }
    })
    currentItem = imgList[indexActive];
    currentItem.classList.remove('slider__item_active');

    newItem = imgList[index];
    dotList.forEach(itemDot => itemDot.classList.remove('slider__dot_active'))
    item.classList.add('slider__dot_active');
    newItem.classList.add('slider__item_active');
})

activeDotAssign()