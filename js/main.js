const swiper = new Swiper(".swiper", {
  // Optional parameters
  direction: "horizontal",
  loop: true,
  slidesPerView: 1.25,
  spaceBetween: 16,
  centerInsufficientSlides: true,

  pagination: {
    el: ".swiper-pagination",
    bulletActiveClass: "bullet--active",
    horizontalClass: "bullet--gap",
  },
});

let pagination = document.querySelector(".swiper-pagination");

if (document.documentElement.clientWidth >= 768) {
  swiper.destroy();
  pagination.classList.add("hidden");
}

let buttonSnowBrands = document.querySelector(".brands__spoiler");
let brandsList = document.querySelector(".brands__list");
console.log(brandsList);

buttonSnowBrands.addEventListener("click", function () {
  brandsList.classList.toggle("brands__list--snow-all");
  buttonSnowBrands.classList.toggle("spoiler--active");
  if (buttonSnowBrands.classList.contains("spoiler--active")) {
    buttonSnowBrands.textContent = "Скрыть";
  } else {
    buttonSnowBrands.textContent = "Показать все";
  }
});
