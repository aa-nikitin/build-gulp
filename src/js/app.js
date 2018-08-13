import popup from './modules/popup.js';

$('.main-slider').flexslider({
    animation: "slide"
});

$('.main-products').flexslider({
    animation: "slide",
    animationLoop: false,
    itemWidth: 370,
    itemMargin: 30,
    minItems: 1,
    maxItems: 4,
    slideshow: false,
});

$('nav#mmenu').mmenu({
    extensions	: [ 'effect-slide-menu', 'pageshadow' ],
    counters	: true,
    navbar 		: {
    title		: 'Меню'
    },
    navbars		: [
        {
            position	: 'top',
            content		: [
            'prev',
            'title',
            'close'
            ]
        }
    ]
});

popup('popup-order', 'overflow_hidden');

