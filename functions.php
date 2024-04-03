<?php function photographerBreadCrumbs($product)
{ ?>
	<div class="bread_crumbs">
		<ul>
			<li><a href="<?php site_url(); ?>/">home</a></li>
			<li><a href="<?php site_url(); ?>/gallery/">gallery</a></li>
			<?php if ($product == true) { ?>
				<li><a href="#">ID <?php echo $product; ?></a></li>
			<?php } ?>
		</ul>
	</div>
<?php } ?>
<?php
function blog_setup()
{
	// потдержка сабнейлов(картинок) к постам
	add_theme_support('post-thumbnails');
	set_post_thumbnail_size(870, 480);
}
add_action('after_setup_theme', 'blog_setup');

// Скрываем админ панель
add_action('after_setup_theme', function () {
	show_admin_bar(false);
});

## заменим слово «записи» на «статьи»
add_filter('post_type_labels_post', 'rename_posts_labels');
function rename_posts_labels($labels)
{

	$new = array(
		'name'                  => 'Products',
		'singular_name'         => 'Product',
		'add_new'               => 'Add product',
		'add_new_item'          => 'Add product',
		'edit_item'             => 'Edit product',
		'new_item'              => 'New product',
		'view_item'             => 'View product',
		'search_items'          => 'Product search',
		'not_found'             => 'Product not found',
		'not_found_in_trash'    => 'No items found in your shopping cart.',
		'parent_item_colon'     => '',
		'all_items'             => 'All product',
		'archives'              => 'Products archive',
		'insert_into_item'      => 'Вставить в продукт',
		'uploaded_to_this_item' => 'Downloaded for this product',
		'featured_image'        => 'Article product',
		'filter_items_list'     => 'Filter products list',
		'items_list_navigation' => 'Navigating the list of products',
		'items_list'            => 'Products list',
		'menu_name'             => 'Products',
		'name_admin_bar'        => 'Product', // пункте "добавить"
	);
	return (object) array_merge((array) $labels, $new);
}
