<?php require 'headernav.php'; $ids = get_id($_GET["id"]); ?>

<main>



<?php foreach( $ids as $ids ):?>
    
<div class="bigImg" style='background-image:url("img/<?php echo $ids['image1'];?>')'></div>
<div class="smallImg" style='background-image:url("img/<?php echo $ids['image1'];?>')'></div>
<div class="smallImg" style='background-image:url("img/<?php echo $ids['image2'];?>')'></div>
<div class="smallImg" style='background-image:url("img/<?php echo $ids['image3'];?>')'></div>
<div class="smallImg" style='background-image:url("img/<?php echo $ids['image4'];?>')'></div>
<p class="bouqname"><?php echo $ids['name'] ?></p>
<hr class="hrBouq">
<p class="bouqprice"><?php echo $ids['price'] ?> руб</p>
<div class="like likeOnBouq" likeID="<?php echo $ids["id"]?>"></div>
<div class="addButton" art="<?php echo $ids["id"];?>"><p>КУПИТЬ</p></div>

<div class='descr'><p>ОПИСАНИЕ</p></div>
<hr class="hrBouq">
<div class="descrText"><p><?php echo $ids["descr"];?></p></div>

<?php endforeach;?>


</main>
<?php require 'footer.php';?>


<?php
if($ids["image2"] == ""):
    echo "<script type='text/javascript'>$('#bouqSlide2, #bouqSlide3, #bouqSlide4').remove();</script>";
    elseif ($ids["image3"] == ""):
    echo "<script type='text/javascript'>$('#bouqSlide3, #bouqSlide4').remove();</script>";
    elseif ($ids["image4"] == ""):
    echo "<script type='text/javascript'>$('#bouqSlide4').remove();</script>";
endif;
?>


