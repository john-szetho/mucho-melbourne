<?php snippet('head') ?>
<body>
    <main class="<?= $page->uid() ?>">
        <?php snippet('header_tohome') ?>

        <div class="container">
            <div class="swiper">
                <div class="swiper-wrapper">
                    <?php
                    $images = $page->images();
                    if($images->isNotEmpty()): ?>
                        <?php foreach($page->images()->sortBy('sort') as $image): ?>
                        <div class="swiper-slide">
                            <?= $image ?>
                        </div>
                        <?php endforeach ?>
                    <?php endif ?>
                </div>
                <div class="swiper-pagination"></div>
            </div>
        </div>

        <?php snippet('footer') ?>
    </main>
</body>
<div class="scripts">
    <?= js(['https://cdn.jsdelivr.net/npm/swiper@8/swiper-bundle.min.js', 'assets/js/index.js', '//s3.amazonaws.com/downloads.mailchimp.com/js/mc-validate.js']) ?>
</div>
</html>