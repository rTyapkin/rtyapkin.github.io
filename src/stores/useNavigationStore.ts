import { defineStore } from 'pinia'
import type { TNavigationStore } from "@/types/navigation";

export const useNavigationStore = defineStore('navigationStore', {
  state: (): TNavigationStore => ({
    drawer: false,
    pageName: ''
  })
})
