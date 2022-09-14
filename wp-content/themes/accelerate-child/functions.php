<?php
/**
 * Accelerate Marketing Child functions and definitions
 *
 * @link http://codex.wordpress.org/Theme_Development
 * @link http://codex.wordpress.org/Child_Themes
 *
 * @package WordPress
 * @subpackage Accelerate Marketing
 * @since Accelerate Marketing 1.0
 */
 
function create_custom_post_types() {
    register_post_type( 'case_studies',
        array(
            'labels' => array(
                'name' => _( 'Case Studies' ),
                'singular_name' => _( 'Case Study' )
            ),
        'public' => true,
        'has_archive' => true,
        'rewrite' => array( 'slug' => 'case-studies' ),
        )
    );
}

add_action( 'init', 'create_custom_post_types' );

function accelerate_theme_child_widget_init() {
    register_sidebar( 
        array(
            'name' =>__( 'Homepage sidebar', 'accelerate-theme-child'),
            'id' => 'sidebar-2',
            'description' => __( 'Appears on the static front page template', 'accelerate-theme-child' ),
            'before_widget' => '<aside id="%1$s" class="widget %2$s">',
            'after_widget' => '</aside>',
            'before_title' => '<h3 class="widget-title">',
            'after_title' => '</h3>',
        ) 
    );
}

add_action( 'widgets_init', 'accelerate_theme_child_widget_init' );
