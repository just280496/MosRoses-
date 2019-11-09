let slide = {
"1": { "content": "Слайд1" },
"2": { "content": "Слайд2" },
"3": { "content": "Слайд3" },
"4": { "content": "Слайд4" },
"5": { "content": "Слайд5" }
}


$('body').on('click','.slide',TapSwipe);
$('body').on('click','.pagination', pagNav);
$('body').on('click','.right',right);
$('body').on('click','.left',left);
outSlider();
heightBGSlider();

function outSlider(){
let out = '<div class="right"><p>></p></div> <div class="left"><p><</p></div><div class="lineSlider">';
for (let i in slide){out += '<div class="slide" id="slide'+ i +'"><p class="slideText">'+ slide[i]['content'] +'</p></div>';}
out += '</div>';
out+= '<div class="pagblock"></div>'
$('.slider').html(out);
var slideCount = $('.slide').length;
for(i = 0; i < slideCount; i++){$('.pagblock').append('<div class="pagination'+ i +' pagination" ></div>');}
$('.lineSlider').css('width',100*slideCount+'%');
$('.slide').css('width',100 / slideCount+'%');
}

function right(){
if (($('.slide').length-1)*(-100) == slidePosition) return false;
slidePosition -= 100;
$('.lineSlider').animate({left:slidePosition+'%'},function(){
var posSlider = $(".lineSlider").position();
var widthWindow = document.body.clientWidth;
var idActive = posSlider.left / -widthWindow;
$('.pagination').css('background-color','rgba(0, 0, 0, 0.1)');
$('.pagination'+ idActive +'').css('background-color','rgba(0, 0, 0, 0.3)');
});}

function left(){
if (slidePosition == 0) return false;
slidePosition += 100;
$('.lineSlider').animate({left:slidePosition+'%'},function(){
var posSlider = $(".lineSlider").position();
var widthWindow = document.body.clientWidth;
var idActive = posSlider.left / -widthWindow;
$('.pagination').css('background-color','rgba(0, 0, 0, 0.1)');
$('.pagination'+ idActive +'').css('background-color','rgba(0, 0, 0, 0.3)');
});}

function TapSwipe(){
$(function() {  
  $(".lineSlider").swipe( { allowPageScroll:"vertical" } );
$('.slide').swipe( {
swipe:function(event, direction) {
if (direction == 'left'){
if (($('.slide').length-1)*(-100) == slidePosition) return false;
slidePosition -= 100;
$('.lineSlider').animate({left:slidePosition+'%'},function(){
var posSlider = $(".lineSlider").position();
var widthWindow = document.body.clientWidth;
var idActive = posSlider.left / -widthWindow;
$('.pagination').css('background-color','rgba(0, 0, 0, 0.1)');
$('.pagination'+ idActive +'').css('background-color','rgba(0, 0, 0, 0.3)');
});}
if (direction == 'right'){
if (slidePosition == 0) return false;
slidePosition += 100;
$('.lineSlider').animate({left:slidePosition+'%'},function(){
var posSlider = $(".lineSlider").position();
var widthWindow = document.body.clientWidth;
var idActive = posSlider.left / -widthWindow;
$('.pagination').css('background-color','rgba(0, 0, 0, 0.1)');
$('.pagination'+ idActive +'').css('background-color','rgba(0, 0, 0, 0.3)');
});}},
tap:function(event, target) {
var a = $(this).text();
alert(a);
},
allowPageScroll:"vertical"
});});}

function activePagination(){
var posSlider = $(".lineSlider").position();
var widthWindow = document.body.clientWidth;
var idActive = posSlider.left / -widthWindow;
$('.pagination').css('background-color','rgba(0, 0, 0, 0.1)');
$('.pagination'+ idActive +'').css('background-color','rgba(0, 0, 0, 0.3)');
}

function pagNav(){
var a = $('.slide').length;
for(i = 0; i < a; i++){
if($(this).hasClass('pagination'+ i +'') == true){
$('.lineSlider').animate({left:-i*100+'%'},function(){
var posSlider = $(".lineSlider").position();
var widthWindow = document.body.clientWidth;
var idActive = posSlider.left / -widthWindow;
$('.pagination').css('background-color','rgba(0, 0, 0, 0.1)');
$('.pagination'+ idActive +'').css('background-color','rgba(0, 0, 0, 0.3)');
});
slidePosition = -i*100;
}}}

function heightBGSlider(){
  var a = $('.sliderBackground').height();
  $('.sliderBackground').css('height',a);

}

        
$(window).on('scroll', function() {
	var scrollCoef = 0.008;

	$('.lineSlider, .left, .right, .sliderBackground, .pagblock').css({
		opacity: 1 - $(window).scrollTop() * scrollCoef
	})
});


