export function catalog() {

    let data = [
        {
            title: 'Cat Energy PRO 500 г',
            volume: '500 г',
            taste: 'Курица',
            price: '700 Р.',
            imgUrlX1: 'img/catalog-1-mobile@1x.webp',
            imgUrlX2: 'img/catalog-1-mobile@2x.webp 2x',
            imgUrlTablet1: 'img/catalog-1-tablet@1x.webp',
            imgUrlTablet2: 'img/catalog-1-tablet@2x.webp 2x',
            imgUrlDesktop1: 'img/catalog-1-desktop@1x.webp',
            imgUrlDesktop2: 'img/catalog-1-desktop@2x.webp 2x',
            
        },
        {
            title: 'Cat Energy PRO 1000 г',
            volume: '1000 г',
            taste: 'Курица',
            price: '1000 Р.',
            imgUrlX1: 'img/catalog-2-mobile@1x.webp',
            imgUrlX2: 'img/catalog-2-mobile@2x.webp 2x',
            imgUrlTablet1: 'img/catalog-2-tablet@1x.webp',
            imgUrlTablet2: 'img/catalog-2-tablet@2x.webp 2x',
            imgUrlDesktop1: 'img/catalog-2-desktop@1x.webp',
            imgUrlDesktop2: 'img/catalog-2-desktop@2x.webp 2x',
        },
        {
            title: 'Cat Energy PRO 500 г',
            volume: '500 г',
            taste: 'Рыба',
            price: '700 Р.',
            imgUrlX1: 'img/catalog-3-mobile@1x.webp',
            imgUrlX2: 'img/catalog-3-mobile@2x.webp 2x',
            imgUrlTablet1: 'img/catalog-3-tablet@1x.webp',
            imgUrlTablet2: 'img/catalog-3-tablet@2x.webp 2x',
            imgUrlDesktop1: 'img/catalog-3-desktop@1x.webp',
            imgUrlDesktop2: 'img/catalog-3-desktop@2x.webp 2x',
        },
        {
            title: 'Cat Energy PRO 1000 г',
            volume: '1000 г',
            taste: 'Рыба',
            price: '1000 Р.',
            imgUrlX1: 'img/catalog-4-mobile@1x.webp',
            imgUrlX2: 'img/catalog-4-mobile@2x.webp 2x',
            imgUrlTablet1: 'img/catalog-4-tablet@1x.webp',
            imgUrlTablet2: 'img/catalog-4-tablet@2x.webp 2x',
            imgUrlDesktop1: 'img/catalog-4-desktop@1x.webp',
            imgUrlDesktop2: 'img/catalog-4-desktop@2x.webp 2x',
        },
        {
            title: 'Cat Energy Slim 500 г',
            volume: '500 г',
            taste: 'Гречка',
            price: '400 Р.',
            imgUrlX1: 'img/catalog-5-mobile@1x.webp',
            imgUrlX2: 'img/catalog-5-mobile@2x.webp 2x',
            imgUrlTablet1: 'img/catalog-5-tablet@1x.webp',
            imgUrlTablet2: 'img/catalog-5-tablet@2x.webp 2x',
            imgUrlDesktop1: 'img/catalog-5-desktop@1x.webp',
            imgUrlDesktop2: 'img/catalog-5-desktop@2x.webp 2x',
        },
        {
            title: 'Cat Energy Slim 1000 г',
            volume: '1000 г',
            taste: 'Гречка',
            price: '700 Р.',
            imgUrlX1: 'img/catalog-6-mobile@1x.webp',
            imgUrlX2: 'img/catalog-6-mobile@2x.webp 2x',
            imgUrlTablet1: 'img/catalog-6-tablet@1x.webp',
            imgUrlTablet2: 'img/catalog-6-tablet@2x.webp 2x',
            imgUrlDesktop1: 'img/catalog-6-desktop@1x.webp',
            imgUrlDesktop2: 'img/catalog-6-desktop@2x.webp 2x',
        },
        {
            title: 'Cat Energy Slim 500 г',
            volume: '500 г',
            taste: 'Рис',
            price: '500 Р.',
            imgUrlX1: 'img/catalog-7-mobile@1x.webp',
            imgUrlX2: 'img/catalog-7-mobile@2x.webp 2x',
            imgUrlTablet1: 'img/catalog-7-tablet@1x.webp',
            imgUrlTablet2: 'img/catalog-7-tablet@2x.webp 2x',
            imgUrlDesktop1: 'img/catalog-7-desktop@1x.webp',
            imgUrlDesktop2: 'img/catalog-7-desktop@2x.webp 2x',
        },
    ];

    let template = document.querySelector('#goods__item');
    const mediaQueryTablet = window.matchMedia('(min-width: 768px)').matches;
    const mediaQueryDesktop = window.matchMedia('(min-width: 1440px)').matches;
    let items = document.querySelectorAll('.goods__item');

    for (let i = 0; i < data.length; i++) {
        let item = data[i];
        let clone = template.content.cloneNode(true);
        let assortmentTitle = clone.querySelector('.goods__title');
        let assortmentVolume = clone.querySelector('.goods__volume');
        let assortmentTaste = clone.querySelector('.goods__taste');
        let assortmentPrice = clone.querySelector('.goods__price');
        let assortmentImg = clone.querySelector('.goods__img');
        let goodsButton = clone.querySelector('.goods__button');
        assortmentTitle.textContent = item.title;
        assortmentVolume.textContent = item.volume;
        assortmentTaste.textContent = item.taste;
        assortmentPrice.textContent = item.price;
       
        if (mediaQueryTablet) {
            assortmentImg.src = item.imgUrlTablet1;
            assortmentImg.setAttribute('srcset', item.imgUrlTablet2);
        } 
        if (mediaQueryDesktop) {
            assortmentImg.src = item.imgUrlDesktop1;
            assortmentImg.setAttribute('srcset', item.imgUrlDesktop2);
        } 
        if(!mediaQueryTablet && !mediaQueryDesktop) {
            assortmentImg.src = item.imgUrlX1;
            assortmentImg.setAttribute('srcset', item.imgUrlX2);
        }

        goodsButton.setAttribute('value', item.title);
        template.parentNode.appendChild(clone);
    }

    for (let i = 1; i < items.length; i++) {
        let item = items[i];
        let volume = item.querySelector('.goods__volume').textContent;
        let img = item.querySelector('.goods__img')
        if (volume === '1000 г') {
            img.classList.add('goods__img--big')
        }
    }
}