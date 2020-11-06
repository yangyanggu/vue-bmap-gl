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
  props: [
    'vid',
    'height',
    'position',
    'size',
    'icon',
    'shape',
    'fillColor',
    'fillOpacity',
    'events',
    'onceEvents'
  ],
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
  render(h) {
    return null;
  },
  destroyed() {
    if (this.$bmapComponent && this.$bmapComponent.getMap()) {
      this.$bmapComponent.getMap().removeOverlay(this.$bmapComponent);
    }
  }
};
</script>
