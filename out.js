function out() {
    $.getJSON("alfa.json", function(data){
    let out = '';
    let z = 'ВЫБЕРИТЕ РАЗМЕР ЦВЕТКА';
    for(let i in data){
    out+='<div class="bouquet" id="bouquet' + i + '">';
    out+='<div class="x"></div>';
    out+='<div class="img" style="background-image:url('+ data[i]['img'] +')"></div>';
    out+='<p class="name">' + data[i]['name'] + '</p>';
    out+='<div class="like" like="' + i + '">Like</div>';
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
    out += '<hr>';
    $('main').html(out);
    ASD();
        }
    });
}

function ASD(){
            $('.optionSolo').closest('select').replaceWith('<p class="soloSelect" art="">Добавить в заказ</p>');
}