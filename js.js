basket = {};
favorite = {};
checkLSFav();
checkFavIcon();
outFavorite();
outBasket();
checkLS();
$('body').on('click', '.clearFavorite', clearFavorite);
$('body').on('click', '.deleteFromFavorite, .deleteFromFavorite2', deleteFromFavorite);
$('body').on('click','#favoriteButton, #p1', toggleFavorite);
$('body').on('click','#cartButton, #p2', toggleCart);

$('body').on('click','#menuButton', toggleMenu);
favoriteSwipe();
navSwipe();

$(document).ready(function(){
    
$('.owl-carousel').owlCarousel();
$('body').on('touchstart','.bouquets', () =>{$(this, '.like').css('display','flex');});
$('body').on('mousedown','.bouquets', () =>{$(this, '.like').css('display','flex');});
window.addEventListener("orientationchange", function() {location.reload();}, false);

});



function toggleMenu(){
$("#lineTop").toggleClass("lineTopRotate");
$("#lineBottom").toggleClass("lineBottomRotate");

if($('nav').css('display') == 'none'){
$('#mosroses').animate({letterSpacing:'2vw',marginLeft:'10%'},300);
$('nav').animate({height:'toggle', opacity:'toggle'},300);
$('nav p').animate({opacity:'toggle'},300);
$('#headerBlock3').animate({width:'0'},300);
}
else{
$('#mosroses').animate({letterSpacing:'',marginLeft:''},300);
$('nav').animate({height:'toggle', opacity:'toggle'},300);
$('nav p').animate({opacity:'toggle'},300);
$('#headerBlock3').animate({width:'30%'},300);
}
if($('.favCount').text() == '0') $('.favCount').css('display','none');
}

function toggleCart(){
if(innerWidth > innerHeight){
if($('.favorite').css('display') == 'block'){
$('.favorite, .cart').animate({width:'toggle'});
}
else{$('.cart').animate({width:'toggle'});}
}  
else{
if($('.cart').css('display') == 'none'){
$('#cartButton').css({marginLeft:'50%'});
$('.favCount').css({display:'none'});
$('.cart').animate({height:'toggle'},300);
$('#favoriteButton, #menuButton').animate({width:'0',margin:'0'},300);
}
else{
$('.cart').animate({height:'toggle'},300);
$('#menuButton').animate({width:'15%'},300);
$('.favCount').css({display:'block'});
$('#favoriteButton').animate({width:'50%'},300);
$('#cartButton').css({marginLeft:''});
}
}
if($('.favCount').text() == '0') $('.favCount').css('display','none');
}


function toggleFavorite(){

if(innerWidth > innerHeight){    
if($('.cart').css('display') == 'block'){

$('.favorite, .cart').animate({width:'toggle'});
}
else{$('.favorite').animate({width:'toggle'});}
}
else{
if($('.favorite').css('display') == 'none'){
$('#favoriteButton').css({marginLeft:'50%'});
$('.favorite').animate({height:'toggle'},300);
$('#cartButton, #menuButton').animate({width:'0',margin:'0'},300);
}
else{
$('#favoriteButton').css({marginLeft:''});
$('.favorite').animate({height:'toggle'},300);
$('#cartButton').animate({width:'50%'},300);
$('#menuButton').animate({width:'15%'},300);
}}
if($('.favCount').text() == '0') $('.favCount').css('display','none');
}

function favoriteSwipe(){
if(innerWidth < innerHeight){
$(function(){
$('.favorite').swipe({
swipe:function(event, direction){
if (direction == 'up'){
toggleFavorite();}}, 
excludedElements:".favBox, .fav, .clearFavorite, .noSwipe",});});
}}
function navSwipe(){
if(innerWidth < innerHeight){
$(function(){
$('nav').swipe({
swipe:function(event, direction){
if (direction == 'up'){
toggleMenu();}}, 
excludedElements:"nav p, .noSwipe",});});
}}


