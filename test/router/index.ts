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

const routes = [
  {path: '/', component: Map},
  {path: '/bezierCurve', component: BezierCurve},
  {path: '/circle', component: Circle},
  {path: '/groundOverlay', component: GroundOverlay},
  {path: '/infoWindow', component: InfoWindow},
  {path: '/infoWindowCustom', component: InfoWindowCustom},
  {path: '/label', component: Label},
  {path: '/marker', component: Marker},
  {path: '/marker3d', component: Marker3d},
  {path: '/menu', component: Menu},
  {path: '/polygon', component: Polygon},
  {path: '/polyline', component: Polyline},
  {path: '/prism', component: Prism},
]

export default createRouter({
  history: createWebHashHistory(),
  routes
})
