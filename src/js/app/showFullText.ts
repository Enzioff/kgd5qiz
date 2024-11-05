class ShowFullText {
    el;
    block;
    button;
    buttonText;

    constructor(el: Element) {
        this.el = el;
        this.block = this.el.querySelector('[data-hidden-block]')
        this.button = this.el.querySelector('[data-hidden-button]')
        this.buttonText = this.button.querySelector('span')

        this.init()
    }

    init() {
        this.button.addEventListener('click', () => {
            this.showBlock()
            this.changeButton()
        })
    }

    showBlock() {
        this.block.classList.toggle('visible')
    }

    changeButton() {
        if (this.block.classList.contains('visible')) {
            this.buttonText.textContent = 'Скрыть'
            this.button.classList.add('show-more--close')
        } else {
            this.buttonText.textContent = 'Ещё'
            this.button.classList.remove('show-more--close')
        }
    }
}

export default ShowFullText