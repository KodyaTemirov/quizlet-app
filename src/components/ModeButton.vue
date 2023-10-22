<script setup>
const props = defineProps(['to']);

const { to } = props;
</script>
<template>
	<router-link
		:to="to"
		type="button"
		class="items-center rounded-md bg-white px-3 py-2 text-sm font-semibold text-gray-800 shadow-sm hover:shadow focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600 w-full flex gap-3 border-b-4 border-white border-solid hover:border-indigo-200"
	>
		<slot />
	</router-link>
</template>
