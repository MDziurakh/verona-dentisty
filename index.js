// Отримуємо елемент хедера
const header = document.querySelector("header");

// Додаємо подію прокрутки
window.addEventListener("scroll", () => {
  // Перевіряємо, чи проскролено сторінку більше ніж на 20px
  if (window.scrollY > 20) {
    // Додаємо клас, якщо проскролено більше 20px
    header.classList.add("scrolled");
  } else {
    // Видаляємо клас, якщо проскролено менше або дорівнює 20px
    header.classList.remove("scrolled");
  }
});

const swiper = new Swiper(".swiper", {
  loop: true,
  slidesPerView: 3,
  slidesPerGroup: 3,
  spaceBetween: 20,
  autoplay: {
    delay: 5000,
  },

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
