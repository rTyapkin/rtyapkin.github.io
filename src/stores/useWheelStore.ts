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
  'middleCircleTextColor',
  'removeItemOnSelect',
  'choiceDelay',
  'showModalOnWin',
  'wheelItems',
  'isRandomFake'
]

const itemsForTest = [
  { id: 1, value: 'Название', bgColor: '#7d7db3', color: '#ffffff', winOrder: 1 },
  { id: 2, value: 'Название2', bgColor: '#76636f', color: '#752929', winOrder: 2 },
  { id: 3, value: 'Название3', bgColor: '#a64a85', color: '#e6e2b3', winOrder: 3 },
  { id: 4, value: 'Название4', bgColor: '#34acd5', color: '#311068', winOrder: 4 }
]

export const useWheelStore = defineStore('useWheelStore', {
  state: (): IWheelStore => ({
    showCredsModal: false,
    credsStorageKey: 'showCreds',
    localStorageKey: 'wheel-settings',
    wheelItems: JSON.parse((JSON.stringify(itemsForTest))),
    wheelSize: 600,
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
    modalWinText: "Победил 'name'!",
    bgColor: 'rgb(18,18,18)',
    middleCircleTextColor: '#000000',
    removeItemOnSelect: false,
    choiceDelay: 100,
    circleLastDeg: 0,
    showModalOnWin: true,
    isRandomFake: false
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
    getSettingsForJson () {
      const settings = {}
      for (const el of fieldsToSave) {
        // eslint-disable-next-line @typescript-eslint/ban-ts-comment
        // @ts-expect-error
        settings[el] = this[el]
      }
      return settings
    },
    setSettingsFromJson (settings: unknown) {
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
    },
    credsNoMore () {
      localStorage.setItem(this.credsStorageKey, JSON.stringify(false))
      this.showCredsModal = false
    }
  }
})
