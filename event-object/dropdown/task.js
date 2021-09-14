let menuList = Array.from(document.querySelectorAll('.dropdown__value')),
    dropDownList = Array.from(document.querySelectorAll('.dropdown__list')),
    menuItemList = Array.from(document.querySelectorAll('.dropdown__link'));

function openMenu () {
    let currentItemIndex;
    let activeBlockList = Array.from(document.querySelectorAll('.active_block'))
    activeBlockList.forEach(item => item.classList.remove('active_block'))

    menuList.forEach((item, index) => {
        if(item === this) {
            currentItemIndex = index;
        }
    })

    let topBlock = dropDownList[currentItemIndex].closest('.dropdown');

    dropDownList.forEach((item,index) => {
        if(currentItemIndex !== index) {
            item.classList.remove('dropdown__list_active')
        }
    })

    if(dropDownList[currentItemIndex].classList.contains('dropdown__list_active') === false){
        dropDownList[currentItemIndex].classList.add('dropdown__list_active');
        topBlock.classList.add('active_block')
    } else {
        dropDownList[currentItemIndex].classList.remove('dropdown__list_active');
        topBlock.classList.remove('active_block');
    }
}

function setValue (e) {
    e.preventDefault()
    let newValue = this.textContent;
    menuList.forEach(item => {
        if(item.closest('.active_block') !== null) {
            item.textContent = newValue
            let thisDropList = this.closest('.dropdown__list');
            thisDropList.classList.remove('dropdown__list_active');
            let thisBlock = this.closest('.dropdown');
            thisBlock.classList.remove('active_block')

        }
    })
}

menuList.forEach(item => {
    item.addEventListener('click', openMenu)
})

menuItemList.forEach(item => {
    item.addEventListener('click', setValue)
})