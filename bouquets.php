<?php require 'headernav.php'; ?>


<main>
<?php 
$cat = get_cat($_GET['category']);
?>

<p class="catnamepage">
<?php
if($_GET['category'] == "'roundbox'"):
    echo "Букеты в шляпной коробке";
    elseif ($_GET['category'] == "'film'"):
    echo "Розы в пленке";
    elseif ($_GET['category'] == "'bride'"):
    echo "Букеты невесты";
    elseif ($_GET['category'] == "'roundbox'"):
    echo "Букеты в шляпной коробке";
    elseif ($_GET['category'] == "'tape'"):
    echo "Букеты с лентой";
    elseif ($_GET['category'] == "'cubebox'"):
    echo "Розы в прозрачном коробе";
    elseif ($_GET['category'] == "'basket'"):
    echo "Розы в корзине";
    elseif ($_GET['category'] == "'gift'"):
    echo "Подарки";
endif;
?>
</p>

<?php foreach( $cat as $cat ):?>


<a href="bouquet.php?id=<?php echo $cat["id"]?>">
<div class="bouquets">
<div class="bouqsimg" style="background-image:url('img/<?php echo $cat["image1"];?>');"></div>
<p class="bouqsname"><?php echo $cat["name"];?></p>
<p class="bouqsprice"><?php echo $cat["price"];?> руб</p>
<div class="like" likeID="<?php echo $cat["id"]?>"></div>
</div>
</a>



<?php endforeach;?>

</main>

<?php require 'footer.php';?>
