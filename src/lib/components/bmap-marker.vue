<script>
import registerMixin from '../mixins/register-component';
import {
  lngLatTo,
  pixelTo,
  toLngLat, toSize
} from '../utils/convert-helper';

export default {
  name: 'el-bmap-marker',
  mixins: [registerMixin],
  props: [
    'vid',
    'position',
    'offset',
    'icon',
    'enableMassClear',
    'enableDragging',
    'enableClicking',
    'raiseOnDrag',
    'draggingCursor',
    'visible',
    'rotation',
    'title',
    'label',
    'events',
    'onceEvents'
  ],
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
          let label = new BMapGL.Label(content, {
            title: title,
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
      handlers: {
        visible(flag) {
          flag === false ? this.hide() : this.show();
        }
      }
    };
  },
  created() {
  },
  methods: {
    __initComponent(options) {
      this.$bmapComponent = new BMapGL.Marker(options.position, options);
      options.map.addOverlay(this.$bmapComponent);
      if (options.visible === false) {
        this.$nextTick(() => {
          this.$bmapComponent.hide();
        });
      }
    },

    $$getPosition() {
      return lngLatTo(this.$bmapComponent.getPosition());
    },

    $$getOffset() {
      return pixelTo(this.$bmapComponent.getOffset());
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
