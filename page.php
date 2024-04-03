<?php get_header(); ?>

<body class="body_gallery">
    <?php get_header('menu'); ?>
    <?php the_content(); ?>
    <?php get_header('mobile'); ?>
    <?php get_footer('window'); ?>
    <script type="text/javascript" src="<?= bloginfo('template_directory'); ?>/js/script.js"></script>
</body>

</html>