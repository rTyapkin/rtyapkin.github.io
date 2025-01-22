// Plugins
import vuetify from './vuetify'
import router from '../router'
import Vue3Toastify, { type ToastContainerOptions } from 'vue3-toastify';
import 'vue3-toastify/dist/index.css';


// Types
import type { App } from 'vue'
import { createPinia } from 'pinia'

export function registerPlugins (app: App) {
  app
    .use(vuetify)
    .use(router)
    .use(createPinia())
    .use(Vue3Toastify, { autoClose: 3000 } as ToastContainerOptions)
}
