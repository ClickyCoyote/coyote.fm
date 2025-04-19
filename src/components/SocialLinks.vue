<script setup lang="ts">
import { Card, CardContent, CardFooter, CardHeader, CardTitle, } from './ui/card'
import { Button } from '@/components/ui/button'
</script>

<template>
  <Card class="bg-sky-400 my-1 max-md:mx-1 md:mx-32 md:w-xl md:pr-auto gap-0">
    <CardHeader>
      <CardTitle>Clicky Coyote</CardTitle>
      <!--      <CardDescription>Social Links</CardDescription>-->
    </CardHeader>
    <CardContent class="grid grid-cols-2">
      <a
          href="https://bsky.app/profile/clicky.coyote.fm" class="row-start-1 m-1">
        <Button class="w-full py-5 bg-sky-200 hover:bg-sky-100 text-neutral-800 cursor-pointer">
          <img src="../assets/bsky-logo.png" class="icon">BlueSky
        </Button>
      </a>
      <a
          href="https://t.me/ClickyCoyote" class="m-1">
        <Button class="w-full py-5  bg-sky-200 hover:bg-sky-100 text-neutral-800 cursor-pointer">
          <img src="../assets/telegram-logo.png" class="icon">Telegram
        </Button>
      </a>
      <a
          href="https://www.furaffinity.net/user/clickyfreewheel" class="row-start-2 m-1">
        <Button class="w-full py-5  bg-sky-200 hover:bg-sky-100 text-neutral-800 cursor-pointer">
          <img src="../assets/fa-logo.png" class="icon">Fur Affinity
        </Button>
      </a>
      <a
          href="https://t.me/addstickers/ClickyCoyote" class=" m-1">
        <Button class="w-full py-5  bg-sky-200 hover:bg-sky-100 text-neutral-800 cursor-pointer">
          <img src="../assets/stickers1.png" class="icon">Sticker Pack
        </Button>
      </a>
      <!--      <RouterLink-->
      <!--          to="/ref" class="m-1 col-start-2 col-span-2">-->
      <!--        <Button class="w-full py-5  bg-sky-200 hover:bg-sky-100 text-neutral-800 cursor-pointer">-->
      <!--          Ref Sheet-->
      <!--        </Button>-->
      <!--      </RouterLink>-->
      <a
          href="https://drive.proton.me/urls/WPXJHPK5M8#R76vN5VYDSbu" class="row-start-3 col-span-2 m-1">
        <Button class="w-full py-5  bg-sky-200 hover:bg-sky-100 text-neutral-800 cursor-pointer">
          Ref Sheet
        </Button>
      </a>

      <!--      <a-->
      <!--          href="https://t.me/addstickers/ClickyCoyote2" class="m-1">-->
      <!--        <Button class="w-full py-5  bg-sky-200 hover:bg-sky-100 text-neutral-800 cursor-pointer">-->
      <!--          <img src="../assets/telegram-logo.png" class="icon"> Sticker Pack 2-->
      <!--        </Button>-->
      <!--      </a>-->

    </CardContent>
    <CardFooter class="flex flex-row flex-wrap justify-around">
      <img src="../assets/badge.png" class="mt-2 md:w-md">
    </CardFooter>
  </Card>
</template>

<style scoped>
.icon {
  height: 2rem;
  display: inline;
}
</style>
