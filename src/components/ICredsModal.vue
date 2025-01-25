<template>
  <v-dialog
    v-model="showCredsModal"
    width="600"
  >
    <v-card>
      <v-card-title class="d-flex justify-space-between align-center">
        <div class="text-h5 text-medium-emphasis ps-2">
          Здравствуй!
        </div>

        <v-btn
          icon="mdi-close"
          variant="text"
          @click="showCredsModal = false"
        />
      </v-card-title>
      <v-card-text>
        Приложение выполнено на волонтерских началах Тяпкиным Романом. В случае возникновения ошибок или предложений писать в
        <a
          href="https://t.me/prikolskeeper"
          target="_blank"
        >тг</a> или <a
          href="https://vk.com/fesstrix"
          target="_blank"
        >вк</a>. Удачи!
      </v-card-text>
      <template #actions>
        <v-btn
          variant="plain"
          text="Больше не показывать"
          @click="credsNoMore"
        />
        <v-btn
          color="primary"
          class="ms-auto"
          text="Ok"
          @click="showCredsModal = false"
        />
      </template>
    </v-card>
  </v-dialog>
</template>

<script setup lang="ts">
import {storeToRefs} from "pinia";
import {useWheelStore} from "@/stores/useWheelStore";

const { showCredsModal } = storeToRefs(useWheelStore())
const { credsNoMore } = useWheelStore()

</script>

<style scoped>

</style>
