    <?php
    $images = $page->images();
    if($images->isNotEmpty()): ?>
    <div class="swiper">
        <div class="swiper-wrapper">
                <?php foreach($page->images()->sortBy('sort') as $image): ?>
                <div class="swiper-slide <?php if($image->display() == 'false'): ?>hide<?php endif ?>">
                    <?= $image ?>
                </div>
                <?php endforeach ?>
        </div>
    </div>
    <?php endif ?>