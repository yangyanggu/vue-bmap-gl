import Vue from 'vue';
import { BMapManager } from 'vue-bmap-gl';

describe('BMap.Map', function() {

  describe('#init-instance', function() {
    it('should init bmap instance', (done) => {
      (new Vue({
        template: `
        <div :style="{height:'100px'}">
          <el-bmap :center="center" :zoom="zoom" :events="events">
          </el-bmap>
        </div>
        `,
        data() {
          let center = [116.397428, 39.90923];
          return {
            center,
            zoom: 12,
            events: {
              init: (instance) => {
                expect(instance instanceof window.BMapGL.Map).to.true;
                console.log(instance.getCenter());
                done();
              }
            }
          };
        }
      })).$mount();
    });
  });

  describe('#event', function() {
    it('should get map instance from manager', done => {
      const BMapManager = new BMapManager();
      (new Vue({
        template: `<el-bmap
        :bmap-manager="BMapManager"
        vid="vid"
        :events="events"
      ></el-bmap>`,
        data() {
          return {
            BMapManager,
            vid: 'vid',
            events: {
              init: (instance) => {
                expect(BMapManager.getMap() === instance).to.true;
                done();
              }
            }
          };
        }
      })).$mount();
    });
  });
});
