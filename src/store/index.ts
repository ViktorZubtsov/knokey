import { createStore } from "vuex";
import apartmentModule, { IApartmentState } from "@/store/apartments";

export type IStore = IApartmentState

const store = createStore<IStore>({
  modules: { apartmentModule }
})
export default store
