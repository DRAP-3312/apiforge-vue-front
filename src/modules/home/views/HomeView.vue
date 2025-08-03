<script setup lang="ts">
import CardExamaple from '../components/CardExamaple.vue'
import { schemasExamples } from '../data-template/exampleCard'
</script>

<template>
  <div class="flex w-full h-full">
    <div class="md:flex-1/2 justify-center items-center p-5 dark:text-white text-gray-600">
      <div class="flex flex-col gap-2">
        <div class="font-sans p-1 border-b dark:border-gray-700 border-gray-300">
          <h2 class="font-bold dark:text-white text-gray-900 text-[2.2rem]">
            Generador de Datos Json
          </h2>
          <p class="dark:text-gray-400 text-md mb-2">
            Crea datos de prueba realistas basados en esquemas JSON Schemas. Perfecto para
            desarrollo, testing y prototipado rápido
          </p>
        </div>

        <p class="text-[1.3rem] p-3">Ejemplos de esquemas</p>
        <div>
          <CardExamaple
            :schema="item.schema"
            :description="item.description"
            :title="item.title"
            v-for="(item, index) in schemasExamples"
            :key="index"
          />
        </div>
      </div>
    </div>
    <div class="md:flex-1/2"></div>
  </div>
</template>
