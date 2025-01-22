<template>
  <v-app id="app">
    <!--    <INavigationBar />-->
    <v-main
      :class="{'hidden-overflow': !showSetting}"
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
        <v-btn @click="openModal">
          test
        </v-btn>
        <FortuneWheelExample />
        <v-fade-transition>
          <IFortuneWheelSettings v-show="showSetting" />
        </v-fade-transition>
        <IWinnerModal
          text="Выбор1"
          @close-modal="closeModal"
        />
      </v-container>
    </v-main>
  </v-app>
</template>

<script lang="ts" setup>
import IFortuneWheelSettings from "@/pages/IFortuneWheelSettings.vue";
import FortuneWheelExample from "@/pages/FortuneWheelExample.vue";
import {storeToRefs} from "pinia";
import {useWheelStore} from "@/stores/useWheelStore";
import IWinnerModal from "@/components/IWinnerModal.vue";
const { wheelItems, bgColor, showSetting, showModal  } = storeToRefs(useWheelStore())

function openModal () {
  showModal.value = true
}

function closeModal () {
  showModal.value = false
}

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
