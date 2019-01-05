let toggle = function(className) {
    $(`.${className}`).on('click', function(e) {
        $(e.target)
            .parent()
            .children(`.${className}__body`)
            .slideToggle(400);
        $(e.target).toggleClass('active');
    });
};

export default toggle;
