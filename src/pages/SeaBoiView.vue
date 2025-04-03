<script setup lang="ts">

import {computed, onMounted, ref} from "vue";
import useToast from "@/plugins/useToast";

const columns = ref(60) // Кол-во колонок
const rows = ref(30) // Кол-во строк
const ships =  ref(170) // Кол-во кораблей
const debug_mode =  ref(false) // true - вкл дебаг-мод, false - выкл дебаг-мод
const cells_count =  ref(0)
const cells =  ref([])
const mothership_center =  ref(0)
const ships_dead =  ref(0)

const grid = ref(null)


function createCells() {
  for (let i = 0; i < cells_count.value; i++) {
    cells.value.push({
      id: i,
      state: 0,
      clicks: 0,
      shown: false,
      mothership: false,
      mothership_shiled: false,
      mothership_center: false
    })
  }
  if (spawnMotherShip.value) {
    createMothership()
  }

  createShips()
  updateCells()
}
function updateCells() {
  setTimeout(() => {
    const width = grid.value.clientWidth / columns.value
    for (const ref of grid.value.children) {
      ref.style.height = width + 'px'
    }
  }, 50)
}
function showCell(id) {
  cells.value[id].shown = true
  if (cells.value[id].state == 1 && !cells.value[id].mothership) {
    cells.value[id].clicks++
  }
  if (cells.value[id].clicks == 2) {
    ships_dead.value++
  }
}
function createMothership() {
  let beda = 0
  let spawn_error = false
  let rand_pos
  let pos1, pos2, pos3, pos4, pos5, pos6, pos7, pos8
  while (true) {
    beda++
    if (beda > 10000) {
      alert('beda mothership')
      break;
    }
    spawn_error = false
    rand_pos = Math.floor(Math.random() * (cells_count.value - columns.value - columns.value + 1)) + columns.value
    pos1 = cells.value[rand_pos - columns.value - 1]
    pos2 = cells.value[rand_pos - columns.value]
    pos3 = cells.value[rand_pos - columns.value + 1]
    pos4 = cells.value[rand_pos - 1]
    pos5 = cells.value[rand_pos + 1]
    pos6 = cells.value[rand_pos + columns.value - 1]
    pos7 = cells.value[rand_pos + columns.value]
    pos8 = cells.value[rand_pos + columns.value + 1]
    if (!pos1 || !pos2 || !pos3 || !pos4 || !pos5 || !pos6 || !pos7 || !pos8) {
      continue
    }
    for (let i = 1; i < columns.value; i++) {
      if (rand_pos >= i * columns.value - 1 && rand_pos <= i * columns.value + 2) {
        spawn_error = true
      }
    }
    // Проверка по верт.
    for (let i = 0; i < columns.value; i++) {
      for (let k = 0; k < columns.value; k++) {
        if (rand_pos > i * columns.value + k * 10 - 2 && rand_pos < i * columns.value + k * 10 + 2) {
          spawn_error = true
        }
      }
    }
    // Проверка по гор.
    for (let i = 0; i < rows.value / 10; i++) {
      for (let k = 1; k < columns.value; k++) {
        if (rand_pos > i * columns.value * 10 + k - columns.value && rand_pos < i * columns.value * 10 + k + columns.value) {
          spawn_error = true
        }
      }
    }
    if (!spawn_error) {
      cells.value[rand_pos].state = 1
      cells.value[rand_pos].mothership = true
      cells.value[rand_pos].mothership_center = true
      mothership_center.value = rand_pos
      pos1.state = 1
      pos1.mothership = true
      pos1.mothership_shiled = true
      pos2.state = 1
      pos2.mothership = true
      pos2.mothership_shiled = true
      pos3.state = 1
      pos3.mothership = true
      pos3.mothership_shiled = true
      pos4.state = 1
      pos4.mothership = true
      pos4.mothership_shiled = true
      pos5.state = 1
      pos5.mothership = true
      pos5.mothership_shiled = true
      pos6.state = 1
      pos6.mothership = true
      pos6.mothership_shiled = true
      pos7.state = 1
      pos7.mothership = true
      pos7.mothership_shiled = true
      pos8.state = 1
      pos8.mothership = true
      pos8.mothership_shiled = true
      console.log('Mothership создан', rand_pos)
      return;
    }
  }
}
const creatShipsBigBeda = ref(0)
function createShips() {
  let beda = 0
  let rand = 0
  let rand_pos = 0
  let ships_created = 0
  let spawn_error = false
  let doCreateShips = true
  let pos1, pos2, pos3, pos4, pos5, pos6, pos7, pos8
  while (doCreateShips) {
    beda++
    if (creatShipsBigBeda.value === 10) {
      console.log('heh')
      useToast('Не сумел создать корабли, попробуй меньше кораблей', { type: 'error'})
      dialog.value = true
      doCreateShips = false
      break;
    }
    if (beda > 10000) {
      creatShipsBigBeda.value++
      for (let i = 0; i < cells.value.length; i++) {
        cells.value[i].state = 0
      }
      console.log('спавн кораблей не удался')
      beda = 0
      rand = 0
      rand_pos = 0
      ships_created = 0
      spawn_error = false
      doCreateShips = true
    }
    spawn_error = false

    rand = Math.random() > 0.5 ? 1 : 0
    rand_pos = Math.floor(Math.random() * (cells_count.value - columns.value + 1)) + columns.value + 1
    if (rand > 0 && cells.value[rand_pos]) {
      pos1 = cells.value[rand_pos - columns.value - 1]
      pos2 = cells.value[rand_pos - columns.value]
      pos3 = cells.value[rand_pos - columns.value + 1]
      pos4 = cells.value[rand_pos - 1]
      pos5 = cells.value[rand_pos + 1]
      pos6 = cells.value[rand_pos + columns.value - 1]
      pos7 = cells.value[rand_pos + columns.value]
      pos8 = cells.value[rand_pos + columns.value + 1]
      // Проверка по верт.
      for (let i = 0; i < columns.value; i++) {
        for (let k = 0; k < columns.value; k++) {
          if (rand_pos == i * columns.value + k * 10) {
            spawn_error = true
          }
        }
      }
      // Проверка по гор.
      for (let i = 0; i < rows.value / 10; i++) {
        for (let k = 1; k < columns.value; k++) {
          if (rand_pos == i * columns.value * 10 + k) {
            spawn_error = true
          }
        }
      }
      if (spawn_error) {
        continue
      }
      if (pos1 && pos1.state == 1) continue
      if (pos2 && pos2.state == 1) continue
      if (pos3 && pos3.state == 1) continue
      if (pos4 && pos4.state == 1) continue
      if (pos5 && pos5.state == 1) continue
      if (pos6 && pos6.state == 1) continue
      if (pos7 && pos7.state == 1) continue
      if (pos8 && pos8.state == 1) continue
      cells.value[rand_pos].state = 1
      ships_created++
    }
    if (ships_created == ships.value) {
      console.log('Корабли созданы, кораблей: ' + ships_created)
      return;
    }
  }
}
function recreate() {
  for (let i = 0; i < cells.value.length; i++) {
    cells.value[i] = {
      id: i,
      state: 0,
      clicks: 1,
      shown: true,
      mothership: false,
      mothership_shiled: false,
      mothership_center: false
    }
  }
  createMothership()
  createShips()
}
function saveTek() {
  for (let i = 0; i < cells.value.length; i++) {
    cells.value[i].shown = false
    cells.value[i].clicks = 0
  }
  localStorage.setItem('cells', JSON.stringify(cells.value))
}
function delTek() {
  localStorage.clear()
}

