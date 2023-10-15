import { reactive } from 'vue';

export const store = reactive({
	cards: [
		{
			id: 1,
			title: 'Цвета',
			description: 'Карточка для улучшение словарного запаса, состоит только из цветов.',
			color: '',
			terms: [
				{ id: 1, term: 'black', definition: 'черный', active: true, completed: true },
				{ id: 2, term: 'yellow', definition: 'желтый', active: false, completed: true },
				{ id: 3, term: 'red', definition: 'красный', active: false, completed: true },
				{ id: 4, term: 'green', definition: 'зеленый', active: false, completed: false },
			]
		},

	]
});