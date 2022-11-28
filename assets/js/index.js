// MAILCHIMP SIGNUP FORM

var container = document.querySelector('#mc_embed_signup');
var form = document.querySelector('#mc-field-group');
var subscribeInput = document.querySelector('#mc-field-group input');
var subscribeInputOG = document.querySelector('#mc-field-group input').value;
var submitBtn = document.querySelector('#mc-submit input');

subscribeInput.onkeydown = function () {
    container.classList.add('typing-container');
    subscribeInput.classList.add('typing');
    submitBtn.classList.add('typing');
}

form.onmouseout = function () {
    if (subscribeInput.value == subscribeInputOG || value) {
        container.classList.remove('typing-container');
        subscribeInput.classList.remove('typing');
        submitBtn.classList.remove('typing');
    }
}

// form.onmouseover = function () {
//     if (subscribeInput.value == subscribeInputOG) {
//         subscribeInput.value = "Enter your email";
//     }
// }

// form.onmouseout = function () {
//     if (subscribeInput.value == "") {
//         subscribeInput.value = subscribeInputOG;

//         container.classList.remove('typing-container');
//         subscribeInput.classList.remove('typing');
//         submitBtn.classList.remove('typing');
//     } else {
//         subscribeInput.value = subscribeInputOG;
//     }
// }

// form.addEventListener('click', () => {
//     form.onmouseover = function () {
//         return false
//     }
//     form.onmouseout = function () {
//         return false
//     }, { once: true };
// })

// document.addEventListener('mouseover', () => {
//     if (subscribeInput.value == "") {
//         subscribeInput.value = "Subscribe";

//         form.onmouseover = function () {
//             subscribeInput.value = "Enter your email";
//         }
//         form.onmouseout = function () {
//             subscribeInput.value = subscribeInputOG;
//         }
//     }
// })


// Mailchimp sign up script
// (function ($) {
//   window.fnames = new Array();
//   window.ftypes = new Array();
//   fnames[0] = 'EMAIL';
//   ftypes[0] = 'email';
//   fnames[1] = 'FNAME';
//   ftypes[1] = 'text';
//   fnames[2] = 'LNAME';
//   ftypes[2] = 'text';
//   fnames[3] = 'ADDRESS';
//   ftypes[3] = 'address';
//   fnames[4] = 'PHONE';
//   ftypes[4] = 'phone';
//   fnames[5] = 'BIRTHDAY';
//   ftypes[5] = 'birthday';
// }(jQuery));
// var $mcj = jQuery.noConflict(true);


// SWIPER JS

var swiper = new Swiper(".swiper", {
    spaceBetween: 30,
    loop: true,
    effect: "fade",
    autoplay: {
        delay: 6000,
        disableOnInteraction: false,
      }
});