# 点坐标

## 基础示例

<vuep template="#example"></vuep>

<script v-pre type="text/x-template" id="example">

  <template>
    <div class="bmap-page-container">
      <el-bmap vid="bmapDemo" :zoom="zoom" :center="center" class="bmap-demo">
        <el-bmap-marker-3d v-for="(marker, index) in markers" :key="index" :icon="marker.icon" :position="marker.position" :size="marker.size" :height="marker.height" :events="marker.events" :visible="marker.visible" :vid="index" ></el-bmap-marker-3d>
      </el-bmap>
      <div class="toolbar">
        <button type="button" name="button" v-on:click="changePosition">change position</button>
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
      name: 'bmap-page',
      data() {
        let carIcon = 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACwAAABYCAYAAACONxXWAAAABmJLR0QA/wD/AP+gvaeTAAARoElEQVRo3r1be2wc53Gf3dt783h35JE8PiVRFkXbkhzbelhFWluu29hFLdmu4dZOUsFFYaF146qwWrRxjahBkARFDEcx0gSpC8RpYBeSnThQoNRGUyNI3D8URTJFWdaDlELxcTyRvAePPO69dju/b3dPJ/KOPJJHrbDi8m732/nmm/nNb+YbSrSK4/jx455cbu4eIq2DSPfJuiTbFMUu84HvC3pBz+fzOVwWCloqlyuM+Hxzpx999EB6pe+UlvvAiRM/rPd62x522B1fssk2dyx2PVjQCm7+StF1lliWJfy07udrTZLwEeX5bXMejzfO19nZ2blX4/Hk2/v3759aE4FPnTplnxof2WFz2r/oq2v4AxbYkctlKJ6cZKGqfyE/Rna7g+bm1Pz1iclfaYX8K6qa+98DB6rTelUCv/feD7yy1PB1m035c1Zevd8XJMWukKqmKTWTWNYKsc0QWw1JkkxD10awAllegHcVW+HQ00//xfCqBf75+yf+kBX46qWrg3cU8hLd2XsHBfx+Umw2Ss0mSc3MLc8GJYls/Kwk2SgWT9LlgUHKaznqaG1PKg7lCxfPX3zr8OHD+WULfPToUYfLZTswEhk5fGnwakNbcyet6+ykjRs2kF1RCH6VmJ5ib8qvwHMkIbCm6XTl6jWaisXp6vAAdbZ3zHa2dx5x2p1fe+qpp2aqFviDDz5QhoYGD350vu+fCwXZ3xHu4hdotOPeeylQHyBF5pfxv9RsAku6PGH5/oKmCZOA0PFEgj4+f4HNxEHXxoZY+3rm7ju3/Juu27/47LPPqgtMauF4uhSPX/9s3yfnvua01/lbQmEeTKFPbdtKvjofyXiRLPF9Bb7m5WVNL+tkc8DqGBPVKRgIUG9PD38mUWtTKzkdXudv+vv+zu/3/sOJE99yLinwiRM/2Tk6Pnak73y/kkwlKdTQxGbQxQMHxQsxMF6oaSwwXr6CEwqAsBAaNt3Q0EBdHR3UGAzRzGyKzl++SEOjwy9rWsfjVWiYHopEo/7R8RExgNvloE4ejNXKGjW0A81q/EJoayWn3Q6UoKLQimKjluZmcjgV8c6RyDBFJ6I8K9sTSwosy7atLU0t4rqeTWBdVyc+I5tUol3+h+uVCmwztWyZBU6n00Vt4VbyerzC7EINIdwXYn9ylcqnzA8OsdhEqGdjD/3efb9LG7s3UFNTE0OXKoTGiSXUNE1cr+ZwOJyUz88KoXFCAaHGkFjNPZ/eQ7dvup0FVjyZTMbDt6tlBc5msz6eFZ8KHfj8c4y3QcozbOkMPza7oWEhsK6RSRdWJbCqzonJI5Jr7MRul5u23bGVutevp3RaoFqA3xngn7GyAuOAsGJAp1M4SJ61a0CQISzzBh5cp9UfEtuyITRHOoHnwlxkhVxsHhkRkCQZyq9oEjxblywrLjiE0+Hih1ngQsFwNNmA7LyWXz72VuIVzCmy2YwYD6iD0+3yiBWcsaVwi5eF9lYUWFEKXk1TPNaS4UFoFIGC3U38jkFrdVjOl8vlhNBZ/hlgBLG+449YeZKzosCsV4JpYunBFdRMhtUOwmKYQ66QrZl2b9iyq0RgVWCG2+0pmuZ8X1lgw5gxhINcGYEOLCw/xGRcaLvWB9AGpgGhwfWZPvMkHILR4doIMhVwmGeT4pmlFJsdKQIPkDdCMU/AGIxqfop1dbosH2KenCbm2vwZVtvGH9m0ihr2er1sRvkc7CdnzhZIAc1W0m4qNU0Dg4N0bXiYEok4TU5Oliy3Q+B4U6iJNqzfQOvWrRO2WQ4x4DO5XJZD87TxLAvN/pLkc3pRkzDDs3jYInNGWmYc0WiU+s6epZO/PkmnTv+GpqamGFGcbPNKkf8BTzHhfM6gnhwagPHCabfcuYV2bN/O5w7azKTHWnLh5KwUvDeTVcVALIfKYVytKDCbgRkrGWYKuoj3CBxpXqaz/f303++/R2fOnGFQN5atzltHXe1dJiFfPBfAcmOsaCRKb771Fh19+xiFW1rokc88Qrt376b2tnaBy4aWZ0yUkOKpVCpRkQ+DBwcCjT+zSdJDMIe0Okunz5ymY+8co76+s8Jj63315GEvXkrApY4sC4aJJ6eT1NzcRA/c/wA9tm8fh+dG5hEt/C6Fpmemf3D33XftX5TAnz7d9zN2s4cLnLa88s1X6PhPj4tlQ5zH0tf6gOZTMymamJyg1rZWeu4vn6Mn9j4htJ2YTrx2zz2feqEKG9aEvUG70Ci48FodWDV/vZ/8nCdGr0cpEhkTMGd+512UXvb19eEGj0FINEGs7WbkWesDPgEYDfgDImgZLI5aFhWYl57XXHcZAhP5fD6xZLfiECGakaWpqVmUAmCsLPQCSqgstCk+C8gnNDHbWyUwUMHlclF9fb1YXSOqLHTsMhmHJJLMc+fOk9/nFyHzVhx2DsVwasBpX99HJqWVKwv8+UOHvP917J3HxqPjt3nrvHR58LIgIbCrW6Jhzus40gr7HRq+Rm6Pi8tgU/f800sv7YdsNwn8/PPPN7bIttcdNtu3p6eTDRPXJ2lyYoIRwsdYnL4l9gvuAsdDzWJqapLPGMVjsRbO8b4btilvHDp0qBk2orz44ovrbHbHW82hpt1bt22huro6mo6naGRshDqQLd8KhHA4hK9AwzOMyeAtc5yJhMNhOL7rXP+5P2HIu+3gwX98TC7o0gtt4fDu+3bvQjwfzmTz04Cy4ZFhwdTAC26FwMlkkiubduYRRgYCBqeqmRH2qb6du3ZQV1fXXUwivwKTSLk87g/Gr1//U57Yn9V56iYwCOI5Zi1iOulrJixCvGBmjAwej4cS8YRIeoEP9b7AuevR6EPjkcjjnGO+xxOJyjOF3Hc+7u9/7MnHHz/q9dZPAK8NXjonSqrQMAZYy0iH98CGmxqbaJLtVxM5HmKBrj/zzDOTTz755LtnPzqzL55Jf115/ciR6HxqiZuFhgu3RsOANLwLGDzN/DoYDC5IxV577TXO12hCLk9IDP4KW4Z9Wbx2rUKyyGg4Gw9wYTAej3PdOCZMpCyiLGQ+VMxdpqenhYYhMJbMYle6QZkXZCG6uZSl2oPjlgYs8ZmZWOI7mAOOjJqhRqaWzH+FljGOpklVCCxRMY3BYChqDF0bKvJf07aE0PPDdlUCU4nA/HNiasJACebFs7OzAs6EPiqEZqVcfqWYDE1VVWMvI6OuaLnxUmTbC46Sj0rHbm9v50w9Y9Y/9CpNgm5oGIPNT7MX8/ZK9TaY01L1DDyL++A7lobLPaKUS0CtFwPagI0g8ai+WyQFK2VV4kuXulLaZJmQ5SPQID6DKSAvBMEa/O2gEBarerNDVaFh2cyAYfwd7R28B/GxELrWB+grkAFmMMfFP9QibvhA+cnLlZbH+tkQbKh5eerGJqO9aDLQ9mx6VuD/YmYolzUJk4eOcX7ldrvXhMTDfKykFqbQzJmG9TtIT2llaEkNk6lhDBpuCa8JibdqeDiQGhk7q6pI/ZdtEqWQYznIWmQYlukBg5E1GzW8xaNqGYFvCAfNInO+2XNrJLDYSZKKJgGnria7kefhpSBK/H+RgFh1sppzCKfjRnDhEA/E4PSsxJeqMAmn05dk0xHVQh/PGB6LethaFFJuqiLxogLeSqMt1llbKtJls3k0Y2jWUhmbfoqAHIv81IoDG7upmlEkZFOo89XR1d9eLSKVYZpVcAlsD2C3Hk/lcwVhxyAkYG61FBhBSZApdup4Mi5o5syMUbUElGJnqarQbJNRXLYL1g/2BIGxOxmZjtTUJBAk5ud1FtzVMQ3AIsvVoIRk7rj72QmwIuJ3xUZrffRs6qXI+Lhp0pLQcNVsDbNDug8Qn5yKc/02TJm5jFi2VUc4XkG/6GgxiTtnyZcHB3in1cW2XFgkZCwisMOM8SAl2PoCowJbAzmpRYRra20rBg2YRpL9Qy/B5zpGKChNK4MTcrmwIdtkLsy5zazDLsyjUo61EoFLeTPSLzgZjpHRYbENJhQjVR3pkBjaOcI1iut4bEq0bsGDa1U0mX808i7TfD+SBbRKi7fQOBxzvMGrp8SWqpV1cFiGSdSKsc33AwQmC+cFqWdlBbgibzrT2KICb9++HTE4Z2dUaOQ9jSLRDvhrWjSZn42ATsZik4JTQLt2hyIsQtIXakmutGzW0o1HI2IPrVZF6+J+nnkAJUo3G+F0IkxLy6CXCM3N6MFxGPsOjaFQzQSevxMKU2jmlh2x8agZ+8xOh6M6tib2FCTjM5SNMDgGEf05NShXlVLKUs4NMwEnRlSFKRodBVT2jTcJfPLkySCbTRDCNfMeMV4wyftnpfa8KoZWBseRmdcLJ9NNfwmUTGoJHFZ1vYHxNsgb5NTa2mp2jGQNL84XVp15lIuUolxVbPLQ2BRbhIaNPWTptkUFlnTFx3eJAoSlYZhEiHFytakShJpvv6I7i4MUaAAK2hA6zK1g8o3NGA93enkqC8xmxiLZMbd6fz0vT1DsN7jczqJTrMp+5TLbWBzZ3B632GYTSS9DXDEQSrqL3+taBCVyoh0LMwWAd3d3G6UjPtxez6rCswjJUuWcF2gBTQeDAXGfWVrDJqdrySQUKw8H2bRpU/FTRLuapUQlQqKNEcWaWCwmeDA24UuAxCPLbs+iAqNqmGPsRdZx26Ye8VmKecRqsdhRAVtFSdbk2yH2m8ZQo9nMpy8Na6Z+i0vfzc3NDVxkRh8OioIrdTqxLbDoJrvRt9bbeztn6c7SyjplKFNZYJ5Vmm9LZ81KT/eGblrPvTpi9qvAYmh3sYYQ6AG9Qtu5rUaxyUUNQySFSw+VNSzLKg+rWgUNP0e7zzz8iOj5CXJBxXLAWuBvMSsXVLaBtm27izZv3iy6aE3l4UeCoTBRMeOQstmE5HAkIBgGwzJu3bJVZB3gx+j9serEtbBftNFAOWik3rFzF7lF65dsZBuGYlV+Vq2oYbbTWa3EJABtQAtAEipBK6WUlewXOSOyDd2EPSCG0e5rOpwkTTDlTS/Gh9N890DOXHoghQvxn7XdyhFIFJyXicWiLbJCvTeRTFBPz+Zi151DsYn2B2OXSmzwnF06zSd6kwNHwWq59TOY42E0yXn5ermpkiL+0GShwMhkpuJT3AL2O2J8SWC1QxB43WhH4UCnf7ikwDz0GRb2lOVgdV5vMbTu3buPklyxWU692Cr6zecQlwYvCUfr7e01nM/sdDUorejavqjZ7eeXFJib3uKSpv3HxQsXig7jMbPa++/fIzQyFh0r7rpXwyHmZxiXBi6J6899bn8xO3c47VybYN7NJhQZj8CU3ubS0+TSJoG/zCoU/vOdd46p4KqYsQ9aZuGg7S/8zQv0zNOfpQinTjhBvCuRImtjESQdtbSBKwN0pu8MSYy1L798WAQmy369HJjgdNxgQv/z/vvjLkV5dc+ePfkyJlv+CIdDP//3773+4J4Hf18UOi4PXrnpe8T+X334S7pw4RPRf4kOFpRny0Ea+tLqudqDxtGdO3bRffftvolqYmLdG9eLFfv2t47QD99446ujkYmXqq78CGKSy//fN77xr3vCrWFpA2sCWJkvKbkC5h794730yMN/JAIKWsPLVdAFrPH2gGJutFuClpqTj0utqN/98he/oHd//KN0Lpv7dcW8sNIX3jp3jsPl3kgk4t61a6cELWQy2Yo4ixYu8I35J3AWcCj+4KpMeMa4oaaQ2M/+yuHDNDoyei6b17+cyZTfL64ocDqtjno97uS1a0O7rly54nnggfslVa19S7kdzR2M7X/7139Fg4ODQIWD/JeMnyxbw1i12bR6qs5n+/7VK8NXOYy6ejb3tnEvmVJTiSUp9tUv/8uP+/v7v+TzJf5+bEwdoOVWL0uP8fEZ9AB9t6FBeVOX9XsZ8g7y75/mFzWsRk5eqRgHiZ9qufyr7BqfTE0lMlNV/HXospuAkRTy9sFWBrJ9jIkP8os7EV+QzvAkHGXJLgc2flEG1JWvp/n6Q842vs+B4hRD17L21FbVtYwGacbgdr7cqMtyK2s/WGbMPDtWlCc2mVeU4WQ0Osp/jZhd6Tv/H+I8f4qezBoAAAAAAElFTkSuQmCC';
        
        return {
          count: 1,
          zoom: 14,
          center: [121.5273285, 31.21515044],
          markers: [
            {
              position: [121.5273285, 31.21515044],
              height: 300,
              size: 200,
              icon: {
                url: carIcon,
                size: [44, 88],
              },
              events: {
                click: () => {
                  alert('click marker');
                },
              },
            }
          ],
        };
      },
      methods: {
        changePosition() {
          let position = this.markers[0].position;
          this.markers[0].position = [position[0] + 0.002, position[1] - 0.002];
        },
      }
    };
  </script>

