<template>
  <div class="el-track-container" v-if="iconVisible">
    <img class="el-track-icon" :src="icon.url" :style="iconStyle" />
  </div>
</template>
<script>
import registerMixin from '../mixins/register-component';

export default {
  name: 'el-bmap-track',
  mixins: [registerMixin],
  props: {
    icon: {
      type: Object,
      default() {
        return {
          url: 'data:image/png;base64,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',
          size: [58, 58]
        };
      }
    },
    onlyView: {
      type: Boolean,
      default: true
    },
    position: {
      required: true,
      type: Array
    },
    offset: {
      type: Array
    },
    heading: {
      type: Number,
      default: -1
    },
    tilt: {
      type: Number,
      default: -1
    },
    zoom: {
      type: Number,
      default: 19
    },
    autoStart: {
      type: Boolean,
      default: false
    },
    events: {
      type: Object
    }

  },
  data() {
    const _this = this;
    return {
      mapSize: {
        width: 0,
        height: 0
      },
      offsetSize: {
        x: 0,
        y: 0
      },
      iconVisible: false,
      pixelLngLatScale: {
        x: 1,
        y: 1
      },
      preParentDomStyle: {
        overflow: '',
        height: '',
        width: ''
      },
      converters: {
        position(value) {
          return value;
        }
      },
      handlers: {
        position(newValue) {
          if (_this && _this.iconVisible && this.isLoaded()) {
            let p = new BMapGL.Point(newValue[0], newValue[1]);
            let options = {
              noAnimation: true
            };
            this.setCenter(p, options);
          }
        },
        offset() {

        },
        heading(newHeading) {
          this.setHeading(newHeading, {
            noAnimation: true
          });
        },
        tilt(newTilt) {
          this.setTilt(newTilt, {
            noAnimation: true
          });
        },
        zoom(newZoom) {
          this.setZoom(newZoom, {
            noAnimation: true
          });
        },
        onlyView(flag) {
          if (flag) {
            this.disableDragging();
            this.disableScrollWheelZoom();
            this.disableContinuousZoom();
            this.disableDoubleClickZoom();
            this.disableKeyboard();
            this.disablePinchToZoom();
          } else {
            this.enableDragging();
            this.enableScrollWheelZoom();
            this.enableContinuousZoom();
            this.enableDoubleClickZoom();
            this.enableKeyboard();
            this.enablePinchToZoom();
          }
        }
      }
    };
  },
  computed: {
    iconStyle() {
      let style = {};
      style.width = this.icon.size[0] + 'px';
      style.height = this.icon.size[1] + 'px';
      if (this.offset && this.offset.length > 0) {
        style.left = (this.mapSize.width / 2 + this.offset[0]) + 'px';
        style.top = (this.mapSize.height / 2 + this.offset[1]) + 'px';
      } else {
        style.left = (this.mapSize.width / 4 * 2) + 'px';
        style.top = (this.mapSize.height / 4 * 3) + 'px';
      }
      return style;
    }
  },
  created() {
  },
  methods: {
    __initComponent(options) {
      let map = options.map;
      this.mapSize = map.getContainerSize();
      if (this.offset && this.offset.length > 0) {
        this.offsetSize = {
          x: this.offset[0],
          y: this.offset[1]
        };
      } else {
        this.offsetSize = {
          x: this.mapSize.width / 4,
          y: this.mapSize.height / 4
        };
      }
      this.map = map;
      this.$bmapComponent = map;
      if (options.autoStart) {
        this.start();
      }
    },

    start() {
      let map = this.map;
      let container = map.getContainer();
      let parent = container.parentNode;
      this.preParentDomStyle.overflow = parent.style.overflow;
      this.preParentDomStyle.width = parent.style.width;
      this.preParentDomStyle.height = parent.style.height;
      parent.style.overflow = 'hidden';
      parent.style.width = this.mapSize.width + 'px';
      parent.style.height = this.mapSize.height + 'px';
      let offset = this.offset || [0, this.mapSize.height / 4];
      container.style.width = (this.mapSize.width + offset[0] * 2) + 'px';
      container.style.height = (this.mapSize.height + offset[1] * 2) + 'px';
      map.resize();
      let tilt = this.tilt;
      if (tilt > -1) {
        map.setTilt(tilt, {
          noAnimation: true
        });
      }
      let heading = this.heading;
      if (heading > -1) {
        map.setHeading(heading, {
          noAnimation: true
        });
      }
      map.setZoom(this.zoom, {
        noAnimation: true
      });
      map.setCenter(new BMapGL.Point(this.position[0], this.position[1]), {
        noAnimation: true
      });
      if (this.onlyView) {
        map.disableDragging();
        map.disableScrollWheelZoom();
        map.disableContinuousZoom();
        map.disableDoubleClickZoom();
        map.disableKeyboard();
        map.disablePinchToZoom();
      }
      this.iconVisible = true;
    },

    stop() {
      this.iconVisible = false;
      let map = this.map;
      let container = map.getContainer();
      let parent = container.parentNode;
      parent.style.overflow = this.preParentDomStyle.overflow;
      parent.style.width = this.preParentDomStyle.width;
      parent.style.height = this.preParentDomStyle.height;
      container.style.width = '100%';
      container.style.height = '100%';
      map.resize();
      if (this.onlyView) {
        map.enableDragging();
        map.enableScrollWheelZoom();
        map.enableContinuousZoom();
        map.enableDoubleClickZoom();
        map.enableKeyboard();
        map.enablePinchToZoom();
      }
    }
  },
  render() {
    return null;
  },
  beforeDestroy() {
    this.stop();
    this.map = null;
    this.$bmapComponent = null;
  },
  destroyed() {
  }
};
</script>
<style lang="less" scoped>
  .el-track-container{
    width: 100%;
    height: 100%;
    position: absolute;
    top: 0;

    .el-track-icon{
      position: absolute;
      z-index: 11;
      transform: translate(-50%, -50%);
    }
  }
</style>
