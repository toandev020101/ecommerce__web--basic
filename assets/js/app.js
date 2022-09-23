// let - const
const $ = document.querySelector.bind(document)
const $$ = document.querySelectorAll.bind(document)

const menuToggleBtn = $('.mb-menu__toggle')
const menuCloseBtn = $('.mb-menu__close')
const headerWrapper = $('.header-wrapper')

const quantityPlusBtn = $('.quantity-btn-plus')
const quantityMinusBtn = $('.quantity-btn-minus')
const quantityNum = $('.quantity')
const quantityMax = $('.product-quantity-curr > span')

// show menu for mobile
menuToggleBtn.onclick = () => headerWrapper.classList.add('active')

// hide menu for mobile
menuCloseBtn.onclick = () => headerWrapper.classList.remove('active')

// quantity
quantityPlusBtn.onclick = () => {
	const quantityNumContent = parseInt(quantityNum.textContent)
	const quantityMaxContent = quantityMax
		? parseInt(quantityMax.textContent)
		: 99

	if (quantityNumContent == quantityMaxContent) {
		return
	} else if (quantityNumContent == quantityMaxContent - 1) {
		quantityPlusBtn.classList.add('disabled')
	} else if (quantityNumContent == 1) {
		quantityMinusBtn.classList.remove('disabled')
	}

	quantityNum.textContent = quantityNumContent + 1
}

quantityMinusBtn.onclick = () => {
	const quantityNumContent = parseInt(quantityNum.textContent)
	const quantityMaxContent = quantityMax
		? parseInt(quantityMax.textContent)
		: 99

	if (quantityNumContent == 1) {
		return
	} else if (quantityNumContent == 2) {
		quantityMinusBtn.classList.add('disabled')
	} else if (quantityNumContent == quantityMaxContent) {
		quantityPlusBtn.classList.remove('disabled')
	}

	quantityNum.textContent = quantityNumContent - 1
}
