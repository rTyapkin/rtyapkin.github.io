export type IWheelItem = {
  id: number,
  value: string,
  bgColor: string,
  color: string
  winOrder: number
  isDisabled?: boolean
}

export type IWheelStore = {
  showCredsModal: boolean,
  credsStorageKey: string,
  localStorageKey: string,
  wheelItems: IWheelItem[],
  wheelSize: number,
  showSetting: boolean,
  showMiddleCircle: boolean,
  middleCircleText: string,
  textSize: number,
  animDuration: number,
  borderColor: string,
  middleCircleBorderColor: string,
  middleCircleBgColor: string,
  middleCircleTextColor: string,
  arrowBorderColor: string,
  arrowBgColor: string,
  sliceBorderColor: string,
  rotations: number,
  wheelMarginTop: number,
  showModal: boolean,
  modalWinText: string,
  bgColor: string
  removeItemOnSelect: boolean
  choiceDelay: number
  circleLastDeg: 0
  showModalOnWin: boolean
  isRandomFake: boolean
}
