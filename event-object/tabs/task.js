let tabList = Array.from(document.querySelectorAll('.tab')),
    contentList = Array.from(document.querySelectorAll('.tab__content'));

function newActiveTab() {
    tabList.forEach(tabItem => tabItem.classList.remove('tab_active'))
    this.classList.add('tab_active');
}

function newActiveContent () {
    contentList.forEach(contentItem => contentItem.classList.remove('tab__content_active'));
    let currentItemIndex;
    tabList.forEach((currentItem, index) => {
        if(currentItem.classList.contains('tab_active')) {
            currentItemIndex = index;
            console.log(currentItemIndex)
        }
    })
    contentList[currentItemIndex].classList.add('tab__content_active');
}

tabList.forEach(tabItem => {
    tabItem.addEventListener('click', newActiveTab);
    tabItem.addEventListener('click', newActiveContent);

})