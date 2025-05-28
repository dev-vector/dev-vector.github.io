$(document).ready(function () {
	$("#carousel-header").owlCarousel({
		items: 1,
		nav: true,
		navText: [""],
		loop: true,
	});
});

// MAIN-Бургер-меню 

document.addEventListener('DOMContentLoaded', () => {
	const navToggle = document.querySelector('.navigation__toggle');
	const navList = document.querySelector('.navigation__list');

	if (navToggle && navList) {
		navToggle.addEventListener('click', (e) => {
			e.stopPropagation();
			navToggle.classList.toggle('active');
			navList.classList.toggle('active');
		});

		// Закрытие при клике вне
		document.addEventListener('click', (e) => {
			if (!navToggle.contains(e.target) && !navList.contains(e.target)) {
				navToggle.classList.remove('active');
				navList.classList.remove('active');
			}
		});
	}
});