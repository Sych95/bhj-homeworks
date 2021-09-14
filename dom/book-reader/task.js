let bookContent = document.querySelector('.book__content'),
    sizeBtnList = Array.from(document.querySelectorAll('.font-size')),
    dataSizeAttr,bgAttr, colorAttr,
    bgList = document.querySelectorAll('div.book__control_background > a.color'),
    colorList = document.querySelectorAll('.book__control_color > .color'); 

sizeBtnList.forEach((item, index) => {
    item.addEventListener('click', function (e) {
        e.preventDefault();
        sizeBtnList.forEach(item => item.classList.remove('font-size_active'));
        bookContent.classList.remove('book_fs-big');
        bookContent.classList.remove('book_fs-small')

        item.classList.add('font-size_active')
        dataSizeAttr = item.getAttribute('data-size')
        if(dataSizeAttr !== null) {
            bookContent.classList.add(`book_fs-${dataSizeAttr}`);
        }
    })
})

bgList.forEach(item => {
    item.addEventListener('click', function (e) {
        e.preventDefault();
        bgList.forEach(item => item.classList.remove('color_active'))
        bookContent.classList.remove('book_bg-black');
        bookContent.classList.remove('book_bg-gray');
        bookContent.classList.remove('book_bg-white');
        
        item.classList.add('color_active');
        bgAttr = item.getAttribute('data-bg-color');
        bookContent.classList.add(`book_bg-${bgAttr}`)

    })
})

colorList.forEach(item => {
    item.addEventListener('click', function (e) {
        e.preventDefault();
        colorList.forEach(item => item.classList.remove('color_active'))
        bookContent.classList.remove('book_color-gray');
        bookContent.classList.remove('book_color-whitesmoke');
        bookContent.classList.remove('book_color-black');
        
        item.classList.add('color_active');
        colorAttr = item.getAttribute('data-text-color');
        bookContent.classList.add(`book_color-${colorAttr}`)

    })
})

