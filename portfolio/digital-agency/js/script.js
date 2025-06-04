// menu.onclick = function myFunction() {
// 	var x = document.getElementById('myTopnav');

// 	if (x.className === "topnav") {
// 		x.className += " responsive";
// 	} else {
// 		x.className = "topnav";
// 	}
// }

document.addEventListener("DOMContentLoaded", function () {
	const menuIcon = document.getElementById("menu");
	const topnav = document.getElementById("myTopnav");
	const headerMenu = document.querySelector(".header__menu");

	if (!menuIcon || !topnav || !headerMenu) {
		console.error("Menu icon, topnav, or header menu not found!");
		return;
	}

	menuIcon.addEventListener("click", function () {
		const isExpanded = headerMenu.classList.toggle("active");
		topnav.classList.toggle("active");
		menuIcon.setAttribute("aria-expanded", isExpanded);
		if (isExpanded) {
			topnav.querySelector("a").focus();
		} else {
			menuIcon.focus();
		}
	});

	menuIcon.addEventListener("keydown", function (event) {
		if (event.key === "Enter" || event.key === " ") {
			event.preventDefault();
			const isExpanded = headerMenu.classList.toggle("active");
			topnav.classList.toggle("active");
			menuIcon.setAttribute("aria-expanded", isExpanded);
			if (isExpanded) {
				topnav.querySelector("a").focus();
			} else {
				menuIcon.focus();
			}
		}
	});

	const links = document.querySelectorAll(".topnav__link");
	links.forEach(link => {
		link.addEventListener("click", function () {
			headerMenu.classList.remove("active");
			topnav.classList.remove("active");
			menuIcon.setAttribute("aria-expanded", "false");
			menuIcon.focus();
		});
	});

	document.addEventListener("click", function (event) {
		if (!topnav.contains(event.target) && !menuIcon.contains(event.target)) {
			headerMenu.classList.remove("active");
			topnav.classList.remove("active");
			menuIcon.setAttribute("aria-expanded", "false");
		}
	});
});

// слайдер

document.addEventListener('DOMContentLoaded', () => {
	new Swiper('.testimonials__carousel', {
		slidesPerView: 1, // Всегда показывать только 1 отзыв
		spaceBetween: 20, // Отступ между отзывами
		loop: true, // Бесконечная прокрутка
		centeredSlides: true, // Центрировать слайд
		autoplay: {
			delay: 5000, // Автопрокрутка каждые 5 секунд
			disableOnInteraction: false,
		},
		navigation: {
			nextEl: '.testimonials__carousel-btn--next',
			prevEl: '.testimonials__carousel-btn--prev',
		},
		pagination: {
			el: '.testimonials__pagination',
			clickable: true,
		},
	});
});