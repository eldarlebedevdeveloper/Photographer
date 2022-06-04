
window.onload = () => {
	// home_slider_content.js
	getHomeSliderContent()
	mainSlider()

}

// shortcodeSort()
// сортировка продуктов по шорткоду
function shortcodeSort(){
	let informationOrderProduct = document.querySelector('.informationOrderProduct ').textContent
	let productsContainer = document.querySelector('.photos_gallery')
	let allProdcuts = document.querySelectorAll('[data-orderproductd]')


	let orderExecution = informationOrderProduct.replace('[','').replace(']','').split(',')

	let newOrderExecution = []
	
	orderExecution.forEach(oreder => {
		allProdcuts.forEach(product => {
			if (Number(oreder) === Number(product.dataset.orderproductd)) {
				newOrderExecution.push(product)
			}
		})
	})


	newOrderExecution.forEach(product => {
		productsContainer.append(product)
	})
}



if (window.matchMedia("(min-width:768px)").matches) {
	document.addEventListener("DOMContentLoaded", () => {
		myMasonry()
	});
}

function  myMasonry() {
	let myMasonry = document.querySelector('.mymasonry')

	let myMasonryItems = document.querySelectorAll('.mymasonry-item')



	let oneColumn = createNewElement('div', 'mymasonry-column')
	let twoColumn = createNewElement('div', 'mymasonry-column')

	myMasonryItems.forEach((item, index) => {
		if (index % 2) {
			twoColumn.appendChild(item)
		}else{
			oneColumn.appendChild(item)
		}
	})



	myMasonry.appendChild(oneColumn)
	myMasonry.appendChild(twoColumn)
}


function createNewElement(tag,className){
	let element = document.createElement(tag)
	element.classList.add(className)
	return element
}



function mainSlider() {
	const swiper = new Swiper('.home_slider', {
	  loop: true,

	  pagination: {
	    el: '.swiper-pagination',
	  },

	  navigation: {
	    nextEl: '.swiper-button-next',
	  },

	  autoHeight: true,
	});
}



document.addEventListener("DOMContentLoaded", () => {
	// home
	scrollBlock('.aboutMe','.home_scroll')
	scrollBlock('.aboutMe','.home_scroll.mob')

});




function scrollBlock(block,button){
	let home = document.querySelector(block)
	let btn = document.querySelector(button)

	
	function ddd(){
		home.scrollIntoView({
		   behavior: "smooth",
		   block   : "start" 
		});
	}
	btn.addEventListener('click', ddd)
}