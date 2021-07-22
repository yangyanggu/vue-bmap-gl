<template>
  <div class="el-vue-bmap-container">
      <div class="el-vue-bmap"></div>
      <slot></slot>
  </div>
</template>
<script>
import guid from '../utils/guid';
import CONST from '../utils/constant';
import { toLngLat } from '../utils/convert-helper';
import registerMixin from '../mixins/register-component';
import {lazyBMapApiLoaderInstance} from '../services/injected-bmap-api-instance';
import BmapManager from '../managers/bmap-manager';

export default {
  name: 'el-bmap',
  mixins: [registerMixin],
  props: {
    vid: {
      type: [String, Number]
    },
    center: {
      type: Array,
      validator: (value) => {
        // 这个值必须匹配下列字符串中的一个
        return value && value.length === 2;
      }
    },
    zoom: {
      type: Number
    },
    minZoom: {
      type: Number
    },
    maxZoom: {
      type: Number
    },
    mapType: {
      type: String,
      validator: (value) => {
        // B_NORMAL_MAP（普通街道视图） 、B_EARTH_MAP（地球卫星视图）
        return ['B_NORMAL_MAP', 'B_EARTH_MAP'].indexOf(value) !== -1;
      }
    },
    tilt: {
      type: Number
    },
    heading: {
      type: Number
    },
    enableAutoResize: {
      type: Boolean
    },
    enableDragging: {
      type: Boolean
    },
    enableInertialDragging: {
      type: Boolean
    },
    enableScrollWheelZoom: {
      type: Boolean,
      default: true
    },
    enableContinuousZoom: {
      type: Boolean
    },
    enableResizeOnCenter: {
      type: Boolean
    },
    enableDoubleClickZoom: {
      type: Boolean
    },
    enableKeyboard: {
      type: Boolean
    },
    enablePinchToZoom: {
      type: Boolean
    },
    enableRotateGestures: {
      type: Boolean
    },
    enableTiltGestures: {
      type: Boolean
    },
    bounds: {
      type: Array
    },
    draggingCursor: {
      type: String
    },
    defaultCursor: {
      type: String
    },
    mapStyleV2: {
      type: Object // {styleId: '', styleJson:{}} ,二选一
    },
    trafficVisible: {
      type: Boolean
    },
    bmapManager: {
      type: BmapManager
    },
    events: {
      type: Object
    },
    lazy: {
      type: Number,
      default: -1
    }
  },

  beforeCreate() {
    this._loadPromise = lazyBMapApiLoaderInstance.load();
  },

  destroyed() {
    this.$bmap && this.$bmap.destroy();
  },

  computed: {
  },

  data() {
    return {
      converters: {
        center(arr) {
          return toLngLat(arr);
        },
        bounds(arr) {
          return new BMapGL.Bounds(toLngLat(arr[0]), toLngLat(arr[1]));
        }
      },
      handlers: {
        center(point) {
          if (this.setCenter) {
            let tilt = this.getTilt();
            let heading = this.getHeading();
            this.setCenter(point, {
              noAnimation: false,
              tilt,
              heading
            });
          }
        },
        trafficVisible(flag) {
          if (flag) {
            this.setTrafficOn();
          } else {
            this.setTrafficOff();
          }
        },
        mapStyleV2(style) {
          this.setMapStyleV2(style);
        }
      }
    };
  },

  mounted() {
    this.lazyLoadMap();
  },
  methods: {
    lazyLoadMap() {
      this._loadPromise.then(() => {
        if (this.lazy < 0) {
          this.createMap();
        } else {
          setTimeout(() => {
            this.createMap();
          }, this.lazy);
        }

      });
    },
    createMap() {
      let mapElement = this.$el.querySelector('.el-vue-bmap');
      const elementID = this.vid || guid();
      mapElement.id = elementID;
      let props = this.convertProps();
      this.$bmap = this.$bmapComponent = new BMapGL.Map(elementID, props);
      this.$bmap.centerAndZoom(toLngLat(this.center), this.zoom);
      this.$bmap.enableScrollWheelZoom(true);
      if (props.tilt !== undefined) {
        this.$bmap.setTilt(props.tilt);
      }
      if (props.heading !== undefined) {
        this.$bmap.setHeading(props.heading);
      }
      if (props.trafficVisible) {
        this.$bmap.setTrafficOn();
      }
      if (props.mapStyleV2) {
        this.$bmap.setMapStyleV2(props.mapStyleV2);
      }
      if (props.defaultCursor) {
        this.$bmap.setDefaultCursor(props.defaultCursor);
      }
      if (props.bounds) {
        this.$bmap.setBounds(props.bounds);
      }
      let propKeys = Object.keys(props);
      propKeys.forEach(key => {
        if (key.startsWith('enable')) {
          let func = this.getHandlerFun(key);
          if (func) {
            func(props[key]);
          }
        }
      });
      if (this.bmapManager) this.bmapManager.setMap(this.$bmap);
      this.$emit(CONST.BMAP_READY_EVENT, this.$bmap);
      this.$children.forEach(component => {
        component.$emit(CONST.BMAP_READY_EVENT, this.$bmap);
      });
    }
  },
  beforeDestroy() {
    if (this.$bmap) {
      this.$bmap.clearOverlays();
      this.$bmap.destroy();
      this.$bmap = null;
    }
  }
};
</script>

<style lang="less">
.el-vue-bmap-container {
  height: 100%;
  position: relative;
  overflow: hidden;

  .el-vue-bmap {
    height: 100%;
  }
}

</style>
