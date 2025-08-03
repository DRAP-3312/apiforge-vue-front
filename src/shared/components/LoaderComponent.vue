<script lang="ts" setup>
import type { LoaderComponentProps } from '../interfaces/loaderComponentProps'

const props = defineProps<LoaderComponentProps>()
</script>

<template>
  <svg viewBox="25 25 50 50" v-if="props.typeLoader === 'circle'">
    <circle r="20" cy="50" cx="50"></circle>
  </svg>

  <div class="loader" v-else-if="props.typeLoader === 'bar'"></div>
</template>

<style scoped>
/* circle */
svg {
  width: 3.25em;
  transform-origin: center;
  animation: rotate4 2s linear infinite;
}

circle {
  fill: none;
  stroke: hsl(214, 97%, 59%);
  stroke-width: 2;
  stroke-dasharray: 1, 200;
  stroke-dashoffset: 0;
  stroke-linecap: round;
  animation: dash4 1.5s ease-in-out infinite;
}

@keyframes rotate4 {
  100% {
    transform: rotate(360deg);
  }
}

@keyframes dash4 {
  0% {
    stroke-dasharray: 1, 200;
    stroke-dashoffset: 0;
  }

  50% {
    stroke-dasharray: 90, 200;
    stroke-dashoffset: -35px;
  }

  100% {
    stroke-dashoffset: -125px;
  }
}

/* bar */
.loader {
  display: block;
  --height-of-loader: 2px;
  --loader-color: #ed8200;
  width: 100%;
  height: var(--height-of-loader);
  border-radius: 30px;
  background-color: rgba(0, 0, 0, 0.2);
  position: relative;
}

.loader::before {
  content: '';
  position: absolute;
  background: var(--loader-color);
  top: 0;
  left: 0;
  width: 0%;
  height: 100%;
  border-radius: 30px;
  animation: moving 1s ease-in-out infinite;
}

@keyframes moving {
  50% {
    width: 100%;
  }

  100% {
    width: 0;
    right: 0;
    left: unset;
  }
}
</style>
