<template>
</template>
<script>
import registerMixin from '../mixins/register-component';
import {lngLatTo, toLngLat} from '../utils/convert-helper';
export default {
  name: 'el-bmap-polygon',
  mixins: [registerMixin],
  props: {
    vid: {
      type: [String, Number]
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
    fillColor: {
      type: String
    },
    fillOpacity: {
      type: Number
    },
    enableMassClear: {
      type: Boolean,
      default: true
    },
    enableEditing: {
      type: Boolean,
      default: false
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
        },
        visible(flag) {
          flag === false ? this.hide() : this.show();
        }
      }
    };
  },
  methods: {
    __initComponent(options) {
      this.$bmapComponent = new BMapGL.Polygon(options.path, options);
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
