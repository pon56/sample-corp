let slideNumber
let spaceNumber

if (window.matchMedia('(max-width: 768px)').matches) {
  slideNumber = 1.3
  spaceNumber = 20
} else {
  slideNumber = 2.78
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

  // 横から出てくるトグルバー
  $('.drawer-icon-wrapper').on('click', function(e){
    // クリックで飛ばなくなる
    e.preventDefault()
  
    $('.drawer-icon').toggleClass('is-active')
    $('.drawer-icon-wrapper').toggleClass('is-active')
    $('.header-inner-sp').toggleClass('is-active')
  
    // 5秒かけて背景を暗くする。トグル
    $(".drawer-background").fadeToggle(500);
    return false
  })


  // フォームですべての要素が記入されているか
  let $submit = $("#js-submit")
$("#js-form input, #js-form textarea").on("change",function(){
    if(
      
//js-formというidがついている中の　input[type="text"]　が空欄でない場合
    $('#js-form input[type="text"]').val() !== "" &&　
    $('#js-form textarea').val() !== ""&&
    $('#js-form input[type = "checkbox"]').prop('checked') === true
    ){
        // すべて入力されたとき
        $submit.addClass('is-active')
        $submit.prop("disabled", false)
    }else{
        // すべて入力されていないとき
        $submit.removeClass('is-active')
        $submit.prop("disabled", true)
    }
})