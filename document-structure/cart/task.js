let cartBlock = document.querySelector('.cart'),
    cart = document.querySelector('.cart__products'),
    cartProductList = Array.from(document.getElementsByClassName('cart__product')),
    cartProductQuantity,
    removeBtnList = Array.from(document.getElementsByClassName('remove-btn')),
    controlBtnList = Array.from(document.getElementsByClassName('product__quantity-control')),
    quantityList = Array.from(document.getElementsByClassName('product__quantity-value')),
    addBtnList = Array.from(document.getElementsByClassName('product__add')),
    productImageList = Array.from(document.getElementsByClassName('product__image')),
    currentProduct,currentProductID, currentQuantity, currentImage, currentCartProductIdx,
    addedItem, newProduct, newProductQuantity, newProductImage, newQuantity,
    removeBtn;

    cartBlock.setAttribute('style','display: none;')

    controlBtnList.forEach(btn =>{
        btn.addEventListener('click', function () {
            currentProduct = btn.closest('.product');
            currentProductID = currentProduct.getAttribute('data-id');
            
            currentQuantity = quantityList[currentProductID-1].textContent
            currentQuantity = Number(currentQuantity);

            if(btn.classList.contains('product__quantity-control_inc')) {
                currentQuantity += 1;
            } else if(currentQuantity > 1) currentQuantity -= 1;

            currentQuantity = String(currentQuantity)
            quantityList[currentProductID - 1].textContent = currentQuantity
        })
    })

    addBtnList.forEach(btn => {
        btn.addEventListener('click',function (){
            currentProductID = btn.closest('.product').getAttribute('data-id');
            currentQuantity = quantityList[currentProductID-1].textContent;
            cartProductQuantity = Array.from(document.getElementsByClassName('cart__product-count'))
            productImageList.forEach(img => {
                if(img.closest('.product').getAttribute('data-id') === currentProductID){
                    currentImage = img.getAttribute('src')
                }
            })

            currentCartProductIdx = cartProductList.findIndex(item => {
                if(item.getAttribute('data-id') === currentProductID) {
                    return true
                }
            })
            console.log(currentCartProductIdx)
            
            if(currentCartProductIdx !== -1) {
                cartProductQuantity.forEach(item => {
                    if(item.closest('.cart__product') === cartProductList[currentCartProductIdx]){
                        console.log(cartProductList[currentCartProductIdx], item.closest('.cart__product'))
                        currentQuantity = Number(currentQuantity);
                        newQuantity = Number(item.textContent);
                        newQuantity += currentQuantity;
                        newQuantity = String(newQuantity)
                        console.log(newQuantity, item.textContent)
                        cartProductQuantity[currentCartProductIdx].textContent = newQuantity
                    }
                })
            } else {
                newProduct = document.createElement('div');
                newProduct.classList.add('cart__product');
                newProduct.setAttribute('data-id', currentProductID)

                newProductQuantity = document.createElement('div');
                newProductQuantity.classList.add('cart__product-count');
                newProductQuantity.textContent = currentQuantity;

                newProductImage = document.createElement('img');
                newProductImage.classList.add('cart__product-image');
                newProductImage.setAttribute('src', currentImage);

                removeBtn = document.createElement('div');
                removeBtn.classList.add('remove-btn')
                removeBtn.textContent = 'Удалить из корзины';

                newProduct.insertAdjacentElement('beforeEnd',newProductQuantity);
                newProduct.insertAdjacentElement('beforeEnd',newProductImage);
                newProduct.insertAdjacentElement('beforeEnd',removeBtn);

                cartBlock.setAttribute('style','display: block;')

                cartProductList.push(newProduct)
                removeBtnList.push(removeBtn)

                removeBtnList[removeBtnList.length -1].addEventListener('click', function() {
                    let toRemove = cartProductList.findIndex(item => {
                        if(item ===this.closest('.cart__product')){
                        return true
                        }
                    })
                    cartProductList.splice(toRemove,1);
                    this.closest('.cart__product').remove();
                    if(cartProductList.length ===0){
                        cartBlock.setAttribute('style','display: none;')
                    }
                })
                cart.insertAdjacentElement('beforeEnd', newProduct);
            }
        })
    })
    

