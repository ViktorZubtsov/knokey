<template>
  <article
    class="apartments-photo"
  >
    <div
      v-for="({path}, i) in photos"
      :key="`key-${path}`"
      class="apartments-photo__item"
      :class="`apartments-photo__item-${i}`"
    >
      <img
        :src="path"
        :alt="`image-${i}`"
      >
      <photo-btn @click="openSlider(i)" />
      <div style="position: absolute">
        <vue-picture-swipe
          :id="`swipe${i}`"
          ref="pictureSwipe"
          :items="photoList"
        />
      </div>
    </div>
  </article>
</template>

<script lang="ts">
import { defineComponent, PropType } from 'vue';
import PhotoBtn from "@/components/common/photo-btn/PhotoBtn.vue";
export type TPhoto = Array<{
  path: string
}>
export type TPhotoList = Array<{
  w: number
  h: number
}>
export default defineComponent({
  name: "ApartmentsPhoto",
  components: { PhotoBtn },
  props: {
    photos: {
      type: Array as PropType<TPhoto>,
      required: true
    },
  },
  computed: {
    photoList (): TPhotoList {
      const baseOpt = {
        w: 1200,
        h: 900
      }

    return this.photos.map(({ path }) => {
        return {
          src: path,
          ...baseOpt
        }
      })
    }
  },
  methods: {
    openSlider (i: number): void {
      //TODO: переделать c использованием $ref
      const el = document.getElementById(`swipe${i}`)
      //@ts-ignore
      el.children[0].children[0].click()

    }
  }
})
</script>

<style lang="scss">
@import "./style.scss";
</style>
