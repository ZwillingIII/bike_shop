import './bootstrap';
import { createApp } from "vue";
import App from './src/App.vue';
import router from "@/src/router/router.js";
import Vue3Marquee from 'vue3-marquee';

createApp(App)
    .use(router)
    .use(Vue3Marquee, { name: 'MarqueeAnimation' })
    .mount("#app");
