<script setup lang="ts">
import { useAssets } from '@/composables/useAssets'

const { getLogoUrl } = useAssets()
</script>

<template>
  <div class="min-h-screen bg-gray-100 flex items-center justify-center">
    <div class="text-center">
      <img
        :src="getLogoUrl('api_forge_logo-nobg.png')"
        alt="API Forge Logo"
        class="mx-auto mb-6 h-auto w-auto"
      />
      <p class="text-lg text-gray-700">ApiForge proximamente...</p>
    </div>
  </div>
</template>

<style scoped></style>
