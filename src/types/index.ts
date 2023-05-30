type TImages = {
  path: string
}
type TApartment = {
  id: number
  name: string
  address: string
  sum: number
  isPets: boolean
  isKitchen: boolean
  isWifi: boolean
  bed: number
  bedroom: number
  coords: string
  adults: number
  child: number
  freeRooms: number
  allRooms: number
  roomClass: string
  distanceFromCenter: string
  description: string
  images: Array<TImages>
  hasWashingMachine: boolean
  apartmentLocation: string
  l1: number
  l2: number
  complexDescription: string
  wiFiName: null
  wiFiPwd: null
  checkIn: string
  checkOut: string
  floor: number
  hasFreeRooms: true
}

export default TApartment
