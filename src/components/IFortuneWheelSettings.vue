<template>
  <v-expansion-panels class="pb-5">
    <v-expansion-panel title="Настройки дизайна колеса">
      <v-expansion-panel-text>
        <v-tabs v-model="tab">
          <v-tab :value="1">
            Размерность
          </v-tab>
          <v-tab :value="2">
            Цвета
          </v-tab>
        </v-tabs>

        <v-tabs-window v-model="tab">
          <v-tabs-window-item :value="1">
            <v-row class="pt-2">
              <v-col
                cols="12"
                md="4"
              >
                <v-text-field
                  v-model="wheelSize"
                  label="Размер колеса"
                  hide-details
                  type="number"
                />
              </v-col>

              <v-col
                cols="12"
                md="4"
              >
                <v-text-field
                  v-model.trim="middleCircleText"
                  label="Текст центра"
                  hide-details
                  type="text"
                />
              </v-col>

              <v-col
                cols="12"
                md="4"
              >
                <v-text-field
                  v-model="textSize"
                  label="Размер текст элементов"
                  hide-details
                  type="number"
                />
              </v-col>

              <v-col
                cols="12"
                md="4"
              >
                <v-text-field
                  v-model="animDuration"
                  label="Длительность анимации, мс"
                  hide-details
                  type="number"
                />
              </v-col>

              <v-col
                cols="12"
                md="4"
              >
                <v-text-field
                  v-model="rotations"
                  label="Количество оборотов"
                  hide-details
                  type="number"
                />
              </v-col>

              <v-col
                cols="12"
                md="4"
              >
                <v-text-field
                  v-model="wheelMarginTop"
                  label="Отступ колеса сверху"
                  hide-details
                  type="number"
                />
              </v-col>

              <v-col
                cols="12"
                md="4"
              >
                <v-text-field
                  v-model="modalWinText"
                  label="Текст модалки победы"
                  hint="Вместо <name> будет подставлено название варианта"
                  persistent-hint
                  type="text"
                />
              </v-col>

              <v-col
                cols="12"
                md="4"
              >
                <v-text-field
                  v-model="choiceDelay"
                  label="Отложенный выбор эл-та, мс"
                  hide-details
                  type="number"
                />
              </v-col>

              <v-col
                cols="12"
                md="4"
              >
                <v-checkbox
                  v-model="showMiddleCircle"
                  label="Отображать центр"
                  hide-details
                />
              </v-col>

              <v-col
                cols="12"
                md="4"
              >
                <v-checkbox
                  v-model="removeItemOnSelect"
                  label="Убирать ли вариант если выпал"
                  hide-details
                />
              </v-col>

              <v-col
                cols="12"
                md="4"
              >
                <v-checkbox
                  v-model="showModalOnWin"
                  label="Показывать модалку на победу"
                  hide-details
                />
              </v-col>
            </v-row>
          </v-tabs-window-item>
          <v-tabs-window-item :value="2">
            <v-row class="pt-2">
              <v-col
                cols="12"
                md="4"
                class="d-flex flex-column justify-center align-content-center flex-wrap"
              >
                <v-label text="Цвет границы" />
                <v-color-picker
                  v-model="borderColor"
                  class="mb-4"
                />
              </v-col>

              <v-col
                cols="12"
                md="4"
                class="d-flex flex-column justify-center align-content-center flex-wrap"
              >
                <v-label text="Цвет границы внутреннего круга" />
                <v-color-picker
                  v-model="middleCircleBorderColor"
                  class="mb-4"
                />
              </v-col>

              <v-col
                cols="12"
                md="4"
                class="d-flex flex-column justify-center align-content-center flex-wrap"
              >
                <v-label text="Цвет фона внутреннего круга" />
                <v-color-picker
                  v-model="middleCircleBgColor"
                  class="mb-4"
                />
              </v-col>

              <v-col
                cols="12"
                md="4"
                class="d-flex flex-column justify-center align-content-center flex-wrap"
              >
                <v-label text="Цвет текста центрального круга" />
                <v-color-picker
                  v-model="middleCircleTextColor"
                  class="mb-4"
                />
              </v-col>

              <v-col
                cols="12"
                md="4"
                class="d-flex flex-column justify-center align-content-center flex-wrap"
              >
                <v-label text="Цвет обводки стрелки" />
                <v-color-picker
                  v-model="arrowBorderColor"
                  class="mb-4"
                />
              </v-col>

              <v-col
                cols="12"
                md="4"
                class="d-flex flex-column justify-center align-content-center flex-wrap"
              >
                <v-label text="Цвет фона стрелки" />
                <v-color-picker
                  v-model="arrowBgColor"
                  class="mb-4"
                />
              </v-col>

              <v-col
                cols="12"
                md="4"
                class="d-flex flex-column justify-center align-content-center flex-wrap"
              >
                <v-label text="Цвет границы кусков" />
                <v-color-picker
                  v-model="sliceBorderColor"
                  class="mb-4"
                />
              </v-col>

              <v-col
                cols="12"
                md="4"
                class="d-flex flex-column justify-center align-content-center flex-wrap"
              >
                <v-label text="Цвет заднего фона" />
                <v-color-picker
                  v-model="bgColor"
                  class="mb-4"
                />
              </v-col>
            </v-row>
          </v-tabs-window-item>
        </v-tabs-window>
      </v-expansion-panel-text>
    </v-expansion-panel>

    <v-expansion-panel title="Настройки элементов колеса">
      <v-expansion-panel-text>
        <v-checkbox
          v-model="isRandomFake"
          label="Случайный результат колеса"
          hide-details
        />
        <v-divider class="mb-1" />
        <v-row>
          <v-col
            cols="12"
            md="1"
          >
            Номер
          </v-col>
          <v-col
            cols="12"
            md="1"
          >
            Порядок выпадения
          </v-col>
          <v-col
            cols="12"
            md="2"
          >
            Текст сегмента
          </v-col>
          <v-col
            cols="12"
            md="3"
            class="text-center"
          >
            Цвет заднего фона
          </v-col>
          <v-col
            cols="12"
            md="3"
            class="text-center"
          >
            Цвет текста
          </v-col>
          <v-col
            cols="12"
            md="1"
            class="text-center"
          >
            Удалить
          </v-col>
          <v-col
            cols="12"
            md="1"
            class="text-center"
          >
            Скрыть
          </v-col>
        </v-row>
        <v-divider class="mt-1" />

        <v-row
          v-for="(item, idx) in wheelItems"
          :key="idx"
          class="pt-2"
        >
          <v-col
            cols="12"
            md="1"
            class="align-content-center"
          >
            {{ idx + 1 }}
          </v-col>
          <v-col
            cols="12"
            md="1"
            class="align-content-center"
          >
            <v-text-field
              v-model.number="item.winOrder"
              label="Порядок"
              type="number"
              :disabled="isRandomFake"
            />
          </v-col>
          <v-col
            cols="12"
            md="2"
            class="align-content-center text-center"
          >
            <v-textarea
              v-show="!hiddenItems.includes(idx)"
              v-model="item.value"
              variant="outlined"
              hide-details
              type="text"
            />
          </v-col>
          <v-col
            cols="12"
            md="3"
            class="d-flex justify-center"
          >
            <v-color-picker
              v-show="!hiddenItems.includes(idx)"
              v-model="item.bgColor"
            />
          </v-col>
          <v-col
            cols="12"
            md="3"
            class="d-flex justify-center"
          >
            <v-color-picker
              v-show="!hiddenItems.includes(idx)"
              v-model="item.color"
            />
          </v-col>
          <v-col
            cols="12"
            md="1"
            class="d-flex justify-center align-content-center flex-wrap"
          >
            <v-btn
              v-if="wheelItems.length > 1"
              elevation="4"
              density="compact"
              icon
              @click="removeItem(item.id)"
            >
              <v-icon>mdi-close</v-icon>
            </v-btn>
          </v-col>
          <v-col
            cols="12"
            md="1"
            class="d-flex justify-center align-content-center flex-wrap"
          >
            <v-btn
              elevation="4"
              density="compact"
              icon
              @click="hideItem(idx)"
            >
              <v-icon>{{ hiddenItems.includes(idx) ? 'mdi-chevron-down' : 'mdi-chevron-up ' }}</v-icon>
            </v-btn>
          </v-col>
          <v-divider v-if="idx !== wheelItems.length - 1" />
        </v-row>

        <v-btn
          class="mt-2"
          variant="outlined"
          @click="addItem"
        >
          Добавить элемент
        </v-btn>
      </v-expansion-panel-text>
    </v-expansion-panel>

    <v-row class="pt-6 ml-3 align-center">
      <v-btn
        rounded
        class="mr-3"
        @click="saveSetting"
      >
        Сохранить настройки
      </v-btn>
      <v-btn
        rounded
        class="mr-3"
        @click="getSettings"
      >
        Загрузить настройки
      </v-btn>
      <v-btn
        rounded
        class="mr-3"
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
  </v-expansion-panels>

  <a
    id="downloadAnchorElem"
    style="display:none"
  />
