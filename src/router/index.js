import { createRouter, createWebHistory } from "vue-router";
import LoginView from "@/views/LoginView.vue";
import ProfileView from "@/views/ProfileView.vue";
import ListAnimaisView from "@/views/ListAnimaisView.vue";
import DetailView from "@/views/DetailView.vue";
import HomeView from "@/views/HomeView.vue";
import CadastroView from "@/views/CadastroView.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "login",
      component: LoginView,
    },
    {
      path: "/home",
      name: "home",
      component: HomeView,
    },
    {
      path: "/detail/:id",
      name: "detail",
      component: DetailView,
    },
    {
      path: "/listanimais",
      name: "listanimais",
      component: ListAnimaisView,
    },
    {
      path: "/profile",
      name: "profile",
      component: ProfileView,
    },
    {
      path: "/cadastro",
      name: "cadastro",
      component: CadastroView,
    },
  ],
});

export default router;
