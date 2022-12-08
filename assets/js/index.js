// MAILCHIMP SIGNUP FORM

var signupContainer = $('#mc_embed_signup');
var signupForm = $('#mc-field-group');
var subscribeInput = $('#mc-field-group input');
var subscribeInputOG = $('#mc-field-group input').value;
var submitBtn = $('#mc-submit input');

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
        disableOnInteraction: false,
    },
    clickable: true,
    spaceBetween: 60
});

setTimeout(() => {
    slideshowContainer.fadeIn();
    var autoplayDelay = 6000;

    var swiper = new Swiper(".swiper", {
        speed: 600,
        loop: true,
        effect: "fade",
        autoplay: {
            delay: autoplayDelay,
            disableOnInteraction: false,
        },
        spaceBetween: 60
    });
  }, delay);