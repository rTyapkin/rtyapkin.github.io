<template>
  <v-app-bar
    id="navbar"
    app
    height="64"
  >
    <v-row
      justify="space-between"
      align="center"
    >
      <v-col cols="auto">
        <div
          class="d-flex align-center"
        >
          <v-app-bar-nav-icon
            id="navbar-menu-btn"
            dark
            @click="drawer = !drawer"
          />
          <v-list-item to="/">
            <div class="d-flex align-center">
              Tyapa Inc
              <ITyapaLogo class="pl-2 logo-img" />
            </div>
          </v-list-item>
        </div>
      </v-col>
      <v-col>
        <span
          id="navbar-page-name"
          class="page-name"
        >
          {{ pageName }}
        </span>
      </v-col>
      <v-col cols="auto">
        <v-row no-gutters>
          <v-col cols="auto">
            <v-btn
              id="navbar-theme-switcher"
              icon
              dark
              @click="toggleTheme"
            >
              <v-icon
                v-if="isThemeDark"
                color="yellow lighten-2"
              >
                mdi-weather-sunny
              </v-icon>
              <v-icon
                v-else
                color="primary lighten-2"
              >
                mdi-weather-night
              </v-icon>
            </v-btn>
          </v-col>
        </v-row>
      </v-col>
    </v-row>
  </v-app-bar>
</template>

<script setup>
import { useTheme } from 'vuetify'
import {computed} from "vue";
import {useNavigationStore} from "@/stores/useNavigationStore";
import {storeToRefs} from "pinia";
import ITyapaLogo from "@/components/ITyapaLogo.vue";

const { drawer, pageName } = storeToRefs(useNavigationStore())
const theme = useTheme()

const isThemeDark = computed(() => theme.global.current.value.dark)

function toggleTheme () {
  theme.global.name.value = theme.global.current.value.dark ? 'light' : 'dark'
}
</script>

<style scoped lang="scss">
.logo-img {
  height: 54px;
  width: 54px;
}
.site-title {
  text-decoration: none !important;
}
</style>
