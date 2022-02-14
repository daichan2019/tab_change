jQuery(function ($) {
  $('.header__nav-tab').click(function () {
    $('.active').removeClass('active');
    $(this).addClass('active');
    $('.show').removeClass('show');
    // クリックしたタブからインデックス番号を取得
    const index = $(this).index();
    // クリックしたタブと同じインデックス番号をもつコンテンツを表示
    $('.contents__panel').eq(index).addClass('show');
  });
});