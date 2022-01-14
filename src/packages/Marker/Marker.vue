<script lang="ts">
import {defineComponent} from "vue";
import registerMixin from '../../mixins/register-component';
import {
  lngLatTo,
  pixelTo,
  toLngLat, toSize
} from '../../utils/convert-helper';
import type { PropType} from "vue";

export default defineComponent({
  name: 'ElBmapMarker',
  mixins: [registerMixin],
  props: {
    position: {
      type: Array as PropType<number[]>,
      required: true
    },
    offset: {
      type: Array as PropType<number[]>
    },
    icon: {
      type: Object as PropType<IconOptions>
    },
    enableMassClear: {
      type: Boolean,
      default: true
    },
    enableDragging: {
      type: Boolean
    },
    enableClicking: {
      type: Boolean,
      default: true
    },
    raiseOnDrag: {
      type: Boolean,
      default: false
    },
    draggingCursor: {
      type: String
    },
    rotation: {
      type: Number
    },
    visible: {
      type: Boolean,
      default: true
    },
    title: {
      type: String
    },
    label: {
      type: Object as PropType<LabelOptions>
    },
  },
  data() {
    return {
      converters: {
        position(arr) {
          return toLngLat(arr);
        },
        offset(arr) {
          return toSize(arr);
        },
        icon(options) {
          if (!options) {
            return null;
          }
          const {url, size = [16, 16], imageSize, imageOffset = [0, 0], anchor = [0, 0]} = options;
          return new BMapGL.Icon(url, toSize(size), {
            imageOffset: toSize(imageOffset),
            anchor: toSize(anchor),
            imageSize: (imageSize || toSize(size))
          });
        },
        label(options) {
          if (!options) {
            return null;
          }
          const { content = '', offset = [0, 0], enableMassClear, style, title = '', zIndex } = options;
          const label = new BMapGL.Label(content, {
            title,
            offset: toSize(offset),
            enableMassClear: (enableMassClear === undefined ? true : enableMassClear)
          });
          if (style) {
            label.setStyle(style);
          }
          if (zIndex !== undefined) {
            label.setZIndex(zIndex);
          }
          return label;
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
      this.$amapComponent = new BMapGL.Marker(options.position, options);
      this.$parentComponent.addOverlay(this.$amapComponent);
      if (options.visible === false) {
        this.$nextTick(() => {
          this.$amapComponent.hide();
        });
      }
    },

    $$getPosition() {
      return lngLatTo(this.$amapComponent.getPosition());
    },

    $$getOffset() {
      return pixelTo(this.$amapComponent.getOffset());
    },
    __label(value) {
      const preLabel = this.$amapComponent.getLabel();
      if (preLabel) {
        this.$parentComponent.removeOverlay(preLabel);
      }
      this.$amapComponent.setLabel(value);
    },
    __icon(value) {
      this.$amapComponent.setIcon(value);
    }
  },
  render() {
    return null;
  }
});
</script>
