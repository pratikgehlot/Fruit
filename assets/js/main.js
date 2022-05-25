/*
 *****************************************************
 *	CUSTOM JS DOCUMENT                              *
 *	Single window load event                        *
 *   "use strict" mode on                            *
 *****************************************************
 */
$(window).on("load", function() {

    "use strict";

     var preloader = $('.preloader');
    var headerSticky = $("#header");
    var scrollTop = $('#scroll-top');
    var scrolls = $('a[href*="#"]');
    var bodyScroll = $('html, body');	
    // var fancybox = $('.fancybox');
    // var countNumber = $(".counter-box");
    var containerEl = document.querySelector('#mixitup');

    var mixer = mixitup(containerEl);


    // ============================================
    // PreLoader On window Load
    // =============================================

    if (preloader.length) {
        preloader.fadeOut();
    }

    scrolls.on('click', function (e) {
      e.preventDefault();

      bodyScroll.animate({
        scrollTop: $($(this).attr('href')).offset()
      }, 1500, 'linear');
    });


    //==================================================
    // Sticky Header
    //==================================================

    if (headerSticky.length) {
      $(window).on('scroll', function () {

        if ($(this).scrollTop() > 10) {
          headerSticky.addClass('sticky-header');
        } 
        else {
          headerSticky.removeClass('sticky-header');
        }
      });
    }

    //========================================
    // FancyBox Function
    //======================================== 	

    // if (fancybox.length){
    //   fancybox.fancybox();
    // }

    //========================================
    // MixitUp Function
    //======================================== 	

    if (mixer.length) {
        mixer.mixitup();
    }
    /*
    ========================================
    	Counter Setting
    ========================================
    */
    // if(countNumber.length){
    // 	countNumber.appear(function() {
    // 		$(this).each(function() {
    // 			var datacount = $(this).attr('data-count');
    // 			$(this).find('.counter').delay(6000).countTo({
    // 				from: 10,
    // 				to: datacount,
    // 				speed: 3000,
    // 				refreshInterval: 50,
    // 			});
    // 		});
    // 	});
    // }

    //========================================
    // Scroll top
    //======================================== 	

    if (scrollTop.length) {
    	scrollTop.on('click',function(){
    		  $('body').animate({
    					scrollTop: 0
    			},2000);
    	});

    	$(window).scroll(function() {
    		if ($(this).scrollTop()>500)
    		 {
    			scrollTop.addClass('showScrollTop');
    		 }
    		else
    		 {
    		  scrollTop.removeClass('showScrollTop');
    		 }
    	 });
    }

    $('#scroll-top').click(function(){
    	$('html,body').animate({scrollTop : 0},2000);
    });

    //========================================
    // Owl Carousel functions Calling
    //======================================== 	

    owlCarouselInit();



});


//========================================
// Owl Carousel functions
//======================================== 	

function owlCarouselInit() {

    "use strict";

    //========================================
    // owl carousels settings
    //======================================== 		
    
    var nextNav = "<i class='fa fa-chevron-right'></i>";
    var prevNav = "<i class='fa fa-chevron-left'></i>";
    
    var firstSlider = $('#MainSlider');
    var TestimonailSlider = $("#testimonial-slider");
    var ProductSlider = $("#ProductSlider");
    var ClientSlider = $("#client");


    if (firstSlider.length) {
        firstSlider.owlCarousel({
            loop: true,
            margin: 0,
            nav: false,
            dots: false,
            animateIn: 'slideInDown',
            autoplay: true,
            responsive: {
                0: {
                    items: 1
                },
                600: {
                    items: 1
                },
                1000: {
                    items: 1
                }
            }
        });
    }
    if (TestimonailSlider.length) {
        TestimonailSlider.owlCarousel({
            loop: true,
            margin: 10,
            nav: false,
            navText:[prevNav,nextNav],
            dots: true,
            animateIn: 'slideInLeft',
            autoplay: true,
            responsive: {
                0: {
                    items: 1
                },
                600: {
                    items: 2
                },
                1000: {
                    items: 3
                }
            }
        });
    }

    if (ProductSlider.length) {
        ProductSlider.owlCarousel({
            loop: true,
            margin: 10,
            nav: true,
            navText:[prevNav,nextNav],
            dots: false,
            animateIn: 'slideInLeft',
            autoplay: true,
            responsive: {
                0: {
                    items: 1
                },
                600: {
                    items: 3
                },
                1000: {
                    items: 3,
                    margin:20
                }
            }
        });
    }

    if (ClientSlider.length) {
        ClientSlider.owlCarousel({
            loop: true,
            margin: 10,
            nav: false,
            navText:[prevNav,nextNav],
            dots: true,
            animateIn: 'slideInLeft',
            autoplay: true,
            responsive: {
                0: {
                    items: 1
                },
                600: {
                    items: 3
                },
                1000: {
                    items: 1,
                    margin:20
                }
            }
        });
    }



}






/*
 *****************************************************
 *	END OF THE JS 									*
 *	DOCUMENT                       					*
 *****************************************************
 */