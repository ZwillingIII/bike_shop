import { createRouter, createWebHistory } from "vue-router";
import routes from "./routes.js";

const router = createRouter({
    history: createWebHistory(),
    routes
});

router.beforeEach((to, from) => {
  document.title = to.meta?.title ?? "WB"
});

export default router;
