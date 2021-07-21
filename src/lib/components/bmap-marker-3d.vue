<script>
import registerMixin from '../mixins/register-component';
import {
  lngLatTo,
  pixelTo,
  toLngLat, toSize
} from '../utils/convert-helper';

export default {
  name: 'el-bmap-marker-3d',
  mixins: [registerMixin],
  props: {
    vid: {
      type: [String, Number]
    },
    height: {
      type: Number,
      default: 0,
      required: true
    },
    position: {
      type: Array
    },
    size: {
      type: Number
    },
    icon: {
      type: Object
    },
    shape: {
      type: Number,
      validator: (value) => {
        return [1, 2].indexOf(value) !== -1;
      }
    },
    fillColor: {
      type: String
    },
    fillOpacity: {
      type: Number
    },
    events: {
      type: Object
    }
  },
  data() {
    return {
      converters: {
        position(arr) {
          return toLngLat(arr);
        },
        icon(options) {
          if (!options) {
            return null;
          }
          const {url, size = [16, 16], imageSize, imageOffset = [-8, -8], anchor = [0, 0]} = options;
          return new BMapGL.Icon(url, toSize(size), {
            imageOffset: toSize(imageOffset),
            anchor: toSize(anchor),
            imageSize: (imageSize || toSize(size))
          });
        }
      },
      handlers: {
      }
    };
  },
  created() {
  },
  methods: {
    __initComponent(options) {
      this.$bmapComponent = new BMapGL.Marker3D(options.position, options.height, options);
      options.map.addOverlay(this.$bmapComponent);
    },

    $$getPosition() {
      return lngLatTo(this.$bmapComponent.getPosition());
    },

    $$getSize() {
      return pixelTo(this.$bmapComponent.getSize());
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
