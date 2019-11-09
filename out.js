function out() {
    $.getJSON("alfa.json", function(data){
    let out = '';
    let z = 'ВЫБРАТЬ ВЫСОТУ ЦВЕТКА';
    for(let i in data){
    out+='<div class="bouquet" id="bouquet' + i + '">';
    out+='<div class="x"></div>';
    out+='<div class="img" style="background-image:url('+ data[i]['img'] +')"></div>';
    out+='<p class="name">' + data[i]['name'] + '</p>';
    out+='<div class="like" like="' + i + '"></div>';
    out+='<select id="select'+i+'"><option selected disabled>' + z + '</option>';
    for (let j = 0; j < data[i]['size'].length; j++){
        if(data[i]['size'].length == 1){
        out+='<option class="optionSolo" art="'+ j +'">' + data[i]['size'][j]+ ' см. ' +  data[i]['price'][j] + ' руб.' + '</option>'
           
        }
        else
    out+='<option class="option" art="'+ j +'">' + data[i]['size'][j]+ ' см. ' +  data[i]['price'][j] + ' руб.' + '</option>'
    }
    out+='</select>';


    out+='<p class="bouquetPrice">' + data[i]['price'][0] + ' руб</p>';
    out+='<div class="addButton" art="' + i + '">Add</div>';
    out+='</div>';

    $('main').html(out);
    checkPos();
    ASD();
    checkFavIcon();
        }
    });
}

function ASD(){$('.optionSolo').closest('select').replaceWith('<p class="soloSelect">Добавить в заказ</p>');}

$(window).scroll( function(){
$('.bouquet').each( function(){
var bottom_of_object = $(this).position().top + $(this).outerHeight();
var bottom_of_window = $(window).scrollTop() + $(window).height();
var scrollCoef = 0.007;
if( bottom_of_window > bottom_of_object && $(this).css('position') != 'fixed' ){ 
$(this).css({'opacity': (bottom_of_window - bottom_of_object) * scrollCoef});     
} 
}); 
});


function checkPos(){  
$('.bouquet').each( function(){
var bottom_of_object = $(this).position().top + $(this).outerHeight();
var bottom_of_window = $(window).scrollTop() + $(window).height();
var scrollCoef = 0.005;
if( bottom_of_window >= bottom_of_object ){
$(this).css({'opacity': (bottom_of_window - bottom_of_object) * scrollCoef});
}
});   
}


