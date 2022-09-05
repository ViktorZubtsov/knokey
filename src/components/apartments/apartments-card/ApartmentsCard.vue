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
    <apartments-info :apartment="apartment" />
  </article>
</template>

<script lang="ts">
import { defineComponent, PropType } from 'vue'
import ApartmentsPhoto from "@/components/apartments/apartments-card/apartments-photo/ApartmentsPhoto.vue";
import TApartment from "@/classes/apartments/TApartment";
import ApartmentsInfo from "@/components/apartments/apartments-card/apartments-info/ApartmentsInfo.vue";
import UiText from "@/ui/ui-text/UiText.vue";

export default defineComponent({
  name: 'ApartmentsCard',
  components: { UiText, ApartmentsInfo, ApartmentsPhoto },
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
