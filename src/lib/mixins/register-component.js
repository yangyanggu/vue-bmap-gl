import upperCamelCase from 'uppercamelcase';
import { commonConvertMap } from '../utils/convert-helper';
import eventHelper from '../utils/event-helper';
import { lazyBMapApiLoaderInstance } from '../services/injected-bmap-api-instance';
import CONSTANTS from '../utils/constant';

export default {
  data() {
    return {
      unwatchFns: []
    };
  },

  mounted() {
    if (lazyBMapApiLoaderInstance) {
      lazyBMapApiLoaderInstance.load().then(() => {
        this.__contextReady && this.__contextReady.call(this, this.convertProps());
      });
    }
    this.$bmap = this.$bmap || this.$parent.$bmap;
    if (this.$bmap) {
      this.register();
    } else {
      this.$on(CONSTANTS.BMAP_READY_EVENT, map => {
        this.$bmap = map;
        this.register();
      });
    }
  },

  destroyed() {
    this.unregisterEvents();
    if (!this.$bmapComponent) return;

    this.$bmapComponent.setMap && this.$bmapComponent.setMap(null);
    this.$bmapComponent.close && this.$bmapComponent.close();
    this.$bmapComponent.editor && this.$bmapComponent.editor.close();
    this.unwatchFns.forEach(item => item());
    this.unwatchFns = [];
  },

  methods: {
    getHandlerFun(prop) {
      if (this.handlers && this.handlers[prop]) {
        return this.handlers[prop];
      }
      if (prop.startsWith('enable')) {
        return (flag) => {
          let propName = prop;
          if (!flag) {
            propName = propName.replace('enable', 'disable');
          }
          let method = this.$bmapComponent[propName];
          if (method) {
            method.call(this.$bmapComponent);
          }
        };
      }
      return this.$bmapComponent[`set${upperCamelCase(prop)}`];
    },

    convertProps() {
      const props = {};
      if (this.$bmap) props.map = this.$bmap;
      const { $options: { propsData = {} }, propsRedirect } = this;
      return Object.keys(propsData).reduce((res, _key) => {
        let key = _key;
        let propsValue = this.convertSignalProp(key, propsData[key]);
        if (propsValue === undefined) return res;
        if (propsRedirect && propsRedirect[_key]) key = propsRedirect[key];
        props[key] = propsValue;
        return res;
      }, props);
    },

    convertSignalProp(key, sourceData) {
      let converter = '';
      let type = '';

      if (type && converter) {
        return converter(sourceData);
      } else if (this.converters && this.converters[key]) {
        return this.converters[key].call(this, sourceData);
      } else {
        const convertFn = commonConvertMap[key];
        if (convertFn) return convertFn(sourceData);
        return sourceData;
      }
    },

    registerEvents() {
      this.setEditorEvents && this.setEditorEvents();
      if (!this.$options.propsData) return;
      if (this.$options.propsData.events) {
        for (let eventName in this.events) {
          eventHelper.addListener(this.$bmapComponent, eventName, this.events[eventName]);
        }
      }

      if (this.$options.propsData.onceEvents) {
        for (let eventName in this.onceEvents) {
          eventHelper.addListenerOnce(this.$bmapComponent, eventName, this.onceEvents[eventName]);
        }
      }
    },

    unregisterEvents() {
      eventHelper.clearListeners(this.$bmapComponent);
    },

    setPropWatchers() {
      const { propsRedirect, $options: { propsData = {} } } = this;

      Object.keys(propsData).forEach(prop => {
        let handleProp = prop;
        if (propsRedirect && propsRedirect[prop]) handleProp = propsRedirect[prop];
        let handleFun = this.getHandlerFun(handleProp);
        if (!handleFun && prop !== 'events') return;

        // watch props
        const unwatch = this.$watch(prop, nv => {
          if (prop === 'events') {
            this.unregisterEvents();
            this.registerEvents();
            return;
          }
          if (handleFun && handleFun === this.$bmapComponent.setOptions) {
            return handleFun.call(this.$bmapComponent, {[handleProp]: this.convertSignalProp(prop, nv)});
          }

          handleFun.call(this.$bmapComponent, this.convertSignalProp(prop, nv));
        });

        // collect watchers for destroyed
        this.unwatchFns.push(unwatch);
      });
    },

    registerToManager() {
      let manager = this.bmapManager || this.$parent.bmapManager;
      if (manager && this.vid !== undefined) {
        manager.setComponent(this.vid, this.$bmapComponent);
      }
    },

    // some prop can not init by initial created methods
    initProps() {
      const props = ['editable', 'visible'];

      props.forEach(propStr => {
        if (this[propStr] !== undefined) {
          const handleFun = this.getHandlerFun(propStr);
          handleFun && handleFun.call(this.$bmapComponent, this.convertSignalProp(propStr, this[propStr]));
        }
      });

      // this.printReactiveProp();
    },

    /**
     * methods for developing
     * find reactive props
     */
    printReactiveProp() {
      Object.keys(this._props).forEach(k => {
        let fn = this.$bmapComponent[`set${upperCamelCase(k)}`];
        if (fn) {
          console.log(k);
        }
      });
    },

    register() {
      const res = this.__initComponent && this.__initComponent(this.convertProps());
      if (res && res.then) res.then((instance) => this.registerRest(instance));  // promise
      else this.registerRest(res);
    },

    registerRest(instance) {
      if (!this.$bmapComponent && instance) this.$bmapComponent = instance;
      this.registerEvents();
      this.initProps();
      this.setPropWatchers();
      this.registerToManager();

      if (this.events && this.events.init) this.events.init(this.$bmapComponent, this.$bmap, this.bmapManager || this.$parent.bmapManager);
    },

    // helper method
    $$getInstance() {
      return this.$bmapComponent;
    }
  }
};
