"use strict";

$(".nav-box1").click(function (e) {
  e.stopPropagation(); // Ngan chan su kien click lan toa ra thang cha
  // Ẩn het toan bo nhung thang khac

  var navsub = $(this).find(".nav-sub__list");

  if ($(this).hasClass('active') == false) {
    $(".nav-box1.active").removeClass('active').find('.nav-sub__list').slideUp('swing');
    $(this).addClass('active');
    navsub.slideDown('swing');
  } else {
    $(".nav-box1.active").removeClass('active').find('.nav-sub__list').slideUp('swing');
  }
});
$('body').click(function (e) {
  $(".nav-box1.active").removeClass('active').find('.nav-sub__list').slideUp('swing');
}); // 

$(".dropdown-nav").click(function (e) {
  e.stopPropagation(); // Ngan chan su kien click lan toa ra thang cha
  // Ẩn het toan bo nhung thang khac

  var navsub = $(this).find(".nav__list");

  if ($(this).hasClass('checked') == false) {
    $(".dropdown-nav.checked").removeClass('checked').find('.nav__list').slideUp('swing');
    $(this).addClass('checked');
    navsub.slideDown('swing');
  } else {
    $(".dropdown-nav.checked").removeClass('checked').find('.nav__list').slideUp('swing');
  }
});
$('body').click(function (e) {
  $(".dropdown-nav.checked").removeClass('checked').find('.nav__list').slideUp('swing');
});
$('body').click(function (e) {
  // console.log(e.target)
  if (e.target.tagName == 'BODY' || e.target.tagName == 'form') {
    $("body").removeClass('bg-form');
    $(".sign-up").css({
      opacity: 0,
      "pointer-events": "none",
      display: 'none'
    });
  }
});
$(".click-sign-up").click(function () {
  $(".sign-up").css("display", "flex");
  $(".sign-up").css("opacity", "1");
  $(".sign-up").css("pointer-events", "auto");
  $("body").addClass('bg-form');
});