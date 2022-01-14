<script lang="ts">
import {defineComponent} from "vue";
import registerMixin from '../../mixins/register-component';
import {
  lngLatTo,
  pixelTo,
  toLngLat, toSize
} from '../../utils/convert-helper';

import type {PropType} from "vue";

export default defineComponent({
  name: 'ElBmapMarker3d',
  mixins: [registerMixin],
  props: {
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
      type: Object as PropType<IconOptions>
    },
    shape: {
      type: Number,
      validator: (value: number) => [1, 2].includes(value)
    },
    fillColor: {
      type: String
    },
    fillOpacity: {
      type: Number
    },
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
      this.$amapComponent = new BMapGL.Marker3D(options.position, options.height, options);
      this.$parentComponent.addOverlay(this.$amapComponent);
    },

    $$getPosition() {
      return lngLatTo(this.$amapComponent.getPosition());
    },

    $$getSize() {
      return pixelTo(this.$amapComponent.getSize());
    }
  },
  render() {
    return null;
  }
});
</script>
