<script lang="ts" setup>
import type { JsonTempleteProps } from '../interfaces/jsonTemplateProps'
import { ref, computed } from 'vue'
import IconComponent from './IconComponent.vue'

const props = defineProps<JsonTempleteProps>()

const formattedJson = computed(() => JSON.stringify(props.json, null, 2))
const stateCopy = ref(false)

const textareaRows = computed(() => {
  const lines = formattedJson.value.split('\n').length
  return Math.min(lines, 50)
})

const copyToClipboard = async () => {
  try {
    await navigator.clipboard.writeText(formattedJson.value)
    stateCopy.value = true
    setTimeout(() => {
      stateCopy.value = false
    }, 2000)
  } catch (err) {
    stateCopy.value = false
  }
}
</script>

<template>
  <div v-if="formattedJson" class="relative">
    <textarea
      :value="formattedJson"
      :disabled="!props.disable"
      :rows="textareaRows"
      class="w-full resize-none rounded-xl font-family-mono p-6 mt-4 text-sm overflow-auto shadow-lg ring-1 transition-colors bg-gray-100 text-gray-800 ring-gray-200 dark:bg-slate-800 dark:text-slate-300 dark:ring-slate-800 focus:outline-none"
    ></textarea>

    <button
      v-if="props.copy"
      @click="copyToClipboard"
      class="absolute top-0 right-0 mt-6 mr-2 p-1 text-white text-xs rounded transition-all cursor-copy bg-gray-500 hover:bg-gray-600 opacity-50 hover:opacity-100 dark:bg-slate-700 dark:hover:bg-slate-600 dark:opacity-50 dark:hover:opacity-100"
    >
      <IconComponent
        :color="'#fff'"
        :name="stateCopy ? 'Check' : 'Copy'"
        :size="20"
        weight="duotone"
      />
    </button>
  </div>
</template>
