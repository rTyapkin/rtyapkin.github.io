<template>
  <v-dialog
    v-model="showModal"
    width="auto"
  >
    <v-card
      max-width="400"
      :title="modalText"
    >
      <template #actions>
        <v-btn
          class="ms-auto"
          text="Ok"
          @click="emit('closeModal')"
        />
      </template>
    </v-card>
  </v-dialog>
</template>

<script setup lang="ts">
import {storeToRefs} from "pinia";
import {useWheelStore} from "@/stores/useWheelStore";
import {computed} from "vue";

const { showModal, modalWinText } = storeToRefs(useWheelStore())

interface Props {
  text: string
}
interface Emits {
  (e: 'closeModal'): void
}

const emit = defineEmits<Emits>()
const props = defineProps<Props>()

const modalText = computed(() => {
  const re = /name/gi
  return modalWinText.value.replace(re, props.text)
})


</script>

<style scoped>

</style>
