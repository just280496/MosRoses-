$('body').on('click', '.addButton', toLS);
$('body').on('click', '.plus', plus);
$('body').on('click', '.minus', minus);
$('body').on('click', '.clearBasket', clearBasket);
$('body').on('click', '.deleteFromBasket', deleteFromBasket);

function toLS(){
let selArt = $('select .option:selected').attr('art');
let art = $(this).attr('art');
if(basket[art + selArt] == undefined && selArt != undefined) basket[art + selArt] = 1;
else if (selArt != undefined)basket[art + selArt]++;
else if ($('.soloSelect').css('display') == 'block' && basket[art + 0] == undefined) basket[art + 0] = 1;
else if ($('.soloSelect').css('display') == 'block' && basket[art + 0] != undefined) basket[art + 0]++;
else alert('Выберите букет');
localStorage.setItem('basket', JSON.stringify(basket));
outBasket();
}

function checkLS(){
if(localStorage.getItem('basket') != null)
    basket = JSON.parse(localStorage.getItem('basket'));
}

function outBasket(){
    $.getJSON("alfa.json", function(data){
        let out = '<p class="order">Заказ:</p>';
        let count = 0;
        let sum = 0;
        for (let i in basket){
            out += '<div class="basketBox">';
            out += '<div class="basketImg" style="background-image:url('+ data[i[0]]['img'] +')"></div>';
            out += '<p class="basketName">' + data[i[0]]['name'] + '</p>';
            out += '<div class="deleteFromBasket" id="' + i + '"></div>';
            out += '<p class="basketPrice">' + data[i[0]]['price'][i[1]] + ' руб</p>';
            out += '<div class="minus" id="' + i + '" ><p> - </p></div>';
            out += '<div class="basketCount"><p>' + basket[i] + '</p></div>';
            out += '<div class="plus" id="' + i + '" ><p> + </p></div>'
            out += '</div>';
            count += basket[i];
            sum += data[i[0]]['price'][i[1]] * basket[i];
        }
        
        out += '<div class="sum">Итого: ' + sum + '</div>';
        out += '<div class="countBasket">' + count + '</div>';
        out += '<p class="clearBasket">Удалить все</p>';
        
        out += '<p class="freeBasket">Заказ пуст</p>';

    out += '<form action="send.php" method="post">'
    out += '<input type="hidden" name="order" value="'
    for (let i in basket){
    out += basket[i] + ' x ' + data[i[0]]['name'] + ' Цена: ' + data[i[0]]['price'][i[1]] + ' руб "\r\n"';
    }
    out += 'Итого: '+sum+'">';
    out += 'Ваше имя <input type="text" name="first_name" required><br>'
    out += 'Email: <input type="text" name="email" required><br>' 
    out += 'Номер телефона: <input type="text" name="phone" required><br>'
    out += 'Сообщение:<br><textarea rows="5" name="message" cols="30"></textarea><br>'
    out += '<input type="submit" name="submit" value="Отправить">'
    out += '</form>'

        $('.basket').html(out);
        
        if(count == 0){
            $('.countBasket, .clearBasket, .sum, .order').css('display', 'none');
            $('.freeBasket').css('display', 'block');
        }
        else{
            $('.countBasket, .clearBasket, .sum, .order').css('display', 'block');
            $('.freeBasket').css('display', 'none');
        }
    });
}

function plus(){
var art = $(this).attr('id');
basket[art]++;
outBasket();
localStorage.setItem('basket', JSON.stringify(basket));
}
function minus(){
    var art = $(this).attr('id');
    if (basket[art] == 1) delete basket[art];
    else basket[art]--;
    outBasket();
    localStorage.setItem('basket', JSON.stringify(basket));
}
function deleteFromBasket(){
    var art = $(this).attr('id');
    delete basket[art];
    outBasket();
    localStorage.setItem('basket', JSON.stringify(basket));
}


function clearBasket(){
    localStorage.removeItem('basket');
    basket = {};
    outBasket();
}