
// // Настройка по типам карточек, путем нажатия на кнопки

// $(function() {
// 	$('.toggles button').click(function(){
// 		var get_id = this.id;
// 		var get_current = $('.posts .' + get_id);

// 		$('.post').not(get_current).hide(500);
// 		get_current.show(500);
// 	});

// 	$('#showall').click(function() {
// 		$('.post').show(500);

// 	});
// });

// // Подключение плагина owl-carousel

// $(document).ready(function(){
//   $(".owl-carousel").owlCarousel({
//   	items:8
//   });
// });

// if($(window).width() < 420) {
// 	$(".owl-carousel").owlCarousel({
//   	items:3
//   });
// }

// Настройка фильтрации карточек в портфолио
// Фильтрация карточек в портфолио
$(function () {
	$('.portfolio__toggles .portfolio__toggle').click(function (e) {
		// Проверяем, не является ли кнопка #showall
		if ($(this).attr('id') === 'showall') {
			$('.portfolio__toggle').removeClass('portfolio__toggle--active');
			$(this).addClass('portfolio__toggle--active');
			$('.portfolio__post').show(500); // Показываем все посты
		} else {
			// Обработка остальных кнопок
			$('.portfolio__toggle').removeClass('portfolio__toggle--active');
			$(this).addClass('portfolio__toggle--active');
			var get_id = this.id;
			var get_current = $('.portfolio__posts .portfolio__post--' + get_id);
			$('.portfolio__post').not(get_current).hide(500);
			get_current.show(500);
		}
	});
});

// Подключение и настройка Owl Carousel
$(document).ready(function () {
	$('.clients__carousel').owlCarousel({
		loop: true, // Зацикливание карусели
		margin: 20, // Отступ между элементами
		responsive: {
			0: {
				items: 3 // До 768px — 3 элемента
			},
			769: {
				items: 4 // 769px–1024px — 4 элемента
			},
			1025: {
				items: 6 // Выше 1024px — 6 элементов
			}
		}
	});
});

//Активная кнопка

// $('.portfolio__toggles .portfolio__toggle').click(function () {
// 	$('.portfolio__toggle').removeClass('portfolio__toggle--active');
// 	$(this).addClass('portfolio__toggle--active');
// 	var get_id = this.id;
// 	var get_current = $('.portfolio__posts .portfolio__post--' + get_id);
// 	$('.portfolio__post').not(get_current).hide(500);
// 	get_current.show(500);
// });

// $('#showall').click(function () {
// 	$('.portfolio__toggle').removeClass('portfolio__toggle--active');
// 	$(this).addClass('portfolio__toggle--active');
// 	$('.portfolio__post').show(500);
// });