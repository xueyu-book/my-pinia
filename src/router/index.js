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
    {
      path: "/webrtc",
      name: "webRTCIndex",
      component: () => import("@/views/webrtc/index.vue"),
    },
    {
      path: "/webrtc/getUserMedia",
      name: "webRTCGetUserMedia",
      component: () => import("@/views/webrtc/getUserMedia.vue"),
    },
  ],
});

export default router;
