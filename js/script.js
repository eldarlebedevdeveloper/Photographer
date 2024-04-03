document.addEventListener('DOMContentLoaded', () => {
  validationForm()
})

function validationForm() {
  let forms = document.querySelectorAll('.form')

  forms.forEach((form) => {
    let button
    if (form.querySelector('button')) {
      button = form.querySelector('button')
    } else {
      button = form.querySelector('.button')
    }

    let inputs = form.querySelectorAll('input')

    button.addEventListener('click', (e) => {
      inputs.forEach((input) => {
        if (!input.validity.valid) {
          input.classList.add('invalid')
        } else {
          input.classList.remove('invalid')
        }
      })

      let count = 0

      inputs.forEach((input) => {
        if (input.classList.contains('invalid')) {
          count++
        }
      })
    })
  })
}

document.addEventListener('DOMContentLoaded', () => {
  openPopUp('#logIn', '.open_logIn', '#contactMe', '#registeret')
  openPopUp('#registeret', '.open_register', '#logIn', '#contactMe')
  openPopUp('#contactMe', '.open_contactMe', '#logIn', '#registeret')
})

function openPopUp(box, buttons, twoBox, treeBox) {
  let popUp = document.querySelector(box)
  let popUpTwo = document.querySelector(twoBox)
  let popUpTree = document.querySelector(treeBox)
  let open = document.querySelectorAll(buttons)
  let close = popUp.querySelector('.close')

  open.forEach((item) => {
    item.addEventListener('click', () => {
      popUp.classList.remove('p-shadow')
      popUp.classList.add('p-show')

      if (
        popUpTwo.classList.contains('p-show') ||
        popUpTree.classList.contains('p-show')
      ) {
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

document.addEventListener('DOMContentLoaded', () => {
  opentCart()
})

opentCart()
function opentCart() {
  let cart = document.querySelector('#cart')
  let open = document.querySelectorAll('.open_cart')

  let count = 0

  document.addEventListener('click', () => {
    if (
      event.target.closest('.cart') ||
      event.target.closest('.header') ||
      event.target.closest('.header_up')
    ) {
    } else {
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
      } else {
        cart.classList.remove('c-show')
        cart.classList.add('c-shadow')
      }
    })
  })
}

document.addEventListener('DOMContentLoaded', () => {
  cartOperations()
})

function cartOperations() {
  let addLocalStorage = document.querySelector('.add_localstorage')
  let cartContainer = document.querySelector('.cart_products')
  let countProduct = document.querySelectorAll('.cart_count')

  window.addEventListener('storage', () => {
    callingMainFunctions()
  })
  callingMainFunctions()

  function callingMainFunctions() {
    showCartItems()
    if (addLocalStorage) {
      addProductsInLocalStorage()
    }
    deleteProductsInLocalStorage()
  }

  function addProductsInLocalStorage() {
    let product = {
      id: findCartElement('id').textContent,
      name: findCartElement('name').textContent,
      link: window.location.href,
      price: findCartElement('price').textContent,
      picture: findCartElement('picture').src,
      year: findCartElement('year').textContent,
      hashtags: findCartElement('hashtags'),
      description: findCartElement('description').textContent,
    }

    addLocalStorage.addEventListener('click', () => {
      localStorage.setItem(`photo:${product.id}`, JSON.stringify(product))
      location.reload()
    })
  }

  function findCartElement(name) {
    if (name === 'hashtags') {
      let hashtags = document.querySelectorAll(`[data-add-cart="${name}"] li`)
      let hashtagsText = Array.from(hashtags).map((item) => item.textContent)
      return hashtagsText
    } else {
      return document.querySelector(`[data-add-cart="${name}"]`)
    }
  }

  // append cart in HTML
  function showCartItems() {
    let products = []
    for (key in localStorage) {
      if (typeof localStorage[key] === 'string') {
        let onePhoto = JSON.parse(localStorage[key])

        if ((onePhoto.product = 'photo')) {
          if (
            onePhoto['id'] !== undefined &&
            onePhoto['link'] !== undefined &&
            onePhoto['link'] !== undefined
          ) {
            products.push(onePhoto)
          }
        }
      }
    }

    numberItemsCart(products.length)

    if (products.length !== 0) {
      cartContainer.innerHTML = ''
      products.forEach((item) => {
        cartContainer.insertAdjacentHTML('beforeend', createCartItem(item))
      })
    } else {
      cartContainer.innerHTML = ''
    }
  }

  function numberItemsCart(count) {
    countProduct.forEach((item) => {
      if (!item.classList.contains('without_brackets')) {
        item.textContent = `(${count})`
      } else {
        item.textContent = count
      }
    })
  }

  // create one cart
  function createCartItem(product) {
    let readyProduct = ` 
			<div class="cart_products-item product">
				<div class="close"></div>
				<div class="hidden" data-cart="id">${product.id}</div>
				<div class="hidden" data-cart="name">${product.name}</div>
				<a href="${product.link}">

					<img class="product_picture" data-cart="picture" src="${
            product.picture
          }" alt="">
					<div class="product_price">
						<span class="product_price-price">$<span data-cart="price">${
              product.price
            }</span></span>
						<span class="hr"></span>
						<span class="product_price-year" data-cart="year">${product.year}</span>
					</div>
				</a>
				
				<div class="hashtags">
					<ul data-cart="hashtags">
						${appenHahtags(product.hashtags)}
					</ul>
				</div>
			</div>
		`

    return readyProduct
  }

  function appenHahtags(arrayElem) {
    if (arrayElem) {
      let compactHashtags
      arrayElem.forEach((hashtag) => {
        if (hashtag !== undefined) {
          if (hashtag === '#forsale') {
            compactHashtags += "<li class='backlight'>" + hashtag + '</li>'
          } else {
            compactHashtags += '<li>' + hashtag + '</li>'
          }
        }
      })

      let withoutUndefined = compactHashtags.replace(/undefined/g, '')

      return withoutUndefined
    }
  }

  function deleteProductsInLocalStorage() {
    let allProductsInCart = document.querySelectorAll('.cart_products-item')
    allProductsInCart.forEach((photo) => {
      let photoID = photo.querySelector('[data-cart="id"]').textContent
      let close = photo.querySelector('.close')
      close.addEventListener('click', () => {
        localStorage.removeItem(`photo:${photoID}`)
        location.reload()
      })
    })
  }
}
