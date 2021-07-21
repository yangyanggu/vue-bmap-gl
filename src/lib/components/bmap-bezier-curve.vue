<script>
import registerMixin from '../mixins/register-component';
import {lngLatTo, toLngLat} from '../utils/convert-helper';

export default {
  name: 'el-bmap-bezier-curve',
  mixins: [registerMixin],
  props: {
    vid: {
      type: [String, Number]
    },
    path: {
      type: Array
    },
    controlPoints: {
      type: Array
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
        path(arr) {
          if (!Array.isArray(arr)) return [];
          return arr.map(toLngLat);
        },
        controlPoints(arr) {
          if (!Array.isArray(arr)) return [];
          return arr.map(toLngLat);
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
      this.$bmapComponent = new BMapGL.BezierCurve(options.path, options.controlPoints, options);
      options.map.addOverlay(this.$bmapComponent);
      if (options.visible === false) {
        this.$nextTick(() => {
          this.$bmapComponent.hide();
        });
      }
    },
    $$getPath() {
      return this.$bmapComponent.getPath().map(lngLatTo);
    },
    $$getControlPoints() {
      return this.$bmapComponent.getControlPoints().map(lngLatTo);
    }
  },
  render() {
    return null;
  },
  destroyed() {
    if (this.$bmapComponent && this.$bmapComponent.getMap()) {
      this.$bmapComponent.getMap().removeOverlay(this.$bmapComponent);
      this.$bmapComponent = null;
    }
  }
};
</script>
