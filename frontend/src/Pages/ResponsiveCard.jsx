export let settings4 = {
    //dots: true,
    focusOnSelect: true,
    infinite: false,
    speed: 500,
    slidesToShow: 5,
    slidesToScroll: 1,
    initialSlide: 0,
  
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          focusOnSelect: true,
          slidesToShow: 4,
          slidesToScroll: 1,
          infinite: true,
          // dots: true
        },
      },
      {
        breakpoint: 900,
        settings: {
          focusOnSelect: true,
          slidesToShow: 2,
          slidesToScroll: 1,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 550,
        settings: {
          focusOnSelect: true,
          slidesToShow: 3,
          slidesToScroll: 1,
        },
      },
    ],
  };