onMounted(() => {
  cells_count.value = columns.value * rows.value
  grid.value.style.gridTemplateColumns = `repeat(${columns.value},1fr)`
})

const dialog = ref(true)

function startGame () {
  useToast('Перед началом игры рекомендую нажать f11')
  dialog.value = false
  createCells()
}

const enemyName = ref('Жукеры')
const enemyUnitName = ref('Кораблей')
const spawnMotherShip = ref(true)

const isStartBtnDisabled = computed(() =>
  !enemyUnitName.value || !enemyName.value || !ships.value
)

const localStorageKey = 'sea-boi-setting'

function saveSetting () {
  localStorage.setItem(localStorageKey, JSON.stringify(settingsForSaving.value))
  useToast('Настройки сохранены')
}

function getSettings () {
  const settings = JSON.parse(localStorage.getItem(localStorageKey) as string)
  if (!settings) {
    useToast('Нет сохраненных настроек', {type: 'error'})
    return
  }
  enemyName.value = settings.enemyName
  enemyUnitName.value = settings.enemyUnitName
  ships.value = settings.ships
  spawnMotherShip.value = settings.spawnMotherShip

  useToast('Настройки загружены')
}

const settingsForSaving = computed(() => {
  return {
    enemyName: enemyName.value,
    enemyUnitName: enemyUnitName.value,
    ships: ships.value,
    spawnMotherShip: spawnMotherShip.value
  }
})

