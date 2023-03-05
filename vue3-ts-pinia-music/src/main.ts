import { createApp } from 'vue'
// import './style.css'
import App from './App.vue'
import router from './router'
import { createPinia } from 'pinia'
import '@/assets/css/index.styl'
import '@/theme/index.styl'
const app = createApp(App)
    .use(router)
    .use(createPinia())
    .mount('#app')
