import './bootstrap';
import { createApp, provide } from "vue";
import App from './src/App.vue';
import router from "@/src/router/router.js";
import Vue3Marquee from 'vue3-marquee';
import store from "@/src/store/VuesStore.js";


const app = createApp(App)
  .use(router)
  .use(Vue3Marquee, { name: 'MarqueeAnimation' })
  .use(store);

// app.config.globalProperties.$emitter = emitter;

app.mount("#app");

export default app;
