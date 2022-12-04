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
  }

  load() {
    if (this._scriptLoadingPromise) return this._scriptLoadingPromise;
    if(this._config.offline){
      this._scriptLoadingPromise = new Promise(resolve => {
        resolve()
      })
      return this._scriptLoadingPromise
    }
    const script = this._document.createElement('script');
    script.type = 'text/javascript';
    script.async = true;
    script.defer = true;
    script.src = this._getScriptSrc();

    this._scriptLoadingPromise = new Promise((resolve, reject) => {
      this._window['bmapInitComponent'] = () => {
        this._loadPlugins(() => {
          resolve();
        });
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
        const v = config[k];
        if (Array.isArray(v)) return { key: k, value: v.join(',')};
        return {key: k, value: v};
      })
      .map(entry => `${entry.key}=${entry.value}`)
      .join('&');
    return `${this._config.protocol}://${this._config.hostAndPath}?${params}`;
  }

  _loadPlugins(callback) {
    if (!this._config.plugins || this._config.plugins.trim() === '') {
      callback();
      return;
    }
    const plugins = this._config.plugins.split(',');
    if (plugins.length > 0) {
      let pluginsLength = plugins.length;
      let loadedNumber = 0;
      plugins.forEach(name => {
        name = name.trim();
        if (name === '') {
          pluginsLength--;
          return;
        }
        const src = this._getPluginSrc(name);
        const script = this._document.createElement('script');
        script.type = 'text/javascript';
        script.src = src;
        this._document.head.appendChild(script);
        script.addEventListener('load', () => {
          loadedNumber++;
          if (pluginsLength === loadedNumber) {
            callback();
          }
        });
      });
    } else {
      callback();
    }
  }

  _getPluginSrc(name) {
    return `//mapopen.bj.bcebos.com/github/BMapGLLib/${name}/src/${name}.min.js`;
  }

}
