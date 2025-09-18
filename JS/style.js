jQuery(function() {

  var ttlOffset = $('.ttl').offset().top; // ttl要素の上端の位置（ページ最上部からの距離）

  $(window).on('scroll', function () {
    var point = $(window).scrollTop();    // 現在のスクロール位置（画面の上端）
    var dispHeight = $(window).height();  // 表示領域の高さ
    var center = point + dispHeight * 0.5; // 画面の中央位置

    // 画面中央がttlの上端に到達したら
    if(center >= ttlOffset){
      $('.header__inner').addClass('hidden');
    } else {
      $('.header__inner').removeClass('hidden');
    }
  });

});


const slideSpeed = 11000;
const swiper = new Swiper(".swiper", {
  centeredSlides: true, // 1枚目のスライドを中央にする
  loop: true,
  spaceBetween: '1.8%',  // スライド間に5%の余白を設定
  speed: 6000,
  cssEase: "linear",
  allowTouchMove: true,
  autoplay: {
    delay: 0,
    disableOnInteraction: false,
  },
  breakpoints: {
    1450: {
      slidesPerView: 4 // 768px以上のとき
    }
  }
});


AOS.init({
  offset: 50,
  duration: 400,
  easing: "ease-out",
  delay: 0,
});



let scrollPos = 0;

$('.work').click(function () {
  scrollPos = $(window).scrollTop(); // 現在のスクロール位置を記録
  $('body').addClass('fixed').css({ top: -scrollPos });
  $('.overlay, .modal[data-id="modal' + $(this).data('id') + '"]').fadeIn();
});

$('.close-button, .overlay').click(function () {
  $('body').removeClass('fixed').css({ top: '' });
  $(window).scrollTop(scrollPos); // 元の位置に戻す
  $('.overlay, .modal').fadeOut();
});