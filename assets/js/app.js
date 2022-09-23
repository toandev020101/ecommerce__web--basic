// let - const
const $ = document.querySelector.bind(document)
const $$ = document.querySelectorAll.bind(document)

const menuToggleBtn = $('.mb-menu__toggle')
const menuCloseBtn = $('.mb-menu__close')
const headerWrapper = $('.header-wrapper')
// end let - const

// show menu for mobile
menuToggleBtn.onclick = () => headerWrapper.classList.add('active')

// hide menu for mobile
menuCloseBtn.onclick = () => headerWrapper.classList.remove('active')
