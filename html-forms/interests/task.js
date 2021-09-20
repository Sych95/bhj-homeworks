let checkerList = document.querySelectorAll('.interest__check'),
    currentInterest,checkInterest, checkValue;


checkerList.forEach(item => {
    item.addEventListener('click', function(){
        currentInterest = item.closest('.interest');
        currentInterest.classList.add('checked-interest')
        checkValue = item.checked;

        checkerList.forEach(subItem => {
            checkInterest = subItem.closest('.checked-interest')
            if(checkInterest === currentInterest) {
                subItem.checked = checkValue;
            }
        })

        currentInterest.classList.remove('checked-interest')
    })
})