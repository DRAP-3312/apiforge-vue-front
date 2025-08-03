<script lang="ts" setup>
import type { ButtonThemeProps } from '../interfaces/buttonThemeProps'
import type { Theme } from '../types/ThemeOptions'
import IconComponent from './IconComponent.vue'

const props = defineProps<ButtonThemeProps>()
const emit = defineEmits<{
  'btn-emit': [Theme]
}>()

const emitBtn = (val: Theme) => emit('btn-emit', val)
</script>

<template>
  <div class="w-full h-full">
    <button
      class="cursor-pointer px-2 py-1 rounded-md dark:text-white text-gray-600"
      :class="{
        'bg-success-500 hover:bg-success-700 text-white': props.target === props.theme,
        'dark:bg-gray-700 bg-gray-200 dark:hover:bg-gray-600 hover:bg-gray-400':
          props.target !== props.theme,
      }"
      @click="emitBtn(props.theme)"
    >
      <div class="flex gap-1 justify-center items-center">
        <IconComponent
          :name="props.icon"
          :size="20"
          weight="duotone"
          :color="target === 'dark' || props.target === props.theme ? '#fff' : '#8A8A8A'"
          v-if="props.icon"
        />

        <p class="hidden md:flex">{{ props.content }}</p>
      </div>
    </button>
  </div>
</template>
