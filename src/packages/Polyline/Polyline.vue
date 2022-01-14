<script lang="ts">
import {defineComponent} from "vue";
import registerMixin from '../../mixins/register-component';
import {lngLatTo, toLngLat} from '../../utils/convert-helper';
export default defineComponent({
  name: 'ElBmapPolyline',
  mixins: [registerMixin],
  props: {
    geodesic: {
      type: Boolean,
      default: false
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
      validator: (value:string) => ['solid', 'dashed'].includes(value)
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
      this.$amapComponent = new BMapGL.Polyline(options.path, options);
      this.$parentComponent.addOverlay(this.$amapComponent);
    },
    $$getPath() {
      return this.$amapComponent.getPath().map(lngLatTo);
    },
    __path(value) {
      this.$amapComponent.setPath(value);
      if (this.$amapComponent._config.enableEditing) {
        this.$amapComponent.disableEditing();
        this.$amapComponent.enableEditing();
      }
    },
  },
  render(){
    return null;
  }
});
</script>
