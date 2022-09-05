<template>
  <article class="apartments-card">
    <apartments-photo :photos="apartment.images" />
    <apartments-info :apartment="apartment" />
  </article>
</template>

<script lang="ts">
import { defineComponent, PropType } from 'vue'
import ApartmentsPhoto from "@/components/apartments/ApartmentsCard/apartments-photo/ApartmentsPhoto.vue";
import TApartment from "@/classes/apartments/TApartment";
import ApartmentsInfo from "@/components/apartments/ApartmentsCard/apartments-info/ApartmentsInfo.vue";

export default defineComponent({
  name: 'ApartmentsCard',
  components: { ApartmentsInfo, ApartmentsPhoto },
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
