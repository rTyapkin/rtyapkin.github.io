<template>
  <div
    id="wheel"
    class="wheel"
    :style="{...wheelStyle, ...{width: `${props.width}px`, marginTop: `${wheelMarginTop}px`}}"
    role="img"
    aria-label="Fortune Wheel"
  />
</template>

<script setup lang="ts">
import {watch, onMounted, reactive, nextTick} from 'vue'
import * as d3 from 'd3'
import type { Arc, Pie } from 'd3'
import type { Data, ImgParams } from '@/types/types'
import { useWheelSize } from '@/composables/useWheelSize'
import { useWheelCreation } from '@/composables/useWheelCreation'
import { useSpin } from '@/composables/useSpin'

interface Props {
  data: Data[]
  animDuration?: number
  modelValue?: number
  imgParams?: ImgParams
  middleCircle?: boolean
  textSize?: number
  width?: number
  middleCircleText?: string
  borderColor?: string
  middleCircleBorderColor?: string
  middleCircleBgColor?: string
  arrowBorderColor?: string,
  arrowBgColor?: string,
  sliceBorderColor?: string,
  rotations?: number
  wheelMarginTop?: number
  middleCircleTextColor?: string
  defaultDeg?: number
}

const props = withDefaults(defineProps<Props>(), {
  animDuration: 6000,
  modelValue: 0,
  textSize: 0,
  middleCircle: true,
  middleCircleText: '',
  borderColor: '#ffffff',
  imgParams: () => ({ src: '', width: 0, height: 0 }),
  width: 600,
  middleCircleBorderColor: '#000000',
  middleCircleBgColor: '#ffffff',
  arrowBorderColor: '#ffffff',
  arrowBgColor: '#ffffff',
  sliceBorderColor: '#000000',
  rotations: 5,
  wheelMarginTop: 0,
  middleCircleTextColor: '#000000',
  defaultDeg: 0
})

const emit = defineEmits<{
  (e: 'done', value: Data, lastDeg: string): void
}>()

const { wheelSize, wheelStyle } = useWheelSize(props)

const state = reactive({
  pieGenerator: null as Pie<any, Data> | null,
  arcGenerator: null as Arc<any, d3.PieArcDatum<Data>> | null,
  arrow: null as SVGElement | null,
  container: null as SVGGElement | null,
  rayon: 0,
  rotation: 0,
  isSpinning: false,
  svg: null as SVGGElement | null,
  vis: null as SVGGElement | null
})

const { createWheel, redrawWheel } = useWheelCreation(state, props, wheelSize)
const { spin } = useSpin(state, props, emit)

watch(() => props.data, redrawWheel, { deep: true })
watch(() => [
  props.middleCircle,
  props.middleCircleText,
  props.textSize,
  props.borderColor,
  props.middleCircleBorderColor,
  props.middleCircleBgColor,
  props.arrowBorderColor,
  props.arrowBgColor,
  props.sliceBorderColor,
  props.middleCircleTextColor
], () => {
  nextTick(() => redrawWheel())
})

onMounted(() => {
  state.rayon = Math.min(wheelSize.value.width, wheelSize.value.height) / 2
  createWheel()
})

defineExpose({ spin })
</script>

<style lang="scss" scoped>
.wheel {
  cursor: pointer;
  user-select: none;
}
</style>
