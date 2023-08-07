import { createRouter, createWebHistory } from "vue-router";
import LoginView from "@/views/LoginView.vue";
import ProfileView from "@/views/ProfileView.vue";
import ListAnimaisView from "@/views/ListAnimaisView.vue";
import TabelaView from "@/views/TabelaView.vue";
const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "login",
      component: LoginView,
    },
    {
      path: "/tabela",
      name: "tabela",
      component: TabelaView,
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
  ],
});

export default router;
