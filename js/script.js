var swiper = new Swiper(".slide-content", {
    slidesPerView: 3, // Corrected typo here
    spaceBetween: 25,
    loop: true,
    centeredSlides: true, // Changed from centerSlide to centeredSlides
    fadeEffect: { // Changed from fade to fadeEffect
        crossFade: true
    },
    grabCursor: true, // Corrected typo here
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
        dynamicBullets: true,
    },
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },
    breakpoints: {
        0: {
            slidesPerView: 1,
        },
        520: {
            slidesPerView: 2,
        },
        950: {
            slidesPerView: 3,
        },
    },
});
