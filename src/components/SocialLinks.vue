<script setup lang="ts">
import { Card, CardContent, CardFooter, CardHeader, CardTitle, } from './ui/card'
import { Button } from '@/components/ui/button'
</script>

<template>
  <Card class="bg-sky-400 my-1 max-md:mx-1 md:mx-32 md:w-xl md:pr-auto">
    <CardHeader>
      <CardTitle>Clicky Coyote</CardTitle>
      <!--      <CardDescription>Social Links</CardDescription>-->
    </CardHeader>
    <CardContent class="flex flex-row flex-wrap justify-around">
      <a
          href="https://bsky.app/profile/clicky.coyote.fm" class="flex-1/3 m-2">
        <Button class="w-full m-1 py-5 bg-sky-200 hover:bg-sky-100 text-neutral-800 cursor-pointer flex-1/2">
          <img src="../assets/bsky-logo.png" class="icon">BlueSky
        </Button>
      </a>
      <a
          href="https://t.me/ClickyCoyote" class="flex-1/3 m-2">
        <Button class="w-full m-1 py-5  bg-sky-200 hover:bg-sky-100 text-neutral-800 cursor-pointer">
          <img src="../assets/telegram-logo.png" class="icon"> Telegram
        </Button>
      </a>
      <!--      <a-->
      <!--          href="../assets/refsheet.png" class="flex-1/2 m-2">-->
      <!--        <Button class="w-full m-1 py-5  bg-sky-200 hover:bg-sky-100 text-neutral-800 cursor-pointer">-->
      <!--          Ref Sheet-->
      <!--        </Button>-->
      <!--      </a>-->

    </CardContent>
    <CardFooter class="flex flex-row flex-wrap justify-around">
      <img src="../assets/badge.png" class="md:w-md">
    </CardFooter>
  </Card>
</template>

<style scoped>
.icon {
  height: 2rem;
  display: inline;
}
</style>
