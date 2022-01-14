import { defineClientAppEnhance } from '@vuepress/client'
import 'vue-bmap-gl/dist/style.css'

export default defineClientAppEnhance(({ app }) => {
  if (!__VUEPRESS_SSR__) {
    import('vue-bmap-gl').then(va => {
      app.use(va);
      va.initBMapApiLoader({
        ak: 'KKG8EDD3V4vuyPGcjsLCt16PHacQIx3P'
      })
    })
    // app.use(VueAmap);
    // VueAmap.initAMapApiLoader({
    //   key: '747f980f217a31ba68d99301045a3fa7'
    // })
  }
})
