import { createWebHistory, createRouter } from "vue-router";
import App from '../pages/Home.vue';
import DetailCard from '../pages/DetailCard.vue';
import Match from '../pages/Match.vue';


const routes = [
	{
		path: "/",
		name: "Home",
		component: App,

	},
	{
		path: "/card/:id",
		name: "Card",
		props: true,
		component: DetailCard,
	},
	{
		path: "/match/:id",
		name: "Match",
		props: true,
		component: Match,
	},
];

export const router = createRouter({
	history: createWebHistory(),
	routes,
});

