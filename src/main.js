import { createApp } from 'vue'
import { createPinia } from 'pinia'

import App from './App.vue'
import router from './router'

import service from './services/services'
import VueAxios from 'vue-axios'

import './assets/index.css'

import VueSmoothScroll from 'vue3-smooth-scroll'

import VueSweetalert2 from 'vue-sweetalert2';
import 'sweetalert2/dist/sweetalert2.min.css';

import Toast from "vue-toastification";
import "vue-toastification/dist/index.css";
import toastOptions from './plugins/toastOptions';

const app = createApp(App)

app.use(createPinia())
app.use(router)

app.use(VueAxios, service)
app.provide('axios', service)

app.use(VueSmoothScroll)
app.use(VueSweetalert2);

app.use(Toast, toastOptions);


app.mount('#app')
