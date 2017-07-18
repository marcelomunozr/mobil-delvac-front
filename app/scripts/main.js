
jQuery(document).ready(function($) {	
	jQuery('a[href="#novedades"]').click(function(){
		jQuery('.nav-tabs').removeClass('tab-comunidad');
		jQuery('.nav-tabs').addClass('tab-novedades');
	});	
	jQuery('a[href="#comunidad"]').click(function(){
		jQuery('.nav-tabs').removeClass('tab-novedades');
		jQuery('.nav-tabs').addClass('tab-comunidad');
	});
    /*current*/
	var str=location.href.toLowerCase();
	jQuery(".sections .nav-categories li a").each(function() {
		if (str.indexOf(this.href.toLowerCase()) > -1) {
		 	jQuery(".sections .nav-categories li.active").removeClass("active");
			jQuery(this).parent().addClass("active");
		}
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
	jQuery('.slick-prod').slick({
		infinite: true,
		autoplay: true,
		centerMode: true,
		speed: 800,
		centerPadding: '30px',
		slidesToShow: 5,
		arrows: true,
		prevArrow: $('.prod-left'),
		nextArrow: $('.prod-right'),
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
	jQuery('.slick-prod').on('beforeChange', function(event, slick, currentSlide, nextSlide){
	  console.log(nextSlide);
	  var slide = parseInt(nextSlide);
	  jQuery('.carousel').carousel(slide);
	});
	jQuery('.carousel').carousel({
	    pause: true,
	    interval: false
	});
});

jQuery(window).load(function($){
    'use strict';
    /*sticky footer*/
    var footer = jQuery('footer');
    var pos = footer.position();
    var height = jQuery(window).height();
    height = height - pos.top;
    height = height - footer.height()  ;
    if (height > 0) {
        footer.css({
            'margin-top': height + 'px'
        });
    }
    var H = 0;

    /*equal height*/
    jQuery("div.equals-height").each(function(i){
        var h = jQuery("div.equals-height").eq(i).height();
        if(h > H) H = h;
    });
    jQuery("div.equals-height").height(H);

    /*carousel item height*/
    var H2 = 0;
    jQuery("div.item").each(function(i){
        var h2 = jQuery("div.item").eq(i).height();
        if(h2 > H2) H2 = h2;
    });
    jQuery("div.item").height(H2);

});


jQuery(window).scroll(function() {
if (jQuery(this).scrollTop() > 1){  
    jQuery('header').addClass("sticky");
  }
  else{
    jQuery('header').removeClass("sticky");
  }
});