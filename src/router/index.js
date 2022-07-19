import { createRouter, createWebHistory } from "vue-router";
import HomeView from "@/views/HomeView.vue";
import InsuranceFormView from "@/views/InsuranceFormView.vue";
import ResultView from "@/views/ResultView.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "home",
      component: HomeView,
    },
    {
      path: "/form",
      name: "insuranceForm",
      component: InsuranceFormView,
    },
    {
      path: "/result",
      name: "result",
      component: ResultView,
    },
  ],
});

export default router;
