# 自定义信息窗体
  该组件为自定义组件，用于提供自定义窗体的需求  

## 基础示例

<vuep template="#example"></vuep>

<script v-pre type="text/x-template" id="example">

  <template>
    <div class="amap-page-container">
      <el-bmap vid="amap" :zoom="zoom" :center="center" class="amap-demo">
        <el-bmap-marker :position="currentWindow.position"></el-bmap-marker>
        <el-bmap-info-window-custom
          :is-custom="true"
          :position="currentWindow.position"
          :visible.sync="currentWindow.visible"
          >
          <template>
            <span>{{currentWindow.content}}</span>
          </template>
        </el-bmap-info-window-custom>
      </el-bmap>
      <button @click="switchWindow">切换显隐</button>
      <button @click="changePosition()">修改弹出框位置</button>
    </div>
  </template>

  <style>
    .amap-demo {
      height: 300px;
    }
  </style>

  <script>
    module.exports = {
      data () {
        return {
          zoom: 14,
          center: [121.5273285, 31.21515044],
          currentWindow: {
            position: [121.4113285, 31.21515044],
            content: 'hello world',
            events: {},
            visible: true
          }
        }
      },

      mounted() {
      },

      methods: {
        switchWindow() {
          this.currentWindow.visible = !this.currentWindow.visible;
        },
        changePosition() {
          let position = this.currentWindow.position;
          this.currentWindow.position = [position[0] + 0.002, position[1] - 0.002];
        },
      }
    };
  </script>

</script>



## 静态属性

名称 | 类型 | 说明
---|---|---|
vid | String | 组件的ID。

## 动态属性

支持响应式。

名称 | 类型 | 说明
---|---|---|
position | Array[x,y] | 信息窗体显示基点位置
offset | Array[x,y] | 信息窗位置偏移值。默认情况下在地图上打开的信息窗底端的尖角将指向其地理坐标，在标注上打开的信息窗底端尖角的位置取决于标注所用图标的infoWindowOffset属性值，您可以为信息窗添加偏移量来改变默认位置
enableAutoPan | Boolean | 是否开启信息窗口打开时地图自动移动（默认开启）
enableCloseOnClick | Boolean | 是否开启点击地图关闭信息窗口（默认开启）
visible | Boolean | 信息窗体是否显示。可以同时显示多个，需要自定义控制显隐。可以给visible属性增加.sync，用于同步组件显隐，主要用于点击地图隐藏信息框时，同步修改父组件的值
isCustom | Boolean | 是否自定义，true时信息框不提供任何默认样式

## ref 可用方法
提供无副作用的同步帮助方法

函数 | 返回 | 说明
---|---|---|

## 事件
暂时未提供事件，需要事件可以提需求

事件 | 参数 | 说明
---|---|---|
