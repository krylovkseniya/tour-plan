$(document).ready(function () {
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

  const menuBurger = document.querySelector(".menu-burger");
  menuBurger.addEventListener("click", function () {
    console.log('Rkbr gj ryjgrt vty.');
    document.querySelector(".navbar-menu").classList.toggle("navbar-menu_visible");
  });

  const modalButton = $('[data-toggle="modal"]');
  const modalClose = $('.modal__close');
  const modalOverlay = $('.modal__overlay');
  modalButton.on('click', openModal);
  modalClose.on('click', closeModal);
  modalOverlay.on('click', closeModal);

  function openModal() {
    const modal = $(".modal");
    modal.addClass('modal_active');
  }

  function closeModal() {
    const modal = $(".modal");
    modal.removeClass('modal_active');
  }

  document.addEventListener('keydown', function(e) {
    if (e.key === 'Escape') {
      closeModal()
    }
  });


  // Обработка форм
  $('.modal__form').validate();
});