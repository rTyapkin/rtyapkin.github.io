<template>
  <INavigationBar />
  <v-main>
    <h1>Hi !</h1>
    <button @click="toggleTheme">
      test
    </button>
  </v-main>
</template>

<script lang="ts" setup>
import INavigationBar from "@/components/INavigationBar.vue";
import { useTheme } from 'vuetify'


const theme = useTheme()

function toggleTheme () {
  theme.global.name.value = theme.global.current.value.dark ? 'light' : 'dark'
}
</script>
