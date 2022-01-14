declare let BMapGL: any;

interface customComponent {
  $parentComponent: any,
  register: any,
  mapEntity: any,
  needInitComponents: any,
  addChildComponent: any
}

interface IconOptions{
  url: string,
  size: [number,number],
  imageOffset?: [number,number],
  anchor?: [number,number]
}
interface LabelOptions{
  content: string,
  offset?: [number,number],
  title?: string,
  style?: object,
  zIndex?: number,
  enableMassClear?: boolean
}
interface MapStyleOptions{
  styleId?: string,
  styleJson?: object
}
