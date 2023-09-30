(function($){
	$(document).ready(function(){ 

		$('.instagram__list').slick({
			speed: 700,
			slidesToShow: 6,
			slidesToScroll: 1,
			swipeToSlide: true,
			autoplay: true,
			autoplaySpeed: 2000,
			prevArrow: "<div class='slick-prev'></div>",
			nextArrow: "<div class='slick-next'></div>",
			responsive: [
			{
			  breakpoint: 1400,
			  settings: {
			    slidesToShow: 5,
			  }
			},
			{
			  breakpoint: 1280,
			  settings: {
			    slidesToShow: 4,
			  }
			},
			{
			  breakpoint: 1024,
			  settings: {
			    slidesToShow: 3,
			  }
			},
			{
			  breakpoint: 768,
			  settings: {
			    slidesToShow: 2,
			    arrows: false
			  }
			},
			{
			  breakpoint: 576,
			  settings: {
			    slidesToShow: 1,
			  }
			}
			// You can unslick at a given breakpoint now by adding:
			// settings: "unslick"
			// instead of a settings object
			]
		});

		

		setTimeout(function(){
			let slickListHeight = $('.slick-slide').outerHeight();
			$('.slick-arrow').css({'height':slickListHeight});
		}, 200);

		$(window).on('resize', function(){
			setTimeout(function(){
				slickListHeight = $('.slick-slide').outerHeight();
				$('.slick-arrow').css({'height':slickListHeight});
			}, 200);
		});

		// ----------------------------------------------------------

	});
})(jQuery);