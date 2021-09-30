import { createRouter, createWebHistory } from "vue-router";

const routes = [
  {
    path: "/",
    name: "Index",
    component: () => import("../views/Index.vue"),
  },
  {
    path: "/adopciones",
    name: "Adopciones",
    component: () => import("../views/Adopciones.vue"),
  },
  {
    path: "/register",
    name: "Register",
    component: () => import("../views/Register.vue"),
  },
  {
    path: "/login",
    name: "Login",
    component: () => import("../views/Login.vue"),
  },
  {
    path: "/admin",
    name: "Admin",
    component: () => import("../views/AdminVista.vue"),
  },
  {
    path: "/test",
    name: "test",
    component: () => import("../views/Test.vue"),
  },
  {
    path: "/petRegister",
    name: "Pet Register",
    component: () => import("../views/PetRegister.vue"),
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
