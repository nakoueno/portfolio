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
  slidesPerView: 1.2,
  autoplay: {
    delay: 0,
    disableOnInteraction: false,
  },
  breakpoints: {
    600: {
      slidesPerView: 2 // 768px以上のとき
    },
    1000: {
      slidesPerView: 3 // 768px以上のとき
    },
    1450: {
      slidesPerView: 4 // 768px以上のとき
    }
  }
});


// const swiper = new Swiper(".swiper", {
//   centeredSlides: true, // 1枚目のスライドを中央にする
//   loop: true,
//   spaceBetween: '1.8%',  // スライド間に5%の余白を設定
//   speed: 600,
//   allowTouchMove: true,
//   slidesPerView: 1.5,
//   breakpoints: {
//     600: {
//       slidesPerView: 2 // 768px以上のとき
//     },
//     1000: {
//       slidesPerView: 3 // 1000px以上のとき
//     },
//     1450: {
//       slidesPerView: 4 // 1450px以上のとき
//     }
//   }
// });


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



// 【404リダイレクト】
document.addEventListener("DOMContentLoaded", () => {
  document.body.addEventListener("click", (e) => {
    const link = e.target.closest("a"); // クリックされた要素がaタグか、a内のspanなどだったら取る

    if (link) {
      const href = link.getAttribute("href");

      if (!href || href.trim() === "" || href === "#" || href === "javascript:void(0)") {
        e.preventDefault();
        console.log("404に飛ばします");
        window.location.href = "./404.html";
      }
    }
  });
});