<template>
  <article class="apartments-card">
    <apartments-photo :photos="apartment.images" />
  </article>
</template>

<script lang="ts">
import { defineComponent, PropType } from 'vue'
import ApartmentsPhoto from "@/components/apartments/ApartmentsCard/apartments-photo/ApartmentsPhoto.vue";
import TApartment from "@/classes/apartments/TApartment";

export default defineComponent({
  name: 'ApartmentsCard',
  components: { ApartmentsPhoto },
  props: {
    apartment: {
      type: Object as PropType<TApartment>,
      required: true
    }
  },
})
</script>

<style lang="scss">
@import "./style.scss";
</style>
