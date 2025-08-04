<script lang="ts" setup>
import type { ButtonComponentProps } from '../interfaces/buttonComponentProps'
import { computed } from 'vue'
import IconComponent from './IconComponent.vue'

const props = defineProps<ButtonComponentProps>()
const emit = defineEmits<{
  btnEmit: [void]
}>()

const buttonClasses = computed(() => {
  let classes = [
    'flex',
    'justify-center',
    'items-center',
    'gap-1',
    'rounded-md',
    'px-4',
    'py-2',
    'font-medium',
    'transition-colors',
    'duration-200',
    'ease-in-out',
  ]

  if (props.disable) {
    classes.push('opacity-50', 'cursor-not-allowed')
  }

  switch (props.buttonType) {
    case 'base':
      classes.push(
        'dark:bg-success-700 text-white',
        'bg-success-900',
        'hover:bg-success-700',
        'dark:hover:bg-success-900',
      )
      break
    case 'success':
      classes.push('bg-success-600 text-white', 'hover:bg-success-700')
      break

    case 'info':
      classes.push(
        'dark:bg-gray-800 bg-gray-200 text-gray-600 dark:text-white',
        'dark:hover:bg-gray-700 hover:bg-gray-400',
      )
      break
    default:
      break
  }

  switch (props.sizeButton) {
    case 'auto':
      classes.push('w-auto')
      break
    case 'full':
      classes.push('w-full')
      break
    case 'middle':
      classes.push('w-1/2')
      break
    case 'quarter':
      classes.push('w-1/4')
      break

    case 'fit':
      classes.push('w-fit')
      break
    default:
      classes.push('w-auto')
      break
  }

  classes.push(props.disable ? 'cursor-not-allowed' : 'cursor-pointer')

  return classes
})
</script>

<template>
  <button :disabled="props.disable" :class="buttonClasses" @click="() => emit('btnEmit')">
    <IconComponent
      v-if="props.icon && props.iconPosition === 'before'"
      :color="props.colorIcon ?? '#fff'"
      :name="props.icon"
      :weight="props.iconWeight"
      :size="props.iconSize ?? 20"
    />
    <p>{{ props.content }}</p>
    <IconComponent
      v-if="props.icon && props.iconPosition === 'after'"
      :color="props.colorIcon ?? '#fff'"
      :name="props.icon"
      :weight="props.iconWeight"
      :size="props.iconSize ?? 20"
    />
  </button>
</template>
