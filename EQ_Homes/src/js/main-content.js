$('.slide-content').slick({
    dots: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    arrows: false,
    infinite: false,
    autoplay: true,
    speed: 2000,
    responsive: [
        {
          breakpoint: 992,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 1,
            arrows: false,
            infinite: false,
            autoplay: true,
            speed: 2000,
          }
        },
        {
          breakpoint: 768,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 1,
            dots: false,
            arrows: false,
            infinite: false,
            autoplay: true,
            speed: 2000,
          }
        },
        {
          breakpoint: 568,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 1,
            dots: false,
            arrows: false,
            infinite: false,
            autoplay: true,
            speed: 2000,
          }
        },
        {
            breakpoint: 480,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1,
                dots: false,
                arrows: false,
                infinite: false,
                autoplay: true,
                speed: 2000,
            }
          }
      ]
});



$('.rentHome-left-top').slick({
  slidesToShow: 1,
  slidesToScroll: 1,
  arrows: false,
  asNavFor: '..rentHome-left-bottom',
  autoplay: true,
  autoplaySpeed: 2000,
});
$('.rentHome-left-bottom').slick({
  slidesToShow: 1,
  slidesToScroll: 5,
  asNavFor: '.rentHome-left-top',
  dots: false,
  centerMode: true,
  focusOnSelect: true,
  autoplay: true,
  autoplaySpeed: 2000,
});