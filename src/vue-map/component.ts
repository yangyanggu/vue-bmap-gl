import { ElBmap } from '@vue-map/packages/map'
import {ElBmapBezierCurve} from '@vue-map/packages/BezierCurve'
import {ElBmapCircle} from '@vue-map/packages/Circle'
import {ElBmapGroundOverlay} from '@vue-map/packages/GroundOverlay'
import {ElBmapInfoWindow} from '@vue-map/packages/InfoWindow'
import {ElBmapInfoWindowCustom} from '@vue-map/packages/InfoWindowCustom'
import {ElBmapLabel} from '@vue-map/packages/Label'
import {ElBmapMarker} from '@vue-map/packages/Marker'
import {ElBmapMarker3d} from '@vue-map/packages/Marker3d'
import {ElBmapMenu} from '@vue-map/packages/Menu'
import {ElBmapMenuItem} from '@vue-map/packages/MenuItem'
import {ElBmapPolygon} from '@vue-map/packages/Polygon'
import {ElBmapPolyline} from '@vue-map/packages/Polyline'
import {ElBmapPrism} from '@vue-map/packages/Prism'


import type { Plugin } from 'vue'

export default [
  ElBmap,
  ElBmapBezierCurve,
  ElBmapCircle,
  ElBmapGroundOverlay,
  ElBmapInfoWindow,
  ElBmapInfoWindowCustom,
  ElBmapLabel,
  ElBmapMarker,
  ElBmapMarker3d,
  ElBmapMenu,
  ElBmapMenuItem,
  ElBmapPolygon,
  ElBmapPolyline,
  ElBmapPrism
] as Plugin[]
