$(document).ready(function () {
    /*--------------------------------------------------------
        NAV SCROLL
    --------------------------------------------------------*/
    $(function () {
        $('a[href*="#"]:not([href="#"])').click(function () {
            if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname) {
                var target = $(this.hash);
                target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
                if (target.length) {
                    $('html, body').animate({
                        scrollTop: target.offset().top + -50
                    }, 1000);
                    return false;
                }
            }
        });
    });
    /*--------------------------------------------------------
        MOBILE NAV
    --------------------------------------------------------*/
    $(".js--nav-icon").click(function () {
        var nav = $(".js--main-nav");
        var icon = $(".js--nav-icon i");
        nav.slideToggle(200);
        if (icon.hasClass("fa-bars")) {
            icon.addClass("fa-times");
            icon.removeClass("fa-bars");
        }
        else {
            icon.addClass("fa-bars");
            icon.removeClass("fa-times");
        }
    });
    /*--------------------------------------------------------
        STICKY NAV
    --------------------------------------------------------*/
    $(".js--section-projects").waypoint(function (direction) {
        if (direction == "down") {
            $("nav").addClass("sticky");
        }
        else {
            $("nav").removeClass("sticky");
        }
    }, {
        offset: "60px;"
    });
    /*--------------------------------------------------------
        TYPE ANIMATION
    --------------------------------------------------------*/
    $(function () {
        $(".write").typed({
            strings: ["I'M CARL KELLY", "NICE TO MEET YOU!"]
            , typeSpeed: 120
            , backSpeed: 120
            , startDelay: 2000
            , loop: false
        , });
    });
    /*--------------------------------------------------------
        CAROUSEL
    --------------------------------------------------------*/
    $("#owl-slideshow").owlCarousel({
        slideSpeed: 4000
        , paginationSpeed: 2000
        , singleItem: true
        , loop: true
        , items: 1
        , autoPlay: true
        , autoPlaySpeed: 5000
        , autoPlayTimeout: 5000
        , autoPlayHoverPause: true
        , transitionStyle: "backSlide"
    });
    /*--------------------------------------------------------
        ANIMATIONS ON SCROLL
    --------------------------------------------------------*/
    $(" .js--wp-1").waypoint(function (direction) {
        $(" .js--wp-1").addClass("animated fadeIn");
    }, {
        offset: "50%"
    });
    $(" .js--wp-2").waypoint(function (direction) {
        $(" .js--wp-2").addClass("animated fadeInUp");
    }, {
        offset: "90%"
    });
    $(" .js--wp-3").waypoint(function (direction) {
        $(" .js--wp-3").addClass("animated fadeIn");
    }, {
        offset: "50%"
    });
    $(" .js--wp-4").waypoint(function (direction) {
        $(" .js--wp-4").addClass("animated pulse");
    }, {
        offset: "50%"
    });
    $(" .js--wp-5").waypoint(function (direction) {
        $(" .js--wp-5").addClass("animated fadeInUp");
    }, {
        offset: "50%"
    });
});