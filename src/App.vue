<template>
  <v-app id="app">
    <INavigationBar v-if="showNavBar" />
    <INavigationDrawer />

    <v-btn
      icon
      class="navbar-show-btn"
      :class="{'navbar-show-btn-hidden': !showNavBar}"
      dark
      @click="showNavBar = !showNavBar"
    >
      <v-icon>{{ showNavBar ? 'mdi-chevron-down' : 'mdi-chevron-up ' }}</v-icon>
    </v-btn>
    <v-main
      :style="{height: showSetting ? '100%' : '100vh', background: bgColor}"
      class="main"
    >
      <router-view />
    </v-main>
  </v-app>
</template>

<script lang="ts" setup>
import {storeToRefs} from "pinia";
import {useWheelStore} from "@/stores/useWheelStore";
import {ref} from "vue";
const { bgColor, showSetting  } = storeToRefs(useWheelStore())

const showNavBar = ref(true)

</script>

<style lang="scss" scoped>
.hidden-overflow {
  overflow: hidden;
}

.navbar-show-btn {
  z-index: 10000;
  position: absolute;
  right: 50px;
  top: 7px;
  transition: all 0.3s ease;

  &-hidden{
    opacity: 0.2;
    right: 7px;
  }
}
</style>
