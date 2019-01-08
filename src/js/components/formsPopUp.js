$('.popup-with-form').magnificPopup({
    // type: 'inline',
    // preloader: false
    removalDelay: 200,
    callbacks: {
        beforeOpen: function() {
            this.st.mainClass = this.st.el.attr('data-effect');
        }
    },
    midClick: true
});

$(document).on('click', '.popup-modal-dismiss', function(e) {
    e.preventDefault();
    $.magnificPopup.close();
});
