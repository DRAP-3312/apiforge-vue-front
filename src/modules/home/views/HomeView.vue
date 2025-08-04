<script setup lang="ts">
import { ref } from 'vue'
import CardExamaple from '../components/CardExamaple.vue'
import GeneratorSchema from '../components/GeneratorSchema.vue'
import { schemasExamples } from '../data-template/exampleCard'
import ButtonComponent from '@/shared/components/ButtonComponent.vue'

const schemaCustom = ref({})

const schemaRecived = (val: Object) => {
  schemaCustom.value = val
}
</script>

<template>
  <div class="flex lg:flex-row flex-col w-full h-full font-family-sans">
    <div
      class="lg:w-1/2 lg:flex justify-center items-center p-5 dark:text-white text-success-900 order-2 lg:order-1"
    >
      <div class="flex flex-col gap-2">
        <div class="p-1 border-b dark:border-gray-700 border-gray-300">
          <h2 class="dark:text-white text-success-900 text-[2.2rem]">Sobre la App</h2>
          <p class="dark:text-gray-400 text-gray-600 text-md mb-2">
            Api Forge es una aplicación que simplifica el desarrollo front-end al crear un backend
            dinámico y temporal al instante. La herramienta permite a los desarrolladores definir un
            esquema de datos JSON personalizado y, a partir de él, genera automáticamente una API
            REST completa con los cuatro endpoints básicos: POST, GET, PATCH y DELETE. Esto elimina
            la necesidad de configurar un backend real durante las fases de prototipado y pruebas,
            acelerando significativamente el flujo de trabajo.
          </p>
        </div>

        <p class="text-[1.3rem] p-3">Ejemplos de esquemas</p>
        <div class="flex flex-col gap-3">
          <CardExamaple
            v-for="(item, index) in schemasExamples"
            :schema="item.schema"
            :description="item.description"
            :title="item.title"
            :used="true"
            :key="index"
            :copy-content="true"
            @schema-emit="schemaRecived"
          />
        </div>
      </div>
    </div>
    <div
      class="flex flex-col gap-2 lg:w-1/2 justify-center items-center p-5 dark:text-white text-gray-600 w-full h-full text-sm order-1 lg:order-2"
    >
      <GeneratorSchema :schema="schemaCustom" />
      <div
        class="border dark:border-gray-700 border-gray-200 rounded-2xl py-3 px-5 flex gap-1 flex-col"
      >
        <p class="text-lg">¿Cómo funciona?</p>
        <p class="text-gray-400">
          Nuestra herramienta analiza tu esquema Json proporcionado y genera temporalmente un CRUD
          de endpoints que puedes usar para pruebas
        </p>
        <ButtonComponent
          button-type="base"
          color-icon="#fff"
          content="Ver documentación completa"
          :disable="true"
          icon-weight="regular"
          icon-position="after"
          icon="ArrowRight"
          :icon-size="20"
          size-button="fit"
        />
      </div>
    </div>
  </div>
</template>
