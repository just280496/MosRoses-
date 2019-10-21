let basket = {};
let sum = Number(0);
var itemsQuantity = 0;
$(document).ready(function(){
loadBouq();
checkBasket();
loadBasket();
getQuantity();
clearFreeQuantity();
});

function loadBouq(){
$.getJSON("bouq.json", function(data){
let out = '';
for(var key in data){
out+='<div class="bouqet">';
out+='<p class="mosroses" onclick="event.stopPropagation()">MosRoses</p>';
out+='<div class="x"></div>';
out+='<div class="image" style="background-image:url('+data[key]['img']+');"></div>';
out+='<p class="name">'+data[key]['name']+'</p>';
out+='<select onclick="event.stopPropagation()" class="selectbouq"><option selected disabled>ВЫБЕРИТЕ РАЗМЕР ЦВЕТКА</option><option getPrice="'+ data[key]['price1'] +'" class="option2">'+data[key]['size1']+' см. '+ data[key]['price1'] +' руб.'+'</option><option getPrice="'+data[key]['price2']+'"class="option2">'+data[key]['size2']+' см. '+data[key]['price2']+' руб.'+'</option><option getPrice="'+data[key]['price3']+'" class="option2">'+data[key]['size3']+' см. '+data[key]['price3']+' руб.'+'</option></select>';
out+='<div class = "addbutton" onclick="event.stopPropagation()" getImage="'+data[key]['img']+'"addName="'+data[key]['name']+'"></div>';
out+='<p class="price">от '+data[key]['price1']+' руб.</p>';
out+='</div>';}
$('.block').html(out);
$('.bouqet').on('click',openBouq);
$('.x').click(closeBouq);
$('.addbutton').click(addToBasket);
clearFreeSelect();
});}



function addToBasket(){
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
clearFreeQuantity();
loadBasket();}

function checkBasket(){
if (localStorage.getItem('basket')!=null && localStorage.getItem('sum')!=null ){
basket = JSON.parse(localStorage.getItem('basket'));
sum = JSON.parse(localStorage.getItem('sum'));
}}

function loadBasket(){
var out = '';
for(var i in basket){
    out += '<p class="countBasket">'+basket[i] + ' x </p>' + i;

}
$('.menu2').html('<p style="width:100%;font-size:3vh;text-align:center;">Ваш заказ:</p>' + out + '<p>Итого: '+sum+' руб.</p>');
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




