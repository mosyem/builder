import { createApp } from 'vue';
import './style.css';
import App from './App.vue';
import vuex from './store';

window.open("https://www.w3schools.com");

createApp(App) //
  .use(vuex) //
  .mount('#app');
