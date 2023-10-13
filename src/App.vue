<script setup>
import { ref } from 'vue';
import Nav from './components/Nav.vue';
import Modal from './components/Modal.vue';
import Header from './components/Header.vue';

const isOpen = ref(false);

const openModal = () => {
	isOpen.value = true;
};
</script>

<template>
	<Nav />
	<Header />
	<Button :value="sdasd" />
	<button v-on:click="openModal">Click</button>

	<Modal :isOpen="isOpen" />
</template>
