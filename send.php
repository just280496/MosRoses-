<?php 
if(isset($_POST['submit'])){
$to = "mosroses@mosroses.ru"; 
$from = "mosroses@mosroses.ru"; 
 
$first_name = $_POST['first_name'];
$email = $_POST['email'];
$phone = $_POST['phone'];
$message = $_POST['message'];
$order = $_POST['order'];
$subject = "MosRoses";
     
     
/* Переменная, которая будет отправлена на почту со значениями, вводимых в поля */
$mail_to_myemail = "Чикс"
Имя отправителя: $first_name
E-mail: $email
Номер телефона: $phone
Текст сообщения: $message
Заказ: $order


Чтобы ответить на письмо, создайте новое сообщение, скопируйте электронный адрес и вставьте в поле Кому.";  
     
$headers = "From: $from \r\n";
     
/* Отправка сообщения, с помощью функции mail() */
mail($to, $subject, $mail_to_myemail, $headers . 'Content-type: text/plain; charset=utf-8');
echo "Сообщение отправлено. Спасибо Вам " . $first_name . ", мы скоро свяжемся с Вами.";
echo "<br /><br /><a href='https://mosroses.ru'>Вернуться на сайт.</a>";
}
?>
<!--Переадресация на главную страницу сайта, через 3 секунды-->
<script language="JavaScript" type="text/javascript">
function changeurl(){eval(self.location="https://mosroses.ru");}
window.setTimeout("changeurl();",3000);
</script>