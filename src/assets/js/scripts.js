/* ========================================================================================== */
/*  FUNCTIONS
/* ========================================================================================== */

/* ============================== */
/*  Parallax Effect
/* ============================== */

var parallaxEffect = parallaxEffect || {};

parallaxEffect.initialize = {
	sectionsImageBackground: function() {
		$('[data-type="background"]').each(function() {
			var actualHeight = $(this).position().top,
				reSize = actualHeight - $(window).scrollTop(),
				makeParallax = -(reSize / 2),
				posValue = makeParallax + 'px';

			$(this).css({
				backgroundImage: 'url(' + $(this).data('src') + ')',
				backgroundPosition: '50% ' + posValue
			});
		});
	}
};


/* ========================================================================================== */
/*  DOCUMENT READY
/* ========================================================================================== */

$(document).ready(function() {


/* ============================== */
/*  Initial Load
/* ============================== */

	$('body').addClass('fade-in');


/* ============================== */
/*  Function Calls
/* ============================== */

	parallaxEffect.initialize.sectionsImageBackground();


/* ============================== */
/*  Work
/* ============================== */

	// Somehow this snippet fixes the "hover" styling effect on touch devices. I'm not going to question it...it works.
	if (Modernizr.touch) {
		$('.item').on('touchstart', function() {});
	}


/* ============================== */
/*  Responsive Video Container
/* ============================== */

	// Wraps videos in a container that makes videos responsive.
	$('iframe[src*="youtube.com"], iframe[src*="vimeo.com"]').each(function() {
		$(this).wrap('<div class="container__video"></div>');
	});


/* ============================== */
/*  Footer Copyright Year
/* ============================== */

	// Fills in the current year.
	$('.copyright__year').text((new Date()).getFullYear());
});


/* ========================================================================================== */
/*  DOCUMENT SCROLL
/* ========================================================================================== */

$(document).on('scroll', function() {


/* ============================== */
/*  Function Calls
/* ============================== */

	parallaxEffect.initialize.sectionsImageBackground();
});