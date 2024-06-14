
// --- Swiper ---

const swiperTop = new Swiper('.top__swiper',  {

    // Optional parameters
    effect: 'fade',    
    autoplay: {
        delay: 3500,
        disableOnInteraction: false,
    },
    // Navigation arrows
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
  });


const swiperAbout = new Swiper('.about__slider', {
  slidesPerView: 3,
  spaceBetween: -200,
  freeMode: true,
  autoplay: {
    delay: 4500,
    disableOnInteraction: false,
  },
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
});

// --- Swiper end ---

document.querySelectorAll('.accordeon__triger').forEach((item) => {
  item.addEventListener('click', () => {
    item.parentNode.classList.toggle('accordeon__item-active');
  })
});


