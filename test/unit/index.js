import Vue from 'vue';
import VueBMap from 'vue-bmap-gl';
import { initBMap } from './utils';
Vue.use(VueBMap);
initBMap();

Vue.config.productionTip = false;

// require all test files (files that ends with .spec.js)
const testsContext = require.context('./specs', true, /\.spec$/);
testsContext.keys().forEach(testsContext);

// require all src files except main.js for coverage.
// you can also change this to match only the subset of files that
// you want coverage for.
const srcContext = require.context('vue-bmap-gl', true, /^\.\/(?!main(\.js)?$)/);
srcContext.keys().forEach(srcContext);
