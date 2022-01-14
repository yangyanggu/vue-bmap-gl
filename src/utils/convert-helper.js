export function toPixel(arr) {
  return new BMapGL.Pixel(arr[0], arr[1]);
}

export function toSize(arr) {
  if (!arr || !Array.isArray(arr)) return null;
  return new BMapGL.Size(arr[0], arr[1]);
}

export function pixelTo(pixel) {
  if (Array.isArray(pixel)) return pixel;
  return [pixel.x, pixel.y];
}

export function toLngLat(arr) {
  if (!arr || !Array.isArray(arr)) return null;
  return new BMapGL.Point(arr[0], arr[1]);
}

export function lngLatTo(lngLat) {
  if (!lngLat) return null;
  return [lngLat.lng, lngLat.lat];
}

/**
 * @param arrs 二重数组 southWest, northEast
 */
export function toBounds(arrs) {
  return new BMapGL.Bounds(toLngLat(arrs[0]), toLngLat(arrs[1]));
}

export const commonConvertMap = {
  position: toLngLat,
  offset: toSize
  /*  bounds: toBounds,
    LngLat: toLngLat,
    Pixel: toPixel,
    Size: toSize,
    Bounds: toBounds*/
};
