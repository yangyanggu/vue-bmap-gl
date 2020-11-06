// polyfills
import './polyfills';

import upperCamelCase from 'uppercamelcase';

// 初始化接口
import {initBMapApiLoader} from './services/injected-bmap-api-instance';

// 组建导入
import BMap from './components/bmap.vue';
import BMapMarker from './components/bmap-marker.vue';
import BMapGroupOverlay from './components/bmap-ground-overlay';
import BMapInfoWindow from './components/bmap-info-window.vue';
import BMapCircle from './components/bmap-circle.vue';
import BMapPolygon from './components/bmap-polygon.vue';
import BMapPolyline from './components/bmap-polyline.vue';
import BMapLabel from './components/bmap-label.vue';
import BMapBezierCurve from './components/bmap-bezier-curve.vue';
/* import AMapSearchBox from './components/amap-search-box.vue';
import AMapGroupImage from './components/amap-ground-image.vue';
import AMapCircleMarker from './components/amap-circle-marker.vue';
import AMapEllipse from './components/amap-ellipse.vue';
import AMapRectangle from './components/amap-rectangle.vue';*/

// managers
import BMapManager from './managers/bmap-manager';
import createCustomComponent from './adapter/custom-adapter';

let components = [
  BMap,
  BMapMarker,
  BMapGroupOverlay,
  BMapCircle,
  BMapPolygon,
  BMapPolyline,
  BMapLabel,
  BMapBezierCurve,
  BMapInfoWindow
  /* AMapSearchBox,
  AMapCircle,
  AMapGroupImage,
  AMapInfoWindow,
  AMapPolygon,
  AMapPolyline,
  AMapText,
  AMapBezierCurve,
  AMapCircleMarker,
  AMapEllipse,
  AMapRectangle*/
];

let VueBMap = {
  initBMapApiLoader: initBMapApiLoader,
  BMapManager: BMapManager
};

VueBMap.install = (Vue) => {
  if (VueBMap.installed) return;
  Vue.config.optionMergeStrategies.deferredReady = Vue.config.optionMergeStrategies.created;
  components.map(_component => {
    // register component
    Vue.component(_component.name, _component);

    // component cache
    VueBMap[upperCamelCase(_component.name).replace(/^El/, '')] = _component;
  });
};

const install = function(Vue, opts = {}) {
  /* istanbul ignore if */
  if (install.installed) return;
  VueBMap.install(Vue);
};

/* istanbul ignore if */
if (typeof window !== 'undefined' && window.Vue) {
  install(window.Vue);
};

export default VueBMap;

export {
  BMapManager,
  initBMapApiLoader,
  createCustomComponent
};
export { lazyBMapApiLoaderInstance } from './services/injected-bmap-api-instance';
