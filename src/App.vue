<template>
  <main-layout>
    <template #content>
      <router-view />
    </template>
  </main-layout>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import MainLayout from "@/layout/main-layout/MainLayout.vue";

export default defineComponent({
  name: 'App',
  components: { MainLayout },
})
</script>
