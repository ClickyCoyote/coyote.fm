<script setup lang="ts">
import { Card, CardContent, CardFooter, CardHeader, CardTitle, } from './ui/card'
import { Button } from '@/components/ui/button'
</script>

<template>
  <Card class="bg-sky-400 my-1 max-md:mx-1 md:mx-32">
    <CardHeader>
      <CardTitle>Clicky Coyote</CardTitle>
      <!--      <CardDescription>Social Links</CardDescription>-->
    </CardHeader>
    <CardContent class="flex flex-row flex-wrap justify-around">
      <a
          href="https://bsky.app/profile/clicky.coyote.fm">
        <Button class="w-32 m-1 py-5 bg-sky-200 hover:bg-sky-100 text-neutral-800 cursor-pointer">
          <img src="../assets/bsky-logo.png" class="icon">BlueSky
        </Button>
      </a>
      <a
          href="https://t.me/ClickyCoyote">
        <Button class="w-32 m-1 py-5  bg-sky-200 hover:bg-sky-100 text-neutral-800 cursor-pointer">
          <img src="../assets/telegram-logo.png" class="icon"> Telegram
        </Button>
      </a>
    </CardContent>
    <CardFooter class="flex flex-row flex-wrap justify-around">
      <img src="../assets/badge.png" class="md:w-md my-auto">
    </CardFooter>
  </Card>
</template>

<style scoped>
.icon {
  height: 2rem;
  display: inline;
}
</style>
