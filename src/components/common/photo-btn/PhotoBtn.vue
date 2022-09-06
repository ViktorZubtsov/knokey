<template>
  <article
    class="photo-btn"
    @click="() => $emit('click')"
  >
    <img
      src="./img/photo.svg"
      alt="photo"
    >
  </article>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
  name: 'PhotoBtn',
  emits: ['click']
})
</script>

<style lang="scss">
@import "style";
</style>
