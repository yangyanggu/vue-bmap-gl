<script lang="ts">
import {defineComponent} from "vue";
import registerMixin from '../../mixins/register-component';
import {lngLatTo, toLngLat} from '../../utils/convert-helper';

export default defineComponent({
  name: 'ElBmapBezierCurve',
  mixins: [registerMixin],
  props: {
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
      validator: (value: string) => {
        return ['solid', 'dashed'].indexOf(value) !== -1;
      }
    },
    enableMassClear: {
      type: Boolean,
      default: true
    },
    visible: {
      type: Boolean,
      default: true
    },
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
    };
  },
  unmounted() {
    if (this.$amapComponent && this.$amapComponent.getMap()) {
      this.$amapComponent.getMap().removeOverlay(this.$amapComponent);
      this.$amapComponent = null;
    }
  },
  methods: {
    __initComponent(options) {
      this.$amapComponent = new BMapGL.BezierCurve(options.path, options.controlPoints, options);
      this.$parentComponent.addOverlay(this.$amapComponent);
      if (options.visible === false) {
        this.$nextTick(() => {
          this.$amapComponent.hide();
        });
      }
    },
    $$getPath() {
      return this.$amapComponent.getPath().map(lngLatTo);
    },
    $$getControlPoints() {
      return this.$amapComponent.getControlPoints().map(lngLatTo);
    },
  },
  render() {
    return null;
  }
});
</script>
