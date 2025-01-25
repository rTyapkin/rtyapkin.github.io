<template>
  <v-app id="app">
    <!--    <INavigationBar />-->
    <v-main
      :style="{height: showSetting ? '100%' : '100vh', background: bgColor}"
      class="main"
    >
      <v-container
        style="height: 100%"
        class="main-container"
      >
        <!--        <INavigationDrawer />-->
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
    </v-main>
  </v-app>
</template>

<script lang="ts" setup>
import IFortuneWheelSettings from "@/pages/IFortuneWheelSettings.vue";
import FortuneWheelExample from "@/pages/FortuneWheelExample.vue";
import {storeToRefs} from "pinia";
import {useWheelStore} from "@/stores/useWheelStore";
import {onMounted} from "vue";
import ICredsModal from "@/components/ICredsModal.vue";
const { credsStorageKey, showCredsModal, bgColor, showSetting  } = storeToRefs(useWheelStore())


onMounted(() => {
  let isShowCredsAllowed = true
  const lsItem = localStorage.getItem(credsStorageKey.value)
  if (lsItem) isShowCredsAllowed = JSON.parse(lsItem)
  if (isShowCredsAllowed) showCredsModal.value = true
})

</script>

<style lang="scss" scoped>
.hidden-overflow {
  overflow: hidden;
}

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
