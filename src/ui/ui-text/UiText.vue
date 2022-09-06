<template>
  <component
    :is="tag"
    v-if="!isFetch"
    :class="`ui-text_theme_${theme}`"
    :style="textStyle"
    class="ui-text"
    v-text="text"
  />
  <Skeletor
    v-else-if="isFetch"
    width="70%"
  />
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
  name: 'UiText',
  props: {
    text: {
      type: [ String, Number ],
      default: '',
      required: true
    },
    tag: {
      type: String,
      default: 'span'
    },
    fontSize: {
      type: [ Number, String ],
    },
    lineHeight: {
      type: [ Number, String ],
    },
    fontWeight: {
      type: [ String, Number ],
    },
    theme: {
      type: String
    },
    isFetch: {
      type: Boolean,
      default: false
    },
  },
  computed: {
    textStyle () {
      return {
        'font-size': `${this.fontSize}px`,
        'line-height': `${this.lineHeight}px`,
        'font-weight': this.fontWeight
      }
    }
  },
})
</script>

<style lang="scss" scoped>
@import './styles';
</style>
