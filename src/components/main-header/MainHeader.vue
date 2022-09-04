<template>
  <header class="main-header">
    <img
      class="logo"
      src="@/assets/img/logo.png"
      alt="logo"
    >
    <navbar />
  </header>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import Navbar from "@/components/navbar/Navbar.vue";

export default defineComponent({
  name: 'MainHeader',
  components: { Navbar },
})
</script>

<style lang="scss">
@import "./style.scss";
</style>
