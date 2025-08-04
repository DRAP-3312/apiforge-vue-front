<template>
  <div
    v-if="visible"
    ref="modalElement"
    class="absolute right-0 top-full mt-2 z-50 flex items-center justify-center dark:bg-gray-700 bg-gray-300 opacity-80 bg-opacity-50 p-2 rounded-md"
    :class="{
      'w-fit h-fit': size === 'fit',
      'w-60 h-60': size === 'md',
      'w-40 h-40': size === 'sm',
      'w-80 h-80': size === 'lg',
    }"
  >
    <slot></slot>
  </div>
</template>

<script lang="ts" setup>
import { onMounted, onUnmounted, ref } from 'vue'
import type { ModalOptionProps } from '../interfaces/modalOptionProps'

const { visible } = defineProps<ModalOptionProps>()
const emit = defineEmits<{
  close: [void]
}>()

const modalElement = ref<HTMLElement | null>(null)

const handleClickOutside = (event: MouseEvent) => {
  const button = document.querySelector('[data-modal-target="theme-options"]')

  if (
    visible &&
    modalElement.value &&
    !modalElement.value.contains(event.target as Node) &&
    !(button && button.contains(event.target as Node))
  ) {
    emit('close')
  }
}

let timeoutId: ReturnType<typeof setTimeout> | null = null

onMounted(() => {
  timeoutId = setTimeout(() => {
    document.addEventListener('click', handleClickOutside)
  }, 0)
})

onUnmounted(() => {
  if (timeoutId) {
    clearTimeout(timeoutId)
  }
  document.removeEventListener('click', handleClickOutside)
})
</script>
