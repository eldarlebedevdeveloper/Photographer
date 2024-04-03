<?php
/*
Template Name: Home
*/
?>
<?php get_header(); ?>

<body>
    <div id="hellopreloader">
        <div id="hellopreloader_preload"></div>
    </div>
    <?php get_header('menu'); ?>
    <div id='black_end' style='font-size:0;'>
        <div id='back_end_slider_tittle'>
            <? the_field('slider_title',87); ?>
        </div>
        <div id='back_end_slider_text'>
            <? the_field('slider_text',87); ?>
        </div>
        <div id='back_end_slider_pictures'>
            <? the_field('slider_pictures',87); ?>
        </div>
    </div>
    <section class="home">
        <div class="home_slider swiper-container">
            <div class="swiper-wrapper" id='home_slider_container'>
            </div>
        </div>
        <div class="home_slider-decoration">
            <div class="star_background"></div>

            <div class="home_slider-pagination">
                <div class="star_blue">
                    <div class="swiper-button-next"></div>
                    <a href="#" class="star_blue-text"><span>Weiter</span></a>
                    <div class="star_image"></div>
                </div>
                <div class="swiper-pagination"></div>
            </div>
            <div class="home_scroll home_scroll_animation desc"><img
                    src="<?php echo get_template_directory_uri(); ?>/img/arrow_scroll.svg" alt=""><span>Über
                    mich</span><img src="<?php echo get_template_directory_uri(); ?>/img/arrow_scroll.svg" alt=""></div>
        </div>
        <div class="home_scroll home_scroll_animation mob"><img
                src="<?php echo get_template_directory_uri(); ?>/img/arrow_scroll.svg" alt=""><span>Über mich</span><img
                src="<?php echo get_template_directory_uri(); ?>/img/arrow_scroll.svg" alt=""></div>
    </section>
    <?php get_header('mobile'); ?>
    <section class="aboutMe">
        <div class="aboutMe_title">
            <h2 class="heading heading_animation">
                <p><span><?php the_field('two_section_title',87); ?></span></p>
            </h2>
            <div class="star_white desc">
                <span href="#" class="star_white-text open_contactMe"><span>kontaktiere mich</span></span>
            </div>
        </div>
        <div class="aboutMe_text">
        </div>
        <div class="aboutMe_img">
            <div class="star_background desc"></div>
            <div class="star_white mob">
                <a href="contact.html" class="star_white-text"><span>Erfahre mehr</span></a>
            </div>
            <div class="aboutMe_img-item hover_ef">
                <img src="<?php the_field('two_section_picture',87); ?>" alt="">
            </div>
            <p class="text">This is photo of mine btw</p>
        </div>
    </section>
    <?php 
	$url = $_SERVER['REQUEST_URI'];
	$postid = url_to_postid($url); 
	$shortCode = get_post_field('post_content', 66);
?>
    <section class="photos">
        <div class="informationOrderProduct none"><?php echo  $shortCode; ?></div>
        <div class="photos_gallery mymasonry">
            <div class="star_background desc"></div>
            <?php
		 $args = array( 'post_type' => 'post', 'posts_per_page' => -1 ); $loop = new WP_Query( $args ); ?>
            <?php while ( $loop->have_posts() ) : $loop->the_post(); 
				$image = get_field('main_picture');	
				if (has_tag('home')) {	?>

            <div class="photos_gallery-item mymasonry-item" data-orderProductd="<?php the_ID();  ?>">
                <a href="<?php the_permalink(); ?>" class="hover_ef">
                    <img src="<?php echo $image['url']; ?>" alt="<?php echo $image['alt']; ?>">
                    <div class="hashtags">
                        <ul>
                            <?php foreach (get_the_category() as $category) {
									if($category->name == 'forsale'){ ?>
                            <li class="backlight" data-category='<?php echo $category->name; ?>'>
                                #<?php echo $category->name; ?></li>
                            <?php } else { ?>
                            <li data-category='<?php echo $category->name; ?>'>#<?php echo $category->name; ?></li>
                            <?php  }} ?>

                        </ul>
                    </div>
                </a>
            </div>
            <?php } endwhile; ?>
        </div>
        <div class="photos_header ">
            <div class="photos_header-container">
                <h2 class="heading heading_animation">
                    <p><span>Entdecke</span></p>
                    <p><span> meine Galerie</span></p>
                </h2>
                <div class="star_white">
                    <a href="<?php site_url(); ?>/gallery/" class="star_white-text"><span>Zur Galerie</span></a>
                </div>
            </div>
        </div>
    </section>
    <?php get_footer(); ?>
    <?php get_footer('window'); ?>
    <script type="text/javascript" src="<? echo get_template_directory_uri() ?>/libs/swiper/swiper-bundle.min.js">
    </script>
    <script type="text/javascript" src="<? echo get_template_directory_uri() ?>/js/animation.js"></script>
    <script type="text/javascript" src="<? echo get_template_directory_uri() ?>/js/preloader.js"></script>
    <script type="text/javascript" src="<? echo get_template_directory_uri() ?>/js/home_slider_content.js"></script>
    <script type="text/javascript" src="<? echo get_template_directory_uri() ?>/js/home.js"></script>
    <script type="text/javascript" src="<? echo get_template_directory_uri() ?>/js/script.js"></script>
</body>

</html>