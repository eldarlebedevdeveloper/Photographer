// order
order()
function order(){
	let boxCart = document.querySelector('.oreder_body-catr')
	boxCart.style.height = 0   + 'px'

	let boxForm = document.querySelector('.oreder_body-form') 

	boxCart.style.height = boxForm.clientHeight   + 'px'
	boxCart.style.overflowY = 'scroll'
}

formSwitching()
function formSwitching(){
	let next = document.querySelectorAll('.next_form')

	next.forEach(item => {
		console.log(item);
	})
}


// order 3
// choisedPaymentMethod()
function choisedPaymentMethod() {
	let formCredit = document.querySelector('#order_pay_creditCard')
	let formTransfer = document.querySelector('#order_pay_bankTransfer')

	let buttonCredit = document.querySelector('#creditCard')
	let buttonTransfer  = document.querySelector('#bankTransfer')
	
	buttonTransfer.addEventListener('click', () => {
		buttonTransfer.classList.add('blue')
		buttonCredit.classList.remove('blue')

		formTransfer.classList.remove('none')
		formCredit.classList.add('none')
	})	

	buttonCredit.addEventListener('click', () => {


		buttonTransfer.classList.remove('blue')
		buttonCredit.classList.add('blue')
		
		formTransfer.classList.add('none')
		formCredit.classList.remove('none')
	})	
}


// Put informatinon from my form in the danate from 
putInforation()
function putInforation(){




		personInformation()
		function  personInformation() {
			$("#order_personInformation").validate({
				// rules: {},
				submitHandler: function(form, event) { 
				event.preventDefault();

				   document.querySelector('#payForm_main').classList.add('none')
				   document.querySelector('#payForm_address').classList.remove('none')
				}
			});
		}


		adreInformation()
		function  adreInformation() {
			$("#order_adresse").validate({
				rules: {
					digits:{
						required: true,
						minlength: 4,
						maxlength: 16,
					}
				},
				submitHandler: function(form, event) { 
				event.preventDefault();
				   document.querySelector('#payForm_address').classList.add('none')
				   document.querySelector('#payForm_cart').classList.remove('none')
				}
			});
		}
	

	debitCardInformation()
	function debitCardInformation() {
		$("#order_pay_bankTransfer").validate({
			// rules: {},
			submitHandler: function(form, event) { 
			   event.preventDefault();
			   mainFlipButton()
			}
		 });
	}


	






	creditCardInformation()
	function creditCardInformation() {
		$("#order_pay_creditCard").validate({
			// rules: {},
			submitHandler: function(form, event) { 
			   event.preventDefault();
			   mainFlipButton()
			}
		 });
	}




	
	function mainFlipButton(){
		document.querySelectorAll('.sendInfoInDonateForm').forEach(function(but){
			but.addEventListener('click', () => {
				document.querySelector('.wpsd-donate-button').click()
			})

		})	
	}

	

	

}

