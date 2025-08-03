<script lang="ts" setup>
import type { ButtonComponentProps } from '../interfaces/buttonComponentProps'
import { computed } from 'vue'
import IconComponent from './IconComponent.vue'

const props = defineProps<ButtonComponentProps>()

const buttonClasses = computed(() => {
  let baseClasses =
    'flex justify-center items-center gap-1 rounded-md px-4 py-2 text-white font-medium transition-colors duration-200 ease-in-out cursor-pointer'

  if (props.disable) {
    baseClasses += ' opacity-50 cursor-not-allowed'
  }

  switch (props.buttonType) {
    case 'base':
      baseClasses += ' dark:bg-gray-800 bg-gray-700 hover:bg-gray-600 dark:hover:bg-gray-700'
      break
    case 'info':
      baseClasses += ' bg-blue-600 hover:bg-blue-700'
      break
  }

  return baseClasses
})

const buttonContainerClasses = computed(() => {
  switch (props.buttonType) {
    case 'base':
      return 'w-auto'
    default:
      return 'w-full'
  }
})
</script>

<template>
  <div :class="buttonContainerClasses">
    <button :disabled="props.disable" :class="buttonClasses">
      <IconComponent
        v-if="props.icon"
        :color="props.colorIcon ?? '#fff'"
        :name="props.icon"
        :weight="props.iconWeight"
      />
      <p>{{ props.content }}</p>
    </button>
  </div>
</template>
