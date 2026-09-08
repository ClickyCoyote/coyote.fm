<script setup lang="ts">
import Card from 'primevue/card'
import Button from 'primevue/button'
</script>

<template>
  <img src="../assets/profile-pic-2.png" class="h-24 mx-auto rounded-full border-1 border-sky-900 my-4" />
  <Card class="max-md:mx-4 min-md:w-xl min-md:mx-auto">
    <template #content class="grid grid-cols-1">
      <a
          href="https://venmo.com/u/ClickyCoyote" class="row-start-1 m-1">
        <Button
            class="w-full py-5 my-4 bg-sky-200 hover:bg-sky-100 text-sky-900 cursor-pointer font-extrabold uppercase">
          Pay with Venmo
        </Button>
      </a>
      <a
          href="https://cash.app/$ClickyCoyote" class="row-start-2 m-1">
        <Button class="w-full py-5 bg-sky-200 hover:bg-sky-100 text-sky-900 cursor-pointer font-extrabold uppercase">
          Pay with Cash App
        </Button>
      </a>
    </template>
  </Card>
</template>

<style scoped>

</style>