function getJsonSetting () {
  const dataStr = "data:text/json;charset=utf-8," + encodeURIComponent(JSON.stringify(settingsForSaving.value));
  const dlAnchorElem = document.getElementById('downloadAnchorElem');
  dlAnchorElem?.setAttribute("href",     dataStr     );
  dlAnchorElem?.setAttribute("download", "kaboyashi-settings.json");
  dlAnchorElem?.click();
}

function setSettingsFromJson (settings: unknown) {
  if (!settings) {
    useToast('Нет сохраненных настроек', {type: 'error'})
    return
  }
  enemyName.value = settings.enemyName
  enemyUnitName.value = settings.enemyUnitName
  ships.value = settings.ships
  spawnMotherShip.value = settings.spawnMotherShip

  useToast('Настройки загружены')
}

function setJsonSettings (event: Event) {
  // eslint-disable-next-line @typescript-eslint/ban-ts-comment
  // @ts-expect-error
  if (!event?.target?.files[0]) { throw new Error('No file founded')}

  // eslint-disable-next-line @typescript-eslint/ban-ts-comment
  // @ts-expect-error
  const jsonSettings = event?.target?.files[0]
  const reader = new FileReader();
  reader.onload = function (e) {
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-expect-error
    setSettingsFromJson(JSON.parse(e.target.result))
  }

  reader.readAsText(jsonSettings)
}
</script>

<template>
  <div class="boi">
    <div class="row">
      <h1 class="text-uppercase">
        СИЛЫ {{ enemyName }}: {{ Math.floor((ships-ships_dead)/ships*100) }}%
      </h1>
      <h1 class="text-uppercase">
        {{ enemyUnitName }} СБИТО: {{ ships_dead }}
      </h1>
    </div>
    <div
      ref="grid"
      class="grid__container"
    >
      <div
        v-for="(cell, i) in cells"
        :key="i"
        :data="i"
        class="cell"
        @click="showCell(i)"
      >
        <transition name="show_cell">
          <div
            v-if="cell.state == 1 && cell.shown && cell.clicks == 1 && !cell.mothership_shiled"
            class="block"
          />
        </transition>
        <transition name="show_cell">
          <div
            v-if="cell.state == 1 && cell.shown && cell.mothership_center"
            class="mothership_center"
          />
        </transition>
        <transition name="show_cell">
          <div
            v-if="cell.state == 1 && cell.shown && cell.clicks > 1 && !cell.mothership"
            class="crest"
          >
            &#10006;
          </div>
        </transition>
        <transition name="show_cell">
          <div
            v-if="cell.state == 1 && cell.shown && cell.mothership_shiled"
            class="shield"
          />
        </transition>
        <transition name="show_cell">
          <div
            v-if="cell.state == 0 && cell.shown"
            class="sphere"
          />
        </transition>
      </div>
    </div>

    <a
      id="downloadAnchorElem"
      style="display:none"
    />

    <v-dialog
      v-model="dialog"
      width="70%"
      persistent
    >
      <v-card
        prepend-icon="mdi-cog"
        title="Настройка Кабояши"
      >
        <v-card-subtitle class="pl-7">
          Этот код устаревший (ему почти 4 года), будет оптимизирован и улучшен позже
        </v-card-subtitle>
        <v-card-text>
          <v-row>
            <v-col class="mr-5">
              <v-text-field
                v-model.trim="enemyName"
                label="Название врага"
                class="pb-2"
                hint="Обязательно для заполнения"
              />

              <v-text-field
                v-model.trim="enemyUnitName"
                class="pb-2"
                label="Название юнита врага"
                hint="Обязательно для заполнения"
              />
            </v-col>
            <v-col>
              <v-text-field
                v-model.number="ships"
                type="number"
                class="pb-2"
                label="Количество кораблей"
                hint="Не рекомендуется воодить больше 170, Обязательно для заполнения"
              />
              <v-checkbox
                v-model="spawnMotherShip"
                label="Создавать ли материнский корабль"
              />
            </v-col>
          </v-row>
          <v-row class="align-center">
            <v-btn
              rounded
              class="px-3 mr-3"
              @click="saveSetting"
            >
              Сохранить настройки
            </v-btn>
            <v-btn
              rounded
              class="px-3 mr-3"
              @click="getSettings"
            >
              Загрузить настройки
            </v-btn>
            <v-btn
              rounded
              class="px-3 mr-3"
              @click="getJsonSetting"
            >
              Выгрузить JSON
            </v-btn>
            <v-file-input
              label="Загрузить JSON"
              variant="underlined"
              accept="application/json"
              clearable
              @input="setJsonSettings"
            />
          </v-row>
        </v-card-text>
        <v-card-actions>
          <v-btn
            color="success"
            elevation="2"
            :disabled="isStartBtnDisabled"
            class="px-3 mr-3"
            @click="startGame"
          >
            Все готово, начинаем
          </v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
  </div>
