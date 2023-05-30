import { createStore } from "vuex";

interface IStore {
  count: number
  apartmentName: string
}
const store = createStore<IStore>({
  state () {
    return {
      count: 10,
      apartmentName: ''
    }
  },
  mutations: {
    increment (state: IStore) {
      state.count++
    },
    setApartmentName (state: IStore, name: IStore['apartmentName']) {
      state.apartmentName = name
    }
  }
})
export default store
