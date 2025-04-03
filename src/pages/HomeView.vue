<script setup lang="ts">

import {customRoutes} from "@/router/routes";
</script>

<template>
  <v-card class="my-5 mx-5 px-5 py-5">
    <v-card-title>Здравствуй!</v-card-title>
    <v-card-text>
      На этой странице собраны сайты - игры для детского лагеря. Игры доступны в свободном доступе, по всем вопросам, предложениям и багам писать в <a
        href="https://t.me/prikolskeeper"
        target="_blank"
      >тг</a>.
    </v-card-text>
  </v-card>

  <v-card class="my-5 mx-5">
    <v-card-text>
      <v-list>
        <v-list-subheader>Список реализованных проектов:</v-list-subheader>
        <template v-for="(route, i) in customRoutes">
          <v-list-item
            v-if="route.icon"
            :key="i"
            :to="route.name"
          >
            <template #prepend>
              <v-icon
                color="teal"
                :icon="route.icon"
              />
            </template>
            {{ route.title }}
          </v-list-item>
        </template>
      </v-list>
    </v-card-text>
  </v-card>
</template>

<style scoped>

</style>
