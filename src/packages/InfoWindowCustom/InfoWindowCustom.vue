<template>
  <div
    ref="infoWindow"
    class="bmap-info-window-custom"
    :style="computedStyle"
    :class="[isCustom ? 'custom' : '', anchorClass]"
  >
    <div
      v-if="!isCustom"
      class="arrow"
    />
    <slot />
  </div>
</template>
<script lang="ts">
import {defineComponent} from "vue";
import registerMixin from '../../mixins/register-component';
import type { PropType} from "vue";

interface Position {
  x: number
  y: number
}

export default defineComponent({
  name: 'ElBmapInfoWindowCustom',
  mixins: [registerMixin],
  props: {
    offset: {
      type: Array as PropType<number[]>,
      default: () => ([0, 0])
    },
    position: {
      type: Array as PropType<number[]>,
      default: () => ([0, 0])
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
      validator: (value: string) => ['auto', 'top', 'right', 'bottom', 'left', 'top-left', 'top-right', 'bottom-left', 'bottom-right'].includes(value)
    },
  },
  emits: ['open', 'close', 'update:visible'],
  data() {
    return {
      styleObj: {
        display: 'block',
        left: 0 as any,
        top: 0 as any
      },
      anchorClass: 'bottom',
      savePosition: null,
      saveVisible: false,
      savePixel: {
        x: 0,
        y: 0
      },
      mapSize: {
        width: 0,
        height: 0
      }
    };
  },
  computed: {
    computedStyle() {
      const style = {
        display: '',
        left: 0,
        top: 0
      };
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
  unmounted() {
    this.unBindEvent();
    this.$amapComponent = null;
  },
  methods: {
    __initComponent(options) {
      this.$amapComponent = {};
      this.saveVisible = this.visible;
      this.mapSize = this.$parentComponent.getContainerSize();
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
          const height = (this.$refs.infoWindow as HTMLDivElement).offsetHeight + 11;
          const width = (this.$refs.infoWindow as HTMLDivElement).offsetWidth;
          const pixel = this.$parentComponent.pointToOverlayPixel(this.savePosition) as Position;
          const leftOffset = pixel.x - width / 2 + this.offset[0];
          const topOffset = pixel.y - height + this.offset[1];
          const mapWidth = this.mapSize.width;
          const mapHeight = this.mapSize.height;
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
            this.$parentComponent.panBy(panX, panY);
          }
        });
      }
    },
    bindEvent() {
      this.$parentComponent.on('moving', this.moveMap);
      this.$parentComponent.on('dragging', this.draggingMap);
      this.$parentComponent.on('zoomend', this.zoomendMap);
      this.$parentComponent.on('resize', this.resizeMap);
      this.$parentComponent.on('click', this.clickMap);
    },
    unBindEvent() {
      this.$parentComponent.off('moving', this.moveMap);
      this.$parentComponent.off('dragging', this.draggingMap);
      this.$parentComponent.off('zoomend', this.zoomendMap);
      this.$parentComponent.off('resize', this.resizeMap);
      this.$parentComponent.off('click', this.clickMap);
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
      this.mapSize = this.$parentComponent.getContainerSize();
      const timer = setTimeout(() => {
        this.calcPosition();
        clearTimeout(timer);
      }, 0);

    },
    clickMap() {
      if (this.enableCloseOnClick && this.saveVisible) {
        this.saveVisible = false;
        this.$emit('update:visible', false);
        this.emitEvent();
      }
    },
    calcPosition() {
      if (!this.savePosition) {
        return;
      }
      const pixel = this.$parentComponent.pointToOverlayPixel(this.savePosition);
      this.savePixel = pixel;
      this.styleObj.left = `${pixel.x + this.offset[0]  }px`;
      this.styleObj.top = `${pixel.y + this.offset[1]  }px`;
      this.$nextTick(() => {
        this.calcAnchor();
      });
    },
    calcAnchor() {
      if (this.anchor !== 'auto' || this.enableAutoPan) {
        this.anchorClass = this.anchor !== 'auto' ? this.anchor : 'bottom';
        return;
      }
      const mapSize = this.mapSize;
      const mapWidth = mapSize.width;
      const mapHeight = mapSize.height;
      const arrowOffset = 11;
      const height = (this.$refs.infoWindow as HTMLDivElement).offsetHeight;
      const width = (this.$refs.infoWindow as HTMLDivElement).offsetWidth;
      const pointX = this.savePixel.x;
      const pointY = this.savePixel.y;
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
      if (!this.saveVisible) {
        this.$emit('close');
      } else if (this.saveVisible) {
        this.$emit('open');
      }
    },
    __position(value) {
      this.savePosition = value;
      this.calcPosition();
    },
    __visible(value) {
      if (this.saveVisible !== value) {
        this.saveVisible = value;
        this.emitEvent();
      }

    }
  }
});
</script>
<style lang="scss" scoped>
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
