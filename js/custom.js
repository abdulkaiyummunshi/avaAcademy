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

        // Who we are
        function whoWe(){
            jQuery(document).ready(function ($) {
                $('.process-step .step-header').on('click', function () {
                    const $parentStep = $(this).closest('.process-step');
                    const $content = $parentStep.find('.step-content');
                    const $arrow = $parentStep.find('.arrow-icon');

                    // Close all other open steps and reset their icons
                    $('.process-step').not($parentStep).removeClass('active').find('.step-content').slideUp();
                    $('.process-step').not($parentStep).find('.arrow-icon').removeClass('fa-angle-up').addClass('fa-angle-down'); // Reset other icons

                    // Toggle the clicked step
                    $parentStep.toggleClass('active');
                    $content.slideToggle(300); // Smooth slide animation

                    // Change Font Awesome icon based on active state
                    if ($parentStep.hasClass('active')) {
                        $arrow.removeClass('fa-angle-down').addClass('fa-angle-up'); // Change to angle-up
                    } else {
                        $arrow.removeClass('fa-angle-up').addClass('fa-angle-down'); // Change back to angle-down
                    }
                });

                // Automatically set the correct icon for the step with the 'active' class on page load
                $('.process-step.active .step-content').slideDown();
                $('.process-step.active .step-header .arrow-icon').removeClass('fa-angle-down').addClass('fa-angle-up');
            });
        }
        whoWe()
        // Verified Talent
        function verifiedTalent(){
                $('.accordion-header').on('click', function () {
                    var $parentItem = $(this).closest('.accordion-item');
                    var $arrow = $(this).find('.arrow-icon');
                    var isCurrentlyActive = $parentItem.hasClass('active');

                    $('.accordion-item').not($parentItem).each(function () {
                        $(this).removeClass('active');
                        $(this).find('.accordion-header .arrow-icon').html('<i class="fa-solid fa-angle-down"></i>'); 
                    });

                    // Toggle the clicked item
                    if (isCurrentlyActive) {
                        // If it was active, remove 'active' and set arrow down
                        $parentItem.removeClass('active');
                        $arrow.html('<i class="fa-solid fa-angle-down"></i>');
                    } else {
                        // If it was not active, add 'active' and set arrow up
                        $parentItem.addClass('active');
                        $arrow.html('<i class="fa-solid fa-angle-up"></i>');
                    }
                });
        }
        verifiedTalent()

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
        // $('.review_slider').slick({
        //     slidesToShow: 1,
        //     slidesToScroll: 1,
        //     // autoplay: true,
        //     // autoplaySpeed: 4000,
        //     arrows: true,
        //     dots: false,
        //     infinite: true,
        //     prevArrow: `<span class="left-arrow"><i class="fa-solid fa-arrow-left"></i></span>`,
        //     nextArrow: `<span class="right-arrow"><i class="fa-solid fa-arrow-right"></i></span>`,
        //     // centerMode: true,
        //     // centerPadding: "20px",
        //     // initialSlide: 2,
            
        // });
        $('.movies_card_wrapper-2').slick({
            slidesToShow: 6,
            slidesToScroll: 1,
            // autoplay: true,
            // autoplaySpeed: 4000,
            arrows: true,
            dots: false,
            infinite: true,
            // centerMode: true,
            // centerPadding: "20px",
            // initialSlide: 2,
            prevArrow: `<span class="left-arrow"><i class="fa-solid fa-arrow-left"></i></span>`,
            nextArrow: `<span class="right-arrow"><i class="fa-solid fa-arrow-right"></i></span>`,
            responsive: [
                { breakpoint: 1024, settings: { slidesToShow: 2, slidesToScroll: 1 } },
                { breakpoint: 767, settings: { slidesToShow: 1, slidesToScroll: 1 } }
            ]
        });
        $('.trending_movie_card').slick({
            slidesToShow: 4,
            slidesToScroll: 1,
            autoplay: true,
            autoplaySpeed: 4000,
            arrows: true,
            dots: false,
            infinite: true,
            // centerMode: true,
            // centerPadding: "20px",
            // initialSlide: 2,
            prevArrow: `<span class="left-arrow"><i class="fa-solid fa-angle-left"></i></span>`,
            nextArrow: `<span class="right-arrow"><i class="fa-solid fa-angle-right"></i></span>`,
            responsive: [
                { breakpoint: 1024, settings: { slidesToShow: 2, slidesToScroll: 1 } },
                { breakpoint: 767, settings: { slidesToShow: 1, slidesToScroll: 1 } }
            ]
        });
        $(document).ready(function () {
            $('.testimonial-slider').slick({
                slidesToShow: 2.3,
                arrows: false,
                autoplay: true,
                dots: true,
                dotsClass: "testomonial_dot",
                responsive: [
                    {
                        breakpoint: 992,
                        settings: {
                            slidesToShow: 1,
                        }
                    }
                ]
            });
        });
        function animateAboutCardWrapper() {
            const aboutCardWrappers = document.querySelectorAll(".service_card_animated");
            if (aboutCardWrappers.length > 0) {
                gsap.from(aboutCardWrappers, {
                    scrollTrigger: {
                        trigger: ".service_card_ani",
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
        function animatePackagesTitleWrapper() {
            const packagesTitleWrapper = document.querySelectorAll(".pricing");  // Select all elements
            if (packagesTitleWrapper.length > 0) {
                gsap.from(packagesTitleWrapper, {
                    scrollTrigger: {
                        trigger: ".our_pricign_plan",
                        start: "-500px 80%",
                        toggleActions: "play none none reverse",
                    },
                    opacity: 0,
                    y: 50,
                    duration: 1,
                    stagger: 0.3,
                });
            }
        }
        animatePackagesTitleWrapper()
        $('.blog_card_wrapper').slick({
            slidesToShow: 3,
            slidesToScroll: 1,
            autoplay: true,
            autoplaySpeed: 4000,
            arrows: true,
            dots: true,
            infinite: true,
            dotsClass: "review_dots",
            prevArrow: `<span class="left-arrow"><i class="fa fa-undo"></i></span>`,
            nextArrow: `<span class="right-arrow"><i class="fa-solid fa-rotate-right"></i></span>`,
            responsive: [
                { breakpoint: 1300, settings: { slidesToShow: 2, slidesToScroll: 1 } },
                { breakpoint: 1024, settings: { slidesToShow: 2, slidesToScroll: 1 } },
                { breakpoint: 767, settings: { slidesToShow: 1, slidesToScroll: 1 } },
            ]
        });
        // $('.clients_review_slider').slick({
        //     slidesToShow: 1,
        //     slidesToScroll: 1,
        //     autoplay: true,
        //     autoplaySpeed: 4000,
        //     arrows: true,
        //     dots: true,
        //     dotsClass: "review_dots",
        //     infinite: true,
        //     prevArrow: `<span class="left-arrow"><i class="fa fa-undo"></i></span>`,
        //     nextArrow: `<span class="right-arrow"><i class="fa-solid fa-rotate-right"></i></span>`,
        // });
        $('.client_feedback_wrapper').slick({
            slidesToShow: 1,
            slidesToScroll: 1,
            autoplay: true,
            autoplaySpeed: 4000,
            arrows: true,
            dots: false,
            // dotsClass: "review_dots",
            infinite: true,
            prevArrow: `<span class="left-arrow"><i class="fa-solid fa-arrow-left"></i></span>`,
            nextArrow: `<span class="right-arrow"><i class="fa-solid fa-arrow-right"></i></span>`,
        });

        // var $cleaningSlider = $('.second_service');
        $('.second_service').slick({
            slidesToShow: 3,
            slidesToScroll: 1,
            dots: true,
            autoplay: true,
            autoplaySpeed: 1000,
            speed: 3000,
            arrows: false,
            touchThreshold: 10,
            dotsClass: 'service_dot',
            responsive: [
                { breakpoint: 1300, settings: { slidesToShow: 2, slidesToScroll: 1 } },
                { breakpoint: 1024, settings: { slidesToShow: 2, slidesToScroll: 1 } },
                { breakpoint: 767, settings: { slidesToShow: 1, slidesToScroll: 1 } },
            ]
        });
        // Post Gallery Slider
        $('.post-gallery').slick({
            slidesToShow: 1,
            slidesToScroll: 1,
            autoplay: true,
            fade: true,
            autoplaySpeed: 4000,
            prevArrow: `<span class="left-arrow"><i class="fa-solid fa-arrow-left"></i></span>`,
            nextArrow: `<span class="right-arrow"><i class="fa-solid fa-arrow-right"></i></span>`,
            speed: 2000,
            easing: 'ease-in-out',
        });
        $('.minecraft_movie').slick({
            slidesToShow: 1,
            slidesToScroll: 1,
            autoplay: true,
            fade: true,
            arrows: false,
            dots: true,
            dotsClass:"minecraft",
            autoplaySpeed: 4000,
            speed: 2000,
            easing: 'ease-in-out',
        });
        $(document).ready(function () {
            const $faqs = $(".single_enhanced");
            // Set second FAQ active initially
            if ($faqs.length > 0) {
                $faqs.eq(1).addClass("active");
                // $faqs.eq(0).addClass("")
                $faqs.eq(1).find(".answer").css("max-height", $faqs.eq(1).find(".answer")[0].scrollHeight + "px");
                $faqs.eq(1).find(".icon").text("−");
            }
            $faqs.on("click", function () {
                const $this = $(this);
                const $answer = $this.find(".answer");
                const $icon = $this.find(".icon");

                if (!$this.hasClass("active")) {
                    $faqs.removeClass("active").find(".answer").css("max-height", "0");
                    $faqs.find(".icon").text("+");

                    $this.addClass("active");
                    $answer.css("max-height", $answer[0].scrollHeight + "px");
                    $icon.text("−");
                } else {
                    $this.removeClass("active");
                    $answer.css("max-height", "0");
                    $icon.text("+");
                }
            });
        });
        $(document).ready(function () {
            const $faqs = $(".single_faq");
            if ($faqs.length > 0) {
                $faqs.eq(1).addClass("active");
                $faqs.eq(1).find(".answer").css("max-height", $faqs.eq(1).find(".answer")[0].scrollHeight + "px");
                $faqs.eq(1).find(".icon").text("−");
            }
            $faqs.on("click", function () {
                const $this = $(this);
                const $answer = $this.find(".answer");
                const $icon = $this.find(".icon");

                if (!$this.hasClass("active")) {
                    $faqs.removeClass("active").find(".answer").css("max-height", "0");
                    $faqs.find(".icon").text("+");

                    $this.addClass("active");
                    $answer.css("max-height", $answer[0].scrollHeight + "px");
                    $icon.text("−");
                } else {
                    $this.removeClass("active");
                    $answer.css("max-height", "0");
                    $icon.text("+");
                }
            });
        });
       
        var $cleaningSlider = $('.expert_slider');
        $cleaningSlider.slick({
            slidesToShow: 3,
            slidesToScroll: 1,
            arrows: false,
            // autoplay: true,
            autoplaySpeed: 2000,
            speed: 2000,
            arrows: true,
            prevArrow: `<span class="left-arrow"><i class="fa-solid fa-angle-left"></i></span>`,
            nextArrow: `<span class="right-arrow"><i class="fa-solid fa-angle-right"></i></span>`,
            easing: 'ease-in-out',
            responsive: [
                { breakpoint: 1190, settings: { slidesToShow: 3 } },
                { breakpoint: 924, settings: { slidesToShow: 2 } },
                { breakpoint: 600, settings: { slidesToShow: 1 } }
            ]
        });
        var $cleaningSlider = $('.single_iteam ul');
        $cleaningSlider.slick({
            slidesToShow: 4,
            slidesToScroll: 1,
            arrows: false,
            autoplay: true,
            autoplaySpeed: 2000,
            speed: 2000,
            dots: false,
            easing: 'ease-in-out',
            // responsive: [
            //     { breakpoint: 1190, settings: { slidesToShow: 3 } },
            //     { breakpoint: 924, settings: { slidesToShow: 2 } },
            //     { breakpoint: 600, settings: { slidesToShow: 1 } }
            // ]
        });
        $('.blog_post_slider').slick({
            infinite: true,
            slidesToShow: 3,
            slidesToScroll: 1,
            arrows: false,
            autoplay: true,
            dots: true,
            dotsClass: "testomonial_dot",
            responsive: [
                { breakpoint: 1190, settings: { slidesToShow: 3 } },
                { breakpoint: 924, settings: { slidesToShow: 1 } },
                { breakpoint: 600, settings: { slidesToShow: 1 } }
            ]
        });
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
        // Categories Hover Effects
        $('.categories_area.style_1 ul li a').each(function () {
            let link = $(this);
            link.on("mouseenter", function () {
                link.find('.download_btn img').attr('src', './image/service_details/icon5.png');
                link.find('.pdf_btn img').attr('src', './image/service_details/icon2.png');
            });
            link.on("mouseleave", function () {
                link.find('.download_btn img').attr('src', './image/service_details/icon4.png');
                link.find('.pdf_btn img').attr('src', './image/service_details/icon1.png');
            });
        });
        $('.search_card_btn .buy_card .buy_card_icon').each(function () {
            let link = $(this);

            link.on("mouseenter", function () {
                link.find('img').attr('src', './image/header/icon3.png');
            });
            link.on("mouseleave", function () {
                link.find('img').attr('src', './image/header/icon1.png');
                
            });
        });
        $('.search_card_btn .buy_card .search_icon').each(function () {
            let link = $(this);
            link.on("mouseenter", function () {
                link.find('img').attr('src', './image/header/icon4.png');
            });
            link.on("mouseleave", function () {
                link.find('img').attr('src', './image/header/icon2.png');
            });
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
    
        // Progress Bar Animation
        $(".progress-fill").each(function (index) {
            let bar = $(this);
            let value = bar.data("value");
            let valueText = $(".progress-value").eq(index);
            gsap.to(bar, {
                width: value + "%",
                duration: 2,
                ease: "power2.out"
            });
            gsap.to(valueText[0], {
                innerHTML: value + "%",
                duration: 2,
                snap: { innerHTML: 1 },
                ease: "power2.out"
            });
        });
        $(document).ready(function () {
            $('.search_icon').on('click', function () {
                $('#search').addClass('search-active');
                $('.search-body').addClass('from-active');
            });
            $('.search-cross').on('click', function () {
                $('#search').removeClass('search-active');
                $('.search-body').removeClass('from-active');
            });
            $(document).on('click', function (e) {
                if ($(e.target).hasClass('search-active') || $(e.target).hasClass('hide-active')) {
                    $('#search').removeClass('search-active');
                    $('.search-body').removeClass('from-active');
                }
            });
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


// function pricingContains (){
    
//     const channelCards = document.querySelectorAll(".channel_card");
//     const channelContents = document.querySelectorAll(".price_channel");

//     channelCards.forEach((card, index) => {
//         const button = card.querySelector("button");

//         button.addEventListener("click", function () {
//             document.querySelectorAll(".channel_card button").forEach(btn => btn.classList.remove("btn_active"));
//             channelContents.forEach(content => content.classList.remove("active"));
//             this.classList.add("btn_active");
//             channelContents[index].classList.add("active");
//         });
//     });
    


// }
// pricingContains()

// function internetSpeed(){
//     const timerCards = document.querySelectorAll(".timer_card");
//     const contentAreas = document.querySelectorAll(".content_area");

//     timerCards.forEach((card, index) => {
//         card.addEventListener("click", function () {
//             timerCards.forEach(c => c.classList.remove("btn_active"));
//             contentAreas.forEach(content => content.classList.remove("active"));
//             this.classList.add("btn_active");
//             contentAreas[index].classList.add("active");
//         });
//     });
    
// }
// internetSpeed()
// function priceContent(){
//     const timerCards = document.querySelectorAll(".price_card");
//     const contentAreas = document.querySelectorAll(".price_content");

//     timerCards.forEach((card, index) => {
//         card.addEventListener("click", function () {
//             timerCards.forEach(c => c.classList.remove("btn_active"));
//             contentAreas.forEach(content => content.classList.remove("active"));
//             this.classList.add("btn_active");
//             contentAreas[index].classList.add("active");
//         });
//     });
    
// }
// priceContent()

// function internetService(){
//     const timerCards = document.querySelectorAll(".my_card");
//     const contentAreas = document.querySelectorAll(".package_pricign");

//     timerCards.forEach((card, index) => {
//         card.addEventListener("click", function () {
//             timerCards.forEach(c => c.classList.remove("btn_active"));
//             contentAreas.forEach(content => content.classList.remove("active"));
//             this.classList.add("btn_active");
//             contentAreas[index].classList.add("active");
//         });
//     });
    
// }
// internetService()


$(document).ready(function () {
    $('.clients_review_slider').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        // autoplay: true,
        autoplaySpeed: 4000,
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
        arrows: true,
        autoplay: true,
        autoplaySpeed: 4000,
        speed: 3000,
        dots: false,
        infinite: true,
        prevArrow: `<span class="left-arrow"><i class="fa-solid fa-arrow-left"></i></span>`,
        nextArrow: `<span class="right-arrow"><i class="fa-solid fa-arrow-right"></i></span>`,
    });
});