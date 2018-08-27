import popup from './modules/popup.js';
import order from './modules/order.js';

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

var arrPopup = [
    ['name','popup-order-name','field',true],
    ['phone','popup-order-phone','field',true],
    ['message','popup-order-massage','field',false],
    ['page','popup-order-page','field',false],
    ['police','popup-order-checkbox','checked',true]
]

order(
    'popup-order', arrPopup, 
    'preloader', 'success-message', 'send-order-page'
);

var arrPageOrder = [
    ['name','page-order-name','field',true],
    ['phone','page-order-phone','field',true],
    ['message','page-order-massage','field',false],
    ['page','page-order-page','field',false],
    ['police','page-order-checkbox','checked',true]
]

order(
    'page-order', arrPageOrder, 
    'preloader', 'success-message', 'send-order-page'
);

$(".mask-phone").mask("+7 (999) 999-9999");