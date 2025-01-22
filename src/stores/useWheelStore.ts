import { defineStore } from 'pinia'
import type {IWheelItem, IWheelStore} from "@/types/wheel";
import useToast from "@/plugins/useToast";

const fieldsToSave = [
  'wheelSize',
  'showSetting',
  'showMiddleCircle',
  'middleCircleText',
  'textSize',
  'animDuration',
  'borderColor',
  'middleCircleBorderColor',
  'middleCircleBgColor',
  'arrowBorderColor',
  'arrowBgColor',
  'sliceBorderColor',
  'rotations',
  'wheelMarginTop',
  'showModal',
  'modalWinText',
  'bgColor',
  'middleCircleTextColor'
]

export const useWheelStore = defineStore('useWheelStore', {
  state: (): IWheelStore => ({
    localStorageKey: 'wheel-settings',
    wheelItems: [{ id: 1, value: 'Название', bgColor: '#7d7db3', color: '#ffffff' }, { id: 2, value: 'Название2', bgColor: '#76636f', color: '#ffffff' }],
    wheelSize: 300,
    showSetting: true,
    showMiddleCircle: true,
    middleCircleText: 'Пример текста',
    textSize: 0,
    animDuration: 6000,
    borderColor: '#ffffff',
    middleCircleBorderColor: '#000000',
    middleCircleBgColor: '#ffffff',
    arrowBorderColor: '#ffffff',
    arrowBgColor: '#ffffff',
    sliceBorderColor: '#000000',
    rotations: 5,
    wheelMarginTop: 0,
    showModal: false,
    modalWinText: "Вариант 'name'!",
    bgColor: 'rgb(18,18,18)',
    middleCircleTextColor: '#000000'
  }),
  actions: {
    saveSetting () {
      const settings = {}
      for (const el of fieldsToSave) {
        // eslint-disable-next-line @typescript-eslint/ban-ts-comment
        // @ts-expect-error
        settings[el] = this[el]
      }

      localStorage.setItem(this.localStorageKey, JSON.stringify(settings))
      useToast('Настройки сохранены')
    },
    getSettings () {
      const settings = JSON.parse(localStorage.getItem(this.localStorageKey) as string)

      if (!settings) {
        useToast('Нет сохраненных настроек', {type: 'error'})
        return
      }

      for (const setting in settings) {
        // eslint-disable-next-line @typescript-eslint/ban-ts-comment
        // @ts-expect-error
        this[setting] = settings[setting]
      }

      useToast('Настройки загружены')
    },
    recalcIds () {
      this.wheelItems = this.wheelItems.map((item: IWheelItem, idx: number) => {
        item.id = idx
        return item
      })
    }
  }
})
