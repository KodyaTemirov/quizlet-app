<script setup>
import { ref } from 'vue';
import Card from '../components/Card.vue';
import { store } from '../store/store';

const isOpen = ref(false);
const { cards } = store;

const openModal = () => {
	isOpen.value = true;
};
</script>

<template>
	<ul role="list" class="divide-y divide-gray-100">
		<Card
			v-for="{ title, description } in cards"
			:title="title"
			:description="description"
		/>
	</ul>
</template>