</script>


## 静态属性
仅且可以初始化配置，不支持响应式。

名称 | 类型 | 说明
---|---|---|
vid | String | marker对象id。
events | Object | 事件，key值为事件名称，提供默认的init事件，用于初始化后的操作.具体事件说明见下面的事件列表

## 动态属性
支持响应式。

名称 | 类型 | 说明
---|---|---|
position | Array [x,y] | 点标记在地图上显示的位置，默认为地图中心点。
offset | Array [x,y] | 点标记显示位置偏移量，默认值为[-8,-8]。Marker指定position后，默认以marker左上角位置为基准点，对准所给定的position位置，若需使marker指定位置对准在position处，需根据marker的尺寸设置一定的偏移量。
icon | {url:'',size:[],imageOffset:[],anchor:[]} | 该值为标号图标，详细参数说明见下面表，可为空。
title | String | 鼠标滑过点标记时的文字提示，不设置则鼠标滑过点标无文字提示。
label | {content,offset: [x, y],title} | 添加文本标注，content为文本标注的内容，offset为偏移量，左上角为偏移量为（0,0）,title为鼠标滑过label的提示
draggingCursor | String | 拖拽标注时的鼠标指针样式。此属性值需遵循CSS的cursor属性规范
rotation | Number | 点标记的旋转角度
zIndex | String | 覆盖物的zIndex
raiseOnDrag | Boolean | 拖拽标注时，标注是否开启离开地图表面效果。默认为false
enableClicking | Boolean | 是否响应点击事件。默认为true
enableDragging | Boolean | 设置点标记是否可拖拽移动，默认为false。
enableMassClear | Boolean | 是否允许覆盖物在map.clearOverlays方法中被清除，默认true。

