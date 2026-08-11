import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import { vReveal } from './directives/vReveal'

const app = createApp(App)
app.directive('reveal', vReveal)
app.mount('#app')
