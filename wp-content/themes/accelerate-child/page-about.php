<?php 
/*
*Template for displaying the About page
*Description: template for displaying the About page
*
*
*@package WordPress
*@subpackage Accelerate Marketing
*@since Accelerate Marketing 1.0
*/

get_header(); ?>

<section class="home-page about-page">
	<div class="site-content">
		<?php while ( have_posts() ) : the_post();
			$about_hero_text = get_field('about_hero_text'); ?>
			
			<div class="about-hero">
				<p class="about-hero-text"><?php echo $about_hero_text; ?></p>
			</div>
		<?php endwhile; //end of the loop ?>
	</div><!-- .container -->
</section><!-- .home-page .about-page -->

<section class="about-items clearfix">
	<div class="main-content">
		<div class="about-content">
			<h3 class="about-title"><?php the_title(); ?></h3>
			<?php the_content(); ?>
		</div>
		
		<div class="about-item">
			<div class="service-text">
				<h2><?php the_title(); ?></h2>
				<p><?php echo $services_overview; ?></p>
			</div>
			<figure class="service-image">
				<?php if($service_image) {
					echo wp_get_attachment_image($service_image, $size);
				?>
			</figure>
		</div>
		
		<?php endwhile; ?>
		<?php wp_reset_query(); ?>
	</div><!-- .main-content -->
</section><!-- .about-items -->

<section class="call-to-action site-content">
	<div class="cta-container">
		<p>Interested in working with us?</p>
		<a class="button" href="<?php echo home_url(); ?>/contact-us">Contact Us</a>
	</div>
</section>

<?php get_footer(); ?>