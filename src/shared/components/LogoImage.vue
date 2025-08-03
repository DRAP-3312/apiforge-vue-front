<script lang="ts" setup>
import { useAssets } from '../composables/useAssets'
import type { LogoImageProps, LogoType } from '../interfaces/logoImageProps'
const { getLogoUrl } = useAssets()

const props = defineProps<LogoImageProps>()

const selectLogo = (val: LogoType) => {
  switch (val) {
    case 'bg-off':
      return getLogoUrl('api_forge_logo-nobg.png')
    case 'bg-on':
      return getLogoUrl('api_forge_logo.png')
  }
}
</script>

<template>
  <div>
    <img
      :src="selectLogo(props.logoType)"
      :alt="props.alt"
      class="mx-auto mb-8 max-w-xs"
      :class="{
        'h-auto w-auto': props.size === 'native',
        'h-24 w-24': props.size === 'lg',
        'h-16 w-16': props.size === 'md',
        'h-8 w-8': props.size === 'sm',
      }"
    />
  </div>
</template>
