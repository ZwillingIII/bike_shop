import './bootstrap';
import { createApp, provide } from "vue";
import App from './src/App.vue';
import router from "@/src/router/router.js";
import Vue3Marquee from 'vue3-marquee';

const app = createApp(App)
    .use(router)
    .use(Vue3Marquee, { name: 'MarqueeAnimation' });

const eventBus = {
  listeners: {},
  $on(event, callback) {
    if (!this.listeners[event]) {
      this.listeners[event] = [];
    }
    this.listeners[event].push(callback);
  },
  $emit(event, ...args) {
    if (this.listeners[event]) {
      this.listeners[event].forEach(callback => {
        callback(...args);
      });
    }
  }
}

provide('eventBus', eventBus);

app.mount("#app");
