export const sliderSettings = {
  className: 'center',
  centerMode: true,
  infinite: true,
  //   centerPadding: '60px',
  slidesToShow: 3,
  slidesToScroll: 1,
  rows: 1,
  speed: 500,
  responsive: [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 2,
        infinite: true,
        // dots: true,
      },
    },
    {
      breakpoint: 700,
      settings: {
        slidesToShow: 1,
        centerMode: false,
        slidesToScroll: 1,
        initialSlide: 2,
      },
    },
  ],
};
