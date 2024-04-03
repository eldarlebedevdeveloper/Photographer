<section class="photos">
	<div class="informationOrderProduct none"><?php echo $shortCode; ?></div>
	<div class="photos_gallery mymasonry">
		<div class="star_background desc"></div>
		<?php
		$args = array('post_type' => 'post', 'posts_per_page' => -1);
		$loop = new WP_Query($args); ?>
		<?php while ($loop->have_posts()) : $loop->the_post();
			$image = get_field('main_picture');
			if (has_tag('home')) {	?>
				<div class="photos_gallery-item mymasonry-item" data-orderProductd="<?php the_ID();  ?>">
					<a href="<?php the_permalink(); ?>" class="hover_ef">
						<img src="<?php echo $image['url']; ?>" alt="<?php echo $image['alt']; ?>">
						<div class="hashtags">
							<ul>
								<?php foreach (get_the_category() as $category) {
									if ($category->name == 'forsale') { ?>
										<li class="backlight" data-category='<?php echo $category->name; ?>'>
											#<?php echo $category->name; ?></li>
									<?php } else { ?>
										<li data-category='<?php echo $category->name; ?>'>#<?php echo $category->name; ?></li>
								<?php  }
								} ?>

							</ul>
						</div>
					</a>
				</div>
		<?php }
		endwhile; ?>
		<div class="photos_gallery-item mymasonry-item">
			<a href="product-page.html" class="hover_ef">
				<img src="<?php echo get_template_directory_uri(); ?>/img/home/gallery1.jpg" alt="">
				<div class="hashtags">
					<ul>
						<li class="backlight">#forsale</li>
						<li>#wedding</li>
						<li>#witner</li>
						<li>#fall</li>
						<li>#anna</li>
						<li>#portrait</li>
					</ul>
				</div>
			</a>
		</div>
		<div class="photos_gallery-item mymasonry-item">
			<a href="product-page.html" class="hover_ef">
				<img src="<?php echo get_template_directory_uri(); ?>/img/home/gallery2.jpg" alt="">
				<div class="hashtags">
					<ul>
						<li class="backlight">#forsale</li>
						<li>#wedding</li>
						<li>#witner</li>
						<li>#fall</li>
						<li>#anna</li>
						<li>#portrait</li>
					</ul>
				</div>
			</a>
		</div>
		<div class="photos_gallery-item mymasonry-item">
			<a href="product-page.html" class="hover_ef">
				<img src="<?php echo get_template_directory_uri(); ?>/img/home/gallery3.jpg" alt="">
				<div class="hashtags">
					<ul>
						<li class="backlight">#forsale</li>
						<li>#wedding</li>
						<li>#witner</li>
						<li>#fall</li>
						<li>#anna</li>
						<li>#portrait</li>
					</ul>
				</div>
			</a>
		</div>
		<div class="photos_gallery-item mymasonry-item">
			<a href="product-page.html" class="hover_ef">
				<img src="<?php echo get_template_directory_uri(); ?>/img/home/gallery4.jpg" alt="">
				<div class="hashtags">
					<ul>
						<li class="backlight">#forsale</li>
						<li>#wedding</li>
						<li>#witner</li>
						<li>#fall</li>
						<li>#anna</li>
						<li>#portrait</li>
					</ul>
				</div>
			</a>
		</div>
		<div class="photos_gallery-item mymasonry-item">
			<a href="product-page.html" class="hover_ef">
				<img src="<?php echo get_template_directory_uri(); ?>/img/home/gallery5.jpg" alt="">
				<div class="hashtags">
					<ul>
						<li class="backlight">#forsale</li>
						<li>#wedding</li>
						<li>#witner</li>
						<li>#fall</li>
						<li>#anna</li>
						<li>#portrait</li>
					</ul>
				</div>
			</a>
		</div>
	</div>
	<div class="photos_header ">
		<div class="photos_header-container">
			<h2 class="heading heading_animation">
				<p><span>discover</span></p>
				<p><span>photo gallery</span></p>
			</h2>
			<div class="star_white">
				<a href="<?php site_url(); ?>/gallery/" class="star_white-text"><span>discover all</span></a>
			</div>
		</div>
	</div>
</section>