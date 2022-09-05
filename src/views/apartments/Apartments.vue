<template>
  <section class="container apartments">
    <apartments-card
      v-for="item in apartmentsList"
      :key="item.id"
      :apartment="item"
    />
    <card-skeleton v-if="isFetch" />
  </section>
</template>

<script lang="ts">
import { defineComponent, onMounted } from 'vue'
import useApartmentsList from "@/hooks/useApartments";
import ApartmentsCard from "@/components/apartments/ApartmentsCard/ApartmentsCard.vue";
import CardSkeleton from "@/components/apartments/CardSkeleton/CardSkeleton.vue";

export default defineComponent({
  name: 'Apartments',
  components: { CardSkeleton, ApartmentsCard },
  setup () {
    const { apartmentsList, isFetch, loadApartmentsList } = useApartmentsList();

    onMounted(loadApartmentsList);

    return {
      apartmentsList,
      isFetch
    }
  }
})
</script>

<style lang="scss">
@import "./style.scss";
</style>
