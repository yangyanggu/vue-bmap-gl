<template>
</template>
<script>
import registerMixin from '../mixins/register-component';
import {lngLatTo, toLngLat} from '../utils/convert-helper';
export default {
  name: 'el-bmap-polyline',
  mixins: [registerMixin],
  props: {
    vid: {
      type: [String, Number]
    },
    geodesic: {
      type: Boolean
    },
    clip: {
      type: Boolean,
      default: true
    },
    path: {
      type: Array,
      required: true
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
    strokeStyle: {
      type: String,
      validator: (value) => {
        return ['solid', 'dashed'].indexOf(value) !== -1;
      }
    },
    enableMassClear: {
      type: Boolean,
      default: true
    },
    enableEditing: {
      type: Boolean,
      default: false
    },
    enableClicking: {
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
        path(value) {
          this.setPath(value);
          if (this._config.enableEditing) {
            this.disableEditing();
            this.enableEditing();
          }
        }
      }
    };
  },
  methods: {
    __initComponent(options) {
      this.$bmapComponent = new BMapGL.Polyline(options.path, options);
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
