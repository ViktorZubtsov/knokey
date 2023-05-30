<template>
  <article class="apartments-card">
    <div class="apartments-card__mobile">
      <div>
        <ui-text
          theme="green"
          :font-size="18"
          :font-weight="400"
          :line-height="25"
          :text="apartment.name"
        />
      </div>
      <div>
        <ui-text
          theme="dark"
          :font-size="12"
          :font-weight="400"
          :line-height="16"
          :text="apartment.address"
        />
      </div>
    </div>
    <apartments-photo :photos="apartment.images" />
    <apartments-info
      v-if="!isMap"
      :apartment="apartment"
    />
    <div
      v-if="isMap"
      class="map"
      style="position: relative"
    >
      <google-map
        api-key=""
        style="width: 100%; height: 100%"
        :center="currentPosition"
        :zoom="15"
      >
        <marker
          :options="{ position: currentPosition}"
        />
      </google-map>
    </div>
    <button
      class="map-btn"
      :class="{'map-btn-active': isMap}"
      @click="() => isMap = !isMap"
    >
      <img
        v-if="!isMap"
        style="width: 18px; height: 18px"
        src="./img/map.svg"
        alt="map"
      >
      <img
        v-else
        style="width: 18px; height: 18px"
        src="./img/close.svg"
        alt="map"
      >
    </button>
  </article>
</template>

<script lang="ts">
import { defineComponent, PropType } from 'vue'
//@ts-ignore
import { GoogleMap, Marker } from "vue3-google-map";
import ApartmentsPhoto from "@/components/apartments/apartments-card/apartments-photo/ApartmentsPhoto.vue";
import TApartment from "@/types";
import ApartmentsInfo from "@/components/apartments/apartments-card/apartments-info/ApartmentsInfo.vue";
import UiText from "@/ui/ui-text/UiText.vue";

export default defineComponent({
  name: 'ApartmentsCard',
  // eslint-disable-next-line vue/no-unused-components
  components: { UiText, ApartmentsInfo, ApartmentsPhoto, GoogleMap, 'marker': Marker },
  data () {
    return {
      isMap: false
    }
  },
  props: {
    apartment: {
      type: Object as PropType<TApartment>,
      required: true
    }
  },
  computed: {
    currentPosition () {
      const [ lat, lng ] = this.apartment.coords.split(',');

      return {
        lat: +lat,
        lng: +lng
      }
    }
  }
})
</script>

<style lang="scss">
@import "./style.scss";
</style>
