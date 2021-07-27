<template>
  <div ref="infoWindow" class="bmap-info-window-custom" :style="computedStyle" :class="[isCustom ? 'custom' : '', anchorClass]">
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
    anchor: {
      type: String,
      default: 'bottom',
      validator: (value) => {
        // auto(自动根据可显示位置进行处理，优先bottom)、top(顶部中心)、right(右侧中心)、bottom(底部中心)、left(左侧中心) 、top-left(左上角)、top-right(右上角)、bottom-left(左下角)、bottom-right(右下角)
        return ['auto', 'top', 'right', 'bottom', 'left', 'top-left', 'top-right', 'bottom-left', 'bottom-right'].indexOf(value) > -1;
      }
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
      anchorClass: 'bottom',
      savePosition: null,
      saveVisible: false,
      saveEnableAutoPan: true,
      savePixel: {
        x: 0,
        y: 0
      },
      mapSize: {
        width: 0,
        height: 0
      },
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
    this.unBindEvent();
    this.$bmapComponent = null;
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
      this.saveEnableAutoPan = this.enableAutoPan;
      this.mapSize = this.$bmap.getContainerSize();
      if (!options.position) {
        return;
      }
      this.emitEvent();
      this.savePosition = options.position;
      this.calcPosition();
      this.panMap();
      this.bindEvent();
    },
    panMap() {
      if (this.enableAutoPan) {
        this.$nextTick(() => {
          let height = this.$refs.infoWindow.offsetHeight + 11;
          let width = this.$refs.infoWindow.offsetWidth;
          let pixel = this.$bmap.pointToOverlayPixel(this.savePosition);
          let leftOffset = pixel.x - width / 2 + this.offset[0];
          let topOffset = pixel.y - height + this.offset[1];
          let mapWidth = this.mapSize.width;
          let mapHeight = this.mapSize.height;
          let panX = 0;
          let panY = 0;
          if (leftOffset < 0) {
            panX = Math.abs(leftOffset) + 10;
          } else if ((leftOffset + width) > mapWidth) {
            panX = mapWidth - leftOffset - width - 10;
          }
          if (topOffset < 0) {
            panY = Math.abs(topOffset) + 10;
          } else if ((topOffset + height) > mapHeight) {
            panY = mapHeight - topOffset - height - 10;
          }
          if (panX !== 0 || panY !== 0) {
            this.$bmap.panBy(panX, panY);
          }
        });
      }
    },
    bindEvent() {
      this.$bmap.on('moving', this.moveMap);
      this.$bmap.on('dragging', this.draggingMap);
      this.$bmap.on('zoomend', this.zoomendMap);
      this.$bmap.on('resize', this.resizeMap);
      this.$bmap.on('click', this.clickMap);
    },
    unBindEvent() {
      this.$bmap.off('moving', this.moveMap);
      this.$bmap.off('dragging', this.draggingMap);
      this.$bmap.off('zoomend', this.zoomendMap);
      this.$bmap.off('resize', this.resizeMap);
      this.$bmap.off('click', this.clickMap);
    },
    moveMap() {
      this.calcPosition();
    },
    draggingMap() {
      this.calcPosition();
    },
    zoomendMap() {
      this.calcPosition();
    },
    resizeMap() {
      this.mapSize = this.$bmap.getContainerSize();
      this.calcPosition();
    },
    clickMap() {
      if (this.enableCloseOnClick && this.saveVisible === true) {
        this.saveVisible = false;
        this.$emit('update:visible', false);
        this.emitEvent();
      }
    },
    calcPosition() {
      if (!this.savePosition) {
        return;
      }
      let pixel = this.$bmap.pointToOverlayPixel(this.savePosition);
      this.savePixel = pixel;
      this.styleObj.left = (pixel.x + this.offset[0]) + 'px';
      this.styleObj.top = (pixel.y + this.offset[1]) + 'px';
      this.$nextTick(() => {
        this.calcAnchor();
      });
    },
    calcAnchor() {
      if (this.anchor !== 'auto' || this.enableAutoPan) {
        this.anchorClass = this.anchor !== 'auto' ? this.anchor : 'bottom';
        return;
      }
      let mapSize = this.mapSize;
      let mapWidth = mapSize.width;
      let mapHeight = mapSize.height;
      let arrowOffset = 11;
      let height = this.$refs.infoWindow.offsetHeight;
      let width = this.$refs.infoWindow.offsetWidth;
      let pointX = this.savePixel.x;
      let pointY = this.savePixel.y;
      let anchor = '';
      if ((height + arrowOffset) <= pointY && pointY <= mapHeight && (width / 2) <= pointX && (mapWidth - pointX) >= (width / 2)) {
        anchor = 'bottom';
      } else if ((height / 2) <= pointY && (mapWidth - pointX) <= (width / 2)) {
        anchor = 'right';
      } else if ((height + arrowOffset + pointY) <= mapHeight && (width / 2) <= pointX) {
        anchor = 'top';
      } else if (pointX < (width / 2) && (height / 2) <= pointY && (pointY + height / 2) <= mapHeight) {
        anchor = 'left';
      }
      if (!anchor) {
        anchor = 'bottom';
      }
      this.anchorClass = anchor;

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

    &.top{
      transform: translate(-50%, 11px);

      .arrow{
        position: absolute;
        box-shadow: 0 5px 7px -1px rgb(238 238 238 / 50%);
        width: 0;
        height: 0;
        border-left: 6px solid transparent;
        border-right: 6px solid transparent;
        border-bottom: 11px solid #F5F8FF;
        top: -11px;
        left: 50%;
        transform: translateX(-50%);
      }
    }
    &.right{
      transform: translate(calc(-100% - 11px), -50%);

      .arrow{
        position: absolute;
        box-shadow: 0 5px 7px -1px rgb(238 238 238 / 50%);
        width: 0;
        height: 0;
        border-top: 6px solid transparent;
        border-bottom: 6px solid transparent;
        border-left: 11px solid #F5F8FF;
        right: -11px;
        top: 50%;
        transform: translateY(-50%);
      }
    }
    &.bottom{
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
    }
    &.left{
      transform: translate(11px, -50%);

      .arrow{
        position: absolute;
        box-shadow: 0 5px 7px -1px rgb(238 238 238 / 50%);
        width: 0;
        height: 0;
        border-top: 6px solid transparent;
        border-bottom: 6px solid transparent;
        border-right: 11px solid #F5F8FF;
        left: -11px;
        top: 50%;
        transform: translateY(-50%);
      }
    }
    &.top-left{
    }
    &.top-right{
      transform: translate(-100%, 0);
    }
    &.bottom-left{
      transform: translate(0, -100%);
    }
    &.bottom-right{
      transform: translate(-100%, -100%);
    }

    &.custom{
      box-shadow: none;
      border-radius: 0;
      background: none;

    }
  }
</style>
