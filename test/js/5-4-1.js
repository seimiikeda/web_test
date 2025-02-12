$(function () {
  $(".menu").click(function () {
    var i = $(this).index();

    $(".l-main__contentitem").hide();

    $(".l-main__contentitem").eq(i).fadeIn(1000);
  });
});
