import { createApp } from 'vue'
import dotenv from 'dotenv'
import App from './App.vue'
import router from './router'
import { Skeletor } from 'vue-skeletor'

import './assets/style/skeletor.scss'
import './assets/style/index.scss'
// @ts-ignore
import VuePictureSwipe from 'vue3-picture-swipe';

dotenv.config()
const app = createApp(App)
  .use(router)
app.component('VuePictureSwipe', VuePictureSwipe);
app.component(Skeletor.name, Skeletor)
app.mount('#app')
