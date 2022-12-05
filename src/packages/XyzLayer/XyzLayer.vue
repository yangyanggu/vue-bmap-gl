<script lang="ts">
import {defineComponent} from "vue";
import registerMixin from '../../mixins/register-component';
import {lngLatTo, toLngLat} from '../../utils/convert-helper';
export default defineComponent({
  name: 'ElBmapXyzLayer',
  mixins: [registerMixin],
  props: {
    // 图像数据请求地址。可通过{0,1,2}标记实现多请求地址的配置；可通过[z]，[x]，[y]，[b]引用默认的*Template。WMTS/TMS/自定义栅格图层服务默认使用[z]，[x]，[y]，瓦片大小为256*256。WMS服务默认使用[b]。
    tileUrlTemplate: {
      type: String,
      required: true
    },
    // 通过输入的网格x、y、z参数计算[x]具体返回值。x、y、z参数对应是Google web墨卡托网格的列号、行号、缩放等级。
    xTemplate: {
      type: Function,
    },
    // 通过输入的网格x、y、z参数计算[y]具体返回值。x、y、z参数对应是Google web墨卡托网格的列号、行号、缩放等级。
    yTemplate: {
      type: Function,
    },
    // 通过输入的网格x、y、z参数计算[z]具体返回值。x、y、z参数对应是Google web墨卡托网格的列号、行号、缩放等级。
    zTemplate: {
      type: Function,
    },
    // 通过输入的网格x、y、z参数计算[b]具体返回值，返回值默认为四至坐标拼接成的字符串：’minX,minY,maxX,maxY’。x、y、z参数对应是Google web墨卡托网格的列号、行号、缩放等级。
    bTemplate: {
      type: Function,
    },
    // 设置图层显示的最小缩放等级
    minZoom: {
      type: Number,
    },
    // 设置图层显示的最大缩放等级。
    maxZoom: {
      type: Number,
    },
    // 设置图层加载数据的四至范围，输入的范围数值默认为EPSG:3857坐标[minX,minY,maxX,maxY]。
    extent: {
      type: Array,
    },
    // 标记参数extend数组数据是否为EPSG:4326坐标。默认false，如果设置为true，参数extent数值需要是EPSG:4326 坐标。
    extentCRSIsWGS84: {
      type: Boolean,
    },
    // 设置图层掩膜。可通过BMapGL.Boundary()获取行政区域的坐标数据。
    boundary: {
      type: Array,
    },
    // 缩放图层时，是否使用跨图层的瓦片进行平滑切换。默认false。如果影响透明图层的展示效果，可以设置false；如果非透明图层，可以设置true。
    useThumbData: {
      type: Boolean,
    },
    // tileUrlTemplate中[y]是否为tms请求服务形式。默认false。如果是则设置为true。
    tms: {
      type: Boolean,
    }
  },
  data() {
    return {
      converters: {
      },
    };
  },
  unmounted() {
    if (this.$amapComponent) {
      this.$parentComponent.removeTileLayer(this.$amapComponent);
      this.$amapComponent = null;
    }
  },
  methods: {
    __initComponent(options) {
      this.$amapComponent = new BMapGL.XYZLayer(options);
      this.$parentComponent.addTileLayer(this.$amapComponent);
    },
    $$addBoundary(value) {
      this.$amapComponent.addBoundary(value);
    },
    $$clearBoundary() {
      this.$amapComponent.clearBoundary();
    },
  },
  render(){
    return null;
  }
});
</script>
