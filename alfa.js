basket = {};
favorite = {};
let slidePosition = 0;

$(document).ready(function(){
    out();
    checkLS();
    checkLSFav();
    outBasket();
    outFavorite();
    TapSwipe();
    activePagination();

    
});

$('body').on('click','.bouquet',bouquet);
function bouquet(){
    if($(this).css('position') == 'relative'){

    $('body').css({overflow:'hidden'});
    $('.bouquet').css({opacity:'0'});
    $(this).css({position:'fixed',zIndex:'10',height:'100%',width:'100%',top:'0'});
    $(this).animate({opacity:'1'});
    $('header, .left, .right').css({zIndex:'1'});
    $('.x, .addButton, select, .soloSelect').css('display','block');

    }


}


