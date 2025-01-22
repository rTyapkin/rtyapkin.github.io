import { toast } from "vue3-toastify";
type IToastParams = {
  type?: 'default' | 'success' | 'info' | 'warning' | 'error',
  position?: 'top-left' | 'top-center' | 'top-right'  | 'bottom-left' | 'bottom-center' | 'bottom-right',
  transition?: 'bounce' | 'flip' | 'slide' | 'zoom'
}

import Vuetify from "@/plugins/vuetify";

export default function useToast(text: string, params?: IToastParams) {
  toast(text, {...params, ...{ "theme": Vuetify.theme.current.value.dark ? 'dark' : 'light' }});
}
