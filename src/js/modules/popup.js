/*- формирование всплывающего окна
nameWindow - наименование всплывающего окна (класс)
classOverflow - класс который добавляется к body(для overdlow:hidden)
-*/
let popup = function(nameWindow, classOverflow) {
    let classWindow = '.'+nameWindow;
    $(classWindow+'-open').on('click', function () {
        $(classWindow).fadeIn(300);
        if (classOverflow)
            $('body').addClass(classOverflow);  
    });

    $(classWindow+'__close').on('click', function () {
        $(classWindow).fadeOut(300);
        if (classOverflow)
            $('body').removeClass(classOverflow); 
    });

    $(document).mouseup(function (e){ 
        var popupOrder = $(classWindow+'__box'); 
        if (!popupOrder.is(e.target) && popupOrder.has(e.target).length === 0 && e.which === 1) { 
            $(classWindow).fadeOut(300); 
            if (classOverflow)
                $('body').removeClass(classOverflow); 
        }
        
    });
    
}
  
export default popup;