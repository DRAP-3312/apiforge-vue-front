<script lang="ts" setup>
import ButtonTheme from '@/shared/components/ButtonTheme.vue'
import LogoImage from '@/shared/components/LogoImage.vue'
import type { Theme } from '@/shared/types/ThemeOptions'
import type { NavigationHomeProps } from '../interfaces/navigationHomeProps'

const props = defineProps<NavigationHomeProps>()
const emit = defineEmits<{
  theme: [Theme]
}>()

const emitTheme = (val: Theme) => emit('theme', val)
const listBtnThemes: { id: number; content: string; icon: any; theme: Theme }[] = [
  { id: 1, content: 'dark', icon: 'Moon', theme: 'dark' },
  { id: 2, content: 'light', icon: 'SunDim', theme: 'light' },
  { id: 3, content: 'system', icon: 'Desktop', theme: 'system' },
]
</script>

<template>
  <div class="w-full h-full flex items-center justify-between dark:text-white text-gray-600 p-3">
    <div>
      <!-- <LogoImage alt="API Forge Logo" logo-type="bg-on" size="sm" /> -->
    </div>
    <div class="flex justify-cente items-center gap-2">
      <ButtonTheme
        v-for="btn in listBtnThemes"
        :key="btn.id"
        :content="btn.content"
        :theme="btn.theme"
        :icon="btn.icon"
        :target="props.target"
        @btn-emit="emitTheme"
      />
    </div>
  </div>
</template>
