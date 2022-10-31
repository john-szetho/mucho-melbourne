<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">

    <title><?= $site->title() ?></title>
    <meta name="title" content="<?= $site->title() ?>">
    <meta name="description" content="<?= $site->description() ?>">
    <meta property="og:type" content="website">
    <meta property="og:url" content="<?= $site->www() ?>">
    <meta property="og:title" content="<?= $site->title() ?>">
    <meta property="og:description" content="<?= $site->description() ?>">
    <meta property="og:image" content="/assets/img/mucho-meta.png">
    <meta property="twitter:card" content="summary_large_image">
    <meta property="twitter:url" content="<?= $site->www() ?>">
    <meta property="twitter:title" content="<?= $site->title() ?>">
    <meta property="twitter:description" content="<?= $site->description() ?>">
    <meta property="twitter:image" content="/assets/img/mucho-meta.png">
    <link rel="icon" type="image/png" href="/assets/img/mucho-favicon.png" />
    <?= css('assets/css/index.css') ?>
    <?= js('https://cdn.splitbee.io/sb.js', ['async' => true]) ?>
    <?= css('https://cdn.jsdelivr.net/npm/swiper@8/swiper-bundle.min.css') ?>
    <?= js('https://ajax.googleapis.com/ajax/libs/jquery/3.6.0/jquery.min.js') ?>
</head>