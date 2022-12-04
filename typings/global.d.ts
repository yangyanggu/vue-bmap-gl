// GlobalComponents for Volar
declare module '@vue/runtime-core' {
  export interface GlobalComponents {
    ElBmap: typeof import('vue-bmap-gl')['ElBmap'],
    ElBmapBezierCurve: typeof import('vue-bmap-gl')['ElBmapBezierCurve'],
    ElBmapCircle: typeof import('vue-bmap-gl')['ElBmapCircle'],
    ElBmapGroundOverlay: typeof import('vue-bmap-gl')['ElBmapGroundOverlay'],
    ElBmapInfoWindow: typeof import('vue-bmap-gl')['ElBmapInfoWindow'],
    ElBmapInfoWindowCustom: typeof import('vue-bmap-gl')['ElBmapInfoWindowCustom'],
    ElBmapLabel: typeof import('vue-bmap-gl')['ElBmapLabel'],
    ElBmapMarker: typeof import('vue-bmap-gl')['ElBmapMarker'],
    ElBmapMarker3d: typeof import('vue-bmap-gl')['ElBmapMarker3d'],
    ElBmapMenu: typeof import('vue-bmap-gl')['ElBmapMenu'],
    ElBmapMenuItem: typeof import('vue-bmap-gl')['ElBmapMenuItem'],
    ElBmapPolygon: typeof import('vue-bmap-gl')['ElBmapPolygon'],
    ElBmapPolyline: typeof import('vue-bmap-gl')['ElBmapPolyline'],
    ElBmapPrism: typeof import('vue-bmap-gl')['ElBmapPrism'],
    ElBmapMapMask: typeof import('vue-bmap-gl')['ElBmapMapMask'],
    ElBmapXyzLayer: typeof import('vue-bmap-gl')['ElBmapXyzLayer'],
  }
}

export {}
