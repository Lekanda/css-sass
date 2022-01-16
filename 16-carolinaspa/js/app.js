var swiper = new Swiper(".swiper", {
    effect: "cube",
    grabCursor: true,
    cubeEffect: {
      shadow: true,
      slideShadows: true,
      shadowOffset: 20,
      shadowScale: 0.94,
    },
    pagination: {
      el: ".swiper-pagination",
    },
});







// window.swiper = new Swiper({
//     el:'.slider__contenedor',
//     slideClass: 'slider__slide',
//     createElements: true,
//     autoplay: {
//         delay: 3000,
//     },
//     loop: true,
//     spaceBetween: 60,
//     pagination: true,
//     navigation: true
// });