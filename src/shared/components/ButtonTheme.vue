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
      class="cursor-pointer px-2 py-1 rounded-md"
      :class="{
        'bg-blue-500': props.target === props.theme,
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
          :color="target === 'dark' ? '#fff' : '#111827'"
          v-if="props.icon"
        />

        <p>{{ props.content }}</p>
      </div>
    </button>
  </div>
</template>
