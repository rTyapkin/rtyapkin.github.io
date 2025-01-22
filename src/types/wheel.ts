export type IWheelItem = {
  id: number,
  value: string,
  bgColor: string,
  color: string
}

export type IWheelStore = {
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
}
