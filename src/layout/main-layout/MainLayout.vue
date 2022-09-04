<template>
  <div class="main-layout">
    <main-header />
    <div class="content">
      <slot name="content" />
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import MainHeader from "@/components/main-header/MainHeader.vue";

export default defineComponent({
  name: 'MainLayout',
  components: { MainHeader },
})
</script>
