let linkList = Array.from(document.querySelectorAll('.menu__link')),
    menuList = Array.from(document.querySelectorAll('.menu_sub')),
    noHrefList = Array.from(document.querySelectorAll(`a[href='']`)),
    currentItemIndex;

    console.log(noHrefList, linkList)



linkList.forEach((item,index) => item.onclick = function () {
    if(noHrefList.includes(item) === true) {
        let activeBlock = item.closest('.menu__item'),
            activeList = document.querySelectorAll('.menu_active');

            activeList.forEach((itemActive) => {
                if(currentItemIndex !== index) {
                    itemActive.classList.remove('menu_active');
                    parentItemActive = itemActive.closest('.active_block')
                    parentItemActive.classList.remove('active_block')
                }
            })
            currentItemIndex = index;

        if(activeBlock.classList.contains('active_block') === false){
            activeBlock.classList.add('active_block');
        } else activeBlock.classList.remove('active_block');

        menuList.forEach(itemMenu => {
            let checkBlock = itemMenu.closest('.menu__item')
            if(checkBlock.classList.contains('active_block')) {
                itemMenu.classList.add('menu_active');
            } else {
                itemMenu.classList.remove('menu_active');
            }
        })
        return false
    }
})
