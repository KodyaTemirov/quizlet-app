<script setup>
import { library } from '@fortawesome/fontawesome-svg-core';
import { faCheck } from '@fortawesome/free-solid-svg-icons';
import { faX } from '@fortawesome/free-solid-svg-icons';
import { faRankingStar } from '@fortawesome/free-solid-svg-icons';

library.add(faCheck, faX, faRankingStar);
import { ref } from 'vue';
import { TransitionRoot } from '@headlessui/vue';
const props = defineProps([
	'id',
	'term',
	'definition',
	'active',
	'doneHandler',
	'doNotHandler',
	'count',
]);
const { id, term, definition, active, doneHandler, doNotHandler, count } =
	props;
let isToggle = ref(true);

const toggleHandler = () => {
	isToggle.value = !isToggle.value;
};
</script>

<template>
	<div v-show="active">
		<TransitionRoot
			:show="isToggle"
			enter="transform transition duration-[400ms]"
			enter-from="opacity-0 rotate-[-120deg] scale-50"
			enter-to="opacity-100 rotate-0 scale-100"
			leave="transform duration-200 transition ease-in-out"
			leave-from="opacity-100 rotate-0 scale-100 "
			leave-to="opacity-0 scale-95 "
		>
			<div
				@click="toggleHandler"
				class="mt-4 p-4 py-48 shadow bg-white rounded-lg text-center text-3xl cursor-pointer"
			>
				<span class="select-none">
					{{ term }}
				</span>
			</div>
		</TransitionRoot>
		<TransitionRoot
			:show="!isToggle"
			enter="transform transition duration-[400ms]"
			enter-from="opacity-0 rotate-[-120deg] scale-50"
			enter-to="opacity-100 rotate-0 scale-100"
			leave="transform duration-200 transition ease-in-out"
			leave-from="opacity-100 rotate-0 scale-100 "
			leave-to="opacity-0 scale-95 "
		>
			<div
				@click="toggleHandler"
				class="mt-4 p-4 py-48 shadow bg-white rounded-lg text-center text-3xl cursor-pointer"
			>
				<span class="select-none">
					{{ definition }}
				</span>
			</div>
		</TransitionRoot>
		<div class="flex gap-4 mt-4 items-center justify-center">
			<button @click="doNotHandler(id)">
				<font-awesome-icon
					icon="fa-solid fa-x"
					class="rounded-full p-4 border w-6 h-6 border-solid border-gray-300 text-red-500 hover:bg-slate-200"
				/>
			</button>
			<span>{{ id }} / {{ count }}</span>
			<button @click="doneHandler(id)">
				<font-awesome-icon
					icon="fa-solid fa-check"
					class="rounded-full p-4 border w-6 h-6 border-solid border-gray-300 text-green-500 hover:bg-slate-200"
				/>
			</button>
		</div>
	</div>
</template>
