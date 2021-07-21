<template>
</template>
<script>
import registerMixin from '../mixins/register-component';
import {lngLatTo, toLngLat} from '../utils/convert-helper';
export default {
  name: 'el-bmap-prism',
  mixins: [registerMixin],
  props: {
    vid: {
      type: [String, Number]
    },
    path: {
      type: Array,
      required: true
    },
    altitude: {
      type: Number
    },
    topFillColor: {
      type: String
    },
    topFillOpacity: {
      type: Number
    },
    sideFillColor: {
      type: String
    },
    sideFillOpacity: {
      type: Number
    },
    enableMassClear: {
      type: Boolean
    },
    events: {
      type: Object
    }
  },
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
      this.$bmapComponent = null;
    }
  }
};
</script>
