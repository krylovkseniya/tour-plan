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
    const body = $("body");
    modal.addClass('modal_active');
    body.addClass('modal_open');
  }

  function closeModal() {
    const modal = $(".modal");
    const body = $("body");
    modal.removeClass('modal_active');
    body.removeClass('modal_open');
  }

  document.addEventListener('keydown', function(e) {
    if (e.key === 'Escape') {
      closeModal()
    }
  });


  // Обработка форм
  $(".form").each(function() {
    $(this).validate({
      errorClass: "invalid",
      messages: {
        name: {
          required: "Please specify your name",
          minlength: "Name must be at least 2 letters long",
        },
        email: {
          required: "Specify your email address for contact",
          email: "Your email address must be in the format of name@domain.com",
        },
        phone: {
          required: "Phone is required",
          minlength: "Please enter full number"
        }
      }
    });
  });

  // Маска номера
  $('.phone').mask('+7 (999) 999-99-90');

  // Анимация
  AOS.init();

});