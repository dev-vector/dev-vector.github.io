// jQerry-cкрипт под бургер-меню.
$(document).ready(function () {
	$('.header__burger').click(function (event) {
		$('.header__burger,.header__menu').toggleClass('active');
		$('body').toggleClass('lock');
	});
	$('.header__menu-link').click(function (event) {
		$('.header__burger,.header__menu').toggleClass('active');
		$('body').toggleClass('lock');
	});
});
// ---

// Подключение плагина owl-carousel
$(document).ready(function () {
	$(".owl-carousel").owlCarousel({
		items: 8
	});
});

if ($(window).width() < 420) {
	$(".owl-carousel").owlCarousel({
		items: 3
	});
}