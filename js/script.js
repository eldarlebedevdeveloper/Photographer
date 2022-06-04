


// sendForm()
// function sendForm(){
// 	let send = document.querySelector('#contactForm')
// 	send.addEventListener('click', () => {
// 	})
// }

document.addEventListener("DOMContentLoaded", () => {
	validationForm()
	
});

function validationForm(){
	let forms = document.querySelectorAll('.form')



	forms.forEach(form => {
		let button
		if(form.querySelector('button')){
			button = form.querySelector('button')
		}else{
			button = form.querySelector('.button')
		}

		let inputs = form.querySelectorAll('input')
		
		button.addEventListener('click', (e) => {

			// e.preventDefault()

			inputs.forEach(input => {
				if (!input.validity.valid) {
					input.classList.add('invalid')
				}else{
					input.classList.remove('invalid')
				}
			})
			

			let count = 0;


			inputs.forEach(input => {
				if (input.classList.contains('invalid')) {
					count++
				}
			})

			console.log()



			// if(document.location.href != 'https://ston.ch/order/' && document.location.href != 'http://ston.ch/order/'){
			// 	console.log(222222222222222222222222)

			// 	if(form.querySelector('button')){
			// 		if (count == 0) {
			// 			document.location.href = 'https://photographer/thanks/'
			// 		}
			// 	}
			// }


			



		})
	})
}



document.addEventListener("DOMContentLoaded", () => {
	openPopUp('#logIn','.open_logIn','#contactMe', '#registeret')
	openPopUp('#registeret','.open_register','#logIn', '#contactMe')
	openPopUp('#contactMe','.open_contactMe','#logIn', '#registeret')
});


function openPopUp(box,buttons,twoBox, treeBox){
	let popUp = document.querySelector(box)
	let popUpTwo = document.querySelector(twoBox)
	let popUpTree = document.querySelector(treeBox)

	let open = document.querySelectorAll(buttons);
	let close = popUp.querySelector('.close')

	open.forEach((item) => {

		item.addEventListener('click', () => {

			popUp.classList.remove('p-shadow')
			popUp.classList.add('p-show')

			if (popUpTwo.classList.contains('p-show') || popUpTree.classList.contains('p-show')) {
				popUpTwo.classList.remove('p-show')
				popUpTwo.classList.add('p-shadow')	

				popUpTree.classList.remove('p-show')
				popUpTree.classList.add('p-shadow')	
			}
			
		})
	})

	close.addEventListener('click', () => {
		popUp.classList.remove('p-show')
		popUp.classList.add('p-shadow')
	})
}






document.addEventListener("DOMContentLoaded", () => {
	opentCart()
});


opentCart()
function opentCart(){
	let cart = document.querySelector('#cart')
	let open = document.querySelectorAll('.open_cart');



	let count = 0

	document.addEventListener('click', () => {
		if (event.target.closest('.cart') || event.target.closest('.header') || event.target.closest('.header_up')) {

		}else{

			if (cart.classList.contains('c-show')) {
				count++
			}
			cart.classList.remove('c-show')
			cart.classList.add('c-shadow')
		}
	})


	open.forEach((item) => {
		item.addEventListener('click', () => {
		
			cart.classList.remove('none')

			count++
			if (count % 2) {
				cart.classList.remove('c-shadow')
				cart.classList.add('c-show')
			}else{
				cart.classList.remove('c-show')
				cart.classList.add('c-shadow')
			}

		})
	})
}


// ----------------------------------------------------
// ----------------------------------------------------

document.addEventListener("DOMContentLoaded", () => {
	cartOperations()
});

