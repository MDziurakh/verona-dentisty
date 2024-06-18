document.addEventListener("DOMContentLoaded", () => {
  const header = document.querySelector("header");

  const checkScroll = () => {
    if (window.scrollY > 20) {
      header.classList.add("scrolled");
    } else {
      header.classList.remove("scrolled");
    }
  };

  window.addEventListener("scroll", checkScroll);

  checkScroll();
});

const swiper = new Swiper(".swiper", {
  loop: true,
  slidesPerView: 3,
  slidesPerGroup: 3,
  spaceBetween: 20,
  // autoplay: {
  //   delay: 5000,
  // },

  pagination: {
    el: ".swiper-pagination",
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },

  breakpoints: {
    320: {
      slidesPerView: 1,
      slidesPerGroup: 1, // count of single swipe
      spaceBetween: 20,
    },

    768: {
      slidesPerView: 2,
      slidesPerGroup: 2, // count of single swipe
      spaceBetween: 20,
    },

    1240: {
      slidesPerView: 3,
      slidesPerGroup: 3, // count of single swipe
      spaceBetween: 40,
    },
  },
});
