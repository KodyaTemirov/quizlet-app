<script setup>
import { ref } from 'vue';
import { store } from '../store/store';
import Toggle from '../components/Toggle.vue';
const { cards } = store;
const props = defineProps(['id']);
const card = cards[props.id - 1];
const { title, description, terms } = card;

const sliderState = ref(terms);
const result = ref(false);

const nextHandler = id => {
	if (id < terms.length) {
		const nextActive = sliderState.value.map(item =>
			item.id === id + 1
				? { ...item, active: !item.active }
				: { ...item, active: false }
		);
		sliderState.value = nextActive;
	} else {
		result.value = true;
		console.log('ura');
	}
};

const doneHandler = id => {
	nextHandler(id);
};

const completed = terms.filter(item => item.completed === true);
const unCompleted = terms.filter(item => item.completed === false);

const percent = (unCompleted.length / terms.length) * 100;

const unCompletedStyle = {
	width: `${percent}%`,
};
const completedStyle = {
	width: `${100 - percent}%`,
};
</script>

<template>
	<div>
		<h1
			class="text-2xl font-bold leading-7 text-gray-900 sm:truncate sm:text-3xl sm:tracking-tight"
		>
			{{ title }}
		</h1>

		<p class="mt-4 text-gray-500 text-sm">
			{{ description }}
		</p>

		<Toggle
			v-show="result"
			v-for="{ id, term, definition, active } in sliderState"
			:count="terms.length"
			:id="id"
			:active="active"
			:term="term"
			:definition="definition"
			:done-handler="doneHandler"
			:key="`$${id}+${active}+${result}`"
		/>
	</div>
	<div class="flex w-full my-4">
		<div class="h-1 bg-green-500 rounded-l-sm" :style="completedStyle"></div>
		<div class="h-1 bg-gray-200 rounded-r-sm" :style="unCompletedStyle"></div>
	</div>
	<h3
		class="text-orange-500 text-xl font-bold leading-7 text-gray-900 sm:truncate sm:text-3xl sm:tracking-tight mb-4"
	>
		Изучаю ({{ unCompleted.length }})
	</h3>
	<div class="flex gap-1 flex-col">
		<div
			v-for="item in unCompleted"
			class="shadow p-4 bg-white flex justify-between"
		>
			<span>
				{{ item.term }}
			</span>
			<span>
				{{ item.definition }}
			</span>
		</div>
	</div>

	<h3
		class="mt-4 text-green-500 text-xl font-bold leading-7 text-gray-900 sm:truncate sm:text-3xl sm:tracking-tight mb-4"
	>
		Усвоено ({{ completed.length }})
	</h3>
	<div class="flex gap-1 flex-col">
		<div
			v-for="item in completed"
			class="p-4 shadow bg-white flex justify-between"
		>
			<span>
				{{ item.term }}
			</span>
			<span>
				{{ item.definition }}
			</span>
		</div>
	</div>
</template>
