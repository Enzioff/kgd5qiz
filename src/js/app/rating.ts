class Rating {
    el;
    stars;
    rating;
    tempRating;
    ratingTotal: HTMLInputElement;

    constructor(el: Element) {
        this.el = el;
        this.stars = this.el.querySelectorAll('.star');
        this.rating = 0;
        this.tempRating = 0;
        this.ratingTotal = this.el.querySelector('[data-rating-input]')

        this.init()
    }

    init() {
        this.changeRating()
        this.saveRating()
    }

    changeRating() {
        this.stars.forEach((star, idx) => {
            star.addEventListener('mousemove', () => {
                this.tempRating = idx;
                this.stars.forEach((temp, innerIdx) => {
                    if (innerIdx <= this.tempRating) {
                        temp.classList.add('active')
                    } else {
                        temp.classList.remove('active')
                    }
                })
            })
            star.addEventListener('click', () => {
                this.rating = idx + 1;
            })
            star.addEventListener('touchstart', () => {
                this.rating = idx + 1;
            })
            star.addEventListener('touchend', () => {
                this.stars.forEach(temp => temp.classList.remove('active'))
                this.saveRating()
            })
        })
        this.el.addEventListener('mouseleave', () => {
            this.stars.forEach(temp => temp.classList.remove('active'))
            this.saveRating()
        })
    }

    saveRating() {
        this.stars.forEach((star, idx) => {
            if (idx + 1 <= this.rating) {
                star.classList.add('active')
            }
        })
        this.ratingTotal.value = `${this.rating}`
    }
}

export default Rating;