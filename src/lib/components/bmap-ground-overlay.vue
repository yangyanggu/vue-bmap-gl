<template></template>
<script>
  import {toLngLat} from '../utils/convert-helper';
  import registerMixin from '../mixins/register-component';
  export default {
    name: 'el-bmap-ground-overlay',
    mixins: [registerMixin],
    props: [
      'vid',
      'opacity',
      'url',
      'bounds',
      'minLevel',
      'maxLevel',
      'visible',
      'events',
      'onceEvents'
    ],
    data() {
      return {
        propsRedirect: {
          minLevel: 'displayOnMinLevel',
          maxLevel: 'displayOnMaxLevel',
          url: 'imageURL'
        },
        converters: {
          bounds(arr) {
            return new BMapGL.Bounds(toLngLat(arr[0]), toLngLat(arr[1]));
          }
        },
        handlers: {
          visible(flag) {
            flag === false ? this.hide() : this.show();
          }
        }
      };
    },
    methods: {
      __initComponent(options) {
        this.$bmapComponent = new BMapGL.GroundOverlay(options.bounds, options);
        options.map.addOverlay(this.$bmapComponent);
        if (options.visible === false) {
          this.$nextTick(() => {
            this.$bmapComponent.hide();
          });
        }
      }
    },
    destroyed() {
      if (this.$bmapComponent && this.$bmapComponent.getMap()) {
        this.$bmapComponent.getMap().removeOverlay(this.$bmapComponent);
      }
    }
  };
</script>
