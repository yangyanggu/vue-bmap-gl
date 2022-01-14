<script lang="ts">
import {defineComponent} from "vue";
import registerMixin from '../../mixins/register-component';
import {lngLatTo, toLngLat} from '../../utils/convert-helper';
export default defineComponent({
  name: 'ElBmapPrism',
  mixins: [registerMixin],
  props: {
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
        }
      },
    };
  },
  unmounted() {
    if (this.$amapComponent) {
      this.$parentComponent.removeOverlay(this.$amapComponent);
      this.$amapComponent = null;
    }
  },
  methods: {
    __initComponent(options) {
      this.$amapComponent = new BMapGL.Prism(options.path, options.altitude, options);
      this.$parentComponent.addOverlay(this.$amapComponent);
    },
    $$getPath() {
      return this.$amapComponent.getPath().map(lngLatTo);
    },
  },
  render(){
    return null;
  }
});
</script>
