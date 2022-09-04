import { createApp } from 'vue'
import dotenv from 'dotenv'
import App from './App.vue'
import router from './router'
import { Skeletor } from 'vue-skeletor'

import './assets/style/skeletor.scss'
import './assets/style/index.scss'

dotenv.config()

const app = createApp(App)
  .use(router)
app.component(Skeletor.name, Skeletor)
app.mount('#app')
