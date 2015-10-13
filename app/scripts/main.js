
jQuery(document).ready(function($) {	
	jQuery('a[href="#novedades"]').click(function(){
		jQuery('.nav-tabs').removeClass('tab-comunidad');
		jQuery('.nav-tabs').addClass('tab-novedades');
	});	
	jQuery('a[href="#comunidad"]').click(function(){
		jQuery('.nav-tabs').removeClass('tab-novedades');
		jQuery('.nav-tabs').addClass('tab-comunidad');
	});
	jQuery('.slick-pro').slick({
		infinite: true,
		autoplay: true,
		centerMode: true,
		speed: 800,
		centerPadding: '30px',
		slidesToShow: 3,
		arrows: true,
		prevArrow: $('.left'),
		nextArrow: $('.right'),
		/*onBeforeChange: function(a, index){
		},
		onAfterChange: function(a, index){
		},*/
		responsive: [
			{
			breakpoint: 768,
			settings: {
			centerMode: true,
			centerPadding: '0px',
			slidesToShow: 1
			}
		},
			{
				breakpoint: 568,
				settings: {
				centerMode: true,
				centerPadding: '0px',
				slidesToShow: 1
			}
		}
		]
	});
});

jQuery(window).load(function($){

});