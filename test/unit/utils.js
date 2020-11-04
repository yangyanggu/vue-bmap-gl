// import Vue from 'Vue';
import VueBMap from '../../src/lib';
// Vue.use(VueAMap);
// initAMap();

export function initBMap(options) {
  VueBMap.initBMapApiLoader({
    ak: 'KKG8EDD3V4vuyPGcjsLCt16PHacQIx3P',
    ...options
  });
}
