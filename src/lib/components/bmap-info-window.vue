<script>
import {toLngLat, toSize} from '../utils/convert-helper';
import registerMixin from '../mixins/register-component';
import { compile, mountedVNode, mountedRenderFn } from '../utils/compile';
import Vue from 'vue';
export default {
  name: 'el-bmap-info-window',
  mixins: [registerMixin],
  props: [
    'vid',
    'title',
    'content',
    'width',
    'height',
    'maxWidth',
    'offset',
    'position',
    'visible',
    'enableAutoPan',
    'enableCloseOnClick',
    'events',
    'template',
    'vnode',
    'contentRender'
  ],
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
        template(tpl) {
          const template = compile(tpl, self);
          this.$customContent = template;
          return template.$el;
        },
        vnode(vnode) {
          const _vNode = typeof vnode === 'function' ? vnode(self) : vnode;
          const vNode = mountedVNode(_vNode);
          this.$customContent = vNode;
          return vNode.$el;
        },
        contentRender(renderFn) {
          const template = mountedRenderFn(renderFn, self);
          this.$customContent = template;
          return template.$el;
        },
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
          self.$bmapComponent.setContent(content);
          self.$bmapComponent.redraw();
        },
        title(title) {
          self.$bmapComponent.setTitle(title);
          self.$bmapComponent.redraw();
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
    if (this.$customContent && this.$customContent.$destroy) {
      this.$customContent.$destroy();
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
      console.log(this.visible);
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
