<script>
import registerMixin from '../mixins/register-component';
import {lngLatTo, toLngLat} from '../utils/convert-helper';

export default {
  name: 'el-bmap-bezier-curve',
  mixins: [registerMixin],
  props: [
    'vid',
    'path',
    'controlPoints',
    'strokeColor',
    'strokeOpacity',
    'strokeWeight',
    'strokeStyle',
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
        },
        controlPoints(arr) {
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
      this.$bmapComponent = new BMapGL.BezierCurve(options.path, options.controlPoints, options);
      options.map.addOverlay(this.$bmapComponent);
    },
    $$getPath() {
      return this.$bmapComponent.getPath().map(lngLatTo);
    },
    $$getControlPoints() {
      return this.$bmapComponent.getControlPoints().map(lngLatTo);
    }
  },
  destroyed() {
    if (this.$bmapComponent && this.$bmapComponent.getMap()) {
      this.$bmapComponent.getMap().removeOverlay(this.$bmapComponent);
    }
  }
};
</script>
