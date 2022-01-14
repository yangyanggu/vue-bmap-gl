<script lang="ts">
import {defineComponent} from "vue";
import {toLngLat} from '../../utils/convert-helper';
import registerMixin from '../../mixins/register-component';
export default defineComponent({
  name: 'ElBmapGroundOverlay',
  mixins: [registerMixin],
  props: {
    opacity: {
      type: Number
    },
    type: {
      type: String,
      validator: (value: string) => {
        return ['image', 'video', 'canvas'].indexOf(value) !== -1;
      }
    },
    url: {
      type: [String, HTMLElement],
      required: true
    },
    bounds: {
      type: Array,
      required: true
    },
    visible: {
      type: Boolean,
      default: true
    },
  },
  data() {
    return {
      propsRedirect: {
      },
      converters: {
        bounds(arr) {
          return new BMapGL.Bounds(toLngLat(arr[0]), toLngLat(arr[1]));
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
      this.$amapComponent = new BMapGL.GroundOverlay(options.bounds, options);
      this.$parentComponent.addOverlay(this.$amapComponent);
      if (options.visible === false) {
        this.$nextTick(() => {
          this.$amapComponent.hide();
        });
      }
    },
  },
  render() {
    return null;
  }
});
</script>
