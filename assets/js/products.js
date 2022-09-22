// let - const
const $ = document.querySelector.bind(document)
const $$ = document.querySelectorAll.bind(document)

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
]

const product_list = $('.products')
const filterToggle = $('.filter-toggle')
const filterClose = $('.filter-close')
const filterCol = $('.filter-col')
// end let - const

// function
render = (products) => {
	products.forEach((product) => {
		let prod = `
			<div class="col-4 col-md-6 col-sm-12">
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
	})
}
// end function

// render
render(products)
render(products)

// show filter
filterToggle.onclick = () => filterCol.classList.add('active')

// hide filter
filterClose.onclick = () => filterCol.classList.remove('active')
