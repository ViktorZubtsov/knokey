import { ref, Ref } from "vue";
import loadApartments, { TLoadParams } from "@/services/load-apartments/loadApartments";
import TApartment from "@/types";

interface IApartmentsList {
  items: Array<TApartment>

  load(params: TLoadParams ): Promise<Array<TApartment>>
}

class $ApartmentsList implements IApartmentsList {
  private _items: Ref<Array<TApartment>> = ref([]);

  load (params: TLoadParams): Promise<Array<TApartment>> {
    return new Promise((resolve, reject) => {
      loadApartments(params).then((res) => {
        this._items.value = res
        resolve(this.items)
      }).catch((e) => {
        reject(e)
      })
    })
  }
  get items (): Array<TApartment> {
    return this._items.value;
  }
}
export default new $ApartmentsList()
