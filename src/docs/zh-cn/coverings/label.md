# 文本
文本功能与百度原有API有些区别，增加以下功能<br/>
* isCustom属性，该属性用于取消label默认设置的边框和背景颜色
* 支持slot方式

## 基础示例

<vuep template="#example"></vuep>

<script v-pre type="text/x-template" id="example">

  <template>
    <div class="bmap-page-container">
      <el-bmap vid="bmapDemo" :zoom="zoom" :center="center" class="bmap-demo">
        <el-bmap-label v-for="(label,index) in labels" :key="index" :content="label.content" :visible="label.visible" :label-style="label.style" :offset="label.offset" :position="label.position" :events="label.events"></el-bmap-label>
        <el-bmap-label :position="diyLabel.position" :is-custom="true">
            <div style="color:red;font-size:20px;">diy[{{diyLabel.num}}]</div>
        </el-bmap-label>
      </el-bmap>
      <div class="toolbar">
        <button type="button" name="button" @click="changePosition">切换diy位置</button>
        <button @click="toggleVisible">切换显隐</button>
      </div>
    </div>
  </template>

  <style>
    .bmap-demo {
      height: 300px;
    }
  </style>

  <script>
    module.exports = {
      data () {
        return {
          zoom: 15,
          center: [121.5273285, 31.21515044],
          labels: [
            {
              position: [121.5273285, 31.21515044],
              content: 'hello world',
              offset: [0, 0],
              visible: true,
              style: {
                color: 'yellow'
              },
              events: {
                click: () => {
                  alert('click text');
                }
              }
            }
          ],
          diyLabel: {
            position: [121.5215285, 31.21515044],
            num: 0
          }
        }
      },
      methods: {
        toggleVisible() {
            this.labels[0].visible = !this.labels[0].visible;
        },
        changePosition() {
          let position = this.diyLabel.position;
          this.diyLabel.position = [position[0] + 0.0002, position[1] - 0.0002];
          this.diyLabel.num++;
        },
      }
    };
  </script>

</script>


## 静态属性
仅且可以初始化配置，不支持响应式。

名称 | 类型 | 说明
---|---|---|
vid | String | 组件的ID。
isCustom | Boolean | 是否自定义样式，默认false，设置为true时会将style设置为{border:'none',background:'none'}，该属性会覆盖labelStyle属性
events | Object | 事件，key值为事件名称，提供默认的init事件，用于初始化后的操作.具体事件说明见下面的事件列表

## 动态属性
支持响应式。

名称 | 类型 | 说明
---|---|---|
content |  String |  标记显示的文本内容
position |  Array [x,y] |  点标记在地图上显示的位置
offset |  Array [x,y] | 点标记显示位置偏移量
title | String |  鼠标滑过点标记时的文字提示，不设置则鼠标滑过点标无文字提示
labelStyle | Object | 设置文本标注样式，该样式将作用于文本标注的容器元素上。其中styles为JavaScript对象常量，比如： setStyle({ color : "red", fontSize : "12px" }) 注意：如果css的属性名中包含连字符，需要将连字符去掉并将其后的字母进行大写处理，例如：背景色属性要写成：backgroundColor
enableMassClear | Boolean | 是否在调用map.clearOverlays清除此覆盖物，默认为true
visible | Boolean | 覆盖物显隐控制,默认true


## ref 可用方法
提供无副作用的同步帮助方法

函数 | 返回 | 说明
---|---|---|
$$getInstance() | [BMapGL.Label](http://lbsyun.baidu.com/cms/jsapi/reference/jsapi_webgl_1_0.html#a3b8) | 获取`Label`实例


## 事件

事件 | 参数 | 说明
---|---|---|
init | Object | 组件实例
click | event{type, target, point, pixel} | 鼠标左键单击事件
dblclick | event{type, target, point, pixel} | 鼠标左键双击事件
rightclick | event{type, target, point, pixel} | 右键单击
mousedown | event{type, target, point, pixel} | 鼠标按下
mouseup | event{type, target, point, pixel} | 鼠标抬起
mouseover | event{type, target, point, pixel} | 鼠标经过
mouseout | event{type, target, point, pixel} | 鼠标移出
remove | event{type, target} | 移除文本标注时触发
