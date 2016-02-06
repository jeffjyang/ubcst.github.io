$('.responsive').slick({
  dots: false,
  infinite: true,
  speed: 300,
  slidesToShow: 3,
  slidesToScroll: 1,
  nextArrow: '<button type="button" class="slick-next"><span class="glyphicon glyphicon-chevron-right"></span>&nbsp;</button>',
  prevArrow: '<button type="button" class="slick-prev"><span class="glyphicon glyphicon-chevron-left"></span>&nbsp;</button>',
  responsive: [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 3,
        infinite: true,
        dots: true
      }
    },
    {
      breakpoint: 600,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 2
      }
    },
    {
      breakpoint: 480,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1
      }
    }
  ]
});