import { createApp } from 'vue'
import { createPinia } from 'pinia'
import './style.css'
import router from './router' // Ensure your router file exports createRouter()
import App from './App.vue'

const app = createApp(App)

app.use(createPinia())
app.use(router) // <-- THIS MUST COME BEFORE MOUNT

// Only mount AFTER all plugins (Pinia, Router) are registered
app.mount('#app')