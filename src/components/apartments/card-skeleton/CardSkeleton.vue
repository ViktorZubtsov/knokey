<template>
  <article style="display: grid; row-gap: 20px">
    <Skeletor
      v-for="i in ([1,2, 3])"
      :key="i"
      height="274px"
      width="70%"
    />
  </article>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
//TODO: Сделать универсальным, подогнать размеры и.т.д
export default defineComponent({
  name: 'CardSkeleton',
})
</script>
