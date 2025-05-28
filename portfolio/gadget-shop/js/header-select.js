// Нашли контейнер с селектом

document.addEventListener('DOMContentLoaded', () => {
	const burger = document.querySelector('.header__burger');
	const bottomRow = document.querySelector('.header__bottom-row');
	const selectAllElements = document.querySelectorAll('[data-select]');

	if (!burger || !bottomRow) {
		console.error('Burger or bottom row not found in DOM');
		return;
	}

	// Обработчик для гамбургер-меню
	burger.addEventListener('click', (e) => {
		e.stopPropagation(); // Предотвращаем всплытие события
		burger.classList.toggle('active');
		bottomRow.classList.toggle('active-burger');
		// Закрываем все открытые меню категорий при открытии гамбургер-меню
		document.querySelectorAll('.category-menu__dropdown').forEach(dropdown => {
			dropdown.classList.add('hidden');
		});
	});

	// Обработчик для кастомного выпадающего меню категории
	selectAllElements.forEach(function (item) {
		item.addEventListener('click', function (event) {
			event.stopPropagation(); // Предотвращаем всплытие события
			const realSelect = this.nextElementSibling;
			const dropdown = this.querySelector('.category-menu__dropdown');

			if (event.target.hasAttribute('data-select-item')) {
				const itemTitle = event.target.getAttribute('data-select-item');
				this.querySelector('[data-select-title]').textContent = itemTitle;
				dropdown.classList.add('hidden'); // Закрываем меню категорий после выбора
				if (realSelect) {
					realSelect.value = itemTitle;
				}
				// Закрываем гамбургер-меню при выборе пункта категории
				burger.classList.remove('active');
				bottomRow.classList.remove('active-burger');
			} else {
				dropdown.classList.toggle('hidden'); // Открываем/закрываем меню категорий
				// Закрываем гамбургер-меню при открытии меню категорий
				burger.classList.remove('active');
				bottomRow.classList.remove('active-burger');
			}
		});
	});

	// Закрытие обоих меню при клике вне их
	document.addEventListener('click', (e) => {
		if (!e.target.closest('.header__burger') && !e.target.closest('.header__bottom-row')) {
			// Закрываем гамбургер-меню
			burger.classList.remove('active');
			bottomRow.classList.remove('active-burger');
		}
		if (!e.target.closest('[data-select]')) {
			// Закрываем все открытые меню категорий
			document.querySelectorAll('.category-menu__dropdown').forEach(dropdown => {
				dropdown.classList.add('hidden');
			});
		}
	});
	// Закрытие обоих меню при клике на ссылку. Не дорабтано...
	// document.querySelectorAll('.header-nav__link, .nav-dropdawn__dropdawn-item').forEach(item => {
	// 	item.addEventListener('click', () => {
	// 		burger.classList.remove('active');
	// 		bottomRow.classList.remove('active-burger');
	// 	});
	// });
});


