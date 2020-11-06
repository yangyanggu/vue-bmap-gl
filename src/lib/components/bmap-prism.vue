<template>
</template>
<script>
import registerMixin from '../mixins/register-component';
import {lngLatTo, toLngLat} from '../utils/convert-helper';
export default {
  name: 'el-bmap-prism',
  mixins: [registerMixin],
  props: [
    'vid',
    'path',
    'altitude',
    'topFillColor',
    'topFillOpacity',
    'sideFillColor',
    'sideFillOpacity',
    'enableMassClear',
    'events',
    'onceEvents'
  ],
  data() {
    return {
      converters: {
        path(arr) {
          if (!Array.isArray(arr)) return [];
          return arr.map(toLngLat);
        }
      },
      handlers: {
      }
    };
  },
  methods: {
    __initComponent(options) {
      this.$bmapComponent = new BMapGL.Prism(options.path, options.altitude, options);
      options.map.addOverlay(this.$bmapComponent);
    },
    $$getPath() {
      return this.$bmapComponent.getPath().map(lngLatTo);
    }
  },
  destroyed() {
    if (this.$bmapComponent && this.$bmapComponent.getMap()) {
      this.$bmapComponent.getMap().removeOverlay(this.$bmapComponent);
    }
  }
};
</script>
