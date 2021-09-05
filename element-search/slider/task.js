let imgList = document.querySelectorAll('.slider__item'),
    dotList= document.querySelectorAll('.slider__dot'),
    currentActiveSlide,
    previousSlide;

const nextArrow = document.querySelector('.slider__arrow_next'),
    prevArrow = document.querySelector('.slider__arrow_prev');
    
//находит текущий отражаемый элемент
function getActiveSlide () {
    imgList.forEach((item, index) => {
        if(item.classList.contains('slider__item_active')) {
            currentActiveSlide = index;
        }
    })
}

//удаляет прошлый активный слайд и устанавливает новый активный слайд
function setActiveSlide (newindex) {
    imgList.forEach(item => {
        if(item.classList.contains('slider__item_active')) {
            item.classList.remove('slider__item_active')
        }
    })
    currentActiveSlide = newindex;
    imgList[currentActiveSlide].classList.add('slider__item_active');
    setDot ();
}

nextArrow.onclick = function () {
    if(currentActiveSlide !== imgList.length - 1){
        currentActiveSlide = currentActiveSlide + 1;
    } else currentActiveSlide = 0;
    setActiveSlide (currentActiveSlide);
}
prevArrow.onclick = function () {
    if(currentActiveSlide !== 0){
        currentActiveSlide = currentActiveSlide - 1;
    } else currentActiveSlide = imgList.length - 1;
    setActiveSlide (currentActiveSlide);
}

//отвечает за отражение активного дота
function setDot () {
    dotList.forEach(item => {
        if(item.classList.contains('slider__dot_active')) {
            item.classList.remove('slider__dot_active')
        }
    })
    dotList[currentActiveSlide].classList.add('slider__dot_active');
}

dotList.forEach((item, index) =>{
    item.onclick = function () {
        currentActiveSlide = index;
        setActiveSlide (currentActiveSlide);
        setDot ()
    }
})

//задает первоначальный элемент с активным дотом
dotList[0].classList.add('slider__dot_active');
//находим первое активное изображение
getActiveSlide();
