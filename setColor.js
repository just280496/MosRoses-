$('body').on('click','#slide1',openSliderForColor);
$('body').on('click','.boxSlider',removeSliderForColor);

$('body').on('click','.colorRed',getRed);
$('body').on('click','.colorWhite',getWhite);
$('body').on('click','.colorRose',getRose);
$('body').on('click','.colorBlack',getBlack);
$('body').on('click','.colorBlue',getBlue);
$('body').on('click','.colorRadu',getRadu);

$('body').on('click','.colorSlider',function(event){
    event.stopPropagation();
});


function removeSliderForColor(){
    $('.boxSlider').remove();
    slidePositionColor = 0;
}

function openSliderForColor(){
    $('body').append('<div class="boxSlider"><div class="colorSlider"><div class="lineColorSlider"><div id="slideColor" class="colorRed"/>'+
    '<div id="slideColor" class="colorWhite"/><div id="slideColor" class="colorRose"/><div id="slideColor" class="colorBlack"/><div id="slideColor" class="colorBlue"/><div id="slideColor" class="colorRadu"/>');
    slideColor();
}


let slidePositionColor = 0;
function slideColor(){
$('.lineColorSlider').swipe({
swipe:function(event, direction) {
if(direction =='left'){
    if(slidePositionColor == -500)
    return false;
else{slidePositionColor-=100;
    $('.lineColorSlider').animate({left:slidePositionColor+'%'},300,'swing');}}
if(direction =='right' ){
    if(slidePositionColor == 0)
    return false; 
slidePositionColor+=100;
$('.lineColorSlider').animate({left:slidePositionColor+'%'},300,'swing');}
}});}





















function getRed(){
$.getJSON("bouq.json", function(data){
let out = '';
for(let i in data){
let color = data[i]['color'];
if (color == 'red'){
b = data[i];
out+='<div class="bouqet"><p class="mosroses">MosRoses</p><div class="x"></div>';
out+='<div class="image" style="background-image:url('+data[i]['img']+');"></div>';
out+='<p class="name">'+data[i]['name']+'</p>';
out+='<select onclick="event.stopPropagation()" class="selectbouq"><option selected disabled>ВЫБЕРИТЕ РАЗМЕР ЦВЕТКА</option><option getPrice="'+ data[i]['price1'] +'" class="option2">'+data[i]['size1']+' см. '+ data[i]['price1'] +' руб.'+'</option><option getPrice="'+data[i]['price2']+'"class="option2">'+data[i]['size2']+' см. '+data[i]['price2']+' руб.'+'</option><option getPrice="'+data[i]['price3']+'" class="option2">'+data[i]['size3']+' см. '+data[i]['price3']+' руб.'+'</option></select>';
out+='<div class = "addbutton" getImage="'+data[i]['img']+'"addName="'+data[i]['name']+'"></div>';
out+='<p class="price">от '+data[i]['price1']+' руб.</p>';
out+='</div>';
}}$('main').html(out);});}

function getWhite(){
$.getJSON("bouq.json", function(data){
let out = '';
for(let i in data){
let color = data[i]['color'];
if (color == 'white'){
b = data[i];
out+='<div class="bouqet"><p class="mosroses">MosRoses</p><div class="x"></div>';
out+='<div class="image" style="background-image:url('+data[i]['img']+');"></div>';
out+='<p class="name">'+data[i]['name']+'</p>';
out+='<select onclick="event.stopPropagation()" class="selectbouq"><option selected disabled>ВЫБЕРИТЕ РАЗМЕР ЦВЕТКА</option><option getPrice="'+ data[i]['price1'] +'" class="option2">'+data[i]['size1']+' см. '+ data[i]['price1'] +' руб.'+'</option><option getPrice="'+data[i]['price2']+'"class="option2">'+data[i]['size2']+' см. '+data[i]['price2']+' руб.'+'</option><option getPrice="'+data[i]['price3']+'" class="option2">'+data[i]['size3']+' см. '+data[i]['price3']+' руб.'+'</option></select>';
out+='<div class = "addbutton" getImage="'+data[i]['img']+'"addName="'+data[i]['name']+'"></div>';
out+='<p class="price">от '+data[i]['price1']+' руб.</p>';
out+='</div>';
}}$('main').html(out);});}

