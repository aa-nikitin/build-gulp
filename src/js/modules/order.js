/*- привязываем мобильное меню
    nameWindow - класс формы заявки
    arr - массив полей
        [
            'наименование поля (для ajax)',
            'id поля',
            'тип поля(field, checked)', 
            проверка на заполненность(true, false)
        ]
    preload - наименование класса прелоадера
    successForm - наименование класса сообщения об успешной отправки
    phpFile - имя php файла для дальнейшей обработки
-*/
let order = function(nameWindow,arr,preload,successForm,phpFile) {
    $('#'+nameWindow + '-button').click(function(){
        $.ajaxSetup({async:true});
        var is_error=0; 
        var orderList = {};
        orderList['type_order'] = nameWindow;
        for (let i = 0; i < arr.length; i++) {
            var elem='#'+arr[i][1];
            var typeField=arr[i][2];
            var checkField=arr[i][3];
            if ($(elem).val() == '' && typeField === 'field' && checkField === true) {
                is_error=1;     
                $(elem).addClass('error');
                //$(elem).attr('placeholder','заполните поле');    
            } else if (!$(elem).prop('checked') && typeField === 'checked' && checkField === true) {
                is_error=1;     
                $(elem).parent().addClass('error-checked');
            }
            else {
                $(elem).removeClass('error');
                $(elem).parent().removeClass('error-checked');
               /* if (typeField === 'field')
                    $(elem).attr('placeholder','');*/
            }
            if (typeField === 'field') {
                orderList[arr[i][0]] = $('#'+arr[i][1]).val();
            } else if (typeField === 'checked') {
                orderList[arr[i][0]] = $('#'+arr[i][1]).attr('data-value');
            }
        }
        
        if (!is_error){
            

            $.ajax({
                type: "POST",
                async:true,
                url: phpFile,                 
                data: orderList,
                beforeSend: function(orderparams){
                    $('.' + preload).fadeIn(200); 
                },
                success: function(orderparams){
                    $('.' + preload).fadeOut(200);
                    $('#' + successForm).fadeIn(200);
                }
            }); 

            /*$.post(phpFile, orderList,
            function(data){
                $('.' + preload).fadeOut(200);
                $('#' + successForm).fadeIn(200);
            });*/

            for (let i = 0; i < arr.length; i++) {  
                var typeField=arr[i][2];
                if (typeField === 'field') {
                    $('#'+arr[i][1]).val('');
                } else if (typeField === 'checked') { 
                    $('#'+arr[i][1]+':checkbox').prop('checked', false)
                }
            }

            $('.' + nameWindow + '__close').click(); 
     
        }

    });

    $('.'+successForm + '__button').click(function(){
        $('#' + successForm).fadeOut(200);   
    });
}

export default order;