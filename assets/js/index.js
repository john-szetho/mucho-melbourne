// MAILCHIMP SIGNUP FORM

var signupContainer = document.querySelector('#mc_embed_signup');
var signupForm = document.querySelector('#mc-field-group');
var subscribeInput = document.querySelector('#mc-field-group input');
var subscribeInputOG = document.querySelector('#mc-field-group input').value;
var submitBtn = document.querySelector('#mc-submit input');

subscribeInput.onkeydown = function () {
    signupContainer.classList.add('typing-container');
    subscribeInput.classList.add('typing');
    submitBtn.classList.add('typing');
}

signupForm.onmouseout = function () {
    if (subscribeInput.value == subscribeInputOG || value) {
        signupContainer.classList.remove('typing-container');
        subscribeInput.classList.remove('typing');
        submitBtn.classList.remove('typing');
    }
}


// SWIPER JS

var slideshowContainer = $('#slideshow');
var autoplayDelay = 18000;
var delay = 12000;

var swiper = new Swiper(".swiper", {
    speed: 600,
    loop: true,
    effect: "fade",
    autoplay: {
        delay: autoplayDelay,
        disableOnInteraction: true,
    },
    clickable: true,
    spaceBetween: 60
});


// SWIPER JS TOGGLE

var slideshowBtn = $('slideshowBtn');

function slideshowToggle() {
    slideshowContainer.fadeToggle();

    setTimeout(() => {
        slideshowContainer.fadeIn();
    }, delay);
};


// SWIPER JS SHOW AFTER TIMER

setTimeout(() => {
    slideshowContainer.fadeIn();
    var autoplayDelay = 6000;

    var swiper = new Swiper(".swiper", {
        speed: 600,
        loop: true,
        effect: "fade",
        autoplay: {
            delay: autoplayDelay,
            disableOnInteraction: true,
        },
        spaceBetween: 60
    });
}, delay);