// let - const
let slide_index = 0
let slide_play = true
let slides = $$('.slide')

const slider = $('.slider')
const prevBtn = $('.slide-prev')
const nextBtn = $('.slide-next')

const products = [
	{
		name: 'JBL E55BT KEY BLACK',
		image1: './assets/images/JBL_E55BT_KEY_BLACK_6175_FS_x1-1605x1605px.png',
		image2: './assets/images/JBL_LIVE650BTNC_Product Image_Folded_Black.webp',
		old_price: '400',
		curr_price: '300',
	},
	{
		name: 'JBL JR 310BT',
		image1: './assets/images/JBL_JR 310BT_Product Image_Hero_Skyblue.png',
		image2: './assets/images/JBL_JR 310BT_Product Image_Detail_Skyblue.png',
		old_price: '400',
		curr_price: '300',
	},
	{
		name: 'JBL TUNE 750BTNC',
		image1:
			'./assets/images/kisspng-beats-electronics-headphones-apple-beats-studio-red-headphones.png',
		image2: './assets/images/JBL_E55BT_KEY_RED_6063_FS_x1-1605x1605px.webp',
		old_price: '400',
		curr_price: '300',
	},
	{
		name: 'JBL Horizon',
		image1: './assets/images/JBLHorizon_001_dvHAMaster.png',
		image2: './assets/images/JBLHorizon_BLK_002_dvHAMaster.webp',
		old_price: '400',
		curr_price: '300',
	},
	{
		name: 'JBL Tune 220TWS',
		image1:
			'./assets/images/JBL_TUNE220TWS_ProductImage_Pink_ChargingCaseOpen.png',
		image2: './assets/images/JBL_TUNE220TWS_ProductImage_Pink_Back.png',
		old_price: '400',
		curr_price: '300',
	},
	{
		name: 'UA Project Rock',
		image1:
			'./assets/images/190402_E1_FW19_EarbudsWCase_S13_0033-1_1605x1605_HERO.png',
		image2:
			'./assets/images/190402_E1_FW19_EarbudsWCase_S13_0033-1_1605x1605_BACK.png',
		old_price: '400',
		curr_price: '300',
	},
	{
		name: 'JBL Endurance SPRINT',
		image1:
			'./assets/images/JBL_Endurance-SPRINT_Product-Image_Red_front-1605x1605px.webp',
		image2: './assets/images/JBL-Endurance-Sprint_Alt_Red-1605x1605px.webp',
		old_price: '400',
		curr_price: '300',
	},
]

const product_list = $('.latest-products')
const best_product_list = $('.best-products')
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

// render products
products.forEach((product) => {
	let prod = `
			<div class="col-3 col-md-6 col-sm-12">
					<div class="product-card">
							<div class="product-card-img">
									<img src="${product.image1}" alt="">
									<img src="${product.image2}" alt="">
							</div>
							<div class="product-card-info">
									<div class="product-btn">
											<button class="btn btn-hover btn-buy-now">
												<a href="#">Mua ngay</a>
											</button>
											<button class="btn btn-hover btn-cart-add">
													<i class='bx bxs-cart-add'></i>
											</button>
											<button class="btn btn-hover btn-cart-add">
													<i class='bx bxs-heart'></i>
											</button>
									</div>
									<div class="product-card-name">
											${product.name}
									</div>
									<div class="product-card-price">
											<span><del>${product.old_price}</del></span>
											<span class="curr-price">${product.curr_price}</span>
									</div>
							</div>
					</div>
			</div>
	`

	product_list.insertAdjacentHTML('beforeend', prod)
	best_product_list.insertAdjacentHTML('afterbegin', prod)
})
