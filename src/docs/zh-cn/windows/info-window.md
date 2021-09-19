# 信息窗体

## 基础示例

<vuep template="#example"></vuep>

<script v-pre type="text/x-template" id="example">

  <template>
    <div class="amap-page-container">
      <el-bmap vid="amap" :zoom="zoom" :center="center" class="amap-demo">
        <el-bmap-info-window
          :title="currentWindow.title"
          :position="currentWindow.position"
          :visible="currentWindow.visible"
          :events="currentWindow.events">
          <template>
            <span>{{currentWindow.content}}</span>
          </template>
        </el-bmap-info-window>
      </el-bmap>
      <div class="toolbar">
        <button @click="switchWindow(0)">Show First Window</button>
        <button @click="switchWindow(1)">Show Second Window</button>
        <button @click="changePosition()">修改弹出框位置</button>
        <button @click="changeTitle()">修改弹出框标题</button>
      </div>
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
          windows: [
            {
              position: [121.5273285, 31.21515044],
              title: '标题1',
              content: 'Hi! I am here!',
              visible: true,
              events: {
                close() {
                  console.log('close infowindow1');
                }
              }
            }, {
              position: [121.5375285, 31.21515044],
              title: '标题2',
              content: 'Hi! I am here too!',
              visible: true,
              events: {
                close() {
                  console.log('close infowindow2');
                }
              }
            }
          ],
          slotWindow: {
            position: [121.5163285, 31.21515044]
          },
          currentWindow: {
            title: '标题',
            position: [121.5163285, 31.21515044],
            content: '',
            events: {},
            visible: false
          }
        }
      },

      mounted() {
        this.currentWindow = this.windows[0];
      },

      methods: {
        switchWindow(tab) {
          this.currentWindow.visible = false;
          this.$nextTick(() => {
            this.currentWindow = this.windows[tab];
            this.currentWindow.visible = true;
            console.log(this.currentWindow)
          });
        },
        changePosition() {
          let position = this.currentWindow.position;
          this.currentWindow.position = [position[0] + 0.002, position[1] - 0.002];
        },
        changeTitle() {
          let position = this.currentWindow.position;
          this.currentWindow = {
            title: new Date().getTime() + '',
            position: [position[0] + 0.002, position[1] - 0.002],
            content: 'sssssssssss' + new Date().getTime(),
            events: {},
            visible: true
          };
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
title | String | 信息窗标题文字，支持HTML内容
content | String/HTML | 显示内容。支持字符串和HTML。
width | Number | 信息窗宽度，单位像素。取值范围：0, 220 - 730。如果您指定宽度为0，则信息窗口的宽度将按照其内容自动调整
height | Number | 信息窗高度，单位像素。取值范围：0, 60 - 650。如果您指定高度为0，则信息窗口的高度将按照其内容自动调整
maxWidth | Number | 信息窗最大化时的宽度，单位像素。取值范围：220 - 730
position | Array[x,y] | 信息窗体显示基点位置
offset | Array[x,y] | 信息窗位置偏移值。默认情况下在地图上打开的信息窗底端的尖角将指向其地理坐标，在标注上打开的信息窗底端尖角的位置取决于标注所用图标的infoWindowOffset属性值，您可以为信息窗添加偏移量来改变默认位置
enableAutoPan | Boolean | 是否开启信息窗口打开时地图自动移动（默认开启）
enableCloseOnClick | Boolean | 是否开启点击地图关闭信息窗口（默认开启）
visible | Boolean | 信息窗体是否显示。**这里需要注意的是，百度地图只支持同时一个信息窗体的显示**。所以一旦有窗体显示切换的场景，visible数组的状态需要自行维护。


## ref 可用方法
提供无副作用的同步帮助方法

函数 | 返回 | 说明
---|---|---|
$$getInstance() | [BMapGL.InfoWindow](http://lbsyun.baidu.com/cms/jsapi/reference/jsapi_webgl_1_0.html#a3b6) | 获取`infoWindow`实例

## 事件

事件 | 参数 | 说明
---|---|---|
init | Object | 百度组件实例
open| event{type, target, point} | 信息窗体打开之后触发事件
close | event{type, target, point} | 信息窗口被关闭时触发此事件
maximize| event{type, target} | 信息窗口最大化后触发此事件
restore | event{type, target} | 信息窗口还原时触发此事件
clickclose | event{type, target} | 点击信息窗口的关闭按钮时触发此事件
