<?php
$dbhost = "localhost";
$dbname = "mosroses";
$username = "root";
$password = "";

$db = new PDO("mysql:host=$dbhost; dbname=$dbname; charset=utf8", $username, $password);

function get_bouquets(){
global $db;
$bouqs = $db->query("SELECT * FROM mosroses");
return $bouqs;
}

function get_cat($category){
    global $db;
    $cats = $db->query("SELECT * FROM mosroses WHERE cat = $category");
    return $cats;
}

function get_id($id){
    global $db;
    $idx = $db->query("SELECT * FROM mosroses WHERE id = $id");
    return $idx;
}