function getRose(){
$.getJSON("bouq.json", function(data){
let out = '';
for(let i in data){
let color = data[i]['color'];
if (color == 'rose'){
b = data[i];
out+='<div class="bouqet"><p class="mosroses">MosRoses</p><div class="x"></div>';
out+='<div class="image" style="background-image:url('+data[i]['img']+');"></div>';
out+='<p class="name">'+data[i]['name']+'</p>';
out+='<select onclick="event.stopPropagation()" class="selectbouq"><option selected disabled>ВЫБЕРИТЕ РАЗМЕР ЦВЕТКА</option><option getPrice="'+ data[i]['price1'] +'" class="option2">'+data[i]['size1']+' см. '+ data[i]['price1'] +' руб.'+'</option><option getPrice="'+data[i]['price2']+'"class="option2">'+data[i]['size2']+' см. '+data[i]['price2']+' руб.'+'</option><option getPrice="'+data[i]['price3']+'" class="option2">'+data[i]['size3']+' см. '+data[i]['price3']+' руб.'+'</option></select>';
out+='<div class = "addbutton" getImage="'+data[i]['img']+'"addName="'+data[i]['name']+'"></div>';
out+='<p class="price">от '+data[i]['price1']+' руб.</p>';
out+='</div>';
}}$('main').html(out);});}

function getBlack(){
$.getJSON("bouq.json", function(data){
let out = '';
for(let i in data){
let color = data[i]['color'];
if (color == 'black'){
b = data[i];
out+='<div class="bouqet"><p class="mosroses">MosRoses</p><div class="x"></div>';
out+='<div class="image" style="background-image:url('+data[i]['img']+');"></div>';
out+='<p class="name">'+data[i]['name']+'</p>';
out+='<select onclick="event.stopPropagation()" class="selectbouq"><option selected disabled>ВЫБЕРИТЕ РАЗМЕР ЦВЕТКА</option><option getPrice="'+ data[i]['price1'] +'" class="option2">'+data[i]['size1']+' см. '+ data[i]['price1'] +' руб.'+'</option><option getPrice="'+data[i]['price2']+'"class="option2">'+data[i]['size2']+' см. '+data[i]['price2']+' руб.'+'</option><option getPrice="'+data[i]['price3']+'" class="option2">'+data[i]['size3']+' см. '+data[i]['price3']+' руб.'+'</option></select>';
out+='<div class = "addbutton" getImage="'+data[i]['img']+'"addName="'+data[i]['name']+'"></div>';
out+='<p class="price">от '+data[i]['price1']+' руб.</p>';
out+='</div>';
}}$('main').html(out);});}

function getBlue(){
$.getJSON("bouq.json", function(data){
let out = '';
for(let i in data){
let color = data[i]['color'];
if (color == 'blue'){
b = data[i];
out+='<div class="bouqet"><p class="mosroses">MosRoses</p><div class="x"></div>';
out+='<div class="image" style="background-image:url('+data[i]['img']+');"></div>';
out+='<p class="name">'+data[i]['name']+'</p>';
out+='<select onclick="event.stopPropagation()" class="selectbouq"><option selected disabled>ВЫБЕРИТЕ РАЗМЕР ЦВЕТКА</option><option getPrice="'+ data[i]['price1'] +'" class="option2">'+data[i]['size1']+' см. '+ data[i]['price1'] +' руб.'+'</option><option getPrice="'+data[i]['price2']+'"class="option2">'+data[i]['size2']+' см. '+data[i]['price2']+' руб.'+'</option><option getPrice="'+data[i]['price3']+'" class="option2">'+data[i]['size3']+' см. '+data[i]['price3']+' руб.'+'</option></select>';
out+='<div class = "addbutton" getImage="'+data[i]['img']+'"addName="'+data[i]['name']+'"></div>';
out+='<p class="price">от '+data[i]['price1']+' руб.</p>';
out+='</div>';
}}$('main').html(out);});}

function getRadu(){
$.getJSON("bouq.json", function(data){
let out = '';
for(let i in data){
let color = data[i]['color'];
if (color == 'radu'){
b = data[i];
out+='<div class="bouqet"><p class="mosroses">MosRoses</p><div class="x"></div>';
out+='<div class="image" style="background-image:url('+data[i]['img']+');"></div>';
out+='<p class="name">'+data[i]['name']+'</p>';
out+='<select onclick="event.stopPropagation()" class="selectbouq"><option selected disabled>ВЫБЕРИТЕ РАЗМЕР ЦВЕТКА</option><option getPrice="'+ data[i]['price1'] +'" class="option2">'+data[i]['size1']+' см. '+ data[i]['price1'] +' руб.'+'</option><option getPrice="'+data[i]['price2']+'"class="option2">'+data[i]['size2']+' см. '+data[i]['price2']+' руб.'+'</option><option getPrice="'+data[i]['price3']+'" class="option2">'+data[i]['size3']+' см. '+data[i]['price3']+' руб.'+'</option></select>';
out+='<div class = "addbutton" getImage="'+data[i]['img']+'"addName="'+data[i]['name']+'"></div>';
out+='<p class="price">от '+data[i]['price1']+' руб.</p>';
out+='</div>';
}}$('main').html(out);});}