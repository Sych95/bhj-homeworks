let linkList = document.querySelectorAll('.menu__link'),
    menuList = document.querySelectorAll('.menu_sub'),
    currentItemIndex;

linkList.forEach((item,index) => item.onclick = function () {
    if(item.closest('.menu_active') === null) {
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
