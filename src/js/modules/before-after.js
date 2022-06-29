export function beforeAfter() {
    let beforeAfter = document.querySelector('.example__before-after');
    let before = beforeAfter.querySelector('.before-after__picture--before');
    let range = beforeAfter.querySelector('.range');

    range.addEventListener('input', function(){
        before.style.width = range.value + '%';
    })
}