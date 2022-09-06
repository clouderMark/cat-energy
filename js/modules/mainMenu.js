export function mainMenu() {
    let btnOppen = document.querySelector('.menu-button');
    let mainMenuItems = document.querySelectorAll('.site-list__item');

    btnOppen.addEventListener('click', function () {
        for(let i = 0; i < mainMenuItems.length; i++) {
            mainMenuItems[i].classList.toggle('opened')
        } 
    })

    window.addEventListener('keydown', function (evt) {
        if (evt.keyCode === 27) {
            if (mainMenuItems[0].classList.contains('opened')) {
                evt.preventDefault();
                for(let i = 0; i < mainMenuItems.length; i++) {
                    mainMenuItems[i].classList.remove('opened')
                }       
            }
        }
    })
}