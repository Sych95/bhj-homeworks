let modals = document.querySelectorAll('.modal');

modals.item(0).classList.add('modal_active');

let firstConfirm = document.querySelector('.show-success'),
    secondConfirm = document.querySelector('.btn_success');

firstConfirm.onclick = function () {
    modals.item(1).classList.add('modal_active');
    modals.item(0).classList.remove('modal_active');
}

secondConfirm.onclick = function () {
    modals.item(1).classList.remove('modal_active');
}


let modalClose = document.querySelectorAll('.modal__close_times');

modalClose.forEach(item => item.onclick = function () {
    let modalParent = item.closest('.modal_active');
    modalParent.classList.remove('modal_active');
})

