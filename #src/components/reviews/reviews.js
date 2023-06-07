{
    let reviewsSlider = document.querySelector('[data-slider="reviews"]');
    if(reviewsSlider) {
        let wrapper = reviewsSlider.querySelector('.swiper-wrapper');
        let sliderData = new Swiper(reviewsSlider.querySelector('.swiper'), {
            slidesPerView: 'auto',
            spaceBetween: 0,
            speed: 600,
            centeredSlides: true,
            loop: wrapper.children.length > 1 ? true : false,
            loopedSlides: 3,
            slideToClickedSlide: true,
            navigation: {
                nextEl: reviewsSlider.querySelector('.reviews__btn-next'),
            },
            breakpoints: {
                320: {
                    slidesPerView: 1,
                    spaceBetween: 0,
                    autoHeight: true,
                },
                768: {
                    slidesPerView: 'auto',
                    spaceBetween: 0,
                    autoHeight: false,
                }
            }
        });
    }
}