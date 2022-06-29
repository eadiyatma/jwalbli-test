import { createApp } from 'vue'
import { createPinia } from 'pinia'

import App from './App.vue'
import router from './router'

import service from './services/services'
import VueAxios from 'vue-axios'

import './assets/index.css'

const app = createApp(App)

app.use(createPinia())
app.use(router)

app.use(VueAxios, service)
app.provide('axios', service)

app.mount('#app')
