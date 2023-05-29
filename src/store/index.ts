import { createStore } from "vuex";

interface IStore {
  count: number
}
const store = createStore<IStore>({
  state () {
    return {
      count: 10
    }
  },
  mutations: {
    increment (state) {
      state.count++
    }
  }
})
export default store
