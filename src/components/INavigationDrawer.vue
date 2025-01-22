<template>
  <v-navigation-drawer
    id="navigation-drawer"
    v-model="drawer"
    :location="isMobile ? 'bottom' : undefined"
    app
    left
    temporary
    width="400"
  >
    <v-list
      id="navigation-drawer-container"
      expand
    >
      <v-list-group
        v-for="item in nestedRoutes"
        :id="`menu-group-${item.name}`"
        :key="item.name"
        :value="true"
        no-action
      >
        <template #activator>
          <v-list-item-title>
            {{ item.title }}
          </v-list-item-title>
        </template>
        <v-list-item
          v-for="children in item.children"
          :id="`menu-item-${children.name}`"
          :key="children.name"
        >
          <v-list-item-content>
            <v-list-item-title>
              {{ children.title }}
            </v-list-item-title>
          </v-list-item-content>
        </v-list-item>
      </v-list-group>
      <v-list-item
        v-for="(item, i) in flatRoutes"
        :id="`navigation-drawer-menu-item-${i}`"
        :key="i"
      >
        <v-list-item-content>
          <v-list-item-title>{{ item.title }}</v-list-item-title>
        </v-list-item-content>
      </v-list-item>
    </v-list>
  </v-navigation-drawer>
</template>

<script setup lang="ts">
import {storeToRefs} from "pinia";
import {useNavigationStore} from "@/stores/useNavigationStore";
import {computed} from "vue";
import {useDisplay} from "vuetify";
const { mobile } = useDisplay()

const { drawer } = storeToRefs(useNavigationStore())

const isMobile = computed(() => mobile)

const nestedRoutes = [
  {
    name: 'Группа 1',
    title: 'Группа 1',
    children: [
      {
        name: 'Вложенный 1',
        title: 'Вложенный 1'
      }
    ]
  }
]

const flatRoutes = [{
    name: 'Плоский 1',
    title: 'Плоский 1'
  },
  {
    name: 'Плоский 2',
    title: 'Плоский 2'
  }]

</script>


<style scoped>

</style>
