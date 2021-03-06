$(document).ready(function () {
    var height = $('.banner').height();

    $(document).scroll(function () {
        if ($(document).scrollTop() >= height) {
            $('.js-header').addClass("scroll");
        } else {
            $('.js-header').removeClass("scroll");
        }
    });

    var $examples = $('.js-examples__list').isotope({
        itemSelector: '.js-examples__item',
        layoutMode: 'masonry'
    })

    $('.js-tab__menu__link').click(function() {
        $('.js-tab__menu__link').removeClass('active');
        $(this).addClass('active');

        var filterValue = $(this).attr('data-filter');
        console.log(filterValue);
        $examples.isotope({ filter: filterValue });
    })


    $('.js-header__hamburger-menu__container').click(function () { // hamburger 메뉴의 아이콘을 클릭했을 때
        $(this).toggleClass('change');

        if ($('.js-nav--mobile').is(':hidden')) {
            $('.js-nav--mobile').slideDown();
        } else {
            $('.js-nav--mobile').slideUp();
        }

        $('body').toggleClass('gnb-open');
    });

    $('.js-header__hamburger-menu__container ul li a').click(function () { // hamburger 메뉴의 항목을 클릭했을 때
        $('.js-header__hamburger-menu__container ul li').removeClass('current');
        $(this).addClass('current');
        window.scrollTo(0, 0);
    });

    var slider_array = new Array();
    
    $('.carousel-inner').each(function(i) {
        // console.log(i);
        slider_array[i] = $(this).bxSlider();
    });
});