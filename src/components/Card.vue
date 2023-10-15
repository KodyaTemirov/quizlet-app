<script setup>
const props = defineProps(['title', 'description', 'color', 'count', 'id']);

const { title, description, color, count } = props;
</script>
<template>
	<li class="flex justify-between gap-x-6 py-5">
		<router-link :to="`/card/${id}`">
			<div class="flex min-w-0 gap-x-4">
				<div
					class="h-12 w-12 flex-none rounded-full bg-gray-300"
					style=""
				></div>
				<div class="min-w-0 flex-auto">
					<p class="text-sm font-semibold leading-6 text-gray-900">
						{{ title }}
					</p>
					<span class="bg-gray-200 py-1 px-2 rounded-full text-xs"
						>{{ count }} терминов</span
					>
					<p class="mt-1 truncate text-xs leading-5 text-gray-500">
						{{ description }}
					</p>
				</div>
			</div>
		</router-link>
		<div class="hidden shrink-0 sm:flex sm:flex-col sm:items-end">
			<Button>Редактировать</Button>
		</div>
	</li>
</template>
