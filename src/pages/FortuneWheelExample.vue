<template>
  <div
    class="wrap"
    :style="{height: showSetting ? 'unset' : '100%'}"
    @click="launchWheel"
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
      :data="wheelItems"
      @done="done"
    />
  </div>
</template>

<script setup lang="ts">
import {nextTick, ref} from 'vue'

import type { Data, ImgParams } from '@/types/types'
import {IFortuneWheel} from "@/components/IFortuneWheel";
import {storeToRefs} from "pinia";
import {useWheelStore} from "@/stores/useWheelStore";
const { middleCircleTextColor, wheelMarginTop, showSetting, rotations, sliceBorderColor, arrowBorderColor, arrowBgColor, wheelItems, wheelSize,showMiddleCircle, middleCircleText, textSize, animDuration, borderColor, middleCircleBorderColor, middleCircleBgColor } = storeToRefs(useWheelStore())


const gift = ref(0)
const wheel = ref<InstanceType<typeof IFortuneWheel> | null>(null)
const logo: ImgParams = {
  src: 'https://upload.wikimedia.org/wikipedia/commons/thumb/9/95/Vue.js_Logo_2.svg/2367px-Vue.js_Logo_2.svg.png',
  width: 100,
  height: 120
}

const done = (result: Data) => {
  console.log('Spin completed:', result)
  setTimeout(() => {
    wheelItems.value.splice(0, 1)
  }, 3000)
  // data.value = data.value.filter((item: Data) => item.id !== result.id)
}

const launchWheel = () => {
  gift.value =  Math.floor(Math.random() * wheelItems.value.length) + 1
  if (wheel.value) {
    nextTick(() => wheel.value.spin())
  }
}

</script>

<style>
.wrap {
  display: flex;
  align-items: center;
  justify-content: center;
}
</style>
