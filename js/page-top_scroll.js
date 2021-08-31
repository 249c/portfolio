$('#page-top').click(function () {
  $('body,html').animate({
      scrollTop: 0
  }, 500);//scroll speed
  return false;//リンク自体の無効化
});