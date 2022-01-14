<script lang="ts">
import {defineComponent} from "vue";
import registerMixin from '../../mixins/register-component';
import { toLngLat, lngLatTo } from '../../utils/convert-helper';
export default defineComponent({
  name: 'ElBmapCircle',
  mixins: [registerMixin],
  props: {
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
      validator: (value: string) => {
        return ['solid', 'dashed'].indexOf(value) !== -1;
      }
    },
    enableMassClear: {
      type: Boolean,
      default: true
    },
    enableEditing: {
      type: Boolean
    },
    enableClicking: {
      type: Boolean,
      default: true
    },
    visible: {
      type: Boolean,
      default: true
    }
  },
  data() {
    return {
      converters: {
        center(arr) {
          return toLngLat(arr);
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
      this.$amapComponent = new BMapGL.Circle(options.center, options.radius, options);
      this.$parentComponent.addOverlay(this.$amapComponent);
      if (options.visible === false) {
        this.$nextTick(() => {
          this.$amapComponent.hide();
        });
      }
    },
    $$getCenter() {
      const center = this.$amapComponent.getCenter();
      return lngLatTo(center);
    },
    $$getRadius() {
      return this.$amapComponent.getRadius();
    },
  },
  render(){
    return null;
  }
});
</script>
