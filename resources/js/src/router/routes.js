import Home from "@/src/pages/Home.vue";
import Catalog from "@/src/pages/Catalog.vue";

const routes = [
  {
    path: '/',
    component: Home,
    name: 'main',
    meta: {
      title: "Главная",
    },
  },
  {
    path: '/catalog',
    component: Catalog,
    name: 'catalog',
    meta: {
      title: "Каталог",
    }
  }
];

export default routes;
