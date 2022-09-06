<template>
  <nav class="nav-bar">
    <div
      v-for="item in navList"
      :key="item.id"
      class="nav-bar__block"
    >
      <img
        class="nav-bar__block-img"
        :src="require(`@/components/common/navbar/img/${item.icon}.svg`)"
        :alt="`${item.icon}`"
      >
      <router-link
        class="nav-bar__block-link"
        :to="item.to"
      >
        <ui-text
          tag="span"
          :theme="'dark'"
          :text="item.text"
          :font-size="14"
          :font-weight="400"
          :line-height="19"
        />
      </router-link>
    </div>
  </nav>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import UiText from "@/ui/ui-text/UiText.vue";
type TNavList = {
  id: number
  text: string
  icon: string
  to: string
}
export default defineComponent({
  name: 'Navbar',
  components: { UiText },
  computed: {
    navList (): Array<TNavList> {
      return [
        {
          id: 1,
          text: 'Язык (RU)',
          icon: 'lang_icon',
          to: 'link_1'
        },
        {
          id: 2,
          text: 'Сдать жильё',
          icon: 'rent_icon',
          to: 'link_2'
        },
        {
          id: 3,
          text: 'Войти',
          icon: 'log_icon',
          to: 'link_3'
        }
      ]
    }
  }
})
</script>

<style lang="scss">
@import "style";
</style>
