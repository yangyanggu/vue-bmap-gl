<script>
import registerMixin from '../mixins/register-component';
import {toLngLat, toSize} from '../utils/convert-helper';
import Vue from 'vue';
import {compile, mountedRenderFn, mountedVNode} from '../utils/compile';

export default {
  name: 'el-bmap-label',
  mixins: [registerMixin],
  props: [
    'vid',
    'content',
    'position',
    'offset',
    'title',
    'labelStyle',
    'enableMassClear',
    'visible',
    'events',
    'onceEvents',
    'template',
    'vnode',
    'contentRender',
    'isCustom' // 是否是自定义样式
  ],
  data() {
    let self = this;

    return {
      preHtml: '',
      tmpVM: null,
      propsRedirect: {
        labelStyle: 'style',
        template: 'content',
        vnode: 'content',
        contentRender: 'content'
      },
      converters: {
        position(arr) {
          return toLngLat(arr);
        },
        offset(arr) {
          return toSize(arr);
        },
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
        }
      },
      handlers: {
        visible(flag) {
          flag === false ? this.hide() : this.show();
        },
        position(value) {
          this.setPosition(value);
        },
        template(node) {
          this.setContent(node.outerHTML);
        },
        content(content) {
          this.setContent(content);
        }
      }
    };
  },
  methods: {
    __initComponent(options) {
      this.$bmapComponent = new BMapGL.Label(options.content, options);
      options.map.addOverlay(this.$bmapComponent);
      // console.log(options);
      if (options.style) {
        this.$bmapComponent.setStyle(options.style);
      }
      if (options.isCustom) {
        this.$bmapComponent.setStyle({
          border: 'none',
          background: 'none'
        });
      }
      if (this.$slots.default && this.$slots.default.length) {
        this.$nextTick(() => {
          this.preHtml = this.tmpVM.$refs.node.outerHTML;
          this.$bmapComponent.setContent(this.preHtml);
        });

      }
      if (options.visible === false) {
        this.$nextTick(() => {
          this.$bmapComponent.hide();
        });
      }
    }
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
  updated() {
    this.$nextTick(() => {
      let html = this.tmpVM.$refs.node.outerHTML;
      if (this.preHtml !== html) {
        if (this.$bmapComponent) {
          this.$bmapComponent.setContent(html);
        }
        this.preHtml = html;
      }
    });
  },
  destroyed() {
    if (this.$bmapComponent && this.$bmapComponent.getMap()) {
      this.$bmapComponent.getMap().removeOverlay(this.$bmapComponent);
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