function checkLSFav(){
if(localStorage.getItem('favorite') != null)
favorite = JSON.parse(localStorage.getItem('favorite'));
}
function checkFavIcon(){
$('.like').css({backgroundImage:'url("icon/like.svg")'});
for( let i in favorite){
$('.like[likeid="'+ i +'"]').css({backgroundImage:'url("icon/liked.svg")'});}
}



    
$('.like').on('click', function(event){
event.preventDefault();
var id = $(this).attr('likeid');
if(favorite[id] == undefined) favorite[id] = 1;
else if(favorite[id] == 1) delete favorite[id];
localStorage.setItem('favorite', JSON.stringify(favorite));

outFavorite();
checkFavIcon();
});


function outFavorite(){
$.getJSON("2804.json", function(data){
let out = '<p class="fav">Избранное</p><hr class="hrFav">';
let countFav = 0;
for (let i in favorite){
out += '<a href="bouquet.php?id='+ i +'"><div class="favBox">';
out += '<div class="favImg" style="background-image:url('+ data[i]['img'] +')"></div>';
out += '<div class="favName"><p>' + data[i]['name'] + '</p></div>';
out += '<div class="deleteFromFavorite" id="' + i + '"></div>';
out += '<div class="favPrice"><p>' + data[i]['price'] + ' руб</p></div>';
out += '<div class="deleteFromFavorite2" id="' + i + '"><p>Удалить</p></div>';
out += '</div></a>';
out += '<hr class="hrFav">';
countFav += favorite[i]; 
}
out += '<p class="clearFavorite">Очистить</p>';
out += '<p class="freeFavorite">Пусто</p>';
$('.favorite').html(out);
if(countFav == 0){
$('.clearFavorite, .fav, .favCount, .hrFav').css('display', 'none');
$('.freeFavorite').css('display', 'block');
}
else{
$('.clearFavorite, .fav, .favCount, .hrFav').css('display', 'block');
$('.freeFavorite').css('display', 'none');
}
$('.favCount').text(countFav);
}); }
function deleteFromFavorite(e){
    e.preventDefault();
var art = $(this).attr('id');
delete favorite[art];
outFavorite();
localStorage.setItem('favorite', JSON.stringify(favorite));
checkFavIcon();
}

  
function clearFavorite(){
localStorage.removeItem('favorite');
favorite = {};
outFavorite();
checkFavIcon();
toggleFavorite();
}





$(function() {
if(innerWidth < innerHeight){
window.addEventListener("scroll", function(event){
  
var top = this.pageYOffset;
var speed, yPos;
var layers2 = $(".mainBlock");
layers2.each(function() {
speed = $(this).attr('data-speed');
var yPos = -(top * speed / 100);
$(this).attr('style','transform: translate3d(0px, ' + yPos + 'px, 0px)');
});

var layers3 = $(".owl-carousel");
layers3.each(function() {
speed = $(this).attr('data-speed');
var yPos = -(top * speed / 100);
$(this).attr('style','transform: translate3d(0px, ' + yPos + 'px, 0px)');
}); }); } });



$('body').on('click', '.smallImg', changePhoto);
function changePhoto(){
var a = $(this).css('background-image');
$('.bigImg').css('background-image', a);
$('.smallImg').removeClass('smallImgActive');
$(this).toggleClass('smallImgActive');

}


































$('body').on('click', '.addButton', toLS);
$('body').on('click', '.plus', plus);
$('body').on('click', '.minus', minus);
$('body').on('click', '.clearBasket', clearBasket);
$('body').on('click', '.deleteFromBasket', deleteFromBasket);

function toLS(){
let art = $(this).attr('art');
if(basket[art] == undefined) {basket[art] = 1;bouqAdded();}
else {basket[art]++;bouqAdded();}
localStorage.setItem('basket', JSON.stringify(basket));
outBasket();}

