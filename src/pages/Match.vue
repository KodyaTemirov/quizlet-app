<script setup>
import { ref, watch, onMounted } from 'vue';
import { store } from '../store/store';

const { cards } = store;
const props = defineProps(['id']);
const card = cards[props.id - 1];
const { terms } = card;

let clickCount = ref(0);
const firstValue = ref({});
const secondValue = ref({});

function shuffle(array) {
	var currentIndex = array.length,
		temporaryValue,
		randomIndex;

	// While there remain elements to shuffle...
	while (0 !== currentIndex) {
		// Pick a remaining element...
		randomIndex = Math.floor(Math.random() * currentIndex);
		currentIndex -= 1;

		// And swap it with the current element.
		temporaryValue = array[currentIndex];
		array[currentIndex] = array[randomIndex];
		array[randomIndex] = temporaryValue;
	}

	return array;
}

const allTerms = ref(
	shuffle([
		...terms.map(item => {
			return {
				id: item.id,
				value: item.term,
				checked: false,
			};
		}),
		...terms.map(item => {
			return {
				id: item.id,
				value: item.definition,
				checked: false,
			};
		}),
	])
);

const selectCard = term => {
	const isFirst = clickCount.value === 0;
	const isSecond = clickCount.value === 1;

	if (isFirst) {
		clickCount.value++;
		firstValue.value = term;
		term.checked = true;
	} else if (isSecond) {
		clickCount.value = 0;
		secondValue.value = term;
		term.checked = true;

		setTimeout(() => {
			const unCheckedItems = allTerms.value.map(item => {
				const newItem = { ...item, checked: false };
				return newItem;
			});
			allTerms.value = unCheckedItems;
		}, 500);

		const isMatched =
			secondValue.value.id === firstValue.value.id &&
			firstValue.value.value !== secondValue.value.value;

		if (isMatched) {
			const deleteItem = allTerms.value.filter(
				({ id }) => id !== firstValue.value.id
			);
			allTerms.value = deleteItem;
		}
	}
};
</script>

<template>
	<div class="grid grid-cols-4 gap-2 flex-wrap">
		<div
			v-for="(item, index) in allTerms"
			@click="selectCard(item)"
			class="p-10 box-border w-full bg-white border-2 solid border-gray-200 rounded-2xl text-xl text-center hover:bg-slate-100 select-none hover:cursor-pointer"
			:class="{ 'bg-gray-100 border-blue-500': item.checked }"
		>
			{{ item.value }}
		</div>
	</div>
</template>
