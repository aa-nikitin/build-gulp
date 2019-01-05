$('.main-slider').slick({
    dots: true,
    infinite: true,
    arrows: false,
    speed: 500,
    // fade: true,
    cssEase: 'linear',
    autoplay: true,
    autoplaySpeed: 5000
});

$('.main-category').slick({
    infinite: true,
    slidesToShow: 4,
    slidesToScroll: 1,
    responsive: [
        {
            breakpoint: 992,
            settings: {
                slidesToShow: 3
            }
        },
        {
            breakpoint: 768,
            settings: {
                slidesToShow: 2
            }
        }
    ]
});

$('.card-big-photos').slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    infinite: false,
    asNavFor: '.card-small-photos'
});
$('.card-small-photos').slick({
    slidesToShow: 5,
    slidesToScroll: 1,
    asNavFor: '.card-big-photos',
    infinite: false,
    focusOnSelect: true
});
