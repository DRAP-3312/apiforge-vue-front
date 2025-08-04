<script lang="ts" setup>
import ButtonTheme from '@/shared/components/ButtonTheme.vue'
import type { Theme } from '@/shared/types/ThemeOptions'
import type { NavigationHomeProps } from '../interfaces/navigationHomeProps'
import ModalOptions from '@/shared/components/ModalOptions.vue'
import { ref } from 'vue'
import ButtonComponent from '@/shared/components/ButtonComponent.vue'

const props = defineProps<NavigationHomeProps>()
const visible = ref(false)
const emit = defineEmits<{
  theme: [Theme]
}>()

const emitTheme = (val: Theme) => emit('theme', val)
const listBtnThemes: { id: number; content: string; icon: any; theme: Theme }[] = [
  { id: 1, content: 'dark', icon: 'Moon', theme: 'dark' },
  { id: 2, content: 'light', icon: 'SunDim', theme: 'light' },
  { id: 3, content: 'system', icon: 'Desktop', theme: 'system' },
]

const toggleModalOption = (val: boolean) => {
  visible.value = val
}
</script>

<template>
  <div class="w-full h-full flex items-center justify-between dark:text-white text-gray-600 p-3">
    <div>
      <RouterLink :to="{ path: '/' }">
        <h1 class="text-3xl dark:text-success-500 text-success-900 font-family-mono">API Forge</h1>
      </RouterLink>
    </div>
    <div class="relative">
      <ButtonComponent
        button-type="info"
        content="Modo"
        :color-icon="props.target === 'light' ? '#111827' : '#fff'"
        :disable="false"
        :icon-size="20"
        icon="Faders"
        icon-weight="duotone"
        icon-position="before"
        @btn-emit="toggleModalOption(true)"
      />
      <ModalOptions :visible size="sm" @close="toggleModalOption(false)" v-if="visible">
        <div class="flex flex-col justify-cente items-center gap-2 w-full h-full">
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
      </ModalOptions>
    </div>
  </div>
</template>
