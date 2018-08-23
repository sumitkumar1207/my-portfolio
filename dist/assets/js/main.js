(function ($) {
    "use strict";
    jQuery(document).ready(function ($) {
        //responsive menu
        var $slickNav = $('#main-menu');
        $slickNav.slicknav({
            prependTo: '.responsive-menu',
            label: ''
        });
        /* counter section activation  */
        var counternumber = $('.counter-number');
        counternumber.counterUp({
            delay: 20,
            time: 3000
        });
        //magnific popup activation 
        var $videopopup = $('.video-play-btn')
        $videopopup.magnificPopup({
            type: 'video'
        });
        //back to top 
        $(document).on('click', '.back-to-top', function () {
            $("html,body").animate({
                scrollTop: 0
            }, 2000);
        });
        //screenshort carousel
        var $screenshort = $('.screenshort-carousel');
        $screenshort.owlCarousel({
            loop: true,
            autoplay: true,
            autoPlayTimeout: 1000,
            margin: 30,
            responsive: {
                0: {
                    items: 1
                },
                768: {
                    items: 2
                },
                960: {
                    items: 2
                },
                1200: {
                    items: 4
                },
                1920: {
                    items: 4
                }
            }
        });
        //reviewer carousel
        var $reviewerCarousel = $('.clients-review-carousel');
        $reviewerCarousel.owlCarousel({
            loop: true,
            autoplay: true,
            dots: true,
            autoPlayTimeout: 1000,
            margin: 30,
            responsive: {
                0: {
                    items: 1
                },
                768: {
                    items: 2
                },
                960: {
                    items: 2
                },
                1200: {
                    items: 3
                },
                1920: {
                    items: 3
                }
            }
        });
        //reviewer carousel
        var $logoCarousel = $('.logo-carousel');
        $logoCarousel.owlCarousel({
            loop: true,
            autoplay: true,
            dots: true,
            autoPlayTimeout: 1000,
            margin: 30,
            responsive: {
                0: {
                    items: 1
                },
                768: {
                    items: 2
                },
                960: {
                    items: 3
                },
                1200: {
                    items: 4
                },
                1920: {
                    items: 4
                }
            }
        });
        /*--magnific popup Image Activation--*/
        var imgPopUp = $('.image-popup')
        imgPopUp.magnificPopup({

            gallery: {
                enabled: true
            },
            image: {
                titleSrc: 'title'
            },
            type: 'image'

        });
        /*--- portfolio isotope activation ---*/
        var Container = $('.portfolio-masonary-wrapper');
        Container.imagesLoaded(function () {
            var portfolioISotope = $('.portfolio-masonary-wrapper').isotope({
                itemSelector: '.single-portfolio-item', // use a separate class for itemSelector, other than .col-
                percentPosition: true,
                masonry: {
                    columnWidth: '.grid-sizer'
                }
            });

            $(document).on('click', '.portfolio-filter-menu li', function () {
                var filterValue = $(this).attr('data-filter');
                portfolioISotope.isotope({
                    filter: filterValue
                });
            });
        });
        /*---- primary menu active  ------*/
        var mainMenuActive = '#main-menu ul li a';
        $(document).on('click', mainMenuActive, function () {
            $(this).siblings().removeClass('active');
            $(this).addClass('active');
        });
        /*---- portfolio filter menu active  ------*/
        var portfolioMenu = '.portfolio-filter-menu li';
        $(document).on('click', portfolioMenu, function () {
            $(this).siblings().removeClass('active');
            $(this).addClass('active');
        });
        /*------- progressbar activation ----------*/
        var $section = $('#clients');
        $(document).bind('scroll', function (ev) {
            var scrollOffset = $(document).scrollTop();
            var containerOffset = $section.offset().top - window.innerHeight;
            if (scrollOffset > containerOffset) {
                progressbar('#html', 70);
                progressbar('#css', 85);
                progressbar('#bootstrap', 96);
                // unbind event not to load scrolsl again
                $(document).unbind('scroll');
            }
        });


        function progressbar(selector, percentage) {
            $(selector).LineProgressbar({
                percentage: percentage,
                fillBackgroundColor: '#ed1c24',
                backgroundColor: '#f4f4f4',
                duration: 3000
            });
        }

    });
    $(window).on('scroll', function () {
        //back to top show/hide
        var ScrollTop = $('.back-to-top');
        if ($(window).scrollTop() > 1000) {
            ScrollTop.fadeIn(1000);
        } else {
            ScrollTop.fadeOut(1000);
        }
        /*--sticky menu activation--*/
        var mainMenuTop = $('.navbar-area');
        if ($(window).scrollTop() > 1000) {
            mainMenuTop.addClass('nav-fixed');
        } else {
            mainMenuTop.removeClass('nav-fixed');
        }

    });

    $(window).on('load', function () {
        //preloader
        var preLoder = $(".preloader");
        preLoder.fadeOut(500);
    });

    //change header
    $(document).ready(function () {
        var header = $('header');

        var backgrounds = new Array(
            'url(assets/img/bg/banner1.jpg)'
            , 'url(assets/img/bg/banner2.jpg)'
            , 'url(assets/img/bg/banner3.jpg)'

        );

        var current = 0;

        function nextBackground() {
            current++;
            current = current % backgrounds.length;
            header.css('background-image', backgrounds[current]);
        }
        setInterval(nextBackground, 9000);

        header.css('background-image', backgrounds[0]);
    });

    // for nav area
    jQuery(function ($) {
        function fixDiv() {
            var $cache = $('#getFixed');
            if ($(window).scrollTop() > 0)
                $cache.css({

                    'display': 'block',
                    'position': 'fixed',
                    'top': '0px'
                });
            else
                $cache.css({
                    'position': 'relative',
                    'top': 'auto',
                    'display': 'block'
                });
        }
        $(window).scroll(fixDiv);
        fixDiv();
    });

    //for mail..
    $(function() {
        // Get the form.
        var form = $('#ajax-contact');
    
        // Get the messages div.
        var formMessages = $('#form-messages');
    
        // TODO: The rest of the code will go here...
        
        // Set up an event listener for the contact form.
        $(form).submit(function(event) {
        
        // Stop the browser from submitting the form.
        var formData = $(form).serialize();
        event.preventDefault();
        $.ajax({
        type: 'POST',
        url: $(form).attr('action'),
        data: formData
    }).done(function(response) {
        
        // Make sure that the formMessages div has the 'success' class.
        $(formMessages).removeClass('error');
        $(formMessages).addClass('success');
        
        // Set the message text.
        $(formMessages).text(response);
        
        // Clear the form.
        $('#name').val('');
        $('#email').val('');
        $('#mno').val('');
        $('#message').val('');
    })
    // TODO
    });
    
    // Submit the form using AJAX.
    
    });

}(jQuery));	
