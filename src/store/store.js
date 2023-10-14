import { reactive } from 'vue';

export const store = reactive({
	cards: [
		{
			id: 1,
			title: 'Colors',
			description: 'Карточка для улучшение словарного запаса, состоит только из цветов.',
			color: '',
			terms: [
				{ term: 'black', definition: 'черный' },
				{ term: 'yellow', definition: 'желтый' },
				{ term: 'red', definition: 'красный' },
				{ term: 'green', definition: 'зеленый' },
			]
		},

	]
});