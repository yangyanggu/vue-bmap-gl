import {defineClientConfig} from '@vuepress/client'
import 'vue-bmap-gl/dist/style.css'

export default defineClientConfig({
  async enhance({app}) {
    if (!__VUEPRESS_SSR__) {
      const va = await import('vue-bmap-gl');
      app.use(va);
      va.initBMapApiLoader({
        ak: 'KKG8EDD3V4vuyPGcjsLCt16PHacQIx3P'
      })
    }
  }
})
