import Slider from './slider';
import Burger from './burger';
import Tabs from "./tabs";
import Social from "./social";
import ShowFullText from "./showFullText";
import Rating from "./rating";
import ShowMore from "./showMore";
import Counter from "./counter";
import {Fancybox} from "@fancyapps/ui";

class App {
    constructor() {
        this.init();
    }

    init = () => {
        this.createSlider();
        this.createBurger();
        this.createTabs();
        this.createSocial();
        this.createShowText();
        this.createRating();
        this.createShowMore();
        this.createCounter();
        this.createFancybox();
        this.createUp();
        this.createOpenQuestions();
    };

    createSlider() {
        const sliders = document.querySelectorAll('[data-slider]');
        if (!sliders) return;
        sliders.forEach((slider) => {
            new Slider(slider);
        });
    }

    createBurger() {
        const burger = document.querySelector('[data-burger]');
        if (!burger) return;
        new Burger(burger);
    }

    createTabs() {
        const tabs = document.querySelectorAll('[data-tab]')
        if (!tabs) return
        tabs.forEach(el => {
            new Tabs(el)
        })
    }

    createSocial() {
        const social = document.querySelector('[data-social]');
        if (!social) return;
        new Social(social);
    }

    createShowText() {
        const hiddenTextBlocks = document.querySelectorAll('[data-text-hidden]');
        if (!hiddenTextBlocks) return
        hiddenTextBlocks.forEach(element => {
            new ShowFullText(element)
        })
    }

    createRating() {
        const ratingBlocks = document.querySelectorAll('[data-rating]')
        if (!ratingBlocks) return
        ratingBlocks.forEach(rating => {
            new Rating(rating)
        })
    }

    createShowMore() {
        const showBlocks = document.querySelectorAll('[data-show]')
        if (!showBlocks) return
        showBlocks.forEach(el => {
            new ShowMore(el)
        })
    }

    createCounter() {
        const counters = document.querySelectorAll('[data-counter]');
        if (!counters) return
        counters.forEach(counter => {
            new Counter(counter)
        })
    }

    createFancybox() {
        Fancybox.bind('[data-fancybox]', {
            defaultType: 'inline'
        })
    }

    createUp() {
        const up = document.querySelector('.up');
        if (!up) return;
        up.addEventListener('click', () => {
            window.scrollTo({
                top: 0,
                behavior: 'smooth',
            })
        })

        window.addEventListener('scroll', ( ) => {
            const targetElement = document.documentElement
            const yOffset = targetElement.scrollTop;

            if (yOffset >= 900) {
                up.classList.add('active')
            } else {
                up.classList.remove('active')
            }
        })
    }

    createOpenQuestions() {
        const contents = document.querySelectorAll('.questions__content');
        if (!contents) return;
        contents.forEach(content => {
            const innerSliders = content.querySelectorAll('.slider');
            innerSliders.forEach(innerSlider => {
                const sliderSldies = innerSlider.querySelectorAll('.swiper-slide')
                const openBtn = innerSlider.querySelector('.button.button--news');

                openBtn.addEventListener('click', () => {
                    console.log('click')
                    const activeSlide = Array.from(sliderSldies).filter(el => el.classList.contains('swiper-slide-active'));
                    if (activeSlide[0]) {
                        const icons = activeSlide[0].querySelectorAll('.icon');
                        const answers = activeSlide[0].querySelectorAll('span');
                        icons.forEach(el => el.remove())
                        answers.forEach(answer => answer.style.display = 'flex');
                    }
                })
            })
        })
    }
}

export {App};
