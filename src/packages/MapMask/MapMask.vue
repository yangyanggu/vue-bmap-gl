<script lang="ts">
import {defineComponent} from "vue";
import registerMixin from '../../mixins/register-component';
import {toLngLat} from '../../utils/convert-helper';
export default defineComponent({
  name: 'ElBmapMapMask',
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
      validator: (value:string) => ['inside', 'outside'].includes(value)
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
    },
  },
  data() {
    return {
      converters: {
        path(arr) {
          if (!Array.isArray(arr)) return [];
          return arr.map(toLngLat);
        }
      },
    };
  },
  unmounted() {
    if (this.$amapComponent) {
      this.$parentComponent.removeOverlay(this.$amapComponent);
      this.$amapComponent = null;
    }
  },
  methods: {
    __initComponent(options) {
      console.log('options: ', options)
      this.$amapComponent = new BMapGL.MapMask(options.path, options);
      this.$parentComponent.addOverlay(this.$amapComponent);
    },
  },
  render(){
    return null;
  }
});
</script>
