import { createWebHistory, createRouter } from "vue-router";

import HomeVue from "./pages/Home.vue";
import CategoryVue from "./pages/Category.vue";
import PlatformVue from "./pages/Platform.vue";

const routes = [
  {
    path: "/",
    name: "Home",
    component: HomeVue,
  },
  {
    path: "/Category",
    name: "Category",
    component: CategoryVue,
  },
  {
    path: "/Platform",
    name: "Platform",
    component: PlatformVue,
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
