<template>
  <section class="container apartments">
    Apartments
  </section>
</template>

<script lang="ts">
import { defineComponent, onMounted } from 'vue'
import useApartmentsList from "@/hooks/useApartments";

export default defineComponent({
  name: 'Apartments',
  setup () {
    const { apartmentsList, loadApartmentsList } = useApartmentsList();

    onMounted(loadApartmentsList);

    return {
      apartmentsList
    }
  }
})
</script>

<style lang="scss">
@import "./style.scss";
</style>
