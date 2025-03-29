<script setup lang="ts">

import IFortuneWheelSettings from "@/components/IFortuneWheelSettings.vue";
import FortuneWheelExample from "@/components/FortuneWheelExample.vue";
import ICredsModal from "@/components/ICredsModal.vue";
import {onMounted} from "vue";
import {storeToRefs} from "pinia";
import {useWheelStore} from "@/stores/useWheelStore";


const { credsStorageKey, showCredsModal, showSetting  } = storeToRefs(useWheelStore())



onMounted(() => {
  let isShowCredsAllowed = true
  const lsItem = localStorage.getItem(credsStorageKey.value)
  if (lsItem) isShowCredsAllowed = JSON.parse(lsItem)
  if (isShowCredsAllowed) showCredsModal.value = true
})
</script>

<template>
  <v-container
    style="height: 100%"
    class="main-container"
  >
    <v-btn
      icon
      class="conf-btn"
      @click="showSetting = !showSetting"
    >
      <v-icon
        :class="{'conf-icon-rotate': !showSetting}"
        class="conf-icon"
      >
        mdi-cog
      </v-icon>
    </v-btn>

    <FortuneWheelExample />

    <IFortuneWheelSettings v-if="showSetting" />

    <ICredsModal />
  </v-container>
</template>

<style scoped lang="scss">
.conf-btn {
  position: absolute;
  top: 20px;
  left: 20px;
}
.conf-icon {
  transition: all ease 0.5s;
  &-rotate {
    transform: rotate(45deg);
    opacity: 0.1;
  }
}
</style>
