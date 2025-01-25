<template>
  <div
    class="wrap"
    :style="{height: showSetting ? 'unset' : '100%'}"
  >
    <IFortuneWheel
      ref="wheel"
      v-model="gift"
      :anim-duration="animDuration"
      :border-color="borderColor"
      :width="wheelSize"
      :middle-circle="showMiddleCircle"
      :middle-circle-text="middleCircleText"
      :middle-circle-border-color="middleCircleBorderColor"
      :middle-circle-bg-color="middleCircleBgColor"
      :arrow-bg-color="arrowBgColor"
      :arrow-border-color="arrowBorderColor"
      :slice-border-color="sliceBorderColor"
      :rotations="rotations"
      :text-size="textSize"
      :img-params="logo"
      :middle-circle-text-color="middleCircleTextColor"
      :wheel-margin-top="wheelMarginTop"
      :default-deg="circleLastDeg"
      :data="wheelItems"
      @done="done"
      @click="launchWheel"
    />
  </div>

  <IWinnerModal
    :text="modalText"
    @close-modal="closeModal"
  />
</template>

<script setup lang="ts">
import {computed, nextTick, type Ref, ref} from 'vue'

import type { Data, ImgParams } from '@/types/types'
import {IFortuneWheel} from "@/components/IFortuneWheel";
import {storeToRefs} from "pinia";
import {useWheelStore} from "@/stores/useWheelStore";
import type {IWheelItem} from "@/types/wheel";
import IWinnerModal from "@/components/IWinnerModal.vue";
const { isRandomFake, showModal, showModalOnWin, circleLastDeg, choiceDelay, removeItemOnSelect, middleCircleTextColor, wheelMarginTop, showSetting, rotations, sliceBorderColor, arrowBorderColor, arrowBgColor, wheelItems, wheelSize,showMiddleCircle, middleCircleText, textSize, animDuration, borderColor, middleCircleBorderColor, middleCircleBgColor } = storeToRefs(useWheelStore())


const gift = ref(0)
const wheel = ref<InstanceType<typeof IFortuneWheel> | null>(null)
const logo: ImgParams = {
  src: 'https://upload.wikimedia.org/wikipedia/commons/thumb/9/95/Vue.js_Logo_2.svg/2367px-Vue.js_Logo_2.svg.png',
  width: 100,
  height: 120
}
const doneVariantsIds: Ref<number[]> = ref([])

const modalText = ref('')

const done = (result: Data, lastDeg: string) => {
  console.log('Spin completed:', result, result.id)
  // eslint-disable-next-line @typescript-eslint/ban-ts-comment
  // @ts-expect-error
  circleLastDeg.value = Number(lastDeg.match(/\d/g)?.join(""))

  if (showModalOnWin.value) {
    modalText.value = result.value
    openModal()
  }

  if (removeItemOnSelect.value) {
    setTimeout(() => {
      wheelItems.value.splice(0, 1)
    }, choiceDelay.value)
  } else {
    setTimeout(() => {
      const selectedItemIdx = wheelItems.value.findIndex((wheelItem: IWheelItem) => wheelItem.id === result.id)
      if (selectedItemIdx !== -1) { wheelItems.value[selectedItemIdx].isDisabled = true }
    }, choiceDelay.value)

    doneVariantsIds.value.push(result.id as number)
  }
  // data.value = data.value.filter((item: Data) => item.id !== result.id)
}

const launchWheel = () => {
  if (isRandomFake.value) {
    const random = Math.floor(Math.random() * possibleWinners.value.length)
    gift.value = possibleWinners.value[random].id as number
  } else {
    const lowestOrder = Math.min.apply(null, possibleWinners.value.map((item: IWheelItem) => item.winOrder))
    const foundedWinner = possibleWinners.value.find((item: IWheelItem) => item.winOrder === lowestOrder)
    if (!foundedWinner) throw new Error('Variant not founded')
    gift.value = foundedWinner.id as number
  }
  if (wheel.value) {
    nextTick(() => wheel.value.spin())
  }
}

const possibleWinners = computed(() => {
  return wheelItems.value.filter((wheelItem: IWheelItem) => !doneVariantsIds.value.includes(wheelItem.id))
})

function openModal () {
  showModal.value = true
}

function closeModal () {
  showModal.value = false
}

</script>

<style>
.wrap {
  display: flex;
  align-items: center;
  justify-content: center;
}
</style>
