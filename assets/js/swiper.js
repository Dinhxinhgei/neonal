// ===== INTRODUCE =====
const introduce = new Swiper('.introduce__slider .swiper-container', {
    // Optional parameters
    slidesPerView : 1,
    speed: 3000,
    loop: true,
    spaceBetween : 30,
    effect: 'fade',
    fadeEffect: {
        crossFade: true,
    },

    // If we need pagination
    pagination: {
        el: '.introduce__slider .swiper-pagination',
        type: 'fraction',
    },

    // Event
    on: {
        slideChangeTransitionStart: function() {
            anime({
                targets: '.swiper-slide-active .introduce__item',
                opacity: [0, 1],
                easing: 'easeOutQuad',
                delay: 1000,
            });

            anime({
                targets: '.swiper-slide-active .introduce-slide-top',
                translateY: ['1000px', 0],
                easing: 'easeOutQuad',
                delay: anime.stagger(1000, {start: 1500}),
            });

            anime({
                targets: '.swiper-slide-active .introduce-char',
                keyframes: [
                    {
                        clipPath: 'polygon(-20% 0%, -15% 0%, -15% 100%, -20% 100%)',
                    },
                    {
                        clipPath: 'polygon(-15% 0%, 120% 0%, 120% 100%, -15% 100%)',
                    },
                ],
                opacity: [
                    {
                        value: 0,
                        duration: 500,
                    },
                    {
                        value: 1,
                        duration: 500,
                    }
                ],
                scaleY: [
                    { value: 1.5, duration: 500, },
                    { value: 1, duration: 500, },
                ],
                easing: 'easeOutQuad',
                delay: anime.stagger(300, {start: 1500}),
            });

            anime({
                targets: '.swiper-slide-active .introduce__img',
                opacity: [0, 1],
                translateY: ['700px', 0],
                easing: 'easeOutQuad',
                delay: 2300,
            });
        }
    }
});

// ===== TEAM =====
const team = new Swiper('.team__slider .swiper-container', {
    // Optional parameters
    slidesPerView : 1,
    speed: 500,
    loop: true,
    spaceBetween : 30,
    effect: 'fade',
    fadeEffect: {
        crossFade: true,
    },
  
    // Navigation arrows
    navigation: {
      nextEl: '.team__slider-navigation .slider-next',
      prevEl: '.team__slider-navigation .slider-prev',
    },

    // Event
    on: {
        slideChangeTransitionStart: function() {
            anime({
                targets: '.swiper-slide-active .team-slide-left',
                translateX: ['-700px' , 0],
                easing: 'easeOutQuad',
                duration: 2000,
            })

            anime({
                targets: '.swiper-slide-active .team__shape',
                opacity: [0, 0.1],
                easing: 'easeOutQuad',
                duration: 2000,
            })

            anime({
                targets: '.swiper-slide-active .team__member',
                translateX: ['700px' , 0],
                easing: 'easeOutQuad',
                duration: 2000,
            })
        }
    }
});

// ===== TESTIMONIAL =====
const testimonial = new Swiper('.testimonial__slider .swiper-container', {
    // Optional parameters
    slidesPerView : 1,
    speed: 1000,
    loop: true,
    spaceBetween : 30,
    autoplay: {
        delay: 3000,
        pauseOnMouseEnter: true,
        disableOnInteraction: false,
    },
  
    // Navigation arrows
    navigation: {
      nextEl: '.testimonial__slider-navigation .slider-next',
      prevEl: '.testimonial__slider-navigation .slider-prev',
    },
})