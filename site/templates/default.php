<?php snippet('head') ?>
<body>
    <main class="<?= $page->uid() ?>">
        <?php snippet('headerToHome') ?>

        <footer>
            <div class="error">
                <h2>Nothing to see here...</h2>
            </div>            
        </footer>
    </main>
</body>
<div class="scripts">
    <?= js(['https://cdn.jsdelivr.net/npm/swiper@8/swiper-bundle.min.js', 'assets/js/index.js', '//s3.amazonaws.com/downloads.mailchimp.com/js/mc-validate.js']) ?>
</div>
</html>