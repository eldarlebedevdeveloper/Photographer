<?php
/*
Template Name: Gallery
*/
?>
<?php get_header(); ?>

<body>
    <div id="hellopreloader">
        <div id="hellopreloader_preload"></div>
    </div>
    <?php get_header('menu'); ?>
    <?php photographerBreadCrumbs(''); ?>
    <section class="gallery">
        <div class="gallery_header">
            <div class="gallery_header-headline heading heading_animation">
                <p><span>Galerie</span></p>
            </div>
            <div class="gallery_header-hashtags">
                <div class="hashtags">
                    <ul>
                    </ul>
                </div>
            </div>
        </div>
        <div class="gallery_products swiper-container">
            <div class="swiper-wrapper">
                <?php $args = array('post_type' => 'post', 'posts_per_page' => -1);
				$loop = new WP_Query($args); ?>
                <?php while ($loop->have_posts()) : $loop->the_post();
					$image = get_field('picture_in_gallery'); ?>
                <?php if (has_tag('registered')) { ?>
                <?php if (is_user_logged_in()) { ?>
                <div class="product swiper-slide showProduct">
                    <a href="<?php the_permalink(); ?>">
                        <img class="product_picture" src="<?php echo $image['url']; ?>"
                            alt="<?php echo $image['alt']; ?>">
                    </a>
                    <div class="product_price"><span
                            class="product_price-price"><?php the_field('price'); ?></span><span class="hr"></span><span
                            class="product_price-year"><?php the_field('year'); ?></span></div>
                    <div class="hashtags">
                        <ul class="sorting">
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
                </div>
                <?php } ?>
                <?php } else { ?>
                <div class="product swiper-slide showProduct">
                    <a href="<?php the_permalink(); ?>">
                        <img class="product_picture" src="<?php echo $image['url']; ?>"
                            alt="<?php echo $image['alt']; ?>">
                    </a>
                    <div class="product_price"><span
                            class="product_price-price"><?php the_field('price'); ?></span><span class="hr"></span><span
                            class="product_price-year"><?php the_field('year'); ?></span></div>
                    <div class="hashtags">
                        <ul class="sorting">
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
                </div>
                <?php } ?>
                <?php endwhile; ?>
            </div>
            <?php
			$url = $_SERVER['REQUEST_URI'];
			$postid = url_to_postid($url);
			$shortCode = get_post_field('post_content', $postid);
			echo do_shortcode($shortCode);
			?>
        </div>
    </section>
    <?php get_header('mobile'); ?>
    <?php get_footer('window'); ?>
    <script type="text/javascript" src="<?= bloginfo('template_directory'); ?>/js/animation.js"></script>
    <script type="text/javascript" src="<?= bloginfo('template_directory'); ?>/libs/swiper/swiper-bundle.min.js">
    </script>
    <script type="text/javascript" src="<?= bloginfo('template_directory'); ?>/js/gallery.js"></script>
    <script type="text/javascript" src="<?= bloginfo('template_directory'); ?>/js/script.js"></script>
</body>

</html>