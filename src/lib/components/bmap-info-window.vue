<script>
import {toLngLat, toSize} from '../utils/convert-helper';
import registerMixin from '../mixins/register-component';
import Vue from 'vue';
export default {
  name: 'el-bmap-info-window',
  mixins: [registerMixin],
  props: {
    vid: {
      type: [String, Number]
    },
    title: {
      type: [String, HTMLElement]
    },
    content: {
      type: [String, HTMLElement]
    },
    width: {
      type: Number
    },
    height: {
      type: Number
    },
    maxWidth: {
      type: Number
    },
    offset: {
      type: Array
    },
    position: {
      type: Array
    },
    visible: {
      type: Boolean,
      default: true
    },
    enableAutoPan: {
      type: Boolean
    },
    enableCloseOnClick: {
      type: Boolean
    },
    events: {
      type: Object
    }
  },
  data() {
    let self = this;
    return {
      withSlots: false,
      tmpVM: null,
      propsRedirect: {
        template: 'content',
        vnode: 'content',
        contentRender: 'content'
      },
      converters: {
        offset(arr) {
          return toSize(arr);
        }
      },
      handlers: {
        visible(flag) {
          let position = self.position;
          // fixed Amap info-window reopen
          if (position) {
            flag === false ? self.$bmap.closeInfoWindow() : self.$bmap.openInfoWindow(self.$bmapComponent, toLngLat(position));
          }
        },
        template(node) {
          this.setContent(node);
        },
        content(content) {
          this.setContent(content);
          this.redraw();
        },
        title(title) {
          this.setTitle(title);
          this._config.title = title;
          this.redraw();
        },
        position(value) {
          if (self.visible !== false) {
            self.$bmap.openInfoWindow(self.$bmapComponent, value);
          }
        }
      }
    };
  },
  created() {
    this.tmpVM = new Vue({
      data() {
        return {node: ''};
      },
      render(h) {
        const { node } = this;
        return h('div', {ref: 'node'}, Array.isArray(node) ? node : [node]);
      }
    }).$mount();
  },
  destroyed() {
    this.$bmap.closeInfoWindow();
    this.tmpVM.$destroy();
    this.tmpVM = null;
    if (this.$customContent && this.$customContent.$destroy) {
      this.$customContent.$destroy();
      this.$bmapComponent = null;

    }
  },
  methods: {
    __initComponent(options) {
      if (this.$slots.default && this.$slots.default.length) {
        options.content = this.tmpVM.$refs.node;
      }

      // control open / close by visible prop
      delete options.map;

      this.$bmapComponent = new BMapGL.InfoWindow(options.content, options);
      if (this.visible !== false) this.$bmap.openInfoWindow(this.$bmapComponent, toLngLat(this.position));
    }
  },
  render() {
    const slots = this.$slots.default || [];
    if (slots.length) {
      this.tmpVM.node = slots;
    }
    return null;
  }
};
</script>
