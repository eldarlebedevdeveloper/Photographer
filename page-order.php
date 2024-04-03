<?php get_header(); ?>

<body class="body_order">
	<div class="oreder_top">
		<header id="header_order" class="header header_popUp">
			<div class="header_logo">
				<a href="<?php site_url(); ?>/"><img src="<?php echo get_template_directory_uri(); ?>/img/Logo_Ston_white_zoom.png" alt=""></a>
			</div>
			<div class="header_contact">
				<ul>
					<li class="close"></li>
					<li class="open_cart"><a href="#">cart <span class="cart_count"></span></a></li>
				</ul>
			</div>
		</header>
		<div class="oreder_header heading_underline">
			<p>
				<span>die Bestellung abschließen</span>
				<span class="oreder_page "><span class="oreder_page-count">01</span><span>/03</span></span>
			</p>
		</div>
	</div>
	<section class="oreder">
		<div class="oreder_body">
			<div class="oreder_body-catr">
				<div class="cart_products">
				</div>
			</div>
			<div id="order_main" class="order_main">
				<div class="order_main-item">
					<div class="oreder_body-form">
						<div class="order_form " id="payForm_main">
							<form class=" form" id="order_personInformation" method="post" action="">
								<input value='' type="text" name="name" placeholder='name' inlength="2" required>
								<input value='' type="email" name="email" placeholder='email' required>
								<input value='' type="digits" name="phone" placeholder='telefon (optional)' required>
								<button class='button'>
									<div class="star_background_blue">
										<div class="star_blue-text"><span>weiter (versand)</span></div>
									</div>
								</button>
							</form>
						</div>
						<div class="order_form none" id="payForm_address">
							<form action="" id="order_adresse" class="form">
								<div class="form_container">
									<input value='' type="text" name="adresse" placeholder="adresse" required>
									<input value='' type="text" name="plz" placeholder="plz" required>
								</div>
								<input value='' type="text" name="stadt" placeholder="stadt" required>
								<input value='' type="text" name="land" placeholder="land" required>
								<button class='button'>
									<div class="star_background_blue">
										<div class="star_blue-text"><span>Weiter (versand)</span></div>
									</div>
								</button>
							</form>
						</div>
						<div class="order_form none" id="payForm_cart">
							<form action="" id="order_pay_bankTransfer" class="form">
								<div id='order_pay_box'>
								</div>
								<button class='button sendInfoInDonateForm'>
									<div class="star_background_blue">
										<div class="star_blue-text"><span>Weiter (versand)</span></div>
									</div>
								</button>
							</form>
						</div>
					</div>
					<div class="oreder_body-text">
						<div class='order_description'>
							<p class="text">Enter your contact information so we can contact you for details. After that
								you can proceed with delivery details </p>
							<p class="text">We do not distribute or share customer data with third parties</p>
						</div>
						<div class='order_description none'>
							<p class="text">Enter your delivery information for us to deliver the product without
								mistakes. After that you can proceed with payment</p>
							<p class="text">We do not distribute or share customer data with third parties</p>
						</div>
						<div class='order_description none'>
							<p class="text">Enter your payment information after selecting payment model
								(Banküberweisung or Kreditkarte) . </p>
							<p class="text">We do not distribute or share customer data with third parties</p>
						</div>
					</div>
				</div>
			</div>
		</div>
	</section>
	<?php echo do_shortcode('[wp_stripe_donation]'); ?>
	<style>
		.ElementsApp,
		.ElementsApp .InputElement {
			color: white !import;
		}
	</style>
	<?php get_footer('window'); ?>
	<script type="text/javascript" src="<?= bloginfo('template_directory'); ?>/libs/jquery-3.6.0.min.js"></script>
	<script type="text/javascript" src="<?= bloginfo('template_directory'); ?>/libs/jquery.validate.min.js"></script>
	<script type="text/javascript" src="<?= bloginfo('template_directory'); ?>/js/script.js"></script>
	<script type="text/javascript" src="<?= bloginfo('template_directory'); ?>/js/order.js"></script>

</body>

</html>