class Tabs {
    el;
    headElements: NodeListOf<HTMLElement>;
    contentElements: NodeListOf<HTMLElement>;
    selectElement: HTMLSelectElement;

    constructor(el: Element) {
        this.el = el;
        this.headElements = this.el.querySelectorAll('[data-tab-header]')
        this.contentElements = this.el.querySelectorAll('[data-tab-content]')
        this.selectElement = this.el.querySelector('[data-tab-select]')

        this.init()
    }

    init() {
        this.selectElement.addEventListener('change', (evt) => {
            const selectElement = evt.target as HTMLSelectElement;
            const idx = selectElement.selectedIndex
            this.removeClasses(this.contentElements)
            this.contentElements.item(idx).classList.add('active')
        })

        this.headElements.forEach((el, idx) => {
            el.addEventListener('click', () => {
                this.removeClasses(this.headElements)
                this.removeClasses(this.contentElements)
                el.classList.add('active')
                this.contentElements.item(idx).classList.add('active')
            })
        })
    }

    removeClasses(elements: NodeListOf<HTMLElement>) {
        elements.forEach(temp => temp.classList.remove('active'))
    }
}

export default Tabs