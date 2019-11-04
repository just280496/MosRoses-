$('body').on('click', '.like', toLSFav);
$('body').on('click', '.clearFavorite', clearFavorite);
$('body').on('click', '.deleteFromFavorite', deleteFromFavorite);

function toLSFav(){
let art = $(this).attr('like');
if(favorite[art] == undefined) favorite[art] = 1;
else alert('Букет в избранном');
localStorage.setItem('favorite', JSON.stringify(favorite));
outFavorite();
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
            $('.countFavorite, .clearFavorite, .fav').css('display', 'none');
            $('.freeFavorite').css('display', 'block');
        }
        else{
            $('.countFavorite, .clearFavorite, .fav').css('display', 'block');
            $('.freeFavorite').css('display', 'none');
        }
        
        
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