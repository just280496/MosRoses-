<?php require 'db.php'; 


?>
<!DOCTYPE html>
<html lang="ru">
<head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <title>MosRoses</title>
    <link rel="stylesheet" href="owl.carousel.min.css">
    <link rel="stylesheet" type="text/css" href="css.css" >
    <link rel="shortcut icon" href="favicon.png" type="image/png">
</head>

<body>
<header>
<div id="menuButton"><svg class='menuIcon' xmlns='http://www.w3.org/2000/svg' viewBox='0 0 30 30'><line class='iconMenuLine' id='lineTop' x1='7' y1='12' x2='24' y2='12' stroke-width='0.5' stroke='black'></line><line class='iconMenuLine' id='lineBottom' x1='7' y1='18' x2='24' y2='18' stroke-width='0.5' stroke='black'></line></svg></div>
<a href="index.php"><div id="mosroses"><p>MosRoses</p></div></a>

<div class="headerBlock" id="headerBlock1">
<p></p>
<p></p>
<p></p>
</div>
<div class="headerBlock" id="headerBlock2">
<p>+7(999)999-99-99</p>
</div>
<div class="headerBlock" id="headerBlock3">
<div id="favoriteButton"><div class="favCount"></div></div><p id="p1">ИЗБРАННОЕ</p>
<div id="cartButton"><div class="basCount"></div></div><p id="p2">КОРЗИНА</p>
</div>
<hr id="hr1">
</header>


<nav>
<a href="bouquets.php?category='roundbox'"><p>Розы в шляпной коробке</p></a>
<p>Розы в крафтовой бумаге</p>
<p>Букет невесты</p>
<p>Корзина цветов</p>
<p>Розы в форме сердца</p>
<p>Розы в стеклянном кубе</p>
<p>Выбрать по цене<p>
<p>Выбрать по цвету<p>
<p>Доставка</p>
</nav>
<div class="cart"><div class="closeCart"></div></div>
<div class="favorite"></div>