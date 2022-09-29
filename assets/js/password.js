// let - const
const $ = document.querySelector.bind(document)
const $$ = document.querySelectorAll.bind(document)

const passwordBtn = $('.password-btn')
const passwordInput = $('.password')
// end let - const

// hide show password
passwordBtn.onclick = () => {
	const type = passwordInput.getAttribute('type')
	if (type === 'password') {
		passwordInput.setAttribute('type', 'text')
		passwordBtn.setAttribute('class', 'bx bx-show-alt password-btn')
	} else {
		passwordInput.setAttribute('type', 'password')
		passwordBtn.setAttribute('class', 'bx bx-hide password-btn')
	}
}
