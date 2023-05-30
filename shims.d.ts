declare module "@vue/runtime-core" {
  import { Store } from "vuex";
  import {IStore} from "./src/store";

  interface ComponentCustomProperties {
    $store: Store<IStore>;
  }
}
