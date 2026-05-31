<script setup lang="ts">
import Image from 'primevue/image'
import { Card } from 'primevue'
</script>

<template>
  <Card>
    <template #header>
      <i class="pi pi-download"></i>
    </template>
    <template #content>
      <!--      <Image src="/refsheet.png" />-->
      <Image alt="Image" preview>
        <template #previewicon>
          <i class="pi pi-search"></i>
        </template>
        <template #image>
          <img src="/refsheet.png" alt="image" />
        </template>
        <template #preview="slotProps">
          <img src="/refsheet.png" alt="preview" :style="slotProps.style" @click="slotProps.onClick" />
        </template>
      </Image>
    </template>
  </Card>
</template>

<style scoped>
</style>
