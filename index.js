document.addEventListener("DOMContentLoaded", () => {
  const header = document.querySelector("header");
  const mobileMenu = document.querySelector(".mobile-menu");

  const checkScroll = () => {
    if (window.scrollY > 20 && !header.classList.contains("scrolled")) {
      header.classList.add("scrolled");
      mobileMenu.classList.add("scrolled");
    } else if (window.scrollY < 20 && header.classList.contains("scrolled")) {
      header.classList.remove("scrolled");
      mobileMenu.classList.remove("scrolled");
    }
  };

  window.addEventListener("scroll", checkScroll);

  checkScroll();
  // console.log(callMeButton);
  const burgers = document.querySelectorAll(".burger-contain");
  if (burgers)
    burgers.forEach((burger) =>
      burger.addEventListener("click", (e) => {
        e.preventDefault();
        mobileMenu.classList.toggle("open");
        const boei1 = document.querySelector("#boei_close_trigger_message");
        const boei2 = document.querySelector("#boei_trigger_message");
        const boei3 = document.querySelector("#boei_button");
        
        if (boei1) boei1.classList.toggle("openedMenu");
        if (boei2) boei2.classList.toggle("openedMenu");
        if (boei3) boei3.classList.toggle("openedMenu");
      })
    );

  const mobileMenuContainer = document.querySelector(".menu-container");
  const modalOverlay = document.querySelector(".overlay");
  if (mobileMenuContainer) {
    mobileMenuContainer.addEventListener("click", (e) => {
      e.stopPropagation();
    });
  }

  if (modalOverlay) {
    modalOverlay.addEventListener("click", () => {
      mobileMenu.classList.remove("open");
      // callMeButton.classList.remove("open");
    });
  }

  const closeLinks = document.querySelectorAll(".close-link");
  if (closeLinks) {
    closeLinks.forEach((closeLink) => {
      closeLink.addEventListener("click", () => {
        mobileMenu.classList.remove("open");
      });
    });
  }

  const dateInput = document.getElementById("date-input");
  const dateLabel = document.querySelector(".date-label");

  if (dateInput) {
    dateInput.addEventListener("input", function () {
      if (this.value !== "") {
        dateLabel.classList.add("filled");
      } else {
        dateLabel.classList.remove("filled");
      }
    });
  }

  const swiper = new Swiper(".swiper", {
    loop: true,
    slidesPerView: 1,
    slidesPerGroup: 1,
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
        slidesPerGroup: 1,
        spaceBetween: 20,
      },

      768: {
        slidesPerView: 2,
        slidesPerGroup: 2,
        spaceBetween: 20,
      },

      1240: {
        slidesPerView: 3,
        slidesPerGroup: 3,
        spaceBetween: 40,
      },
    },
  });
});

$(document).ready(function () {
  $(".popup-link").magnificPopup({
    type: "image",
    closeBtnInside: false,
    image: {
      verticalFit: true,
    },
  });
});
