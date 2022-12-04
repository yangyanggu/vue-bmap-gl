import {createApp} from 'vue'
import Element from 'element-plus'
import {initBMapApiLoader} from '@vue-map/services'
import App from './App.vue'
import 'element-plus/dist/index.css'
import router from './router/index'

initBMapApiLoader({
  ak: 'KKG8EDD3V4vuyPGcjsLCt16PHacQIx3P',
  plugins: 'Lushu,TrackAnimation',
  // offline: true
})

createApp(App)
.use(Element)
.use(router)
.mount('#app')