</template>

<style scoped>
* {
  margin: 0;
  padding: 0;
  -webkit-touch-callout: none;
  -webkit-user-select: none;
  -khtml-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  user-select: none;
}

@font-face {
  font-family: "bebas";
  src: url(@/media/fonts/Bebas.ttf);
}

@font-face {
  font-family: "garden";
  src: url(@/media/fonts/Gardens.ttf);
}

@font-face {
  font-family: "codename";
  src: url(@/media/fonts/CodenameCoderFree4F-Bold.ttf);
}
.boi {
  height: 100%;
  background-image: url(@/media/img/fon.jpg);
  background-size: 100%;
}

.grid__container {
  background-image: url(@/media/img/Pole_Radar.jpg);
  background-size: 100%;
  background-repeat: no-repeat;
  display: grid;
  width: 95%;
  margin: auto;
  border: 7px solid #01f6a7;
}

.cell {
  text-align: center;
  /* border: 1px solid #01f7a8; */
  height: 25px;
  /* background-color: #00a972; */
}

.sphere {
  position: relative;
  top: 30%;
  left: 30%;
  width: 40%;
  height: 40%;
  border-radius: 50%;
  background-color: #01f6a7
}

.crest {
  position: relative;
  top: 4px;
  left: 0px;
  color: #01f6a7;
  font-weight: 1000;
  transform: scale(1.3);
}

.block {
  top: 0;
  position: relative;
  width: 100%;
  height: 100%;
  background-color: #01f6a7
}

.mothership_center {
  top: 0;
  position: relative;
  width: 100%;
  height: 100%;
  background-color: #01f6a7
}

.shield {
  top: 0;
  position: relative;
  width: 100%;
  height: 100%;
  background-color: #23b9f5;
}

.ship {
  transition: .3s;
  background-color: rgb(240, 111, 111);
}

.blank {
  transition: .3s;
  background-color: rgb(182, 223, 233);
}

.show_cell-enter-active {
  transition: opacity 0.3s ease;
}

.show_cell-enter-from {
  opacity: 0;
}

.row {
  width: calc(95% + 14px);
  margin: auto;
  padding-top: 30px;
  font-family: 'codename';
  display: flex;
  justify-content: space-between;
}

.row h1 {
  color: #01f6a7;
  font-weight: 400;
  font-size: 3em;
  transform: scaleY(1.1);
  /* line-height: 3em; */
}
</style>
