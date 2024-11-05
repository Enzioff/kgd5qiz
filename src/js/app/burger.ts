class Burger {
	element;
	mobileMenu;
	body;

	constructor(element: Element) {
		this.element = element;
		this.mobileMenu = document.querySelector('[data-menu-mobile]');
		this.body = document.querySelector('body')

		this.init();
	}

	init() {
		this.initBurger();
	}

	initBurger() {
		this.element.addEventListener('click', () => {
			this.mobileMenu.classList.toggle('active');
			this.element.classList.toggle('active');
			this.body.classList.toggle('fixed');
		});
	}
}

export default Burger;