function cartOperations(){

	// localStorage.clear()

	let addLocalStorage = document.querySelector('.add_localstorage')
	let cartContainer = document.querySelector('.cart_products')
	let countProduct = document.querySelectorAll('.cart_count')

	window.addEventListener('storage' , () => {
		callingMainFunctions()
	})
	callingMainFunctions()
	
	function callingMainFunctions(){
		showCartItems()
		if (addLocalStorage) {
			addProductsInLocalStorage()
		}
		deleteProductsInLocalStorage()
	}


	function addProductsInLocalStorage(){
		let product = {
			"id" : findCartElement("id").textContent,
			"name" : findCartElement("name").textContent,
			"link" : window.location.href,
			"price" : findCartElement("price").textContent,
			"picture" : findCartElement("picture").src,
			"year" : findCartElement("year").textContent,
			"hashtags" : findCartElement("hashtags"),
			"description" : findCartElement("description").textContent,
		}


		addLocalStorage.addEventListener('click', () => {
			localStorage.setItem(`photo:${product.id}` , JSON.stringify(product))
			location.reload()
		})
	}

	function findCartElement(name){
		if (name === 'hashtags') {
			let hashtags = document.querySelectorAll(`[data-add-cart="${name}"] li`)
			let hashtagsText = Array.from(hashtags).map(item => item.textContent)
			return hashtagsText
		}else{
			return document.querySelector(`[data-add-cart="${name}"]`)
		}
	}



	// append cart in HTML
	function showCartItems(){

		let products = []
		for(key in localStorage){

			if (typeof localStorage[key] === 'string') {
				let onePhoto = JSON.parse(localStorage[key])


				if(onePhoto.product = 'photo'){
					// console.log(onePhoto)
					if(onePhoto['id'] !== undefined && onePhoto['link'] !== undefined && onePhoto['link'] !== undefined){
						products.push(onePhoto)

					}

				}
			}
		}



		numberItemsCart(products.length)

		if (products.length !== 0) {
			cartContainer.innerHTML = ''
			products.forEach(item => {
				cartContainer.insertAdjacentHTML('beforeend', createCartItem(item))
			})
		}else{
			cartContainer.innerHTML = ''
		}
	}


	function numberItemsCart(count){
		countProduct.forEach(item => {
			if (!item.classList.contains('without_brackets')) {
				item.textContent = `(${count})`
			}else{
				item.textContent = count
			}

		})
	}



	// create one cart
	function createCartItem(product){
		let readyProduct = ` 
			<div class="cart_products-item product">
				<div class="close"></div>
				<div class="hidden" data-cart="id">${product.id}</div>
				<div class="hidden" data-cart="name">${product.name}</div>
				<a href="${product.link}">

					<img class="product_picture" data-cart="picture" src="${product.picture}" alt="">
					<div class="product_price">
						<span class="product_price-price">$<span data-cart="price">${product.price}</span></span>
						<span class="hr"></span>
						<span class="product_price-year" data-cart="year">${product.year}</span>
					</div>
				</a>
				
				<div class="hashtags">
					<ul data-cart="hashtags">
						${ appenHahtags(product.hashtags)}
					</ul>
				</div>
			</div>
		`

		return readyProduct
	}


	function appenHahtags(arrayElem){
		if (arrayElem) {
			let compactHashtags
				arrayElem.forEach(hashtag => {
					if (hashtag !== undefined) {
						if (hashtag === '#forsale') {
							compactHashtags += "<li class='backlight'>" + hashtag + "</li>"
						}else{
							compactHashtags += "<li>" + hashtag + "</li>"
						}				
					}
				}) 


			// console.log(compactHashtags)

			let withoutUndefined = compactHashtags.replace(/undefined/g, '')

			// console.log(withoutUndefined)

			return withoutUndefined
		}
	}




	function deleteProductsInLocalStorage(){
		let allProductsInCart = document.querySelectorAll('.cart_products-item')
		allProductsInCart.forEach(photo => {
			let photoID = photo.querySelector('[data-cart="id"]').textContent
			let close = photo.querySelector('.close')
			close.addEventListener('click', () => {
				localStorage.removeItem(`photo:${photoID}`)
				location.reload()
			})
		})
	}



}



// setInterval(() => {
// 	let ddd = document.querySelector('#wpf_input_149_stripe_card_element > div > input')

// 	if (ddd) {
// 		let ddd111 = document.querySelector('#root > form > div > div.CardField-input-wrapper.is-ready-to-slide > span.CardField-expiry.CardField-child > span > span > input')
// 		console.log(ddd111)
// 		ddd111.style.color = 'white'
// 		console.log(ddd)
// 	}else{
// 		console.log(5555)

// 	}

// }, 2000);
// #root > form > div > div.CardField-input-wrapper.is-ready-to-slide > span.CardField-number.CardField-child > span:nth-child(2) > div > div.CardNumberField-input-wrapper > span > input

// <input class="__PrivateStripeElement-input" aria-hidden="true" aria-label=" " autocomplete="false" maxlength="1" style="border: none !important; display: block !important; position: absolute !important; height: 1px !important; top: -1px !important; left: 0px !important; padding: 0px !important; margin: 0px !important; width: 100% !important; opacity: 0 !important; background: transparent !important; pointer-events: none !important; font-size: 16px !important; color: white;">


// .InputContainer .InputElement{
//     color: white!important;
// }
// .ElementsApp, .ElementsApp .InputElement{
//     color: white!important;

// }

// .ElementsApp, .ElementsApp .InputElement{
//     color: white!important;
    
// }


// function sayHi(){
// 	document.querySelector('.ElementsApp input').style.color = 'white'
// }


// setTimeout(sayHi, 30000)

// document.querySelector('.ElementsApp').style.color = 'white'
// document.querySelector('.ElementsApp .InputElement').style.color = 'white'
// document.querySelector('.ElementsApp').style.color = 'white'
// document.querySelector('.InputContainer').style.color = 'white'
// document.querySelector('.InputContainer').style.color = 'white'
// document.querySelector('.InputContainer').style.color = 'white'





