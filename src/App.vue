<script setup>
import { ref } from 'vue';
import Nav from './components/Nav.vue';
import Header from './components/Header.vue';

import { store } from './store/store';

const isOpen = ref(false);
</script>

<template>
	<Nav />
	<Header />
	<Layout>
		<router-view />
	</Layout>
</template>
