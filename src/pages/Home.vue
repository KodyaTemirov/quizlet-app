<script setup>
import Card from '../components/Card.vue';
import { store } from '../store/store';
const { cards } = store;
</script>

<template>
	<ul role="list" class="divide-y divide-gray-100">
		<Card
			v-for="{ id, title, description, terms } in cards"
			:id="id"
			:title="title"
			:description="description"
			:count="terms.length"
		/>
	</ul>
</template>
