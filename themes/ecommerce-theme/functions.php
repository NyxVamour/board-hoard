<?php

function my_theme_enqueue_styles() {
    wp_enqueue_style( 'theme-style', get_stylesheet_uri() );
}
add_action( 'wp_enqueue_scripts', 'my_theme_enqueue_styles' );

// Hooks
require_once get_theme_file_path( '/inc/hooks.php' );

// WooCommerce
require_once get_theme_file_path( '/inc/woocommerce.php' );