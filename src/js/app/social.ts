interface lightBlocksCoordsProps {
    topPosition: number,
    bottomPosition: number
}

class Social {
    el;
    lightBlocks: NodeListOf<HTMLElement>;
    lightBlocksCoords: lightBlocksCoordsProps[];

    constructor(el: Element) {
        this.el = el as HTMLElement;
        this.lightBlocks = document.querySelectorAll('.section--color--light');
        this.lightBlocksCoords = [];
        this.lightBlocks.forEach((el): void => {
            const topPosition = el.offsetTop;
            const bottomPosition = el.offsetTop + el.offsetHeight;
            this.lightBlocksCoords.push({topPosition, bottomPosition})
        })

        this.init()
    }

    init() {
        this.checkLightBlockCollision()
    }

    checkLightBlockCollision() {
        window.addEventListener('scroll', () => {
            const targetElement = document.documentElement
            const yOffset = targetElement.scrollTop;
            const elTopPosition = this.el.offsetTop - (this.el.offsetHeight / 2);
            const elBottomPosition = this.el.offsetTop + (this.el.offsetHeight / 2);

            this.el.style.top = `${yOffset + this.el.offsetHeight * 2}px`;

            const currentBlock = this.lightBlocksCoords.filter(el => {
                if (elBottomPosition > el.topPosition && elTopPosition < el.bottomPosition) {
                    return el
                }
            })

            if (currentBlock.length !== 0) {
                this.el.classList.add('socials--black')
            } else {
                this.el.classList.remove('socials--black')
            }
        })
    }
}

export default Social