icon参数说明

名称 | 类型 | 说明
---|---|---|
url | String | 图标的图片地址，可以是http地址，也可以是base64
size | Array [x,y] | 图片的大小，根据实际图片大小来控制
imageOffset | Array [x,y] | 图标所用的图片相对于可视区域的偏移值，<br/>此功能的作用等同于CSS中的background-position属性
anchor | Array [x,y] | 图标的定位点相对于图标左上角的偏移值


## ref 可用方法
提供无副作用的同步帮助方法

函数 | 返回 | 说明
---|---|---|
$$getInstance() | [BMapGL.Marker](http://lbsyun.baidu.com/cms/jsapi/reference/jsapi_webgl_1_0.html#a3b2) | 获取`marker`实例
$$getPosition() | [lng:Number,lat:Number] | 获取位置
$$getSize()   |  [x:Number,y:Number]    | 获取标号大小

## 事件

事件 | 参数 | 说明
---|---|---|
click | [MapsEvent](http://lbs.amap.com/api/javascript-api/reference/event/#MapsEvent) | 鼠标左键单击事件
dblclick | [MapsEvent](http://lbs.amap.com/api/javascript-api/reference/event/#MapsEvent) | 鼠标左键双击事件
rightclick | [MapsEvent](http://lbs.amap.com/api/javascript-api/reference/event/#MapsEvent) | 鼠标右键单击事件
mousemove | [MapsEvent](http://lbs.amap.com/api/javascript-api/reference/event/#MapsEvent) | 鼠标移动
mouseover | [MapsEvent](http://lbs.amap.com/api/javascript-api/reference/event/#MapsEvent) | 鼠标移近点标记时触发事件
mouseout | [MapsEvent](http://lbs.amap.com/api/javascript-api/reference/event/#MapsEvent) | 鼠标移出点标记时触发事件
mousedown | [MapsEvent](http://lbs.amap.com/api/javascript-api/reference/event/#MapsEvent) | 鼠标在点标记上按下时触发事件
mouseup | [MapsEvent](http://lbs.amap.com/api/javascript-api/reference/event/#MapsEvent) | 鼠标在点标记上按下后抬起时触发事件
dragstart | [MapsEvent](http://lbs.amap.com/api/javascript-api/reference/event/#MapsEvent) | 开始拖拽点标记时触发事件
dragging | [MapsEvent](http://lbs.amap.com/api/javascript-api/reference/event/#MapsEvent) | 鼠标拖拽移动点标记时触发事件
dragend | [MapsEvent](http://lbs.amap.com/api/javascript-api/reference/event/#MapsEvent) | 点标记拖拽移动结束触发事件
moveend |  | 点标记执行moveTo动画结束时触发事件，也可以由moveAlong方法触发
movealong |  | 点标记执行moveAlong动画一次后触发事件
touchstart | [MapsEvent](http://lbs.amap.com/api/javascript-api/reference/event/#MapsEvent) | 触摸开始时触发事件，仅适用移动设备
touchmove | [MapsEvent](http://lbs.amap.com/api/javascript-api/reference/event/#MapsEvent) | 触摸移动进行中时触发事件，仅适用移动设备
touchend | [MapsEvent](http://lbs.amap.com/api/javascript-api/reference/event/#MapsEvent) | 触摸结束时触发事件，仅适用移动设备
