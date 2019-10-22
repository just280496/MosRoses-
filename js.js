let basket = {};
let sum = Number(0);
let itemsQuantity = 0;
$(document).ready(function(){
loadBouq();
checkBasket();
loadBasket();
getQuantity();
checkFreeQuantity();
$('body').on('click','.clearBasket',clearBasket);



});

function loadBouq(){
$.getJSON("bouq.json", function(data){
let out = '';
for(let key in data){
out+='<div class="bouqet"><p class="mosroses">MosRoses</p><div class="x"></div>';

out+='<div class="image" style="background-image:url('+data[key]['img']+');"></div>';
out+='<p class="name">'+data[key]['name']+'</p>';
out+='<select class="selectbouq"><option selected disabled>ВЫБЕРИТЕ РАЗМЕР ЦВЕТКА</option><option getPrice="'+ data[key]['price1'] +'" class="option2">'+data[key]['size1']+' см. '+ data[key]['price1'] +' руб.'+'</option><option getPrice="'+data[key]['price2']+'"class="option2">'+data[key]['size2']+' см. '+data[key]['price2']+' руб.'+'</option><option getPrice="'+data[key]['price3']+'" class="option2">'+data[key]['size3']+' см. '+data[key]['price3']+' руб.'+'</option></select>';
out+='<div class = "addbutton" getImage="'+data[key]['img']+'"addName="'+data[key]['name']+'"></div>';
out+='<p class="price">от '+data[key]['price1']+' руб.</p>';
out+='</div>';}
$('main').html(out);
$('body').on('click','.bouqet',openBouq);
$('body').on('click','.x',closeBouq);
$('body').on('click','.addbutton',addToBasket);

clearFreeSelect();
});}



function addToBasket(event){
event.stopPropagation();
let getSelect = $('select .option2:selected').text();
let getImage = $(this).attr('getImage');
let getPrice = Number($('select .option2:selected').attr('getPrice'));
let getName = $(this).attr('addName');
if(getSelect == 0) {
    alert('Выберите букет');
}
else if(basket['<div class="basketimg" style="background-image:url('+getImage+');"></div><p class="basketName">'+getName+' '+getSelect+'</p>']==undefined){
basket['<div class="basketimg" style="background-image:url('+getImage+');"></div><p class="basketName">'+getName+' '+getSelect+'</p>']=1;
sum+=getPrice;
plusQuantity();
localStorage.setItem('basket',JSON.stringify(basket));
localStorage.setItem('sum',JSON.stringify(sum));
alert('Букет добавлен в заказ');
}
else{
basket['<div class="basketimg" style="background-image:url('+getImage+');"></div><p class="basketName">'+getName+' '+getSelect+'</p>']++;
sum+=getPrice;
plusQuantity();
localStorage.setItem('basket',JSON.stringify(basket));
localStorage.setItem('sum',JSON.stringify(sum));
alert('Букет добавлен в заказ');
}
checkFreeQuantity();
loadBasket();}

function checkBasket(){
if (localStorage.getItem('basket')!=null && localStorage.getItem('sum')!=null ){
basket = JSON.parse(localStorage.getItem('basket'));
sum = JSON.parse(localStorage.getItem('sum'));
}}

function loadBasket(){
let out = '';
for(let i in basket){out += '<p class="countBasket">'+basket[i] + ' x </p>' + i;}
$('.menu2').html('<p class="pFreeBasket">Заказ пуст</p><p class="pBasket">Ваш заказ:</p>' + out + '<p class="pSumBasket">Итого: '+sum+' руб.</p><div class="clearBasket">Очистить</div>');

}

function plusQuantity(){
    itemsQuantity++;
    $('.quantity').html(itemsQuantity);
    localStorage.setItem('quantity',JSON.stringify(itemsQuantity));
}
function getQuantity(){
    if(localStorage.getItem('quantity')!=null){
    itemsQuantity = JSON.parse(localStorage.getItem('quantity'));
    $('.quantity').html(itemsQuantity);}
}

function showBasketSum(){
let a = localStorage.getItem('quantity');
    if(a >= 1){
        $('.pBasket, .pSumBasket, .clearBasket').css('display','block');
        $('.pFreeBasket').css('display','none');
    }
    else{
        $('.pBasket, .pSumBasket, .clearBasket, .basketName, .basketimg, .countBasket').css('display','none');
        $('.pFreeBasket').css('display','block');
    }
}

function clearBasket(){
    localStorage.clear();
    showBasketSum();
    location.reload();
}

