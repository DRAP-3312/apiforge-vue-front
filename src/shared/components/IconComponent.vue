<template>
  <component
    :is="iconComponent"
    :size="size ?? 30"
    :color="color ?? '#181817'"
    :weight="weight ?? 'regular'"
    class="transition-colors duration-200"
  />
</template>

<script setup lang="ts">
import { computed, defineProps } from 'vue'
import * as PhosphorIcons from '@phosphor-icons/vue'
import type { IconComponentProps, IconName } from '../interfaces/iconComponentProps'

const { color, name, size, weight } = defineProps<IconComponentProps>()

const iconComponent = computed(() => {
  const iconName = `Ph${name}` as IconName
  return PhosphorIcons[iconName] || PhosphorIcons.PhQuestionMark
})
</script>
