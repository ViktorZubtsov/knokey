<template>
  <section class="container apartments">
    <apartments-card
      v-for="item in apartmentsList"
      :key="item.id"
      :apartment="item"
    />
    <card-skeleton v-if="isFetch" />
    {{ count }}
  </section>
</template>

<script lang="ts">
import { defineComponent, onMounted } from 'vue'
import useApartmentsList from "@/hooks/useApartments";
import ApartmentsCard from "@/components/apartments/apartments-card/ApartmentsCard.vue";
import CardSkeleton from "@/components/apartments/card-skeleton/CardSkeleton.vue";
import { mapState } from "vuex";

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
  },
  computed: mapState([
    // map this.count to store.state.count
    'count'
  ])
})
</script>

<style lang="scss">
@import "./style.scss";
</style>
