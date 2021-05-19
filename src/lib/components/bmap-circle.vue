<template></template>
<script>
import registerMixin from '../mixins/register-component';
import { toLngLat, lngLatTo } from '../utils/convert-helper';
export default {
  name: 'el-bmap-circle',
  mixins: [registerMixin],
  props: {
    vid: {
      type: [String, Number]
    },
    zIndex: {
      type: Number
    },
    center: {
      type: Array
    },
    radius: {
      type: Number
    },
    strokeColor: {
      type: String
    },
    strokeOpacity: {
      type: Number
    },
    strokeWeight: {
      type: Number
    },
    fillColor: {
      type: String
    },
    fillOpacity: {
      type: Number
    },
    strokeStyle: {
      type: String,
      validator: (value) => {
        return ['solid', 'dashed'].indexOf(value) !== -1;
      }
    },
    enableMassClear: {
      type: Boolean
    },
    enableEditing: {
      type: Boolean
    },
    enableClicking: {
      type: Boolean
    },
    visible: {
      type: Boolean,
      default: true
    },
    events: {
      type: Object
    }
  },
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
      if (options.visible === false) {
        this.$nextTick(() => {
          this.$bmapComponent.hide();
        });
      }
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
