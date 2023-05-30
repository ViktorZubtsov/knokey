<template>
  <section class="container apartments">
    <apartments-card
      v-for="item in apartmentList"
      :key="item.id"
      :apartment="item"
    />
    <card-skeleton v-if="false" />
  </section>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import ApartmentsCard from "@/components/apartments/apartments-card/ApartmentsCard.vue";
import CardSkeleton from "@/components/apartments/card-skeleton/CardSkeleton.vue";
import { mapActions, mapGetters } from "vuex";

export default defineComponent({
  name: 'ApartmentsVuex',
  components: { CardSkeleton, ApartmentsCard },
  data () {
    return {
      search: '',
      page: 1,
      limit: 0
    }
  },
  computed: {
    ...mapGetters(['apartmentList'])
  },
  mounted () {
    this.loadApartmentList()
  },
  methods: {
    ...mapActions({
      loadApartment: 'loadApartmentList'
    }),
    loadApartmentList () {
      this.loadApartment({
        search: this.search,
        page: this.page,
        limit: this.limit
      })
    }
  }
})
</script>

<style lang="scss">
@import "../apartments/style.scss";
</style>
