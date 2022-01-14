<template>
  <div class="el-vue-bmap-container">
    <div class="el-vue-bmap" />
    <slot />
  </div>
</template>
<script lang="ts">
import {defineComponent} from "vue";
import {lazyBMapApiLoaderInstance} from '@vue-map/services/injected-amap-api-instance';
import guid from '../../utils/guid';
import { toLngLat } from '../../utils/convert-helper';
import registerMixin from '../../mixins/register-component';
import type { PropType} from "vue";

export default defineComponent({
  name: 'ElBmap',
  mixins: [registerMixin],
  props: {
    center: {
      type: Array,
      validator: (value: Array<number>) => value && value.length === 2
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
      validator: (value: string) => ['B_NORMAL_MAP', 'B_EARTH_MAP'].includes(value)
    },
    tilt: {
      type: Number
    },
    heading: {
      type: Number
    },
    enableAutoResize: {
      type: Boolean,
      default: true
    },
    enableDragging: {
      type: Boolean,
      default: true
    },
    enableInertialDragging: {
      type: Boolean,
      default: true
    },
    enableScrollWheelZoom: {
      type: Boolean,
      default: true
    },
    enableContinuousZoom: {
      type: Boolean,
      default: true
    },
    enableResizeOnCenter: {
      type: Boolean
    },
    enableDoubleClickZoom: {
      type: Boolean,
      default: true
    },
    enableKeyboard: {
      type: Boolean,
      default: true
    },
    enablePinchToZoom: {
      type: Boolean,
      default: true
    },
    enableRotateGestures: {
      type: Boolean,
      default: true
    },
    enableTiltGestures: {
      type: Boolean,
      default: true
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
      type: Object as PropType<MapStyleOptions> // {styleId: '', styleJson:{}} ,二选一
    },
    trafficVisible: {
      type: Boolean,
      default: false
    },
    lazy: {
      type: Number,
      default: -1
    },
    preserveDrawingBuffer: {
      type: Boolean,
      default: false
    }
  },

  data() {
    return {
      lazyTimer: null as any,
      converters: {
        center(arr) {
          return toLngLat(arr);
        },
        bounds(arr) {
          return new BMapGL.Bounds(toLngLat(arr[0]), toLngLat(arr[1]));
        }
      },
    };
  },

  computed: {
  },

  mounted() {
    this.lazyLoadMap();
  },
  beforeUnmount() {
    if(this.lazyTimer){
      clearTimeout(this.lazyTimer);
    }
    if (this.$amapComponent) {
      this.$amapComponent.clearOverlays();
      this.$amapComponent.destroy();
      this.$amapComponent = null;
    }
  },
  methods: {
    lazyLoadMap() {
      lazyBMapApiLoaderInstance.load().then(() => {
        if (this.lazy < 0) {
          this.createMap();
        } else {
          this.lazyTimer = setTimeout(() => {
            this.createMap();
          }, this.lazy);
        }

      });
    },
    createMap() {
      const mapElement = this.$el.querySelector('.el-vue-bmap');
      const elementID = guid();
      mapElement.id = elementID;
      const props = this.convertProps() as any;
      this.$parentComponent = this.$amapComponent = new BMapGL.Map(elementID, props);
      if(this.center && this.zoom){
        this.$amapComponent.centerAndZoom(toLngLat(this.center), this.zoom);
      }
      this.$amapComponent.enableScrollWheelZoom();
      if (props.tilt !== undefined) {
        this.$amapComponent.setTilt(props.tilt);
      }
      if (props.heading !== undefined) {
        this.$amapComponent.setHeading(props.heading);
      }
      if (props.trafficVisible) {
        this.$amapComponent.setTrafficOn();
      }
      if (props.mapStyleV2) {
        this.$amapComponent.setMapStyleV2(props.mapStyleV2);
      }
      if (props.defaultCursor) {
        this.$amapComponent.setDefaultCursor(props.defaultCursor);
      }
      if (props.bounds) {
        this.$amapComponent.setBounds(props.bounds);
      }
      const propKeys = Object.keys(props);
      propKeys.forEach(key => {
        if (key.startsWith('enable')) {
          const func = this.getHandlerFun(key);
          if (func) {
            func(props[key]);
          }
        }
      });
      this.register();
      this.createChildren();
    },
    __center(point) {
      if (this.$amapComponent.setCenter) {
        const tilt = this.$amapComponent.getTilt();
        const heading = this.$amapComponent.getHeading();
        this.$amapComponent.setCenter(point, {
          noAnimation: false,
          tilt,
          heading
        });
      }
    },
    __trafficVisible(flag) {
      if (flag) {
        this.$amapComponent.setTrafficOn();
      } else {
        this.$amapComponent.setTrafficOff();
      }
    },
    __mapStyleV2(style) {
      this.$amapComponent.setMapStyleV2(style);
    }
  }
});
</script>

<style lang="scss">
.el-vue-bmap-container {
  height: 100%;
  position: relative;
  overflow: hidden;

  .el-vue-bmap {
    height: 100%;
  }
}

</style>
