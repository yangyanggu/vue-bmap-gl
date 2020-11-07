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
    'mapStyleV2',
    'bmapManager',  // 地图管理 manager
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

  .el-vue-bmap {
    height: 100%;
  }
}

</style>
