// Bootstrap vendors
require('./bootstrap');
import Vue from 'vue';
import VueScrollActive from 'vue-scrollactive';
import './app.scss';

// Load Vue Components
require('./components/bootstrap');

// Import scrollspy
Vue.use(VueScrollActive);

import { transMixin } from './core/lang';
new Vue({
  el: '#main_app',
  mixins: [transMixin],
});
