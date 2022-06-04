// gallery
sliderGallery()
function sliderGallery(){
	const swiperGallery = new Swiper('.gallery_products', {
		loop:false,
	  	speed: 400,
	  	// spaceBetween: 100,
	  	slidesPerView: 1.3,
	  	spaceBetween: 20,
	  	scrollbar: {
			el: '.swiper-scrollbar',
		},
		mousewheel:{
			sensitivity: 1,
			// releaseOnEdges: true,
			// forceToAxis: true
		},
		// autoHeight: true,

		breakpoints: {

			768 :{
	  			slidesPerView: 4.7,
	  			spaceBetween: 15,
			},

			500 :{
	  			spaceBetween: 25,
			}
		}

	});
}


let allProducts = document.querySelectorAll('.gallery_products .product')
let header = document.querySelector('.gallery_header-hashtags ul')
let repeat = []

sortingInGallery()
function sortingInGallery() {
	appendCategoryToMenu()

}


function appendCategoryToMenu(){

	allProducts.forEach(item => {
		item.addEventListener('click', () => {

			let category = event.target.dataset.category
			if (category) {
				createSelectedCategroy(category)
			}

			showProductsWithCategory()

		})
	})
}


function createSelectedCategroy(name, backlight){
	repeat.push(name)
	repeat = repeat.filter((item, index) =>  repeat.indexOf(item) === index  )

	header.innerHTML = ''	
	repeat.forEach(item => {
		let li = createLi(item, 'forsale')
		header.append(li) 
		deleteSelectedCategroy(li)
	})
}


function createLi(name, backlight){
	let li = document.createElement('li')
	li.textContent = `#${name}`
	li.dataset.selected = name

	if (name === backlight) {
		li.classList.add('backlight')
	}

	return li
}


function deleteSelectedCategroy(item){
	item.addEventListener('click', () => {

		item.remove()
		let index = repeat.indexOf(item.dataset.selected)
		repeat.splice(index, 1)

		hideProductsWithoutCategory()
	
	})
}

// ______________________________________________________

function showProductsWithCategory(hide){
	let allHashtags = Array.from(header.querySelectorAll('li')).map(item => item.dataset.selected)

	allProducts.forEach(product => {
		let productCategories = Array.from(product.querySelectorAll('.sorting li')).map(item => item.dataset.category)
		showOnly(product, productCategories, allHashtags, hide)
	})	
}


function showOnly(product, productCategories,allHashtags, hide){
	let availableHashtags = []

	productCategories.forEach(category => {
		allHashtags.forEach(hashtag => {
			if (category === hashtag) {
				availableHashtags.push(category)
			}
		})
	})

	if (availableHashtags.length === 0) {
		product.classList.add('hideProduct')
		product.classList.remove('showProduct')

		setTimeout(()=>{
			product.classList.add('none')
		},500)

	}else{
		product.classList.remove('none')
		product.classList.add('showProduct')
		product.classList.remove('hideProduct')

	}
	
}


function hideProductsWithoutCategory(){
	let allHashtags = Array.from(header.querySelectorAll('li')).map(item => item.dataset.selected)

	allProducts.forEach(product => {
		let productCategories = Array.from(product.querySelectorAll('.sorting li')).map(item => item.dataset.category)
		showOnlyDelet(product, productCategories,allHashtags)
	})	
}

function showOnlyDelet(product, productCategories,allHashtags){
	let availableHashtags = []

	productCategories.forEach(category => {
		allHashtags.forEach(hashtag => {
			if (category === hashtag) {
				availableHashtags.push(category)
			}
		})
	})

	if (availableHashtags.length !== 0 || allHashtags.length === 0) {
		product.classList.remove('none')
		product.classList.remove('hideProduct')
		product.classList.add('showProduct')

		
	}else{
		product.classList.remove('showProduct')
		product.classList.add('hideProduct')

		setTimeout(()=>{
			product.classList.add('none')
		},500)
	}
}
