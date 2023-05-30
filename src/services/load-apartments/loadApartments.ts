import TApartment from "@/types";
// eslint-disable-next-line @typescript-eslint/no-var-requires
const mok = require('./mok/apartments.json')
export type TLoadParams = {
  page: number
  search: string
  limit?: number
}
const loadApartments = (params: TLoadParams): Promise<Array<TApartment>> => {
 return new Promise((resolve) => {

   setTimeout(() => {
     console.log(params)

     resolve(mok)
   }, 1000)

 })
}
export default loadApartments
