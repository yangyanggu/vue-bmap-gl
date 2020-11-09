<script>
import registerMixin from '../mixins/register-component';
import {toLngLat, toSize} from '../utils/convert-helper';

export default {
  name: 'el-bmap-label',
  mixins: [registerMixin],
  props: [
    'vid',
    'content',
    'position',
    'offset',
    'title',
    'labelStyle',
    'enableMassClear',
    'visible',
    'events',
    'onceEvents'
  ],
  data() {
    return {
      propsRedirect: {
        labelStyle: 'style'
      },
      converters: {
        position(arr) {
          return toLngLat(arr);
        },
        offset(arr) {
          return toSize(arr);
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
      this.$bmapComponent = new BMapGL.Label(options.content, options);
      options.map.addOverlay(this.$bmapComponent);
      if (options.style) {
        this.$bmapComponent.setStyle(options.style);
      }
      if (options.visible === false) {
        this.$nextTick(() => {
          this.$bmapComponent.hide();
        });
      }
    }
  },
  destroyed() {
    if (this.$bmapComponent && this.$bmapComponent.getMap()) {
      this.$bmapComponent.getMap().removeOverlay(this.$bmapComponent);
    }
  }
};
</script>
