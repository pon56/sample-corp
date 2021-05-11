const swiper = new Swiper('.swiper-container', {
    // Optional parameters
    direction: 'horizontal',
    loop: true,
    slidesPerView: 2.9,
    spaceBetween: 40,

    // If we need pagination
    pagination: {
        el: '.swiper-pagination',
        clickable: true
    },

    // Navigation arrows
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },

});


//   Q&Aトグル
$(".qa-box-q").on('click', function () {
    $(this).next().slideToggle()
    $(this).children('.qa-box-icon').toggleClass("is-open")
})

// ドロワー
$(document).ready(function() {
    $('.drawer').drawer();
  });