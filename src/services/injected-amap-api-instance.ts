import BMapAPILoader from './lazy-bmap-api-loader';
let lazyBMapApiLoaderInstance = null as any;

export const initBMapApiLoader = (config) => {
  if (lazyBMapApiLoaderInstance) return;
  if (!lazyBMapApiLoaderInstance) lazyBMapApiLoaderInstance = new BMapAPILoader(config);
  lazyBMapApiLoaderInstance.load();
};
export {lazyBMapApiLoaderInstance};
