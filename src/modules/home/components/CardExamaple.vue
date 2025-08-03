<script lang="ts" setup>
import type { CardExampleProps } from '@/modules/home/interfaces/cardExampleProps'
import ButtonComponent from '@/shared/components/ButtonComponent.vue'
import JsonTemplate from '@/shared/components/JsonTemplate.vue'

const props = defineProps<CardExampleProps>()
</script>

<template>
  <div class="border dark:border-gray-700 border-gray-200 rounded-2xl p-5" v-if="props.schema">
    <div class="flex items-center justify-between">
      <p class="font-semibold text-lg">{{ props.title }}</p>
      <ButtonComponent button-type="base" color-icon="#fff" content="Usar" :disable="false" />
    </div>
    <p class="dark:text-gray-400">{{ props.description }}</p>
    <JsonTemplate :copy="true" :json="props.schema" />
  </div>
</template>
