"use strict";

$('.slide-content').slick({
  dots: true,
  slidesToShow: 3,
  slidesToScroll: 1,
  arrows: false,
  infinite: false,
  autoplay: true,
  speed: 2000,
  responsive: [{
    breakpoint: 992,
    settings: {
      slidesToShow: 2,
      slidesToScroll: 1,
      arrows: false,
      infinite: false,
      autoplay: true,
      speed: 2000
    }
  }, {
    breakpoint: 768,
    settings: {
      slidesToShow: 2,
      slidesToScroll: 1,
      dots: false,
      arrows: false,
      infinite: false,
      autoplay: true,
      speed: 2000
    }
  }, {
    breakpoint: 568,
    settings: {
      slidesToShow: 2,
      slidesToScroll: 1,
      dots: false,
      arrows: false,
      infinite: false,
      autoplay: true,
      speed: 2000
    }
  }, {
    breakpoint: 480,
    settings: {
      slidesToShow: 1,
      slidesToScroll: 1,
      dots: false,
      arrows: false,
      infinite: false,
      autoplay: true,
      speed: 2000
    }
  }]
});