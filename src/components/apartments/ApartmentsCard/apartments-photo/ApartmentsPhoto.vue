<template>
  <article
    class="apartments-photo"
  >
    <div
      v-for="({path}, i) in photos"
      :key="`key-${path}`"
      class="apartments-photo__item"
      :class="`apartments-photo__item-${i}`"
    >
      <img
        :src="path"
        :alt="`image-${i}`"
      >
    </div>
  </article>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
  name: "ApartmentsPhoto",
  props: {
    photos: {
      type: Array,
      required: true
    }
  }
})
</script>

<style lang="scss">
@import "./style.scss";
</style>
