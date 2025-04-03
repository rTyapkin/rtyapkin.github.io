<template>
  <v-navigation-drawer
    id="navigation-drawer"
    v-model="drawer"
    :location="mobile ? 'bottom' : 'left'"
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
          <v-list-item-title>
            {{ children.title }}
          </v-list-item-title>
        </v-list-item>
      </v-list-group>
      <v-list-item
        v-for="(item, i) in customRoutes"
        :id="`navigation-drawer-menu-item-${i}`"
        :key="i"
        :to="item.name"
      >
        <v-list-item-title>{{ item.title }}</v-list-item-title>
      </v-list-item>
    </v-list>
  </v-navigation-drawer>
</template>

<script setup lang="ts">
import {storeToRefs} from "pinia";
import {useNavigationStore} from "@/stores/useNavigationStore";
import {useDisplay} from "vuetify";
import {customRoutes} from "@/router/routes";
const { mobile } = useDisplay()

const { drawer } = storeToRefs(useNavigationStore())


const nestedRoutes = [
  // {
  //   name: 'Группа 1',
  //   title: 'Группа 1',
  //   children: [
  //     {
  //       name: 'Вложенный 1',
  //       title: 'Вложенный 1'
  //     }
  //   ]
  // }
]

// const flatRoutes = [
//   {
//     name: '/',
//     title: 'Домой'
//   },
//   {
//     name: '/wheel',
//     title: 'Колесо удачи'
//   },
//   {
//     name: '/sea-boi',
//     title: 'Кабояши'
//   }]

</script>


<style scoped>

</style>
