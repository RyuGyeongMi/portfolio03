$(function () {

    const MAINVISUALSLIDE = new Swiper('.main_visual_slide', {
        loop: true,
        speed: 2000,
        autoplay: {
            delay: 2500,
            disableOnInteraction: false,
        },
        effect: "creative",
        creativeEffect: {
            prev: {
                shadow: true,
                translate: ["-20%", 0, -1],
            },
            next: {
                translate: ["100%", 0, 0],
            },
        },

    })

    const MNS = new Swiper('.main_news_slide', {
        loop: true,

        // 모바일에서 보이는 갯수
        slidesPerView: 1,
        spaceBetween: 30,
        breakpoints: {
            541: {
                // 피씨에서 보이는 갯수
                slidesPerView: 4,
            }
        },

        navigation: {
            prevEl: '.main_news .arrows .prev',
            nextEl: '.main_news .arrows .next',
        },
    });

    const MNS2 = new Swiper('.main_news_slide2');

});

//모바일 반응형- 메뉴나 아이콘 클릭하면 메뉴펼쳐지고 닫힘
$(function () {
    $('.header .mbtn').on('click', function () {
        $('.header .gnb').toggleClass('on');
        $(this).toggleClass('on');
    });

    $('.header .gnb>ul>li>a').on('click', function (e) {
        if ($(this).next().is('ul') && $('.header .gnb').hasClass('on')) {
            e.preventDefault();
            $('.header .gnb>ul>li ul').slideUp();
            $(this).next().stop().slideDown();
        }

    });



    $(window).on('resize', function () {
        let w = $(window).width();

        if (w > 768) {
            $('.header .gnb').removeClass('on');
            $('.header .gnb>ul>li ul').removeAttr('style');
        }
    })
});
// $(function () {
//     const MSS = new Swiper('.main_sns_slide', {
//         loop: true,
//         slidesPerView: 4,
//         spaceBetween: 8,
//         centeredSlides: true,
//     })
// });

$(function () {
    AOS.init();
})

