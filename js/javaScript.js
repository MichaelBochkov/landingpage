// Меню Ьургер

const iconeMenu = document.querySelector('.menu-burger')
const menuBody = document.querySelector('.menu__body')
const language = document.querySelector('.language')
if (iconeMenu) {

    iconeMenu.addEventListener('click', function() {
        iconeMenu.classList.toggle('active')
        menuBody.classList.toggle('active')
        language.classList.toggle('active')
    })
}