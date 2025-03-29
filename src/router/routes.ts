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
export default routes
