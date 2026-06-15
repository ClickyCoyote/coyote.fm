<script setup lang="ts">
import Image from 'primevue/image'
import { Button, Card } from 'primevue'
</script>

<template>
  <div class="grid grid-cols-2">
    <Card class="m-1">
      <template #header><h1 class="text-center">Reference Sheet</h1></template>
      <template #content>
        <Image alt="Image" preview>
          <template #previewicon>
            <i class="pi pi-search"></i>
          </template>
          <template #image>
            <img src="/refsheet.png" alt="image" />
          </template>
          <template #preview="slotProps">
            <img src="/refsheet.png" class="max-h-screen" alt="preview" :style="slotProps.style" />
          </template>
        </Image>
      </template>
      <template #footer>
        <Button><a href="/refsheet.png" download="clicky-refsheet"><i class="pi pi-download mr-2"></i>Download</a>
        </Button>
      </template>
    </Card>
    <Card class="m-1">
      <template #header><h1 class="text-center">Reference Sheet (NSFW)</h1></template>
      <template #content>
        <Image alt="Image" preview>
          <template #previewicon>
            <i class="pi pi-search"></i>
          </template>
          <template #image>
            <img src="/refsheet-nsfw.png" class="blur-md" alt="image" />
          </template>
          <template #preview="slotProps">
            <img src="/refsheet-nsfw.png" class="max-h-screen" alt="preview" :style="slotProps.style" />
          </template>
        </Image>
      </template>
      <template #footer>
        <Button><a href="/refsheet-nsfw.png" download="clicky-refsheet-nsfw"><i class="pi pi-download mr-2"></i>Download</a>
        </Button>
      </template>
    </Card>
    <!--
    <Card class="m-1">
      <template #header><h1 class="text-center">Reference Sheet (Fem)</h1></template>
      <template #content>
        <Image alt="Image" preview>
          <template #previewicon>
            <i class="pi pi-search"></i>
          </template>
          <template #image>
            <img src="/refsheet-fem.png" alt="image" />
          </template>
          <template #preview="slotProps">
            <img src="/refsheet-fem.png" class="max-h-screen" alt="preview" :style="slotProps.style" />
          </template>
        </Image>
      </template>
      <template #footer>
        <Button><a href="/refsheet-fem.png" download="clicky-refsheet-fem"><i
            class="pi pi-download mr-2"></i>Download</a>
        </Button>
      </template>
    </Card>
    -->
  </div>
</template>

<style scoped>
</style>
