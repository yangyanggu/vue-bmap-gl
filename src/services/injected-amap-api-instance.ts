import BMapAPILoader from './lazy-bmap-api-loader';
let lazyBMapApiLoaderInstance = null as any;

type LoaderConfig = {
  ak: string;
  v?: string;
  type?: string;
  protocol?: string;
  hostAndPath?: string;
  plugins?: string
  offline?: boolean
}

export const initBMapApiLoader = (config: LoaderConfig) => {
  if (lazyBMapApiLoaderInstance) return;
  if (!lazyBMapApiLoaderInstance) lazyBMapApiLoaderInstance = new BMapAPILoader(config);
  lazyBMapApiLoaderInstance.load();
};
export {lazyBMapApiLoaderInstance};
