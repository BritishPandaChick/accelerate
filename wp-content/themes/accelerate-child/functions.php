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

//Custom post types function 
function create_custom_post_types() {
	//create a case study custom post type 
    register_post_type( 'case_studies',
        array(
            'labels' => array(
                'name' => __( 'Case Studies' ),
            'singular_name' => __( 'Case Study' )
			),
			'public' => true,
			'has_archive' => true,
			'rewrite' => array( 'slug' => 'case-studies' ),
		)
	);
}

//hook custome post type function into theme
add_action( 'init', 'create_custom_post_types' );
