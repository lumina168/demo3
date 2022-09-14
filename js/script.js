// ーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーー
// ↓読み込まれてるか確認する時まず↓   
// alert('test');
// ーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーー

// ーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーー
// ①ドロワーが開閉しないので開閉させるためscriptに記述
$(document).ready(function() {
    $('.drawer').drawer();
  });
// ーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーー
// drowerのメニュー(アンカー)をクリック時閉じたい。
// heder__nav_itemのaタグクリックしたらドロワーメニューが出現するクラスdrawer-openを切り替えてあげる
// ただこれだけだと閉じた後バーガーメニュー再度クリックした時ドロワーメニューが出現しない
// なのでまた再度、ドロワー開閉させるための①の記述を最後に持ってくる
// ーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーー
$(function() {
    $('.header__nav_item_link a[href^="#"]').click(function(){
    $('.drawer').toggleClass("drawer-open");
    $('.drawer').drawer()/*①*/
})
});


// ーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーー
// .header__nav_item_linkをクリックした後.header__nav_item_linkのis-activeを外す
// その後this→クリックした箇所にis-activeを付与してあげる
// ーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーー

$(function() {
    $('.header__nav_item_link').click(function(){
        $('.header__nav_item_link').removeClass('is-active')
        $(this).addClass('is-active');
    });
});


// ーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーー
// to-top
// ーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーー
$(function () {
    // スクロールしたら「トップに戻る」ボタンが表示される
    const toTopButton = $(".js-to-top");
    const scrollHeight = 100;
    toTopButton.hide();
    $(window).scroll(function () {
      if ($(this).scrollTop() > 100) {
        toTopButton.fadeIn();
      } else {
        toTopButton.fadeOut();
      }
  
      // ページの一番下でトップに戻るボタンが消える
      // const doch = $(document).innerHeight();
      // const winh = $(window).innerHeight();
      // const bottom = doch - winh;
      // if (bottom <= $(window).scrollTop()) {
      //   toTopButton.fadeOut();
      // }
    });
  
    // 「トップに戻る」ボタンをクリックしたらスクロールで戻る
    toTopButton.click(function () {
      $("body,html").animate({ scrollTop: 0 }, 800);
      return false;
    });
  });





// ーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーー
// ページ内遷移 スムーススクロール 高さも調節
// ーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーー

$('a[href^="#"]').on('click',function(){
  const header = $('.header').innerHeight();
  const id = $(this).attr('href')
  let position = 0;


  if( id != '#'){
    position = $(id).offset().top - header;
  }
  console.log(id);
  console.log(position);

  $('html,body').animate({
    scrollTop:position
  },400);

});




//  wowjs  ふわっとアニメーションの実装ーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーー
// animation-memo
// ↓WOWを使うための記述 1animate.cssファイル 2scriptCDN 3new WOW().init();が必要 4classをつける
new WOW().init();
// ーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーー




// ーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーー
// テキスト１文字ずつ表示ーーーーーーーーーーーーーーーーーーーー
// ーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーー

// eachTextAnimeにappeartextというクラス名を付ける定義
function EachTextAnimeControl() {
  $('.eachTextAnime').each(function () {
    var elemPos = $(this).offset().top - 100;
    var scroll = $(window).scrollTop();
    var windowHeight = $(window).height();
    if (scroll >= elemPos - windowHeight) {
      $(this).addClass("appeartext");

    } else {
      $(this).removeClass("appeartext");
    }
  });
}

// 画面をスクロールをしたら動かしたい場合の記述
$(window).scroll(function () {
  EachTextAnimeControl();/* アニメーション用の関数を呼ぶ*/
});// ここまで画面をスクロールをしたら動かしたい場合の記述


// 画面が読み込まれたらすぐに動かしたい場合の記述
$(window).on('load', function () {
  //spanタグを追加する
  var element = $(".eachTextAnime");
  element.each(function () {
    var text = $(this).text();
    var textbox = "";
    text.split('').forEach(function (t, i) {
      if (t !== " ") {
        if (i < 10) {
          textbox += '<span style="animation-delay:.' + i + 's;">' + t + '</span>';
        } else {
          var n = i / 10;
          textbox += '<span style="animation-delay:' + n + 's;">' + t + '</span>';
        }

      } else {
        textbox += t;
      }
    });
    $(this).html(textbox);
  });

  EachTextAnimeControl();/* アニメーション用の関数を呼ぶ*/
});// ここまで画面が読み込まれたらすぐに動かしたい場合の記述