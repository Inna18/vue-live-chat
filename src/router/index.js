import { createRouter, createWebHistory } from 'vue-router'
import Welcome from "@/views/Welcome";
import ChatRoom from "@/views/ChatRoom";

const routes = [
  {
    path: "/welcome",
    name: "Welcome",
    component: Welcome
  },
  {
    path: "/chatroom",
    name: "Chatroom",
    component: ChatRoom
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
