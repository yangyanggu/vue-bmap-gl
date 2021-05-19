<script>
import {toLngLat} from '../utils/convert-helper';
import registerMixin from '../mixins/register-component';
export default {
  name: 'el-bmap-ground-overlay',
  mixins: [registerMixin],
  props: {
    vid: {
      type: [String, Number]
    },
    opacity: {
      type: Number
    },
    type: {
      type: String,
      validator: (value) => {
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
    events: {
      type: Object
    }
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
      handlers: {
        visible(flag) {
          flag === false ? this.hide() : this.show();
        }
      }
    };
  },
  methods: {
    __initComponent(options) {
      this.$bmapComponent = new BMapGL.GroundOverlay(options.bounds, options);
      options.map.addOverlay(this.$bmapComponent);
      if (options.visible === false) {
        this.$nextTick(() => {
          this.$bmapComponent.hide();
        });
      }
    }
  },
  render() {
    return null;
  },
  destroyed() {
    if (this.$bmapComponent && this.$bmapComponent.getMap()) {
      this.$bmapComponent.getMap().removeOverlay(this.$bmapComponent);
    }
  }
};
</script>
