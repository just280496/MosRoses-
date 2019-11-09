$('body').on('click', '.like', toLSFav);
$('body').on('click', '.like', checkFavIcon);
$('body').on('click', '.clearFavorite', clearFavorite);
$('body').on('click', '.deleteFromFavorite', deleteFromFavorite);

function toLSFav(event){
    event.stopPropagation();
let art = $(this).attr('like');
if(favorite[art] == undefined) favorite[art] = 1;
else if(favorite[art] == 1) delete favorite[art];
outFavorite();
localStorage.setItem('favorite', JSON.stringify(favorite));
checkFavIcon();
}

function checkLSFav(){
if(localStorage.getItem('favorite') != null)
    favorite = JSON.parse(localStorage.getItem('favorite'));

}

function outFavorite(){
$.getJSON("alfa.json", function(data){
let out = '<p class="fav">Избранное:</p>';
let count = 0;
for (let i in favorite){
out += '<div class="favBox">';
out += '<div class="favImg" style="background-image:url('+ data[i[0]]['img'] +')"></div>';
out += '<p class="favName">' + data[i[0]]['name'] + '</p>';
out += '<div class="deleteFromFavorite" id="' + i + '"></div>';
out += '<p class="favPrice">от ' + data[i[0]]['price'][0] + ' руб</p>';
out += '</div>';
count += favorite[i];
    
}

out += '<div class="countFavorite">' + count + '</div>';
out += '<p class="clearFavorite">Очистить</p>';
out += '<p class="freeFavorite">Пусто</p>';
$('.favorite').html(out);
if(count == 0){
$('.countFavorite, .clearFavorite, .fav, .favCount').css('display', 'none');
$('.freeFavorite').css('display', 'block');
}
else{
$('.countFavorite, .clearFavorite, .fav, .favCount').css('display', 'block');
$('.freeFavorite').css('display', 'none');
}
$('.favCount').text(count);
});
}


function deleteFromFavorite(){
    var art = $(this).attr('id');
    delete favorite[art];
    outFavorite();
    localStorage.setItem('favorite', JSON.stringify(favorite));
}


function clearFavorite(){
    localStorage.removeItem('favorite');
    favorite = {};
    outFavorite();
}

function checkFavIcon(){
    $(this).css({backgroundImage:'url("icon/like.svg")'});
    for( let i in favorite){
    $('.like[like="'+ i +'"]').css({backgroundImage:'url("icon/liked.svg")'});
    }
}