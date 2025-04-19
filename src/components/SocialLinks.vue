<script setup lang="ts">
import { Card, CardContent, CardFooter, CardHeader, CardTitle, } from './ui/card'
import { Button } from '@/components/ui/button'


const badges = ['badge', 'yoteyipyap', 'clicky5', 'clicky7', 'clicky9', 'clicky10']
const rand = Math.floor(Math.random() * badges.length)
const coinFlip = Math.round(Math.random())
const badge = `/src/assets/badges/${coinFlip === 1 ? `badge` : badges[rand]}.png`

</script>

<template>
  <Card class="bg-sky-400 my-1 max-md:mx-1 md:mx-32 md:w-xl md:pr-auto gap-0">
    <CardHeader>
      <CardTitle class="text-4xl font-extralight text-sky-900">
        <img src="../assets/profile-pic.png" class="h-16 mr-2 inline">Clicky Coyote
      </CardTitle>
      <!--      <CardDescription>Social Links</CardDescription>-->
    </CardHeader>
    <CardContent class="grid grid-cols-2">
      <a
          href="https://bsky.app/profile/clicky.coyote.fm" class="row-start-1 m-1">
        <Button class="w-full py-5 bg-sky-200 hover:bg-sky-100 text-sky-900 cursor-pointer">
          <img src="../assets/bsky-logo.png" class="h-8">BlueSky
        </Button>
      </a>
      <a
          href="https://t.me/ClickyCoyote" class="m-1">
        <Button class="w-full py-5  bg-sky-200 hover:bg-sky-100 text-sky-900 cursor-pointer">
          <img src="../assets/telegram-logo.png" class="h-8">Telegram
        </Button>
      </a>

      <a
          href="https://www.furaffinity.net/user/clickyfreewheel" class="row-start-2 m-1">
        <Button class="w-full py-5  bg-sky-200 hover:bg-sky-100 text-sky-900 cursor-pointer">
          <img src="../assets/fa-logo.png" class="h-8">Fur Affinity
        </Button>
      </a>
      <a
          href="https://vrchat.com/home/user/usr_fda75b99-fbf9-4a41-a806-9604c6683f61" class="m-1">
        <Button class="w-full py-5  bg-sky-200 hover:bg-sky-100 text-sky-900 cursor-pointer">
          <img src="../assets/vrchat-logo.png" class="h-8">VR Chat
        </Button>
      </a>

      <a
          href="https://t.me/addstickers/ClickyCoyote" class="row-start-3 m-1">
        <Button class="w-full py-5  bg-sky-200 hover:bg-sky-100 text-sky-900 cursor-pointer">
          <img src="../assets/stickers1.png" class="h-8">Sticker Pack
        </Button>
      </a>
      <a
          href="https://steamcommunity.com/id/clickycoyote/" class="m-1">
        <Button class="w-full py-5  bg-sky-200 hover:bg-sky-100 text-sky-900 cursor-pointer">
          <img src="../assets/steam-logo.png" class="h-8">Steam
        </Button>
      </a>

      <a
          href="https://drive.proton.me/urls/WPXJHPK5M8#R76vN5VYDSbu" class="row-start-4 col-span-2 m-1">
        <Button class="w-full py-5  bg-sky-200 hover:bg-sky-100 text-sky-900 cursor-pointer">
          Ref Sheet
        </Button>
      </a>

      <!--      <a-->
      <!--          href="https://windycityfurs.com" target="_blank" class="m-1">-->
      <!--        <Button class="w-full py-5  bg-sky-200 hover:bg-sky-100 text-sky-900 cursor-pointer">-->
      <!--          <img src="../assets/vrchat-logo.png" class="h-8">Windy City Furs-->
      <!--        </Button>-->
      <!--      </a>-->
      <!--      <RouterLink-->
      <!--          to="/ref" class="m-1 col-start-2 col-span-2">-->
      <!--        <Button class="w-full py-5  bg-sky-200 hover:bg-sky-100 text-sky-900 cursor-pointer">-->
      <!--          Ref Sheet-->
      <!--        </Button>-->
      <!--      </RouterLink>-->
      <!--      <a-->
      <!--          href="https://t.me/addstickers/ClickyCoyote2" class="m-1">-->
      <!--        <Button class="w-full py-5  bg-sky-200 hover:bg-sky-100 text-sky-900 cursor-pointer">-->
      <!--          <img src="../assets/telegram-logo.png" class="h-8"> Sticker Pack 2-->
      <!--        </Button>-->
      <!--      </a>-->

    </CardContent>
    <CardFooter class="flex flex-row flex-wrap justify-around">
      <img src="../assets/badges/badge.png" class="mt-2 md:w-md">
    </CardFooter>
  </Card>
</template>

<style scoped>
.profile-pic {
  height: 4rem;
  display: inline;
  margin-right: 1rem;
}
</style>
