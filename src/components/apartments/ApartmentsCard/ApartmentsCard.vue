<template>
  <article class="apartments-card">
    <apartments-photo />
  </article>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import ApartmentsPhoto from "@/components/apartments/ApartmentsCard/apartments-photo/ApartmentsPhoto.vue";

export default defineComponent({
  name: 'ApartmentsCard',
  components: { ApartmentsPhoto },
})
</script>

<style lang="scss">
@import "./style.scss";
</style>
