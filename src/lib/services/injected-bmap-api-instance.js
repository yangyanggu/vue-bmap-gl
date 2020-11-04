let lazyBMapApiLoaderInstance = null;
import BMapAPILoader from './lazy-bmap-api-loader';
import Vue from 'vue';
export const initBMapApiLoader = (config) => {
  if (Vue.prototype.$isServer) return;
  // if (lazyAMapApiLoaderInstance) throw new Error('You has already initial your lazyAMapApiLoaderInstance, just import it');
  if (lazyBMapApiLoaderInstance) return;
  if (!lazyBMapApiLoaderInstance) lazyBMapApiLoaderInstance = new BMapAPILoader(config);
  lazyBMapApiLoaderInstance.load();
};
export { lazyBMapApiLoaderInstance };
