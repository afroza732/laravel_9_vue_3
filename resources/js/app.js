import './bootstrap';
import { createApp } from 'vue'

import App from './layouts/app.vue';
import router from './router/router'
import store from './store/index.js'
createApp(App)
.use(router)
.use(store)
.mount('#app')