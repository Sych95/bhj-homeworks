let menuBlock = Array.from(document.querySelectorAll('.dropdown__value')),
    menuDropDown = Array.from(document.querySelectorAll('.dropdown__list')),
    itemList = Array.from(document.querySelectorAll('.dropdown__item'));

menuBlock.forEach(item => {
    item.addEventListener('click', function (e) {

    
})



itemList.forEach((item) => {
    item.addEventListener('click', function(e) {
        e.preventDefault();
        menuBlock.textContent = item.textContent; 
        menuDropDown.classList.remove('dropdown__list_active')
        return false;
    })
})