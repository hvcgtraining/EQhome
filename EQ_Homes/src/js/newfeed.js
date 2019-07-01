
// Slick Card Left
$('.slick.newfeed-left-top').slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    autoplay: false,
    speed: 1000,
    asNavFor: '.slick.newfeed-left-bottom'
  });
  $('.slick.newfeed-left-bottom').slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    asNavFor: '.slick.newfeed-left-top',
    dots: true,
    arrows:false,
    autoplay: false,
    speed: 1000,
    // speed: 2000,
  });
// Slick Card Right
  $('.slick.newfeed-right-top').slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,  
    autoplay: false,
    asNavFor: '.slick.newfeed-right-bottom',
    speed: 1000,

  });
  $('.slick.newfeed-right-bottom').slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    asNavFor: '.slick.newfeed-right-top',
    dots: true,
    arrows: false,
    autoplay: false,
    speed: 1000,

  });



      


  // chitiet_bds

  $('.slider-tabs').slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    fade: true,
    asNavFor: '.slider-dots'
  });
  $('.slider-dots').slick({
    slidesToShow: 4,
    slidesToScroll: 1,
    asNavFor: '.slider-tabs',
    dots: false,
    centerMode: true,
    focusOnSelect: true
  });
    