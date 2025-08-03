<script setup lang="ts">
import { useAssets } from '@/composables/useAssets'
import { useTheme } from '@/composables/useTheme'
import { ref } from 'vue'

const { getLogoUrl } = useAssets()
const { theme, setTheme, logoType } = useTheme()
</script>

<template>
  <div class="min-h-screen bg-white dark:bg-gray-900 transition-colors duration-300">
    <!-- Botón para cambiar tema -->
    <div class="absolute top-4 right-4 flex gap-2">
      <button
        @click="setTheme('light')"
        :class="[
          'px-3 py-1 rounded-md text-sm font-medium transition-colors',
          theme === 'light'
            ? 'bg-primary-500 text-white'
            : 'bg-gray-200 dark:bg-gray-700 text-gray-900 dark:text-gray-100 hover:bg-gray-300 dark:hover:bg-gray-600',
        ]"
      >
        ☀️ Claro
      </button>
      <button
        @click="setTheme('dark')"
        :class="[
          'px-3 py-1 rounded-md text-sm font-medium transition-colors',
          theme === 'dark'
            ? 'bg-primary-500 text-white'
            : 'bg-gray-200 dark:bg-gray-700 text-gray-900 dark:text-gray-100 hover:bg-gray-300 dark:hover:bg-gray-600',
        ]"
      >
        🌙 Oscuro
      </button>
      <button
        @click="setTheme('system')"
        :class="[
          'px-3 py-1 rounded-md text-sm font-medium transition-colors',
          theme === 'system'
            ? 'bg-primary-500 text-white'
            : 'bg-gray-200 dark:bg-gray-700 text-gray-900 dark:text-gray-100 hover:bg-gray-300 dark:hover:bg-gray-600',
        ]"
      >
        💻 Sistema
      </button>
    </div>

    <!-- Contenido principal -->
    <div class="flex items-center justify-center min-h-screen px-4">
      <div class="text-center max-w-4xl mx-auto">
        <!-- Logo -->
        <img
          :src="getLogoUrl(logoType)"
          alt="API Forge Logo"
          class="mx-auto mb-8 h-auto w-auto max-w-xs"
        />

        <!-- Título principal -->
        <h1 class="text-4xl font-bold text-gray-900 dark:text-gray-100 mb-4">ApiForge</h1>
        <p class="text-xl text-gray-600 dark:text-gray-300 mb-12">Proximamente...</p>

        <!-- Demostración de la paleta de colores -->
        <div class="bg-gray-50 dark:bg-gray-800 rounded-xl p-8 shadow-lg">
          <h2 class="text-2xl font-semibold text-gray-900 dark:text-gray-100 mb-6">
            Paleta de Colores
          </h2>

          <!-- Colores principales -->
          <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
            <div class="space-y-3">
              <h3 class="text-lg font-medium text-gray-900 dark:text-gray-100">Primary</h3>
              <div class="space-y-2">
                <div class="bg-primary-500 text-white px-4 py-2 rounded">500</div>
                <div class="bg-primary-600 text-white px-4 py-2 rounded">600</div>
                <div class="bg-primary-700 text-white px-4 py-2 rounded">700</div>
              </div>
            </div>

            <div class="space-y-3">
              <h3 class="text-lg font-medium text-gray-900 dark:text-gray-100">Success</h3>
              <div class="space-y-2">
                <div class="bg-success-500 text-white px-4 py-2 rounded">500</div>
                <div class="bg-success-600 text-white px-4 py-2 rounded">600</div>
                <div class="bg-success-700 text-white px-4 py-2 rounded">700</div>
              </div>
            </div>

            <div class="space-y-3">
              <h3 class="text-lg font-medium text-gray-900 dark:text-gray-100">Warning</h3>
              <div class="space-y-2">
                <div class="bg-warning-500 text-white px-4 py-2 rounded">500</div>
                <div class="bg-warning-600 text-white px-4 py-2 rounded">600</div>
                <div class="bg-warning-700 text-white px-4 py-2 rounded">700</div>
              </div>
            </div>

            <div class="space-y-3">
              <h3 class="text-lg font-medium text-gray-900 dark:text-gray-100">Error</h3>
              <div class="space-y-2">
                <div class="bg-error-500 text-white px-4 py-2 rounded">500</div>
                <div class="bg-error-600 text-white px-4 py-2 rounded">600</div>
                <div class="bg-error-700 text-white px-4 py-2 rounded">700</div>
              </div>
            </div>
          </div>

          <!-- Ejemplo de botones -->
          <div class="flex flex-wrap gap-4 justify-center">
            <button
              class="bg-primary-500 hover:bg-primary-600 text-white px-6 py-3 rounded-lg font-medium transition-colors"
            >
              Botón Principal
            </button>
            <button
              class="bg-gray-500 hover:bg-gray-600 text-white px-6 py-3 rounded-lg font-medium transition-colors"
            >
              Botón Secundario
            </button>
            <button
              class="bg-success-500 hover:bg-success-600 text-white px-6 py-3 rounded-lg font-medium transition-colors"
            >
              Éxito
            </button>
            <button
              class="bg-warning-500 hover:bg-warning-600 text-white px-6 py-3 rounded-lg font-medium transition-colors"
            >
              Advertencia
            </button>
            <button
              class="bg-error-500 hover:bg-error-600 text-white px-6 py-3 rounded-lg font-medium transition-colors"
            >
              Error
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped></style>
