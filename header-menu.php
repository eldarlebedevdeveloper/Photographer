<header class="header header_animation">
	<div class="header_logo">
		<a href="<?php site_url(); ?>/"><img src="<?php echo get_template_directory_uri(); ?>/img/Logo_Ston_Zoom.png" alt=""></a>
	</div>
	<nav class="header_menu">
		<ul>
			<li><a href="<?php site_url(); ?>/">Start</a></li>
			<li><a href="<?php site_url(); ?>/gallery/">Galerie</a></li>
			<li class="open_contactMe"><a href="#">Kontakt</a></li>
		</ul>
	</nav>
	<div class="header_contact">
		<ul>
			<?php if (is_user_logged_in()) { ?>
				<li><a href="<?php site_url(); ?>/wp-admin/index.php">account</a></li>
			<?php } else { ?>
				<li class="open_logIn"><a href="#">log in</a></li>
			<?php } ?>

			<li class="open_cart"><a href="#">cart <span class="cart_count"></span></a></li>
		</ul>
	</div>
</header>