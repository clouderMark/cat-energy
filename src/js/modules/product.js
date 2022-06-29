export function product() {
    let data = [
        {
            name: 'Сахарозаменитель',
            amount: '1 упаковка (100 г)',
            price: '200 Р.',
        },
        {
            name: 'Питьевая вода',
            amount: '5 литров',
            price: '50 Р.',
        },
        {
            name: 'Молоко',
            amount: '1 литр',
            price: '100 Р.',
        },
        {
            name: 'Витамины',
            amount: '1 упаковка (30 г)',
            price: '300 Р.',
        },
    ];

    let template = document.querySelector('#product');
    
    for (let i = 0; i < data.length; i++) {
        let item = data[i];
        let clone = template.content.cloneNode(true);
        let productName = clone.querySelector('.product__name');
        let productAmount = clone.querySelector('.product__amount');
        let productPrice = clone.querySelector('.product__price');

        let productButton = clone.querySelector('.product__button');
        
        productName.textContent = item.name;
        productAmount.textContent = item.amount;
        productPrice.textContent = item.price;
       
        productButton.setAttribute('value', item.name);
        template.parentNode.appendChild(clone);
    }
}