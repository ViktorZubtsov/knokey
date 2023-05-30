import { Module } from "vuex";
import TApartment from "@/types";
import loadApartments, { TLoadParams } from "@/services/load-apartments/loadApartments";

export interface IApartmentState {
  apartmentName: string
  apartmentList: TApartment[] | []
}

const apartmentModule: Module<IApartmentState, IApartmentState> = {
  state: () => ({
    apartmentName: '',
    apartmentList: [],
  }),
  mutations: {
    setApartmentName (state, name: string) {
      state.apartmentName = name;
    },
    setApartmentList (state, list: TApartment[]) {
      state.apartmentList = list;
      console.log(state.apartmentList)
    }
  },
  actions: {
    loadApartmentList ({ commit }, params: TLoadParams) {
      loadApartments(params).then(res => {
        console.log(res)
        commit('setApartmentList', res)
      })
    }
  },
  getters: {
    apartmentList (state) {
      return state.apartmentList
    }
  }
};

export default apartmentModule;
