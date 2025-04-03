import type {RouteRecordRaw} from "vue-router";
import HomeView from "@/pages/HomeView.vue";
import FortuneWheelView from "@/pages/FortuneWheelView.vue";
import SeaBoiView from "@/pages/SeaBoiView.vue";

const routes:  RouteRecordRaw[] = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/wheel',
    name: 'wheel',
    component: FortuneWheelView
  },
  {
    path: '/sea-boi',
    name: 'sea-boi',
    component: SeaBoiView
  }
]

export const customRoutes = [
  {
    name: '/',
    title: 'Домой',
    icon: ''
  },
  {
    name: '/wheel',
    title: 'Колесо удачи',
    icon: 'mdi-autorenew'
  },
  {
    name: '/sea-boi',
    title: 'Кабояши',
    icon: 'mdi-developer-board'
  }
]
export default routes
