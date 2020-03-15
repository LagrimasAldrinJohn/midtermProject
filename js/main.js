
'use strict';

$(window).on('load', function() {
	/*------------------
		Preloder
	--------------------*/
	$(".loader").fadeOut();
	$("#preloder").delay(400).fadeOut("slow");

});

(function($) {
	/*------------------
		Navigation
	--------------------*/
	$(".main-menu").slicknav({
        appendTo: '.header-section',
        allowParentLinks: true
    });

	/*------------------
		Background Set
	--------------------*/
	$('.set-bg').each(function() {
		var bg = $(this).data('setbg');
		$(this).css('background-image', 'url(' + bg + ')');
	});
	
	/*------------------
		Hero Slider
	--------------------*/
	var $slider = $('.hero-slider');
	var SLIDER_TIMEOUT = 10000;

	$slider.owlCarousel({
		items: 1,
		nav: false,
		dots: false,
		autoplay: true,
		autoplayTimeout: SLIDER_TIMEOUT,
		animateOut: 'fadeOut',
   		animateIn: 'fadeIn',
		loop: true,
		onInitialized: ({target}) => {
			var animationStyle = '-webkit-animation-duration'+ SLIDER_TIMEOUT +'ms;animation-duration:'+ SLIDER_TIMEOUT+'ms';
			var progressBar = $('<div class="slider-progress-bar"><span class="progress" style='+ animationStyle +'></span></div>');
			$(target).append(progressBar);
		},
		onChanged: ({type, target}) => {
			if (type === 'changed') {
				var $progressBar = $(target).find('.slider-progress-bar');
				var clonedProgressBar = $progressBar.clone(true);

				$progressBar.remove();
				$(target).append(clonedProgressBar);
			}
		}
	});


})(jQuery);
