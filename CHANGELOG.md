###v0.0.30
* map增加preserveDrawingBuffer属性，用于支持地图截图

###v0.0.29
* 解决infoWindow修改时会出现title无法修改的问题

###v0.0.28
* 解决marker修改label时会无限生成label问题

###v0.0.27
* 多边形和折线增加visible属性
* 修改车辆跟踪的heading

###v0.0.25
* 车辆跟踪增加zoom参数

###v0.0.24
* 修复车辆跟踪不能用问题
* 车辆跟踪增加tilt参数

###v0.0.22
* 解决自定义窗口 自动pan靠右不生效问题
* 解决地图resize时，某些情况下自定义弹出框的位置会错乱问题，由[丿王小虎](https://gitee.com/hx199808) 解决 

###v0.0.21
* el-bmap-info-window-custom增加anchor属性

###v0.0.20
* el-bmap修改lazy参数，-1不进行懒加载

###v0.0.19
* el-bmap增加lazy参数，用于地图懒加载显示
* 优化垃圾回收

###v0.0.18
* 修复事件解绑BUG，该BUG会导致mapvgl库的事件失效

###v0.0.17
 * 修改所有组件的prop，增加类型说明以及枚举校验
 * 完善现有文档，对比官方文档，去除有误参数，增加部分有歧义参数说明

###v0.0.16
 * 修复初始化时不添加plugins参数，导致无法初始化地图问题

###v0.0.15
 * 紧急修复plugins加载时存在异步问题导致地图初始化后BMapGLLib组件库没有加载完成

###v0.0.14
 * InfoWindowCustom增加open、close事件
 * 增加接入BMapGLLib扩展库，可以在初始化时使用plugins参数传入 [详情加载示例](https://guyangyang.gitee.io/vue-bmap-gl/#/zh-cn/introduction/init)

###v0.0.13
 * 增加map销毁
 * 修复地球模式下自定义弹框位置不准确问题
 * 固定文档中docsify版本，新版本会导致示例无法加载

###v0.0.12
 * 解决label组件自定义时，一直刷新问题
 * 解决custom infoWindow的offset参数无效问题
 * 解决label自定义模式下，当未初始化完成时更新slot内容导致报错问题
 * 解决label自定义模式下，某些初始化时无内容问题

###V0.0.11
  * 增加自定义窗体组件

###V0.0.10
  * 地图增加defaultCursor属性
  * 修复polygon修改path时，如果处于edit状态，不会触发拖拽图标问题

###V0.0.9
  * 修复label与infoWindow的position无法动态修改问题
  * label增加slot功能

###V0.0.7
  增加车辆跟踪插件

###V0.0.3
  修复编译失败问题


###V0.0.1
  初始化第一个版本，完成：
  * el-map（地图）
  * el-bmap-bezier-curve（贝塞尔曲线）
  * el-bmap-circle（圆）
  * el-bmap-ground-overlay（地面叠加层）
  * el-bmap-info-window（信息窗口）
  * bmap-label（文本标记）
  * bmap-marker（标号）
  * bmap-marker-3d（3D标号）
  * bmap-polygon（多边形）
  * bmap-polyline（折线）
  * bmap-prism（3D棱柱）
