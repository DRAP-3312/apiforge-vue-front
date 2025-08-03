<script lang="ts" setup>
import type { ButtonThemeProps } from '../interfaces/buttonThemeProps'
import type { Theme } from '../types/ThemeOptions'

const props = defineProps<ButtonThemeProps>()
const emit = defineEmits<{
  'btn-emit': [Theme]
}>()

const emitBtn = (val: Theme) => emit('btn-emit', val)
</script>

<template>
  <div class="w-full h-full">
    <button
      class="cursor-pointer px-2 py-1 dark:bg-gray-700 rounded-md dark:hover:bg-gray-600"
      @click="emitBtn(props.theme)"
    >
      <div class="flex gap-1">
        <div v-if="props.icon">--</div>
        <p>{{ props.content }}</p>
      </div>
    </button>
  </div>
</template>
