<template>
  <div class="main-layout">
    <main-header />
    <main class="content">
      <slot name="content" />
    </main>
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
