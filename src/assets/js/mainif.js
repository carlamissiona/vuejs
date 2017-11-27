/*
	Future Imperfect by HTML5 UP
	html5up.net | @ajlkn
	Free for personal and commercial use under the CCA 3.0 license (html5up.net/license)
*/

(function($) {

	// skel.breakpoints({
	// 	xlarge:	'(max-width: 1680px)',
	// 	large:	'(max-width: 1280px)',
	// 	medium:	'(max-width: 980px)',
	// 	small:	'(max-width: 736px)',
	// 	xsmall:	'(max-width: 480px)'
	// });

	$(function() {

		var	$window = $(window),
			$body = $('body'),
			$menu = $('#menu'),
			$sidebar = $('#sidebar'),
			$mainif = $('#main');

		// Disable animations/transitions until the page has loaded.
			$body.addClass('is-loading');

			$window.on('load', function() {
				window.setTimeout(function() {
					$body.removeClass('is-loading');
				}, 100);
			});

		// Fix: Placeholder polyfill.
			$('form').placeholder();

		// Prioritize "important" elements on medium.
			// skel.on('+medium -medium', function() {
			// 	$.prioritize(
			// 		'.important\\28 medium\\29',
			// 		skel.breakpoint('medium').active
			// 	);
			// });

		// IE<=9: Reverse order of main and sidebar.
			// if (skel.vars.IEVersion <= 9)
			// 	$mainif.insertAfter($sidebar);

		// Menu.
			$menu
				.appendTo($body)
				.panel({
					delay: 500,
					hideOnClick: true,
					hideOnSwipe: true,
					resetScroll: true,
					resetForms: true,
					side: 'right',
					target: $body,
					visibleClass: 'is-menu-visible'
				});

		// Search (header).
			var $search = $('#search'),
				$search_input = $search.find('input');

			$body
				.on('click', '[href="#search"]', function(event) {

					event.preventDefault();

					// Not visible?
						if (!$search.hasClass('visible')) {

							// Reset form.
								$search[0].reset();

							// Show.
								$search.addClass('visible');

							// Focus input.
								$search_input.focus();

						}

				});

			$search_input
				.on('keydown', function(event) {

					if (event.keyCode == 27)
						$search_input.blur();

				})
				.on('blur', function() {
					window.setTimeout(function() {
						$search.removeClass('visible');
					}, 100);
				});

		// Intro.
			var $intro = $('#intro');

			// Move to main on <=large, back to sidebar on >large.
				// skel
				// 	.on('+large', function() {
				// 		$intro.prependTo($mainif);
				// 	})
				// 	.on('-large', function() {
				// 		$intro.prependTo($sidebar);
				// 	});
console.log("hiii");
		$('.navbar-menu li .desc').hide();
			$('.navbar-toggler').on('click', function(event) {
				event.preventDefault();
				$(this).closest('.navbar-minimal').toggleClass('open');
			});
			 
				
			$('.navbar-menu li').on('mouseover', function(event) {
				event.preventDefault();
				 
				 $(this).find('.desc').show();  
				 // /alert($(s).closest('.desc').text() );
			});

			$('.navbar-menu li').on('mouseout', function(event) {
				event.preventDefault();
				 
				 $(this).find('.desc').hide(); 
				 // /alert($(s).closest('.desc').text() );
			});


	});
			
			 

			// timeline project // timeline project // timeline project 
			// timeline project // timeline project // timeline project 

			/*** Detect the browser's prefixes ***/ 
			if(document.addEventListener){ // Only IE9+ support this ;)
			  // http://davidwalsh.name/vendor-prefix
			  // Can't use it in IE8- as it brakes the page...
			  var isPrefixed = (function () {
			    var styles = window.getComputedStyle(document.documentElement, ''),
			      pre = (Array.prototype.slice
			        .call(styles)
			        .join('') 
			        .match(/-(moz|webkit|ms)-/) || (styles.OLink === '' && ['', 'o'])
			      )[1],
			      dom = ('WebKit|Moz|MS|O').match(new RegExp('(' + pre + ')', 'i'))[1];
			    return {
			      dom: dom,
			      lowercase: pre,
			      css: '-' + pre + '-',
			      js: pre[0].toUpperCase() + pre.substr(1)
			    };
			  })();

			  // Deals with prefixes
			  var prefix = isPrefixed.css;

			} else {
			  var prefix = "";
			}

			/*** Slides ***/
			var currentSlide = 0,
			    totalSlides  = $(".tl-item").length - 1;

			// Creates the navigation
			$(".timeline").after("<div class='tl-nav-wrapper'><ul class='tl-nav'></ul></div><a href='#' class='tl-items-arrow-left'></a><a href='#' class='tl-items-arrow-right'></a>");
			$( ".tl-copy" ).wrapInner( "<div class='tl-copy-inner'></div>");

			// Cicle through items and creates the nav
			$(".tl-item").each(function(i) {
			  var year = $(".tl-item:eq(" + i + ")" ).data("year");
			  $(".tl-nav").append("<li><div>" + year + "</div></li>");
			  
			  // Click handlers
			  $(".tl-nav li:eq(" + i + ")").click(function() {
			    if(!$(".tl-item:eq(" + i + ")" ).hasClass("tl-active")) {
			      // Activates the item
			      $(".tl-item").removeClass("tl-active");
			      $(".tl-item:eq(" + i + ")" ).addClass("tl-active");
			      currentSlide = i;

			      // Activates the item nav
			      $(".tl-nav li").removeClass("tl-active");
			      $(".tl-nav li:eq(" + i + ")" ).addClass("tl-active");
			    }
			  });
			});

			// Activates the first slide
			$(".tl-item:first, .tl-nav li:first").addClass("tl-active");

			// Slide's arrows click handlers
			$(".tl-items-arrow-left").on("click", function(){
			  if(currentSlide > 0) {
			    currentSlide--;
			  
			    // Activates the previous item
			    $(".tl-item").removeClass("tl-active");
			    $(".tl-item:eq(" + currentSlide +")").addClass("tl-active");
			    
			    // Activates the previous item nav
			    $(".tl-nav li").removeClass("tl-active");
			    $(".tl-nav li:eq(" + currentSlide + ")" ).addClass("tl-active");
			  }
			});

			$(".tl-items-arrow-right").on("click", function(){
			  if(currentSlide < totalSlides) {
			    currentSlide++;
			  
			    // Activates the next item
			    $(".tl-item").removeClass("tl-active");
			    $(".tl-item:eq(" + currentSlide +")").addClass("tl-active");
			    
			    // Activates the next item nav
			    $(".tl-nav li").removeClass("tl-active");
			    $(".tl-nav li:eq(" + currentSlide + ")" ).addClass("tl-active");
			  }
			});
			  
			/*** Nav ***/
			// The nav's width
			var navWidth = ($(".tl-nav li").outerWidth(true) * $(".tl-nav li").length) + 36;
			$(".tl-nav").width(navWidth);  

			// The nav's arrows
			$(".tl-nav-wrapper").append("<a href='#' class='tl-nav-arrow-left'></a><a href='#' class='tl-nav-arrow-right'></a>");

			/*** The timeline's heigh ***/
			var vpHeight  = $(window).height();
			var tlHeight = vpHeight - $(".tl-nav-wrapper").outerHeight(true) - 175;
			$(".tl-wrapper").height(500);
			$(".tl-item").css("max-height", tlHeight);
			$(".tl-item").height(tlHeight);

			/*** Nav's navigation... ***/
			var navTranslation = 0;
			var navLimit = (navWidth - $(".tl-nav-wrapper").outerWidth(true) + 20) * -1;

			// To the left
			$(".tl-nav-arrow-left").on("click", function() {
			  if(navTranslation < 0) {
			    navTranslation = navTranslation + 86;
			    $(".tl-nav").css(prefix + "transform", "translateX(" + navTranslation + "px)");
			  }
			});

			// To the right
			$(".tl-nav-arrow-right").on("click", function() {
			  if(navTranslation >= navLimit) {
			    navTranslation = navTranslation - 86;
			    $(".tl-nav").css(prefix + "transform", "translateX(" + navTranslation + "px)");
			  }
			});
			// timeline project // timeline project // timeline project 
			// END timeline project 
})(jQuery);
 

