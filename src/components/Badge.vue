<script setup lang="ts">
const { randomBadge } = defineProps<{ randomBadge?: Boolean }>()

const getBadge = () => {
  if (randomBadge) {
    const badges = ['badge', 'yoteyipyap', 'clicky5', 'clicky7', 'clicky8', 'clicky9', 'clicky10', 'clicky13', 'clicky-left', 'clicky-right']
    const rand = Math.floor(Math.random() * badges.length)
    // const coinFlip = Math.round(Math.random())
    // return `/badges/${coinFlip === 1 ? `badge` : badges[rand]}.png`
    return `/badges/${badges[rand]}.png`
  }

  return '/badges/badge.png'
}
</script>

<template>
  <img :src='getBadge()'>
</template>

<style scoped>

</style>



