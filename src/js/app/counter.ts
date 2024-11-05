class Counter {
    el;
    buttons;
    input;
    value;
    max;

    constructor(el: Element) {
        this.el = el;
        this.buttons = this.el.querySelectorAll('[data-counter-button]')
        this.input = this.el.querySelector('[data-counter-input]') as HTMLInputElement
        this.max = this.input.getAttribute('max')
        this.value = 0;

        this.init()
    }

    init() {
        this.update()
        this.change()
    }

    change() {
        this.buttons.forEach((el, idx) => {
            el.addEventListener('click', () => {
                if (idx === 0) {
                    if (this.value <= 0) {
                        this.value = 0;
                    } else {
                        this.value -= 1
                    }
                    this.update()
                } else{
                    if (this.value >= +this.max) {
                        this.value = +this.max
                    } else {
                        this.value += 1;
                    }
                    this.update()
                }
            })
        })

        this.input.addEventListener('input', () => {
            if (+this.input.value > +this.max) {
                this.input.value = this.max
            } else {
                this.value = +this.input.value
            }
            this.update()
        })
    }

    update() {
        this.input.value = `${this.value}`
        if (this.value === 0) {
            this.buttons[0].classList.add('counter__button--disabled')
        } else if (this.value === +this.max) {
            this.buttons[1].classList.add('counter__button--disabled')
        } else {
            this.buttons[0].classList.remove('counter__button--disabled')
            this.buttons[1].classList.remove('counter__button--disabled')
        }
    }
}

export default Counter