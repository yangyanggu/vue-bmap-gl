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

export default {
  name: 'el-bmap',
  mixins: [registerMixin],
  props: [
    'vid',
    'events',
    'center',
    'zoom',
    'minZoom',
    'maxZoom',
    'mapType',
    'tilt', // 倾斜角度
    'heading', // 旋转角度
    'enableAutoResize',
    'enableDragging',
    'enableInertialDragging',
    'enableScrollWheelZoom',
    'enableContinuousZoom',
    'enableResizeOnCenter',
    'enableDoubleClickZoom',
    'enableKeyboard',
    'enablePinchToZoom',
    'enableRotateGestures',
    'enableTiltGestures',
    'bounds',
    'draggingCursor',
    'defaultCursor',
    'mapStyleV2',
    'trafficVisible',
    'bmapManager', // 地图管理 manager
    'events'
  ],

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
    this.createMap();
  },
  methods: {
    createMap() {
      this._loadPromise.then(() => {
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
        if (this.bmapManager) this.bmapManager.setMap(this.$bmap);
        this.$emit(CONST.BMAP_READY_EVENT, this.$bmap);
        this.$children.forEach(component => {
          component.$emit(CONST.BMAP_READY_EVENT, this.$bmap);
        });
      });
    }
  }
};
</script>

<style lang="less">
.el-vue-bmap-container {
  height: 100%;
  position: relative;

  .el-vue-bmap {
    height: 100%;
  }
}

</style>
