const hotelSlider = new Swiper('.hotel-slider', {
    // Optional parameters
  loop: true,

  // Navigation arrows
  navigation: {
    nextEl: '.slider-button_next',
    prevEl: '.slider-button_prev',
  },

  effect: "fade",

  keyboard: {
      enabled: true,
  },
});


const reviewsSlider = new Swiper('.reviews-slider', {
  // Optional parameters
  loop: true,

  // Navigation arrows
  navigation: {
    nextEl: '.reviews-slider__button_next',
    prevEl: '.reviews-slider__button_prev',
  },

  keyboard: {
      enabled: true,
  },
});