<?php snippet('head') ?>
<body>
    <main class="<?= $page->uid() ?>">
        <?php snippet('header') ?>

        <?php snippet('footer') ?>
    </main>
</body>
<div class="scripts">
    <?= js(['https://cdn.jsdelivr.net/npm/swiper@8/swiper-bundle.min.js', 'assets/js/index.js', '//s3.amazonaws.com/downloads.mailchimp.com/js/mc-validate.js']) ?>
</div>
</html>