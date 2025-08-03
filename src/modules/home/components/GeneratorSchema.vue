<script lang="ts" setup>
import CardExamaple from '@/modules/home/components/CardExamaple.vue'
import ButtonComponent from '@/shared/components/ButtonComponent.vue'
import type { GeneratorSchemaPros } from '@/shared/interfaces/generatorSchemaProps'

const props = defineProps<GeneratorSchemaPros>()
const sendSchema = () => {}
</script>

<template>
  <div class="w-full h-full flex flex-col gap-2">
    <div class="flex flex-col gap-2">
      <div class="dark:bg-gray-800 rounded-2xl p-1">
        <CardExamaple
          :schema="props.schema ?? {}"
          description="Crea tu propio es quema y genera tus endpoinds"
          title="Editor de esquema Json"
          :editable="true"
          :used="false"
          :copy-content="false"
        />
      </div>

      <ButtonComponent
        button-type="success"
        content="Generar CRUD"
        icon="Lightning"
        color-icon="#fff"
        icon-weight="duotone"
        :disable="true"
        icon-position="before"
        size-button="full"
        @btn-emit="sendSchema"
      />
    </div>
  </div>
</template>
