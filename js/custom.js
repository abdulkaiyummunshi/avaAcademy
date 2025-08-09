(function ($) {
    "use strict";
    var windowOn = $(window);
    $(document).ready(function () {
        windowOn.on('load', function () {
        });
        
        //>> Mobile Menu Js Start <<//
        $('#mobile-menu').meanmenu({
            meanMenuContainer: '.mobile-menu',
            meanScreenWidth: "1199",
            meanExpand: ['<i class="far fa-plus"></i>'],
        });

        //>> Sidebar Toggle Js Start <<//
        $(".offcanvas__close,.offcanvas__overlay").on("click", function () {
            $(".offcanvas__info").removeClass("info-open");
            $(".offcanvas__overlay").removeClass("overlay-open");
        });
        $(".sidebar__toggle").on("click", function () {
            $(".offcanvas__info").addClass("info-open");
            $(".offcanvas__overlay").addClass("overlay-open");
        });

        //>> Body Overlay Js Start <<//
        $(".body-overlay").on("click", function () {
            $(".offcanvas__area").removeClass("offcanvas-opened");
            $(".df-search-area").removeClass("opened");;
            $(".body-overlay").removeClass("opened");
        });


        //>> Sticky Menu <<//
        windowOn.on('scroll', function () {
            var scroll = windowOn.scrollTop();
            if (scroll < 300) {
                $("#header-sticky").removeClass("sticky_top");
            } else {
                $("#header-sticky").addClass("sticky_top");
            }
        });


        //>> offcanvas bar <<//
        $(".tp-offcanvas-toogle").on('click', function () {
            $(".tp-offcanvas").addClass("tp-offcanvas-open");
            $(".tp-offcanvas-overlay").addClass("tp-offcanvas-overlay-open");
        });
        $(".tp-offcanvas-close-toggle,.tp-offcanvas-overlay").on('click', function () {
            $(".tp-offcanvas").removeClass("tp-offcanvas-open");
            $(".tp-offcanvas-overlay").removeClass("tp-offcanvas-overlay-open");
        });

        // The Plan 
        function thePlan() {
                $('.process-step:not(.active) .step-content').hide();
                $('.process-step.active .step-content').show();
                $('.process-step.active .step-header .arrow-icon').removeClass('fa-angle-down').addClass('fa-angle-up');
                $('.process-step .step-header').on('click', function (e) {
                    const $parentStep = $(this).closest('.process-step');
                    const $content = $parentStep.find('.step-content');
                    const $arrow = $parentStep.find('.arrow-icon');
                    if ($parentStep.hasClass('active')) {
                        $parentStep.removeClass('active');
                        $content.slideUp(300); 
                        $arrow.removeClass('fa-angle-up').addClass('fa-angle-down');
                    } else {
                        $('.process-step.active').not($parentStep).each(function () {
                            const $otherStep = $(this);
                            const $otherContent = $otherStep.find('.step-content');
                            const $otherArrow = $otherStep.find('.arrow-icon');
                            $otherStep.removeClass('active');
                            $otherContent.slideUp(300);
                            $otherArrow.removeClass('fa-angle-up').addClass('fa-angle-down');
                        });
                        $parentStep.addClass('active');
                        $content.slideDown(300); 
                        $arrow.removeClass('fa-angle-down').addClass('fa-angle-up');
                    }
                });
            
        }
        thePlan();
       
        // Verified Talent
        function verifiedTalent() {
            $('.accordion-header').on('click', function () {
                var $parentItem = $(this).closest('.accordion-item');
                var isCurrentlyActive = $parentItem.hasClass('active');

                // Remove 'active' from all other accordion items
                $('.accordion-item').not($parentItem).removeClass('active');

                // Toggle the 'active' class on the clicked item
                $parentItem.toggleClass('active');
            });
        }
        verifiedTalent();

        // Text Slider
        function textSlider(){
            $(document).ready(function () {
                $('.scroll-container').hover(function () {
                    $('.scroll-content').css('animation-play-state', 'paused');
                }, function () {
                    $('.scroll-content').css('animation-play-state', 'running');
                });
            });
        }
        textSlider()

        $('.clients_review_slider').slick({
            slidesToShow: 1,
            slidesToScroll: 1,
            autoplay: true,
            autoplaySpeed: 3000,
            speed: 3000,
            arrows: true,
            dots: true,
            dotsClass: "review_dots",
            infinite: true,
            prevArrow: `<span class="left-arrow"><i class="fa-solid fa-arrow-left"></i></span>`,
            nextArrow: `<span class="right-arrow"><i class="fa-solid fa-arrow-right"></i></span>`,
        });
        $('.vision_content').slick({
            slidesToShow: 1,
            slidesToScroll: 1,
            autoplay: true,
            autoplaySpeed: 3000,
            arrows: true,
            speed: 3000,
            dots: false,
            infinite: true,
            prevArrow: `<span class="left-arrow"><i class="fa-solid fa-arrow-left"></i></span>`,
            nextArrow: `<span class="right-arrow"><i class="fa-solid fa-arrow-right"></i></span>`,
        });
        $('.partner_testimonial_slider').slick({
            slidesToShow: 2,
            slidesToScroll: 1,
            arrows: true,
            autoplay: true,
            autoplaySpeed: 4000,
            speed: 3000,
            dots: false,
            infinite: true,
            prevArrow: `<span class="left-arrow"><i class="fa-solid fa-arrow-left"></i></span>`,
            nextArrow: `<span class="right-arrow"><i class="fa-solid fa-arrow-right"></i></span>`,
            responsive: [
                {
                    breakpoint: 768, 
                    settings: {
                        slidesToShow: 1,
                        slidesToScroll: 1,
                    }
                },
            ]
        });
        function animateBlogNewsContains() {
            const blogNewsContains = document.querySelectorAll(".business_card");
            if (blogNewsContains.length > 0) {
                gsap.from(blogNewsContains, {
                    scrollTrigger: {
                        trigger: ".business_card_wrapper",
                        start: "top 80%",
                        toggleActions: "play none none reverse",
                    },
                    opacity: 0,
                    y: 50,
                    duration: 1,
                    stagger: 0.3,
                });
            }
        }
        animateBlogNewsContains()
        function talentProfiles() {
            const blogNewsContains = document.querySelectorAll(".blog1-card");
            if (blogNewsContains.length > 0) {
                gsap.from(blogNewsContains, {
                    scrollTrigger: {
                        trigger: ".blog1-card",
                        start: "top 80%",
                        toggleActions: "play none none reverse",
                    },
                    opacity: 0,
                    y: 50,
                    duration: 1,
                    stagger: 0.3,
                });
            }
        }
        talentProfiles()
        function certificate() {
            const blogNewsContains = document.querySelectorAll(".certificate_one");
            if (blogNewsContains.length > 0) {
                gsap.from(blogNewsContains, {
                    scrollTrigger: {
                        trigger: ".certificate_image",
                        start: "top 80%",
                        toggleActions: "play none none reverse",
                    },
                    opacity: 1,
                    x: 120,
                    duration: 1.5,
                    stagger: 0.3,
                });
            }
            const certificatetwo = document.querySelectorAll(".certificate_two");
            if (certificatetwo.length > 0) {
                gsap.from(certificatetwo, {
                    scrollTrigger: {
                        trigger: ".certificate_image",
                        start: "top 80%",
                        toggleActions: "play none none reverse",
                    },
                    opacity: 1,
                    x: -100,
                    duration: 1.5,
                    stagger: 0.3,
                });
            }
        }
        certificate()
        
      

       
        // Scroll-triggered Counter Animation
        $(".about_count").each(function () {
            let counter = $(this);
            let targetValue = counter.data("count").toString().replace(/\D/g, "");
            let suffix = counter.data("count").toString().replace(/\d/g, "");
            gsap.to(counter[0], {
                innerText: targetValue,
                snap: "innerText",
                ease: "power2.out",
                duration: 3,
                scrollTrigger: {
                    trigger: counter[0],
                    start: "top 80%",
                    toggleActions: "play none none none"
                },
                onUpdate: function () {
                    counter.text(Math.round(counter.text()) + suffix);
                },
                onStart: () => {
                    gsap.to(counter[0], { opacity: 1, scale: 1, duration: 0.5 });
                }
            });
        });
        // Back to Top Button
        $(window).on("scroll", function () {
            if ($(window).scrollTop() > 200) {
                $(".back_top").addClass("show");
            } else {
                $(".back_top").removeClass("show");
            }
        });
        $(".back_top").on("click", function () {
            $("html, body").animate({ scrollTop: 0 }, "slow");
        });
        //  Magnific Popup Configuration
        $('.playBtn').magnificPopup({
            type: 'iframe',
            mainClass: 'mfp-fade',
            removalDelay: 160,
            preloader: false,
            fixedContentPos: false,
            iframe: {
                patterns: {
                    youtube: {
                        index: 'youtube.com/',
                        id: function (url) {
                            // Support both ?v=ID and /embed/ID
                            const watchMatch = url.match(/[?&]v=([^&]+)/);
                            if (watchMatch && watchMatch[1]) return watchMatch[1];

                            const embedMatch = url.match(/embed\/([^\?&]+)/);
                            if (embedMatch && embedMatch[1]) return embedMatch[1];

                            return null;
                        },
                        src: 'https://www.youtube.com/embed/%id%?autoplay=1'
                    }
                }
            },
            callbacks: {
                close: function () {
                    document.activeElement && document.activeElement.blur();

                    setTimeout(() => {
                        $('#main-content, .slick-current .playBtn').first().focus();
                    }, 100);
                }
            }
        });
    
        $('select').niceSelect();
        
    });

    $(window).on("load", function () {
        const preloader = document.querySelector(".preloader_area");
        preloader.style.transition = "all 0.5s ease";
        preloader.style.opacity = "0";
        preloader.style.visibility = "hidden";
        setTimeout(() => {
            preloader.style.display = "none";
        }, 600);
    });
})(jQuery);

