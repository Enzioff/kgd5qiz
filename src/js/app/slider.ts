import Swiper from 'swiper';
import 'swiper/css';
import {Autoplay, EffectCoverflow, Navigation, Pagination, Thumbs} from 'swiper/modules';

class Slider {
    element: Element;
    slider: Swiper;
    desktop: MediaQueryList;
    slidesCount: number;

    constructor(element: Element) {
        this.element = element;
        this.desktop = window.matchMedia('(max-width: 767px)');
        this.slidesCount = +this.element.getAttribute('data-slides')
        this.init();
    }

    init() {
        this.initSlider();
    }

    initSlider() {
        switch (this.element.getAttribute('data-slider')) {
        case 'grid':
            this.initGamesSlider();
            break;
        case 'newsDetail':
            this.initNewsDetailSlider();
            break;
        case 'default':
            this.initDefaultSlider();
            break;
        case 'double':
            this.initDoubleSlider();
            break;
        case 'thumbs':
            this.initThumbsSlider();
            break;
        case 'infinite':
            this.initInfiniteSlider();
            break;
        case 'about':
            this.initAboutSlider();
            break;
        }
    }

    initGamesSlider() {
        const swiper = this.element.querySelector('.swiper') as HTMLElement;
        this.slider = new Swiper(swiper, {
                modules: [Pagination],
                initialSlide: 1,
                slidesPerView: 'auto',
                spaceBetween: 0,
                centeredSlides: true,
                breakpoints: {
                    767: {
                        slidesPerView: 3,
                    },
                },

                pagination: {
                    el: this.element.querySelector('.swiper-pagination') as HTMLElement,
                    clickable: true,
                },
            }
        );
    }

    initNewsDetailSlider() {
        const swiper = this.element.querySelector('.swiper') as HTMLElement;
        this.slider = new Swiper(swiper, {
                modules: [Pagination, Navigation, EffectCoverflow],
                initialSlide: 1,
                slidesPerView: 1,
                spaceBetween: 20,
                centeredSlides: true,
                effect: "coverflow",
                coverflowEffect: {
                    rotate: 0,
                    stretch: -65,
                    depth: 300,
                    modifier: 1,
                    slideShadows: false,
                },
                breakpoints: {
                    767: {
                        slidesPerView: 3,
                    },
                },
                pagination: {
                    el: this.element.querySelector('.swiper-pagination'),
                    clickable: true,
                },
            }
        );
    }

    initDefaultSlider() {
        const swiper = this.element.querySelector('.swiper') as HTMLElement;
        const prevEl = swiper.querySelector('.swiper-btn--prev');
        const nextEl = swiper.querySelector('.swiper-btn--next');
        const pagination = swiper.querySelector('.swiper-pagination');

        this.slider = new Swiper(swiper, {
                modules: [Navigation, Pagination],
                slidesPerView: 1,
                spaceBetween: 20,
                navigation: {
                    nextEl: nextEl,
                    prevEl: prevEl ? prevEl : null,
                    disabledClass: 'swiper-btn--disabled',
                },
                pagination: {
                    el: pagination ? pagination : null,
                    clickable: true,
                },
                breakpoints: {
                    1199: {
                        slidesPerView: this.slidesCount ? this.slidesCount : 1,
                    }
                }
            }
        );
    }

    initDoubleSlider() {
        const swiper = this.element.querySelector('.swiper') as HTMLElement;
        this.slider = new Swiper(swiper, {
                modules: [Navigation],
                slidesPerView: 1,
                spaceBetween: 0,
                navigation: {
                    nextEl: swiper.querySelector('.swiper-btn--next')
                },
                breakpoints: {
                    1199: {
                        slidesPerView: 2,
                    }
                }
            }
        );
    }

    initThumbsSlider() {
        const swiper = this.element.querySelector('.swiper');
        const thumb = this.element.parentNode.querySelector('[data-thumb] .swiper')

        const thumbSlider = new Swiper(thumb, {
                modules: [Pagination],
                initialSlide: 1,
                slidesPerView: 'auto',
                spaceBetween: 0,
                centeredSlides: true,
                breakpoints: {
                    1199: {
                        slidesPerView: 3,
                    },
                },
                pagination: {
                    el: thumb.querySelector('.swiper-pagination'),
                    clickable: true,
                },
            }
        );

        new Swiper(swiper, {
            modules: [Navigation, Thumbs],
            initialSlide: 1,
            slidesPerView: 'auto',
            spaceBetween: 0,
            thumbs: {
                swiper: thumbSlider,
            },
            navigation: {
                prevEl: swiper.querySelector('.swiper-btn--prev'),
                nextEl: swiper.querySelector('.swiper-btn--next'),
            }
        })
    }

    initInfiniteSlider() {
        const swiper = this.element.querySelector('.swiper');
        this.slider = new Swiper(swiper, {
            modules: [Autoplay],
            spaceBetween: 20,
            centeredSlides: true,
            speed: 3000,
            autoplay: {
                delay: 1,
            },
            loop: true,
            slidesPerView: 2,
            allowTouchMove: false,
            disableOnInteraction: true,
            updateOnImagesReady: true,
            breakpoints: {
                1200: {
                    slidesPerView: 5,
                }
            }
        });
    }

    initAboutSlider() {
        const swiper = this.element.querySelector('.swiper');
        this.slider = new Swiper(swiper, {
            modules: [Navigation, Pagination],
            slidesPerView: 'auto',
            spaceBetween: 20,
            watchSlidesProgress: true,
            breakpoints: {
                1200: {
                    spaceBetween: 48,
                }
            },
            pagination: {
                el: swiper.querySelector('.swiper-pagination'),
                clickable: true,
            },
            navigation: {
                prevEl: swiper.querySelector('.swiper-btn--prev'),
                nextEl: swiper.querySelector('.swiper-btn--next'),
            }
        });
    }
}

export default Slider;
