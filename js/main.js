const swiper = new Swiper(".swiper", {
  direction: "horizontal",
  loop: false,
  slidesPerView: 1.25,
  spaceBetween: 16,

  breakpoints: {
    360: {
      slidesPerView: 1.37,
    },
    400: {
      slidesPerView: 1.45,
    },
    460: {
      slidesPerView: 1.75,
    },
    520: {
      slidesPerView: 1.9,
    },
    600: {
      slidesPerView: 2.3,
    },
    680: {
      slidesPerView: 2.6,
    },
  },

  pagination: {
    el: ".swiper-pagination",
    bulletActiveClass: "bullet--active",
    horizontalClass: "bullet--gap",
  },
});

let pagination = document.querySelector(".swiper-pagination");
let buttonSnowBrands = document.querySelector(".brands__spoiler");
let brandsList = document.querySelector(".brands__list");

if (document.documentElement.clientWidth >= 768) {
  swiper.destroy();
  pagination.classList.add("hidden");
}

buttonSnowBrands.addEventListener("click", function () {
  brandsList.classList.toggle("brands__list--snow-all");
  buttonSnowBrands.classList.toggle("spoiler--active");
  if (buttonSnowBrands.classList.contains("spoiler--active")) {
    buttonSnowBrands.textContent = "Скрыть";
  } else {
    buttonSnowBrands.textContent = "Показать все";
  }
});
