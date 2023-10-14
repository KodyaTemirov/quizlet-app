<script setup>
import { ref } from 'vue';
import Nav from './components/Nav.vue';
import Modal from './components/Modal.vue';
import Card from './components/Card.vue';

import Header from './components/Header.vue';
import { store } from './store/store';

const isOpen = ref(false);
const { cards } = store;

const openModal = () => {
	isOpen.value = true;
};
</script>

<template>
	<Nav />
	<Header />
	<Layout>
		<router-view />
	</Layout>
</template>
