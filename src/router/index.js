import { createRouter, createWebHashHistory } from "vue-router";
import HomeView from "@/views/HomeView.vue";

const router = createRouter({
  history: createWebHashHistory(),
  routes: [
    {
      path: "/",
      name: "home",
      component: HomeView,
    },
    {
      path: "/calendar-canvas",
      name: "calendarCanvas",
      component: () => import("@/views/CalendarCanvas.vue"),
    },
  ],
});

export default router;
