import {createRouter, createWebHashHistory} from "vue-router";

import Map from '../views/Map.vue';
import BezierCurve from "../views/BezierCurve.vue";
import Circle from "../views/Circle.vue";
import GroundOverlay from "../views/GroundOverlay.vue";
import InfoWindow from "../views/InfoWindow.vue";
import InfoWindowCustom from "../views/InfoWindowCustom.vue";
import Label from '../views/Label.vue'
import Marker from '../views/Marker.vue'
import Marker3d from '../views/Marker3d.vue'
import Menu from '../views/Menu.vue'
import Polygon from '../views/Polygon.vue'
import Polyline from '../views/Polyline.vue'
import Prism from "../views/Prism.vue";
import MapMask from "../views/MapMask.vue";
import XyzLayer from "../views/XyzLayer.vue";

export const routes = [
  {path: '/',name: '地图', component: Map},
  {path: '/bezierCurve',name: '贝塞尔曲线' , component: BezierCurve},
  {path: '/circle',name: '圆' , component: Circle},
  {path: '/groundOverlay',name: '地面叠加层' , component: GroundOverlay},
  {path: '/infoWindow',name: '信息框',  component: InfoWindow},
  {path: '/infoWindowCustom',name: '自定义信息框', component: InfoWindowCustom},
  {path: '/label',  name: '文本', component: Label},
  {path: '/marker', name: '标号', component: Marker},
  {path: '/marker3d', name: '3D标号', component: Marker3d},
  {path: '/menu', name: '菜单', component: Menu},
  {path: '/polygon', name: '多边形', component: Polygon},
  {path: '/polyline', name: '折线', component: Polyline},
  {path: '/prism', name: '3D棱柱', component: Prism},
  {path: '/mapMask', name: '掩膜',component: MapMask},
  {path: '/xyzLayer', name: 'XYZLayer' ,component: XyzLayer},
]

export default createRouter({
  history: createWebHashHistory(),
  routes
})
