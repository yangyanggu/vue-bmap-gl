<template></template>
<script>
import registerMixin from '../mixins/register-component';
import { toLngLat, lngLatTo } from '../utils/convert-helper';
export default {
  name: 'el-bmap-circle',
  mixins: [registerMixin],
  props: [
    'vid',
    'zIndex',
    'center',
    'radius',
    'strokeColor',
    'strokeOpacity',
    'strokeWeight',
    'fillColor',
    'fillOpacity',
    'strokeStyle',
    'enableMassClear',
    'enableEditing',
    'enableClicking',
    'visible',
    'events',
    'onceEvents'
  ],
  data() {
    return {
      converters: {
        center(arr) {
          return toLngLat(arr);
        }
      },
      handlers: {
        visible(flag) {
          flag === false ? this.hide() : this.show();
        }
      }
    };
  },
  methods: {
    __initComponent(options) {
      this.$bmapComponent = new BMapGL.Circle(options.center, options.radius, options);
      options.map.addOverlay(this.$bmapComponent);
    },
    $$getCenter() {
      let center = this.$bmapComponent.getCenter();
      return lngLatTo(center);
    },
    $$getRadius() {
      return this.$bmapComponent.getRadius();
    }
  },
  destroyed() {
    if (this.$bmapComponent && this.$bmapComponent.getMap()) {
      this.$bmapComponent.getMap().removeOverlay(this.$bmapComponent);
    }
  }
};
</script>
