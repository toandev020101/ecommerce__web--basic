// let - const
const quantityPlusBtnList = $$('.quantity-btn-plus')
const quantityMinusBtnList = $$('.quantity-btn-minus')
const quantityMax = $('.product-quantity-curr > span')
// end let - const

// quantity
quantityPlusBtnList.forEach((quantityPlusBtn) => {
	quantityPlusBtn.onclick = () => {
		const quantityNum = quantityPlusBtn.parentNode.querySelector('.quantity')
		const quantityMinusBtn = quantityPlusBtn.parentNode.querySelector(
			'.quantity-btn-minus',
		)
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
})

quantityMinusBtnList.forEach((quantityMinusBtn) => {
	quantityMinusBtn.onclick = () => {
		const quantityNum = quantityMinusBtn.parentNode.querySelector('.quantity')
		const quantityPlusBtn =
			quantityMinusBtn.parentNode.querySelector('.quantity-btn-plus')
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
})
