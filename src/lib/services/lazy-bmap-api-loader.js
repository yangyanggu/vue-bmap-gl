const DEFAULT_AMP_CONFIG = {
  ak: null,
  v: '1.0',
  type: 'webgl',
  protocol: 'https',
  hostAndPath: 'api.map.baidu.com/api',
  callback: 'bmapInitComponent',
  plugins: ''
};

export default class AMapAPILoader {
  /**
   * @param config required 初始化参数
   */
  constructor(config) {
    this._config = {
      ...DEFAULT_AMP_CONFIG,
      ...config
    };
    this._document = document;
    this._window = window;
    this._scriptLoaded = false;
    this._queueEvents = [];
  }

  load() {
    if (this._scriptLoadingPromise) return this._scriptLoadingPromise;
    const script = this._document.createElement('script');
    script.type = 'text/javascript';
    script.async = true;
    script.defer = true;
    script.src = this._getScriptSrc();

    this._scriptLoadingPromise = new Promise((resolve, reject) => {
      this._window['bmapInitComponent'] = () => {
        while (this._queueEvents.length) {
          this._queueEvents.pop().apply();
        }
        this._loadPlugins();
        return resolve();
      };
      script.onerror = error => reject(error);
    });
    this._document.head.appendChild(script);
    return this._scriptLoadingPromise;
  }

  _getScriptSrc() {

    const config = this._config;
    const paramKeys = ['v', 'ak', 'type', 'callback'];

    const params = Object.keys(config)
      .filter(k => ~paramKeys.indexOf(k))
      .filter(k => config[k] != null)
      .filter(k => {
        return !Array.isArray(config[k]) ||
              (Array.isArray(config[k]) && config[k].length > 0);
      })
      .map(k => {
        let v = config[k];
        if (Array.isArray(v)) return { key: k, value: v.join(',')};
        return {key: k, value: v};
      })
      .map(entry => `${entry.key}=${entry.value}`)
      .join('&');
    return `${this._config.protocol}://${this._config.hostAndPath}?${params}`;
  }

  _loadPlugins() {
    let plugins = this._config.plugins.split(',');
    if (plugins.length > 0) {
      plugins.forEach(name => {
        let src = this._getPluginSrc(name);
        const script = this._document.createElement('script');
        script.type = 'text/javascript';
        script.src = src;
        this._document.head.appendChild(script);
      });
    }
  }

  _getPluginSrc(name) {
    return `//mapopen.bj.bcebos.com/github/BMapGLLib/${name}/src/${name}.min.js`;
  }

}
