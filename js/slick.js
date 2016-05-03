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
        nextArrow: '<button type="button" class="slick-next"><span class="glyphicon glyphicon-chevron-right"></span>&nbsp;</button>',
        prevArrow: '<button type="button" class="slick-prev"><span class="glyphicon glyphicon-chevron-left"></span>&nbsp;</button>',
        slidesToShow: 3,
        slidesToScroll: 1
      }
    },
    {
      breakpoint: 600,
      settings: {
        nextArrow: '<button type="button" class="slick-next"><span class="glyphicon glyphicon-chevron-right"></span>&nbsp;</button>',
        prevArrow: '<button type="button" class="slick-prev"><span class="glyphicon glyphicon-chevron-left"></span>&nbsp;</button>',
        slidesToShow: 2,
        slidesToScroll: 1
      }
    },
    {
      breakpoint: 480,
      settings: {
        nextArrow: '<button type="button" class="slick-next"><span class="glyphicon glyphicon-chevron-right"></span>&nbsp;</button>',
        prevArrow: '<button type="button" class="slick-prev"><span class="glyphicon glyphicon-chevron-left"></span>&nbsp;</button>',
        slidesToShow: 1,
        slidesToScroll: 1
      }
    }
  ]
});