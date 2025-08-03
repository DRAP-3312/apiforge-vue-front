<script lang="ts" setup>
import { useTheme } from '@/shared/composables/useTheme'
import NavigationHome from './components/NavigationHome.vue'
import LoaderComponent from '@/shared/components/LoaderComponent.vue'

const { setTheme, theme } = useTheme()
</script>

<template>
  <div class="dark:bg-dark-theme bg-white">
    <header
      class="fixed top-0 w-full z-10 border-b dark:border-gray-700 border-gray-300 px-2 dark:bg-dark-theme bg-white"
    >
      <NavigationHome @theme="setTheme" :target="theme" />
    </header>

    <main class="px-2 pt-16">
      <RouterView></RouterView>
    </main>
  </div>
</template>
