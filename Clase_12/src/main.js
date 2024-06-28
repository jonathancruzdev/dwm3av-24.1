import './assets/main.css'

import { createApp } from 'vue'
import App from './App.vue'

// Vuefity
import 'vuetify/styles'
import { createVuetify } from 'vuetify'
//import { createVuetify } from 'vuetify/lib/framework.mjs'
import * as components from 'vuetify/components'
import * as directives from 'vuetify/directives'

const vuetify = createVuetify({
    components,
    directives
})

const app = createApp(App)

app.use(vuetify)

app.mount('#app')
