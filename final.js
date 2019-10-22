let headerheight = $('header').height();
$('header').height(headerheight);
$('.slider').css('margin-top',headerheight);
$('.menu1, .menu2').css('margin-top',headerheight);
$(window).on('orientationchange',function(){location.reload();});

function toggleMenu(){document.getElementById("menu_icon").classList.toggle("menuexpanded");}
document.getElementById("menu_icon").addEventListener("click", toggleMenu);

$('#menu_icon').click(function(){
$('.menu1').animate({height:[ 'toggle', 'swing' ]},300);
if($('#menu_icon').hasClass('menuexpanded')){
$('.headerBasket').css('display','none');
$('h2').animate({letterSpacing:'+=10px'},300,'swing');
$('body').css({position:'fixed', overflow:'hidden'});}
else{$('.headerBasket').css('display','block');
$('h2').animate({letterSpacing:'-=10px'},300,'swing');
$('body').css({position:'relative', overflow:''});}
});

$('.headerBasket').click(function(){
showBasketSum();

$('.menu2').animate({height:[ 'toggle', 'swing' ]},300);
if($('.headerMenu').css('display') == 'block'){
$('.basketimg, .basketName, .countBasket').animate({opacity:'1'},600);
$('.headerMenu').css('display','none');
$('.svgBasket').css({stroke:'black',strokeWidth:'1px'});
$('h2').animate({letterSpacing:'+=10px'},300,'swing').css('margin-left','20%');
$('body').css({position:'fixed', overflow:'hidden'});}
else{$('.headerMenu').css('display','block');
$('.basketimg, .basketName, .countBasket').animate({opacity:'0'},300);
$('h2').css('margin-left','0').animate({letterSpacing:'-=10px'},300,'swing');
$('.svgBasket').css({stroke:'white',strokeWidth:'5px'});
$('body').css({position:'relative', overflow:''});}
});

$('.menu1').swipe({
swipe:function(event, direction,click) {
if(direction =='up'){
$('.headerBasket').css('display','block');       
$('h2').animate({letterSpacing:'-=10px'},300,'swing');   
$('.menu1').animate({height:[ 'toggle', 'swing' ]},300);
document.getElementById("menu_icon").classList.toggle("menuexpanded");
$('body').css({position:'relative', overflow:''});
}}});

$('.menu2').swipe({
swipe:function(event, direction) {
if(direction =='up' ){
$('.basketimg, .basketName, .countBasket').animate({opacity:'0'},300);
$('.headerMenu').css('display','block');
$('h2').css('margin-left','0').animate({letterSpacing:'-=10px'},300,'swing');
$('.menu2').animate({height:[ 'toggle', 'swing' ]},300);
$('.svgBasket').css({stroke:'white',strokeWidth:'5px'});
$('body').css({position:'relative', overflow:''});
}}});






function closeBouq(event){
event.stopPropagation();
$(this).parent().css({position:'relative',width:'50%',height:'50%',zIndex:'1'});
$(this).css('display','none');
$('.mosroses').css('display','none');
$('.selectbouq').css('display','none');
$('.price').css('display','block');
$('.image').css({margin:'', width:'100%',height:'70%'});
$('.name').css({fontSize:'2.7vh', marginLeft:'10%'});
$('.selectbouq').prop('selectedIndex', 0);
$('.addbutton').css('display','none');
}
function openBouq(event){
event.stopPropagation();
if($(this).css('position')=='relative'){
$(this).animate({ height:'100%',top:'0',left:'0'},300,'swing').css({position:'fixed',width:'100%',zIndex:'9999'});
$('.x',this).css('display','block');
$('.mosroses',this).css('display','block');
$('.selectbouq',this).css('display','block');
$('.price',this).css('display','none');
$('.image',this).css({margin:'50px auto 0', width:'75%',height:'50%'});
$('.name',this).css({fontSize:'3vh', marginLeft:'5%'});
$('.addbutton',this).css('display','block');}
}
function clearFreeSelect(){$('select option:contains(" см.  руб.")').remove();}
function checkFreeQuantity(){if($('.quantity').text() == '' ) $('.quantity').css('display','none');
else $('.quantity').css('display','block');}

























slideIt();
let slidePosition = 0;
function slideIt(){
$('.lineSlider').swipe({
swipe:function(event, direction, phase) {
if(direction =='left'){
    if(slidePosition == -400)
    return false;
else{slidePosition-=100;
    $('.lineSlider').animate({left:slidePosition+'%'},300,'swing');}}
if(direction =='right' ){
    if(slidePosition == 0)
    return false; 
slidePosition+=100;
$('.lineSlider').animate({left:slidePosition+'%'},300,'swing');}
activeX();}});}

activeX();
function activeX(){
if(slidePosition == 0){$('#active1').css('background-color', 'rgba(0, 0, 0, 0.45)');
$('#active2, #active3, #active4, #active5').css('background-color', 'rgba(0, 0, 0, 0.2)');}
if(slidePosition == -100){$('#active2').css('background-color', 'rgba(0, 0, 0, 0.45)');
$('#active1, #active3, #active4, #active5').css('background-color', 'rgba(0, 0, 0, 0.2)');}
if(slidePosition == -200){$('#active3').css('background-color', 'rgba(0, 0, 0, 0.45)');
$('#active1, #active2, #active4, #active5').css('background-color', 'rgba(0, 0, 0, 0.2)');}
if(slidePosition == -300){$('#active4').css('background-color', 'rgba(0, 0, 0, 0.45)');
$('#active2, #active3, #active1, #active5').css('background-color', 'rgba(0, 0, 0, 0.2)');}
if(slidePosition == -400){$('#active5').css('background-color', 'rgba(0, 0, 0, 0.45)');
$('#active2, #active3, #active1, #active4').css('background-color', 'rgba(0, 0, 0, 0.2)');}
}