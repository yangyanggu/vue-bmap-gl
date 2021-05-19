# 右击菜单

## 基础示例

<vuep template="#example"></vuep>

<script v-pre type="text/x-template" id="example">

  <template>
    <div class="bmap-page-container">
      <el-bmap ref="map" vid="bmapDemo" :bmap-manager="bmapManager" :min-zoom="10" :max-zoom="22" :center="center" :zoom="zoom" class="bmap-demo">
        <el-bmap-menu>
            <el-bmap-menu-item v-for="(item,index) in menus" :key="index" :enable="item.enable" :text="item.text" :callback="item.callback" ></el-bmap-menu-item>
        </el-bmap-menu>
      </el-bmap>
      <div class="toolbar">
        <button @click="switchEnable">切换缩小按钮的enable</button>
      </div>
    </div>
  </template>

  <style>
    .bmap-demo {
      height: 300px;
    }
  </style>

  <script>
  
    let bmapManager = new VueBMap.BMapManager();
    module.exports = {
      data() {
        return {
          bmapManager,
          zoom: 16,
          center: [121.59996, 31.197646],
          heading: 0,
          menus: [
            {
                text: '放大',
                callback(e){
                    console.log(e);
                    bmapManager.getMap().zoomOut();
                },
                enable: true
            },
            {
                text: '缩小',
                callback(){
                    bmapManager.getMap().zoomIn();
                },
                enable: false
            }
          ]
        };
      },
      mounted() {
      },
      methods: {
        switchEnable(){
          this.menus[1].enable = !this.menus[1].enable;
        }
      }
    };
  </script>

</script>

## el-bmap-menu 静态属性
仅且可以初始化配置，不支持响应式。

名称 | 类型 | 说明
---|---|---|
vid | String | 组件的ID。
events | Object | 事件

## el-bmap-menu 动态属性

支持响应式。

名称 | 类型 | 说明
---|---|---|

## el-bmap-menu 事件

事件 | 参数 | 说明
---|---|---|
open | event{type, target, point, pixel} | 右键菜单打开时触发，事件参数point和pixel分别表示菜单开启时的地理和像素坐标点
close | event{type, target, point, pixel} | 右键菜单关闭时触发，事件参数point和pixel分别表示菜单开启时的地理和像素坐标点

## el-bmap-menu-item 静态属性
仅且可以初始化配置，不支持响应式。

名称 | 类型 | 说明
---|---|---|
vid | String | 组件的ID。
width | Number | 指定此菜单项的宽度，菜单以最长的菜单项宽度为准
domId | String | 指定此菜单项dom的id

## el-bmap-menu-item 动态属性

支持响应式。

名称 | 类型 | 说明
---|---|---|
text | String | 菜单项显示的文本
enable | Boolean | 是否启用菜单项

## el-bmap-menu-item 事件

事件 | 参数 | 说明
---|---|---|
