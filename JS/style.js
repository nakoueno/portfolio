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


// モーダル要素を取得
var modalFlower = document.getElementById("myModalFlower");
// モーダルを開くボタンを取得
var btn = document.getElementById("openModalFlower");
// モーダルを閉じるアイコン（×）を取得
var span = document.getElementById("closeModalFlower");

// ボタンがクリックされた時にモーダルを表示
btn.onclick = function() {
    modalFlower.style.display = "block"; // モーダルのdisplayスタイルを"block"にして表示
    document.body.style.overflow = "hidden"; // 背景スクロールを止める
    }
// ×（クローズアイコン）がクリックされた時にモーダルを非表示
span.onclick = function() {
    modalFlower.style.display = "none"; // モーダルのdisplayスタイルを"none"にして非表示
    document.body.style.overflow = ""; // 元に戻す
  }
// モーダルの外側がクリックされた時にモーダルを非表示
window.onclick = function(event) {
    // クリックされた箇所がモーダル自体（外側）であれば
    if (event.target == modalFlower) {
        modalFlower.style.display = "none"; // モーダルのdisplayスタイルを"none"にして非表示
        document.body.style.overflow = "";
      }
}


// // モーダル要素を取得
// var modalAnchor = document.getElementById("myModalAnchor");
// // モーダルを開くボタンを取得
// var btn = document.getElementById("openModalAnchor");
// // モーダルを閉じるアイコン（×）を取得
// var span = document.getElementById("closeModalAnchor");

// btn.onclick = function() {
//     modalAnchor.style.display = "block";
// }
// span.onclick = function() {
//     modalAnchor.style.display = "none";
// }
// window.onclick = function(event) {
//     if (event.target == modalAnchor) {
//         modalAnchor.style.display = "none";
//     }
// }




//スクロールしてエリアが切り替わる時に次のコンテンツと重ねる
function scrollOverlap() {
  const targets = document.querySelectorAll('.js-scroll-overlap');
  if (targets.length === 0) {
    return;
  }

  let lastWinHight = window.innerHeight;

  //position: sticky;のオフセット値をCSS変数で設定
  const setStickyOffset = () => {
    targets.forEach((target) => {
      const targetHeight = target.offsetHeight;
			//ウィンドウの高さが要素の高さより大きい場合はオフセット値を-1pxに設定
      const offsetValue = lastWinHight > targetHeight ? '-1px' : `-${targetHeight - lastWinHight}px`;
      target.style.setProperty('--sticky-offset', offsetValue);
    });
  };
  setStickyOffset();

  addEventListener('resize', () => {
	  //ウィンドウの高さが変わった時のみウィンドウの高さを更新
    const winHight = window.innerHeight;
    if (lastWinHight !== winHight) {
      lastWinHight = winHight;
    }
  });

  // bodyのサイズ変更を監視して再取得
  const body = document.body;
  // ResizeObserverを作成
  const resizeObserver = new ResizeObserver((entries) => {
    for (let entry of entries) {
      setStickyOffset();
    }
  });
  // body要素を監視対象に追加
  resizeObserver.observe(body);

  /*
    キーボード操作時に無効化するクラスを付与する
    　フォーカス移動時にフォーカスした要素と、
		　次のエリアが重なって要素が見えなくなってしまう可能性への対応
  */
  const toggleDisabledClass = (boolean) => {
    targets.forEach((target) => {
      target.classList.toggle('is-disabled', boolean);
    });
  };

  //キーボードフォーカス状態を管理するフラグ
  let isKeyboardFocus = false;

  //キーボードのフォーカス移動時には無効化する
  document.addEventListener('keydown', (event) => {
    if (event.key === 'Tab') {
      //Tabキーが押されたのでキーボード操作中
      isKeyboardFocus = true; 
      toggleDisabledClass(isKeyboardFocus);
    }
  });

  //マウス操作の検知で無効化を解除する
  document.addEventListener('mousedown', () => {
    if (isKeyboardFocus) {
      //マウス操作があったのでキーボードフォーカスを解除
      isKeyboardFocus = false;
      toggleDisabledClass(isKeyboardFocus);
    }
  });
}