<?php 
/**
* Template for displaying the About page
*
*
* @package WordPress
* @subpackage Accelerate Marketing
* @since Accelerate Marketing 1.0
*/

get_header(); ?>

<div id="primary">
	<div class="main-content" role="main">
		<?php while ( have_posts() ) : the_post(); ?>
			<?php the_content(); ?>
		<?php endwhile; // end of the loop. ?>
	</div><!-- .main-content -->
</div><!-- #primary -->

<?php get_footer(); ?>