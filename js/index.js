$(function() {
  //スクロールのオフセット値
  var offsetY = 0;
  //スクロールにかかる時間
  var time = 550;

  //ページ内リンクのみを取得
  $('a[href^=#]').click(function(){
    //移動先の要素を取得
    var target = $(this.hash);
    if (!target.length) return;
    //移動先となる要素を取得
    var targetY = target.offset().top+offsetY;
    //スクロールアニメーション
    $('html,body').animate({scrollTop: targetY}, time, 'swing');
    //ハッシュ書き換え
    window.history.pushState(null, null, this.hash);
    //デフォルトの処理はキャンセル
    return false;
  });
});

//解説
//　$('a[href^=#]').click(function())
//　⇛aタグ、href属性が#で始まる要素のみを取得する
//  ⇛このタグとhref属性のボタンがクリックされたときにfunction以下の処理を実行
