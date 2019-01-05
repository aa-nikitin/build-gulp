$('nav#mmenu').mmenu({
    extensions: ['effect-slide-menu', 'pageshadow'],
    counters: true,
    navbar: {
        title: 'Меню'
    },
    navbars: [
        {
            position: 'top',
            content: ['prev', 'title', 'close']
        }
    ]
});

$('.top-menu>.top-menu__item').hover(function() {
    $(this)
        .find('.top-menu__sub')
        .stop()
        .slideToggle(300);
});
