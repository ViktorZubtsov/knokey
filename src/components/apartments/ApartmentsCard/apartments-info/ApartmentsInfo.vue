<template>
  <article class="apartments-info">
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
    <div class="apartments-info-card">
      <div class="card-block">
        <ui-text
          theme="dark"
          :font-size="12"
          :font-weight="400"
          :line-height="16"
          text="Занято номеров:"
        />
        <ui-text
          theme="dark"
          :font-size="12"
          :font-weight="400"
          :line-height="16"
          :text="`${apartment.freeRooms} / ${apartment.allRooms}`"
        />
      </div>
      <div class="card-block">
        <ui-text
          theme="dark"
          :font-size="12"
          :font-weight="400"
          :line-height="16"
          text="Класс:"
        />
        <ui-text
          theme="dark"
          :font-size="12"
          :font-weight="400"
          :line-height="16"
          :text="apartment.roomClass"
        />
      </div>
      <div class="card-block">
        <ui-text
          theme="dark"
          :font-size="12"
          :font-weight="400"
          :line-height="16"
          text="Расположение:"
        />
        <ui-text
          theme="dark"
          :font-size="12"
          :font-weight="400"
          :line-height="16"
          :text="`${apartment.distanceFromCenter}  км от центра`"
        />
      </div>
    </div>
    <div class="apartments-info-footer">
      <ui-text
        theme="dark"
        :font-size="14"
        :font-weight="700"
        :line-height="19"
        :text="`от ${apartment.sum} р. за 41 день`"
      />
      <!--      TODO: Вынести компонент-->
      <button class="apartments-info-btn">
        <ui-text
          theme="white"
          :font-size="15"
          :font-weight="700"
          :line-height="20"
          text="Подробнее"
        />
      </button>
    </div>
  </article>
</template>

<script lang="ts">
import { defineComponent, PropType } from 'vue';
import UiText from "@/ui/ui-text/UiText.vue";
import TApartment from "@/classes/apartments/TApartment";

export default defineComponent({
  name: "ApartmentsInfo",
  components: { UiText },
  props: {
    apartment: {
      type: Object as PropType<TApartment>,
      required: true
    }
  }
})
</script>

<style lang="scss">
@import "./style.scss";
</style>
