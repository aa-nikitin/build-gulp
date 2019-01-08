const order = function(params) {
    $('#' + params.nameWindow + '-button').click(function() {
        $.ajaxSetup({ async: true });
        var is_error = 0;
        var orderList = { url: location.href };
        orderList['type_order'] = params.nameWindow;

        for (let field of params.arr) {
            var elem = `#${params.nameWindow}-${field.name}`;
            var typeField = field.type;
            var checkField = field.always;
            if (
                $(elem).val() === '' &&
                typeField === 'field' &&
                checkField === true
            ) {
                is_error = 1;
                $(elem).addClass('error');
                //$(elem).attr('placeholder','заполните поле');
            } else if (
                !$(elem).prop('checked') &&
                typeField === 'checked' &&
                checkField === true
            ) {
                is_error = 1;
                $(elem)
                    .parent()
                    .addClass('error-checked');
            } else {
                $(elem).removeClass('error');
                $(elem)
                    .parent()
                    .removeClass('error-checked');
                /* if (typeField === 'field')
                    $(elem).attr('placeholder','');*/
            }
            if (typeField === 'field') {
                orderList[field.name] = $(
                    `#${params.nameWindow}-${field.name}`
                ).val();
            } else if (typeField === 'checked') {
                orderList[field.name] = $(
                    `#${params.nameWindow}-${field.name}`
                ).attr('data-value');
            }
        }

        if (!is_error) {
            $.ajax({
                type: 'GET',
                async: true,
                url: params.phpFile,
                data: orderList,
                beforeSend: function() {
                    $.magnificPopup.close();
                    $(`.${params.preload}`).fadeIn(200);
                },
                success: function() {
                    $(`.${params.preload}`).fadeOut(200);
                    setTimeout(function() {
                        $(`.${params.successForm}-btn`).click();
                    }, 200);
                }
            });

            for (let field of params.arr) {
                var typeField = field.type;
                if (typeField === 'field') {
                    $(`#${params.nameWindow}-${field.name}`).val('');
                } else if (typeField === 'checked') {
                    $(`#${params.nameWindow}-${field.name}:checkbox`).prop(
                        'checked',
                        false
                    );
                }
            }
        }
    });
};

export default order;
