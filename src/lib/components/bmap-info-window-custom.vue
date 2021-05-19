<template>
  <div ref="infoWindow" class="bmap-info-window-custom" :style="computedStyle" :class="{custom: isCustom}">
    <div class="arrow" v-if="!isCustom"></div>
    <slot />
  </div>
</template>
<script>
import registerMixin from '../mixins/register-component';
export default {
  name: 'el-bmap-info-window-custom',
  mixins: [registerMixin],
  props: {
    vid: {
      type: [String, Number]
    },
    offset: {
      type: Array,
      default() {
        return [0, 0];
      }
    },
    position: {
      type: Array,
      default() {
        return [0, 0];
      }
    },
    isCustom: {
      type: Boolean,
      default: false
    },
    visible: {
      type: Boolean,
      default: true
    },
    enableAutoPan: {
      type: Boolean,
      default: true
    },
    enableCloseOnClick: {
      type: Boolean,
      default: true
    },
    events: {
      type: Object,
      default() {
        return {};
      }
    }
  },
  data() {
    const _this = this;

    return {
      styleObj: {
        display: 'block',
        left: 0,
        top: 0
      },
      savePosition: null,
      saveVisible: false,
      handlers: {
        position(value) {
          _this.savePosition = value;
          _this.calcPosition();
        },
        visible(value) {
          if (_this.saveVisible !== value) {
            _this.saveVisible = value;
            _this.emitEvent();
          }

        }
      }
    };
  },
  computed: {
    computedStyle() {
      let style = {};
      if (!this.saveVisible) {
        style.display = 'none';
      } else {
        style.display = 'block';
      }
      style.left = this.styleObj.left;
      style.top = this.styleObj.top;
      return style;
    }
  },
  created() {
  },
  destroyed() {
  },
  methods: {
    __initComponent(options) {
      this.$bmapComponent = {
        on: ()=>{},
        off: ()=>{},
        emit: ()=>{},
        removeEventListener: ()=>{},
        addEventListener: ()=>{}
      };
      this.saveVisible = this.visible;
      if (!options.position) {
        return;
      }
      this.emitEvent();
      this.savePosition = options.position;
      this.calcPosition();
      this.$nextTick(() => {
        let height = this.$refs.infoWindow.offsetHeight + 11;
        let width = this.$refs.infoWindow.offsetWidth;
        let pixel = this.$bmap.pointToOverlayPixel(this.savePosition);
        let leftOffset = pixel.x - width / 2 + this.offset[0];
        let topOffset = pixel.y - height + this.offset[1];
        let panX = 0;
        let panY = 0;
        if (leftOffset < 0) {
          panX = Math.abs(leftOffset) + 10;
        }
        if (topOffset < 0) {
          panY = Math.abs(topOffset) + 10;
        }
        if (panX !== 0 || panY !== 0) {
          this.$bmap.panBy(panX, panY);
        }
      });

      this.$bmap.on('moving', () => {
        this.calcPosition();
      });
      this.$bmap.on('dragging', () => {
        this.calcPosition();
      });
      this.$bmap.on('zoomend', () => {
        this.calcPosition();
      });
      this.$bmap.on('resize', () => {
        this.calcPosition();
      });
      this.$bmap.on('click', () => {
        if (this.enableCloseOnClick && this.saveVisible === true) {
          this.saveVisible = false;
          this.$emit('update:visible', false);
          this.emitEvent();
        }
      });
    },
    calcPosition() {
      let pixel = this.$bmap.pointToOverlayPixel(this.savePosition);
      this.styleObj.left = (pixel.x + this.offset[0]) + 'px';
      this.styleObj.top = (pixel.y + this.offset[1]) + 'px';
    },
    emitEvent() {
      if (this.events && this.events.close && !this.saveVisible) {
        this.events.close();
      } else if (this.events && this.events.open && this.saveVisible) {
        this.events.open();
      }
    }
  }
};
</script>
<style lang="less" scoped>
  .bmap-info-window-custom{
    position: absolute;
    background: #F5F8FF;
    box-shadow: 0 5px 10px 0 rgba(65, 84, 102, 0.09);
    border-radius: 5px;
    z-index: 200;
    transform: translate(-50%, calc(-100% - 11px));

    .arrow{
      position: absolute;
      box-shadow: 0 5px 7px -1px rgb(238 238 238 / 50%);
      width: 0;
      height: 0;
      border-left: 6px solid transparent;
      border-right: 6px solid transparent;
      border-top: 11px solid #F5F8FF;
      bottom: -11px;
      left: 50%;
      transform: translateX(-50%);
    }

    &.custom{
      box-shadow: none;
      border-radius: 0;
      background: none;

    }
  }
</style>
