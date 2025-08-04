<script lang="ts" setup>
import { useTheme } from '@/shared/composables/useTheme'
import NavigationHome from './components/NavigationHome.vue'
import LoaderComponent from '@/shared/components/LoaderComponent.vue'
import { onMounted, ref } from 'vue'

const { setTheme, theme } = useTheme()
const loading = ref(true)

onMounted(() => {
  setTimeout(() => {
    loading.value = false
  }, 2000)
})
</script>

<template>
  <div class="dark:bg-dark-theme bg-white">
    <header
      class="fixed top-0 w-full z-10 border-b dark:border-gray-700 border-gray-300 px-2 dark:bg-dark-theme bg-white"
    >
      <NavigationHome @theme="setTheme" :target="theme" />
      <LoaderComponent
        type-loader="bar"
        :bg-loader="theme === 'light' ? '#fff' : '#111827'"
        :color-loader="theme == 'light' ? '#046c56' : '#0fa087'"
        v-if="loading"
      />
    </header>

    <main
      class="px-2 pt-16"
      :class="{
        'dark:brightness-50 brightness-90 blur-xs': loading,
      }"
    >
      <RouterView></RouterView>
    </main>
  </div>
</template>
