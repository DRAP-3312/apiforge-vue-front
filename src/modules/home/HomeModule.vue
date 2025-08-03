<script lang="ts" setup>
import { useTheme } from '@/shared/composables/useTheme'
import NavigationHome from './components/NavigationHome.vue'

const { setTheme, theme } = useTheme()
</script>

<template>
  <div class="dark:bg-dark-theme w-full h-full bg-white flex md:flex-col flex-row p-2">
    <header class="border-b border-gray-700">
      <NavigationHome @theme="setTheme" :target="theme" />
    </header>
    <main class="flex justify-center items-center w-full h-full">principal</main>
  </div>
</template>
