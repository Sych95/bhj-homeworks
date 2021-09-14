let revealList = Array.from(document.querySelectorAll('.reveal')),
currentPlace,
windowHeigth = window.innerHeight;

document.addEventListener('scroll', function () {
    currentPlace = window.scrollY;
    revealList.forEach(item => {
        let checkReveal = item.getBoundingClientRect();
        checkReveal = checkReveal.top;
        if(checkReveal < windowHeigth - 1) {
            item.classList.add('reveal_active')
        }
    })
})