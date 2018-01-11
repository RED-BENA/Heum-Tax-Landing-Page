$(document).ready(function () {
    var height = $('.banner').height();

    $(document).scroll(function () {
        if ($(document).scrollTop() >= height) {
            $('.js-header').addClass("scroll");
        } else {
            $('.js-header').removeClass("scroll");
        }
    });

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
    })

    // $('html').click(function() {
    //     $('.js-nav--mobile').hide();
    // })
});