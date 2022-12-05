<script>
import registerMixin from '../mixins/register-component';
import {toLngLat} from '../utils/convert-helper';
export default {
  name: 'el-bmap-map-mask',
  mixins: [registerMixin],
  props: {
    // 区域坐标点数组
    path: {
      type: Array,
      required: true
    },
    // 展示区域内部还是外部，取值'inside'或'outside'，默认为'inside'
    showRegion: {
      type: String,
      default: 'inside',
      validator: (value) => ['inside', 'outside'].includes(value)
    },
    // 楼块是否参与掩膜，默认为false
    isBuildingMask: {
      type: Boolean,
      default: false
    },
    // 底图是否参与掩膜，默认为false
    isMapMask: {
      type: Boolean,
      default: false
    },
    // 底图上的Poi是否参与掩膜，默认为false
    isPoiMask: {
      type: Boolean,
      default: false
    }
  },
  data() {
    return {
      converters: {
        path(arr) {
          if (!Array.isArray(arr)) return [];
          return arr.map(toLngLat);
        }
      }
    };
  },
  destroyed() {
    if (this.$bmapComponent) {
      this.$bmapComponent.getMap().removeOverlay(this.$bmapComponent);
      this.$bmapComponent = null;
    }
  },
  methods: {
    __initComponent(options) {
      this.$bmapComponent = new BMapGL.MapMask(options.path, options);
      options.map.addOverlay(this.$bmapComponent);
    }
  },
  render() {
    return null;
  }
};
</script>
