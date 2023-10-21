import { createRouter, createWebHistory } from "vue-router";

const routes = [
  { path: "/", name: "home", component: () => import("../pages/Home.vue") },
  {
    path: "/destinations",
    name: "destinations",
    component: () => import("../pages/Destinations.vue"),
  },
  {
    path: "/crew",
    name: "crew",
    component: () => import("../pages/Crew.vue"),
  },
  {
    path: "/technology",
    name: "technology",
    component: () => import("../pages/Technology.vue"),
  },
];

export default createRouter({
  history: createWebHistory(),
  routes,
});
