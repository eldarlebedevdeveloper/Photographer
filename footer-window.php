<div id="cart" class="cart  c-shadow none">
	<header class="header_cart header_up">
		<div class="header_logo mob">
			<a href="<?php site_url(); ?>/"><img src="<?php echo get_template_directory_uri(); ?>/img/Logo_Ston_white_zoom.png" alt=""></a>
		</div>
		<div class="header_contact">
			<ul>
				<li class="open_logIn"><a href="#">log in</a></li>
				<li class="open_cart blue"><a href="#">cart <span class="cart_count"></span></a></li>
			</ul>
		</div>
	</header>

	<div class="cart_header heading_underline">
		<p><span>cart</span><span class="cart_count without_brackets"></span></p>
	</div>

	<div class="cart_content">
		<div class="cart_products">

		</div>
		<div class="cart_star">
			<div class="cart_star-item">
				<div class="star_blue">
					<a href="<?php site_url(); ?>/order" class="star_blue-text"><span>complete order</span></a>
				</div>
			</div>
		</div>
	</div>
</div>
<div id="contactMe" class="popUp ">
	<header class="header_up header_popUp ">
		<div class="header_logo">
			<a href="<?php site_url(); ?>/"><img src="<?php echo get_template_directory_uri(); ?>/img/Logo_Ston_white_zoom.png" alt=""></a>
		</div>
		<div class="header_contact">
			<ul>
				<li class="close"><img src="<?php echo get_template_directory_uri(); ?>/img/close.svg" alt=""></li>
				<li class="open_cart"><a href="#">cart <span class="cart_count"></span></a></li>
			</ul>
		</div>
	</header>
	<div class="popUp_content">
		<div class="popUp_content-headeng heading_underline ">
			<p><span>kontaktiere mich</span></p>
		</div>
		<div class="popUp_content-form">
			<form action="<?php bloginfo('template_url'); ?>/mail.php" method="post" id="contactMe_form" class="form" autocomplete="off">
				<input type="email" name="email" placeholder="Deine E-Mail" required>
				<input type="text" name="name" placeholder="dein Name" required>
				<input type="text" name="message" placeholder="Botschaft" required>
				<button id="contactForm" name="contactForm">
					<div class="star_blue">
						<span class="star_blue-text"><span>kontaktiere</span></span>
					</div>
				</button>
			</form>
		</div>
	</div>
</div>
<div id="logIn" class="popUp ">
	<header class="header_up header_popUp ">
		<div class="header_logo">
			<a href="<?php site_url(); ?>/"><img src="<?php echo get_template_directory_uri(); ?>/img/Logo_Ston_white_zoom.png" alt=""></a>
		</div>
		<div class="header_contact">
			<ul>
				<li class="close"><img src="<?php echo get_template_directory_uri(); ?>/img/close.svg" alt=""></li>
				<li class="open_register">register</li>
				<li class="open_cart"><a href="#">cart <span class="cart_count"></span></a></li>
			</ul>
		</div>
	</header>
	<div class="popUp_content">
		<div class="popUp_content-headeng heading_underline ">
			<p><span>log in</span></p>
		</div>
		<div class="popUp_content-form">
			<form action="<?php bloginfo('url') ?>/wp-login.php" method="post" id="logIn_form" class="form" autocomplete="off">
				<input type="text" name="log" placeholder="login" required autocomplete="off">
				<input type="password" name="pwd" placeholder="password" required autocomplete="off">
				<button name="wp-submit">
					<div class="star_blue">
						<span class="star_blue-text"><span>log in</span></span>
					</div>
				</button>
				<input type="hidden" name="redirect_to" value="<?php bloginfo('url') ?>/wp-admin/" />
				<input type="hidden" name="testcookie" value="1" />
			</form>
		</div>
	</div>
</div>
<div id="registeret" class="popUp">
	<header class="header_up header_popUp ">
		<div class="header_logo">
			<a href="<?php site_url(); ?>/"><img src="<?php echo get_template_directory_uri(); ?>/img/Logo_Ston_white_zoom.png" alt=""></a>
		</div>
		<div class="header_contact">
			<ul>
				<li class="close"><img src="<?php echo get_template_directory_uri(); ?>/img/close.svg" alt=""></li>
				<li class="open_logIn">log in</li>
				<li class="open_cart"><a href="#">cart <span class="cart_count"></span></a></li>
			</ul>
		</div>
	</header>
	<div class="popUp_content">
		<div class="popUp_content-headeng heading_underline ">
			<p><span>registration</span></p>
		</div>
		<div class="popUp_content-form">
			<form action="<?php echo site_url('wp-login.php?action=register', 'login_post') ?>" method="post" id="logIn_form" class="form" autocomplete="off">
				<input type="text" name="user_login" placeholder="login" required>
				<input type="email" name="user_email" placeholder="email" required>

				<?php do_action('register_form'); ?>

				<button>
					<div class="star_blue">
						<span class="star_blue-text"><span>register</span></span>
					</div>
				</button>
			</form>
		</div>
	</div>
</div>
<?php wp_footer(); ?>