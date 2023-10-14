import { createWebHistory, createRouter } from "vue-router";
import App from '../pages/Home.vue';
import DetailCard from '../pages/DetailCard.vue';


const routes = [
	{
		path: "/",
		name: "Home",
		component: App,

	},
	{
		path: "/card/:id",
		name: "About",
		props: true,
		component: DetailCard,
	},
];

export const router = createRouter({
	history: createWebHistory(),
	routes,
});

