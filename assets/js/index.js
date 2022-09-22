// let - const
const $ = document.querySelector.bind(document)
const $$ = document.querySelectorAll.bind(document)

let slide_index = 0
let slide_play = true
let slides = $$('.slide')

const slider = $('.slider')
const prevBtn = $('.slide-prev')
const nextBtn = $('.slide-next')
// end let - const

// function
hideAllSlide = () => {
	slides.forEach((slide) => {
		slide.classList.remove('active')
	})
}

showSlide = () => {
	hideAllSlide()
	slides[slide_index].classList.add('active')
}

prevSlide = () =>
	(slide_index = slide_index - 1 < 0 ? slides.length - 1 : slide_index - 1)

nextSlide = () =>
	(slide_index = slide_index + 1 == slides.length ? 0 : slide_index + 1)
// end function

// run slide
showSlide()
// pause slide when hover slider
slider.onmouseover = () => (slide_play = false)

// enable slide when leave out slider
slider.onmouseleave = () => (slide_play = true)

// auto slide
setInterval(() => {
	if (!slide_play) return
	nextSlide()
	showSlide()
}, 4000)

// slide controller
prevBtn.onclick = () => {
	prevSlide()
	showSlide()
}

nextBtn.onclick = () => {
	nextSlide()
	showSlide()
}
// end run slide
