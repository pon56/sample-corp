let slideNumber
let spaceNumber

if (window.matchMedia('(max-width: 768px)').matches) {
  slideNumber = 1.3
  spaceNumber = 20
} else {
  slideNumber = 2.9
  spaceNumber = 40
}

const swiper = new Swiper('.swiper-container', {
    // Optional parameters
    direction: 'horizontal',
    loop: true,
    slidesPerView: slideNumber,
    spaceBetween: spaceNumber,

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

// トップへの処理
$(window).on('scroll', function(){
    if (100 < $(this).scrollTop()){
      $(".to-top").addClass("is-active")
    }else{
      $(".to-top").removeClass("is-active")
    }
  })
  
  $('a[href^="#"]').on('click', function(){
  
    var id= $(this).attr('href')
    var headerSize = $("header").innerHeight()
    var position = 0
  
    if( id != "#"){
      position = $(id).offset().top-headerSize
    }
    
    $('html,body').animate({
      scrollTop: position
    },400)
  })