<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title><?= $site->title() ?></title>
    <link rel="icon" type="image/png" href="assets/img/mucho-favicon.png" />
    <?= css('assets/css/index.css', 'https://cdn.jsdelivr.net/npm/swiper@8/swiper-bundle.min.css') ?>
    <?= js('https://cdn.splitbee.io/sb.js', ['async' => true]) ?>
    <?= js('https://ajax.googleapis.com/ajax/libs/jquery/3.6.0/jquery.min.js') ?>
</head>