import { createApp } from 'vue';
import './style.css';
import App from './App.vue';
import globalComponents from './components/global';
const app = createApp(App);

app.use(globalComponents);

app.mount('#app');
