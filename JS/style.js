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
    },
    1050: {
      slidesPerView: 3 // 768px以上のとき
    },
    768: {
      slidesPerView: 2.5 // 768px以上のとき
    },
    0: {
      slidesPerView: 1.3 // 768px未満（モバイル）のとき
    }
  }
});


AOS.init();


// // モーダル要素を取得
// var modalFlower = document.getElementById("myModalFlower");
// // モーダルを開くボタンを取得
// var btn = document.getElementById("openModalFlower");
// // モーダルを閉じるアイコン（×）を取得
// var span = document.getElementById("closeModalFlower");

// // ボタンがクリックされた時にモーダルを表示
// btn.onclick = function() {
//     modalFlower.style.display = "block"; // モーダルのdisplayスタイルを"block"にして表示
//     document.body.style.overflow = "hidden"; // 背景スクロールを止める
//     }
// // ×（クローズアイコン）がクリックされた時にモーダルを非表示
// span.onclick = function() {
//     modalFlower.style.display = "none"; // モーダルのdisplayスタイルを"none"にして非表示
//     document.body.style.overflow = ""; // 元に戻す
//   }
// // モーダルの外側がクリックされた時にモーダルを非表示
// window.onclick = function(event) {
//     // クリックされた箇所がモーダル自体（外側）であれば
//     if (event.target == modalFlower) {
//         modalFlower.style.display = "none"; // モーダルのdisplayスタイルを"none"にして非表示
//         document.body.style.overflow = "";
//       }
// }


    $(function () {
    $('.work').click(function () {
    // $("body").addClass("no_scroll"); // 背景固定させるクラス付与
    var id = $(this).data('id'); // 何番目のキャプション（モーダルウィンドウ）か認識
    $('#overlay, .modal[data-id="modal' + id + '"]').fadeIn();
    });
     // オーバーレイクリックでもモーダルを閉じるように
    $('.close-button , #overlay').click(function () {
    $("body").removeClass("no_scroll"); // 背景固定させるクラス削除
    $('#overlay, .modal').fadeOut();
    });
});

