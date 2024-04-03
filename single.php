<?php get_header(); ?>

<body class="body_gallery">
    <?php get_header('menu'); ?>
    <?php 
		$idpost = get_the_id();
		photographerBreadCrumbs($idpost);
		$pred_post = get_previous_post(); 
		$next_post = get_next_post(); 
	?>
    <section class="goods">
        <div class="goods_content">
            <p class="none" data-add-cart='id'><?php echo $idpost; ?></p>
            <p class="none" data-add-cart='name'><?php the_field('name'); ?></p>
            <div class=" desc heading_underline heading_animation">
                <p><span>CHF</span><span class="price" data-add-cart='price'><?php the_field('price'); ?></span></p>
            </div>
            <div class="goods_content-star star_blue add_localstorage">
                <a href="#" class="star_blue-text"><span>buy picture</span></a>
            </div>
            <div class="goods_content-years mob">
                <div class="goods_year-item">
                    <a href="<?php echo get_permalink($pred_post); ?> ">
                        <div class="arrow">
                            <img src="<?php echo get_template_directory_uri(); ?>/img/arrow_product-page.svg" alt="">
                            <img src="<?php echo get_template_directory_uri(); ?>/img/circle_prodcut-page.svg" alt="">
                        </div>
                    </a>
                    <div class="year" data-add-cart='year'><?php the_field('year'); ?></div>
                    <a href="<?php echo get_permalink($next_post); ?> ">
                        <div class="arrow">
                            <img src="<?php echo get_template_directory_uri(); ?>/img/arrow_product-page.svg" alt="">
                            <img src="<?php echo get_template_directory_uri(); ?>/img/circle_prodcut-page.svg" alt="">
                        </div>
                    </a>

                </div>
            </div>
            <div class="goods_content-hashtags hashtags">
                <ul data-add-cart="hashtags">
                    <?php foreach (get_the_category() as $category) {
							if($category->name == 'forsale'){ ?>
                    <li class="backlight" data-category='<?php echo $category->name; ?>'>#<?php echo $category->name; ?>
                    </li>
                    <?php } else { ?>
                    <li data-category='<?php echo $category->name; ?>'>#<?php echo $category->name; ?></li>
                    <?php  }} ?>
                </ul>
            </div>
            <div class="goods_content-text text" data-add-cart="description"><?php the_content(); ?></div>
        </div>
        <div class="goods_pictere">
            <div>
                <div class="mob heading_underline heading_animation">
                    <p><span>$</span><span><?php the_field('price'); ?></span></p>
                </div>
            </div>
            <div class="star_background mob"></div>
            <div class="goods_pictere-container">
                <?php $image = get_field('main_picture'); ?>
                <img src="<?php echo $image['url']; ?>" alt="" data-add-cart="picture">
            </div>
        </div>
        <div class="goods_year desc">
            <div class="goods_year-item">
                <a href="<?php echo get_permalink($pred_post); ?> ">
                    <div class="arrow">
                        <img src="<?php echo get_template_directory_uri(); ?>/img/arrow_product-page.svg" alt="">
                        <img src="<?php echo get_template_directory_uri(); ?>/img/circle_prodcut-page.svg" alt="">
                    </div>
                </a>
                <div class="year"><?php the_field('year'); ?></div>
                <a href="<?php echo get_permalink($next_post); ?>">
                    <div class="arrow">
                        <img src="<?php echo get_template_directory_uri(); ?>/img/arrow_product-page.svg" alt="">
                        <img src="<?php echo get_template_directory_uri(); ?>/img/circle_prodcut-page.svg" alt="">
                    </div>
            </div>
            </a>
        </div>
        <div class="goods_substrate desc"></div>
    </section>
    <?php get_header('mobile'); ?>
    <?php get_footer('window'); ?>
    <script type="text/javascript" src="<?= bloginfo('template_directory'); ?>/js/script.js"></script>
</body>

</html>