// order
order()
function order() {
  let boxCart = document.querySelector('.oreder_body-catr')
  boxCart.style.height = 0 + 'px'
  let boxForm = document.querySelector('.oreder_body-form')

  boxCart.style.height = boxForm.clientHeight + 'px'
  boxCart.style.overflowY = 'scroll'
}

formSwitching()
function formSwitching() {
  let next = document.querySelectorAll('.next_form')

  next.forEach((item) => {
    console.log(item)
  })
}

// Put informatinon from my form in the danate from
document.addEventListener('DOMContentLoaded', () => {
  putInforation()
  transfrerBasket()
})

function putInforation() {
  document.querySelector('#wpsd-wrap-all').classList.add('hidden')
  let paymetData = {}

  createPriceAndNameProducts()
  function createPriceAndNameProducts() {
    let price = 0
    document.querySelectorAll('[data-cart="price"]').forEach((pc) => {
      price = price + Number(pc.textContent)
    })
    paymetData.fullPrice = price

    let allName = ''
    document.querySelectorAll('[data-cart="name"]').forEach((name, index) => {
      if (index === 0) {
        allName += `${name.textContent}`
      } else {
        allName += `, ${name.textContent}`
      }
    })
    paymetData.nameProducts = allName
  }

  personInformation()
  function personInformation() {
    $('#order_personInformation').validate({
      // rules: {},
      submitHandler: function (form, event) {
        event.preventDefault()

        document.querySelector('#payForm_main').classList.add('none')
        document.querySelector('#payForm_address').classList.remove('none')
        document.querySelector('.oreder_page-count').textContent = '02'

        paymetData.name = document.querySelector('input[name="name"]').value
        paymetData.email = document.querySelector('input[name="email"]').value
        paymetData.phone = document.querySelector('input[name="phone"]').value

        showDescription(1)
      },
    })
  }

  adreInformation()
  function adreInformation() {
    $('#order_adresse').validate({
      submitHandler: function (form, event) {
        event.preventDefault()
        document.querySelector('#payForm_address').classList.add('none')
        document.querySelector('#payForm_cart').classList.remove('none')
        document.querySelector('.oreder_page-count').textContent = '03'

        paymetData.adresse = document.querySelector(
          'input[name="adresse"]'
        ).value
        paymetData.plz = document.querySelector('input[name="plz"]').value
        paymetData.stadt = document.querySelector('input[name="stadt"]').value
        paymetData.land = document.querySelector('input[name="land"]').value

        showDescription(2)
      },
    })
  }

  debitCardInformation()
  function debitCardInformation() {
    let box = document.querySelector('#order_pay_bankTransfer #order_pay_box')
    let cart = document.querySelector('#card-element ')
    box.appendChild(cart)

    $('#order_pay_bankTransfer').validate({
      rules: {
        digits: {
          required: true,
        },
      },
      submitHandler: function (form, event) {
        event.preventDefault()
        mainFlipButton('#order_pay_bankTransfer')
      },
    })
  }

  function mainFlipButton(idForm) {
    document.querySelectorAll('.sendInfoInDonateForm').forEach(function (but) {
      but.addEventListener('click', () => {
        addInWordpressDonateForm()

        document.querySelector('.wpsd-donate-button').click()
      })
    })

    function addInWordpressDonateForm() {
      document.querySelector(
        '#wpsd_donator_name'
      ).value = `${paymetData.name} ${paymetData.phone} ${paymetData.adresse} ${paymetData.plz} ${paymetData.stadt} ${paymetData.land} `
      document.querySelector('#wpsd_donator_email').value = paymetData.email
      document.querySelector('#wpsd_donate_other_amount').value =
        paymetData.fullPrice
      document.querySelector('#wpsd_donation_for option').value =
        paymetData.nameProducts
      document.querySelector('#wpsd_donation_for option').textContent =
        paymetData.nameProducts
    }
  }

  function showDescription(numberDescriotion) {
    document.querySelectorAll('.order_description').forEach((desc, index) => {
      if (numberDescriotion === index) {
        desc.classList.remove('none')
      } else {
        desc.classList.add('none')
      }
    })
  }
}

function transfrerBasket() {
  let cloneCart = document
    .querySelector('.oreder .cart_products')
    .cloneNode(true)
  document.querySelector('#cart .cart_products').appendChild(cloneCart)
}
