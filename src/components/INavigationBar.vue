<template>
  <v-app-bar
    id="navbar"
    app
    color="#0c1036"
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
          <v-app-bar-title class="pl-5">
            <InsomniaLogo
              style="width: 46px"
              class="d-flex align-center"
            />
          </v-app-bar-title>
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
          <v-col
            cols="auto"
            class="pr-4"
          >
            <v-menu
              id="navbar-profile-menu"
              bottom
              offset-y
              rounded="false"
            >
              <template #activator="{ on }">
                <v-btn
                  id="navbar-profile-button"
                  icon
                  dark
                  v-on="on"
                >
                  <v-avatar
                    id="navbar-profile-avatar"
                    color="#8A8D93"
                  >
                    <v-icon
                      color="#29282D"
                      size="32"
                    >
                      mdi-account
                    </v-icon>
                  </v-avatar>
                </v-btn>
              </template>
            </v-menu>
          </v-col>
        </v-row>
      </v-col>
    </v-row>
  </v-app-bar>
</template>

<script setup>
import InsomniaLogo from '@/assets/insomnia-logo.svg'
import { useTheme } from 'vuetify'
import {computed} from "vue";
import {useNavigationStore} from "@/stores/useNavigationStore";
import {storeToRefs} from "pinia";

const { drawer, pageName } = storeToRefs(useNavigationStore())
const theme = useTheme()

const isThemeDark = computed(() => theme.global.current.value.dark)

function toggleTheme () {
  theme.global.name.value = theme.global.current.value.dark ? 'light' : 'dark'
}
</script>

<style scoped>

</style>
