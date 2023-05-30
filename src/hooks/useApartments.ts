import { computed, Ref, ref, watch } from "vue";
import TApartment from "@/types";
import $ApartmentsList from "@/classes/apartments/ApartmentsList";

interface IUseApartmentsList {
  apartmentsList: Ref<Array<TApartment>>
  isFetch: Ref<boolean>
  search: Ref<string>
  page: Ref<number>
  limit: Ref<number>
  loadApartmentsList(): void
}
const useApartmentsList = (): IUseApartmentsList => {
  const apartmentsList = computed(() => $ApartmentsList.items )
  const isFetch = ref(true);
  const search = ref('');
  const page = ref(1)
  const limit = ref(0)

  const loadApartmentsList = (): void => {
    isFetch.value = true
    const params = {
      search: search.value,
      page: page.value
    }
    $ApartmentsList.load(params).then(() => {
      isFetch.value = false
    })
  }
  watch(search, loadApartmentsList)
  watch(page, loadApartmentsList)

  return {
    apartmentsList,
    isFetch,
    search,
    page,
    limit,
    loadApartmentsList
  }
}

export default useApartmentsList
