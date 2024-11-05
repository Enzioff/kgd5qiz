class ShowMore {
    el;
    parentElement;
    showBtn;
    constructor(el: Element) {
        this.el = el;
        this.parentElement = this.el.parentNode
        this.showBtn = this.parentElement.querySelector('[data-show-more]')

        this.init()
    }

    init() {
        if (this.showBtn) {
            this.showBtn.addEventListener('click', () => {
                if (this.el.classList.contains('clip')) {
                    this.el.classList.remove('clip')
                    this.showBtn.classList.add('hidden')
                }
            })
        }
    }
}

export default ShowMore