function outBasket(){
$.getJSON("2804.json", function(data){
let out = '<p class="order">Заказ:</p><hr class="hrBas">';
let countBas = 0;
let sum = 0;

for (let i in basket){
 
out += '<div class="basketBox">';
out += '<div class="basketImg" style="background-image:url('+ data[i]['img'] +')"></div>';
out += '<div class="basketName"><p>' + data[i]['name'] + '</p></div>';
out += '<div class="deleteFromBasket" id="' + i + '"></div>';
out += '<div class="countContainer">';
out += '<div class="minus" id="' + i + '" ><p> - </p></div>';
out += '<div class="basketCount"><p>' + basket[i] + '</p></div>';
out += '<div class="plus" id="' + i + '" ><p> + </p></div>'
out += '</div>';
out += '<div class="basketPrice"><p>' + data[i]['price']*basket[i] + ' руб</p></div>';
out += '</div>';
out += '<hr class="hrBas">';
countBas += basket[i];
sum += data[i]['price'] * basket[i];
}

out += '<div class="sum">Итого: ' + sum + '</div>';
out += '<div class="clearBasket">Удалить все</div>';
out += '<br><hr class="hrBas">';
out += '<p class="freeBasket">Заказ пуст</p>';
out += '<form class="form" action="send.php" method="post">'
out += '<input type="hidden" name="order" value="'
for (let i in basket){
out += basket[i] + ' x ' + data[i]['name'] + ' Цена: ' + data[i]['price'] + ' руб || ';
}
out += 'Итого: '+sum+'">';
out += '<p class="textInp firstInp">Ваше имя:</p> <input type="name" name="first_name" required class="inputName">'
out += '<p class="textInp">Email:</p> <input type="email" name="email" required class="inputEmail">' 
out += '<p class="textInp">Номер телефона:</p> <input type="tel" name="phone" required class="inputPhone mask-phone">'
out += '<p class="textInp">Сообщение:</p><br><textarea rows="5" name="message" class="inputMessage"></textarea>'
out += '<input type="submit" name="submit" value="Отправить" class="inputButton">'
out += '</form>'
$('.cart').html(out);

if(countBas == 0){
$('.countBasket, .clearBasket, .sum, .order, form, .basCount, .hrBas').css('display', 'none');
$('.freeBasket').css('display', 'block');
}
else{
$('.countBasket, .clearBasket, .sum, .order, form, .basCount, .hrBas').css('display', 'block');
$('.freeBasket').css('display', 'none');
}
$('.basCount').text(countBas);
});


$("input[name^=phone],input[name$=phone]").mask('9 (999) 999-99-99');
}

$('body').on('click', '.shadowModal', removeModal);
function removeModal(){
$(this).remove();
$('body').css({overflow:'auto'});}

function bouqAdded(){
$("body").append('<div class="shadowModal"><div class="messageModal"><p>Букет добавлен в заказ</p></div></div>');
$('body').css({overflow:'hidden'});
setTimeout(() => {
$('.shadowModal').animate({opacity:'0'},1000)
}, 1000);
setTimeout(() => {
$('.shadowModal').remove();
$('body').css({overflow:'auto'});
}, 2000);}

function bouqNotAdded(){
$("body").append('<div class="shadowModal"><div class="messageModal"><p>Выберите букет</p></div></div>');
$('body').css({overflow:'hidden'});
setTimeout(() => {
$('.shadowModal').animate({opacity:'0'},1000)
}, 1000);
setTimeout(() => {
$('.shadowModal').remove();
$('body').css({overflow:'auto'});
}, 2000);
}


function plus(){
var art = $(this).attr('id');
basket[art]++;
outBasket();
localStorage.setItem('basket', JSON.stringify(basket));}
function minus(){
var art = $(this).attr('id');
if (basket[art] == 1) delete basket[art];
else basket[art]--;
outBasket();
localStorage.setItem('basket', JSON.stringify(basket));}
function deleteFromBasket(){
var art = $(this).attr('id');
delete basket[art];
localStorage.setItem('basket', JSON.stringify(basket));
outBasket();}
function clearBasket(){
localStorage.removeItem('basket');
basket = {};
outBasket();
toggleCart();}
function checkLS(){
if(localStorage.getItem('basket') != null)
basket = JSON.parse(localStorage.getItem('basket'));}