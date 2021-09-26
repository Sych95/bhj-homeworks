let currencyItemList = document.querySelector('#items'),
    loaderImg = document.querySelector('#loader')

let request = new XMLHttpRequest();

request.open('GET', 'https://netology-slow-rest.herokuapp.com');

request.addEventListener('load', function () {
    loaderImg.classList.remove('loader_active')
    let result = JSON.parse(this.response);

    let {Valute} = result.response
    for(currency in Valute) {
        let newItem = document.createElement('div');
        newItem.classList.add('item');
        let currencyCode = document.createElement('div')
        currencyCode.classList.add('item__code')
        let currencyValue = document.createElement('div');
        currencyValue.classList.add('item__value');
        let currencyName = document.createElement('div');
        currencyName.classList.add('item__currency')

        currencyItemList.insertAdjacentElement('beforeend',newItem);
        newItem.insertAdjacentElement('beforeend', currencyCode)
        currencyCode.textContent = Valute[currency].CharCode;
        newItem.insertAdjacentElement('beforeend', currencyValue)
        currencyValue.textContent = Valute[currency].Value;
        newItem.insertAdjacentElement('beforeend', currencyName)
        currencyName.textContent = 'руб.'
    }
})

request.send()
