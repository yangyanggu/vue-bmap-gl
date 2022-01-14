<script lang="ts">
import {defineComponent} from "vue";
import registerMixin from '../../mixins/register-component';

export default defineComponent({
  name: 'ElBmapMenuItem',
  mixins: [registerMixin],
  props: {
    text: {
      type: String,
      required: true
    },
    enable: {
      type: Boolean,
      default: true
    },
    width: {
      type: Number
    },
    domId: {
      type: String
    },
    callback: {
      type: Function
    }
  },
  data() {
    return {
      propsRedirect: {
        domId: 'id'
      },
      converters: {
      },
      handlers: {
      }
    };
  },
  unmounted() {
    if (this.$amapComponent) {
      this.$parentComponent.removeItem(this.$amapComponent);
      this.$amapComponent = null;
    }
  },
  methods: {
    __initComponent(options) {
      const $contextMenu = this.$parentComponent;
      const o = {} as any;
      if (options.width) {
        o.width = options.width;
      }
      if (options.id) {
        o.id = options.id;
      }
      this.$amapComponent = new BMapGL.MenuItem(options.text, options.callback, o);
      $contextMenu.addItem(this.$amapComponent);
      if (options.enable === false) {
        this.$amapComponent.disable();
      }
    },
    __enable(flag){
      flag === false ? this.$amapComponent.disable() : this.$amapComponent.enable();
    }
  },
  render() {
    return null;
  }
});
</script>
