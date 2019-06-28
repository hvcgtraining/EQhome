$('.slide-content-small').slick({
    dots: false,
    slidesToShow: 3,
    slidesToScroll: 1,
    arrows: false,
    infinite: true,
    // autoplay: true,
    // dots: false,
    speed: 1000,
    autoplaySpeed: 1000,
    asNavFor: '.slide-content-big',
    responsive: [
        {
          breakpoint: 992,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 1,
            arrows: false,
            infinite: true,
            // autoplay: true,
            // speed: 2000,
          }
        },
        {
          breakpoint: 768,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 1,
            dots: false,
            arrows: false,
            infinite: true,
            // autoplay: true,
            // speed: 2000,
          }
        },
        {
          breakpoint: 568,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 1,
            dots: false,
            arrows: false,
            infinite: true,
            // autoplay: true,
            // speed: 2000,
          }
        },
        {
            breakpoint: 480,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1,
                dots: false,
                arrows: false,
                infinite: true,
                // autoplay: true,
                // speed: 2000,
            }
          }
      ]
});

$('.slide-content-big').slick({
  dots: true,
  slidesToShow: 3,
  slidesToScroll: 1,
  arrows: false,
  infinite: true,
  // autoplay: true,
  // dots: false,
  speed: 1000,
  autoplaySpeed: 1000,
  asNavFor: '.slide-content-small',
  responsive: [
      {
        breakpoint: 992,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          arrows: false,
          infinite: true,
          // autoplay: true,
          // speed: 2000,
        }
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          dots: false,
          arrows: false,
          infinite: true,
          // autoplay: true,
          // speed: 2000,
        }
      },
      {
        breakpoint: 568,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          dots: false,
          arrows: false,
          infinite: true,
          // autoplay: true,
          // speed: 2000,
        }
      },
      {
          breakpoint: 480,
          settings: {
              slidesToShow: 1,
              slidesToScroll: 1,
              dots: false,
              arrows: false,
              infinite: true,
              // autoplay: true,
              // speed: 2000,
          }
        }
    ]
});













$('.rentHome-left-top').slick({
  slidesToShow: 1,
  slidesToScroll: 1,
  arrows: false,
  asNavFor: '..rentHome-left-bottom',
  // autoplay: true,
  autoplaySpeed: 2000,
});
$('.rentHome-left-bottom').slick({
  slidesToShow: 1,
  slidesToScroll: 5,
  asNavFor: '.rentHome-left-top',
  dots: false,
  centerMode: true,
  focusOnSelect: true,
  // autoplay: true,
  autoplaySpeed: 2000,
});