</template>

<script setup lang="ts">
import {storeToRefs} from "pinia";
import {useWheelStore} from "@/stores/useWheelStore";
import {type Ref, ref} from "vue";
import type {IWheelItem} from "@/types/wheel";
const { isRandomFake, showModalOnWin, choiceDelay, removeItemOnSelect, middleCircleTextColor, bgColor, modalWinText, wheelMarginTop, rotations, sliceBorderColor, arrowBorderColor, arrowBgColor, wheelItems, wheelSize, showMiddleCircle, middleCircleText, textSize, animDuration, borderColor, middleCircleBorderColor, middleCircleBgColor  } = storeToRefs(useWheelStore())
const { setSettingsFromJson, getSettingsForJson, getSettings,  saveSetting, recalcIds } = useWheelStore()

const lastId = ref(1)
const hiddenItems: Ref<number[]> = ref([])
const tab = ref(null)

function getBiggestWinOrder () {
  return Math.max.apply(null, wheelItems.value.map((item: IWheelItem) => item.winOrder))
}

function addItem () {
  lastId.value++
  wheelItems.value.push({ id: lastId.value, value: 'Название', bgColor: '#7d7db3', color: '#ffffff', winOrder: getBiggestWinOrder() + 1 })
  recalcIds()
}

function removeItem (id: number) {
  wheelItems.value = wheelItems.value.filter(item => item.id !== id)
  recalcIds()
}

function hideItem (id: number) {
  const itemIdx = hiddenItems.value.findIndex(hiddenId => hiddenId === id)
  itemIdx === -1 ? hiddenItems.value.push(id) : hiddenItems.value.splice(itemIdx, 1)
}

function getJsonSetting () {
  const settings = getSettingsForJson()
  const dataStr = "data:text/json;charset=utf-8," + encodeURIComponent(JSON.stringify(settings));
  const dlAnchorElem = document.getElementById('downloadAnchorElem');
  dlAnchorElem?.setAttribute("href",     dataStr     );
  dlAnchorElem?.setAttribute("download", "wheel-settings.json");
  dlAnchorElem?.click();
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

<style scoped>

</style>
