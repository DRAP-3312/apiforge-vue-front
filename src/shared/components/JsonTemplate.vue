<script lang="ts" setup>
import type { JsonTempleteProps } from '../interfaces/jsonTemplateProps'

const props = defineProps<JsonTempleteProps>()
const formattedJson = JSON.stringify(props.json, null, 2)
</script>

<template>
  <div v-if="formattedJson">
    <pre class="rounded-lg dark:bg-gray-800 p-4 mt-4 text-white text-sm whitespace-pre-wrap"
      >{{ formattedJson }}
    </pre>
  </div>
</template>
