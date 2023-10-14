import { createApp } from 'vue';
import './style.css';
import App from './App.vue';
import globalComponents from './components/global';
import { router } from './routes';

const app = createApp(App).use(router);


app.use(globalComponents);
app.mount('#app');
