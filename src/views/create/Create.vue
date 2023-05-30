<template>
  <div class="container apartments">
    <div>{{ length }}</div>
    <input
      ref="input"
      v-model="inputValue"
    >
    <button @click="saveName">Save</button>
  </div>
</template>

<script lang="ts">
import { defineComponent, onMounted, ref } from "vue";
import { mapMutations } from "vuex";

export default defineComponent({
    name: 'Create',
  // пока не смотрите на setup
    setup () {
      const input = ref<HTMLInputElement>()

      onMounted(() => {
        input.value?.focus()
      })

      return {
        input
      }
    },
    data () {
      return {
        inputValue: '',
      }
    },
    computed: {
      length (): number {
         return this.inputValue.length
      /// set (value: string) {
      //   this.currentLength = +value
      // },
      // get (): number {
      //   return this.inputValue.length
      }
    },
  methods: {
      ...mapMutations(['setApartmentName']),
      saveName () {
        this.setApartmentName(this.inputValue)
      }
  }
})

</script>
