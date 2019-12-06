// Bootstrap vendors
// require('./bootstrap');
import Vue from 'vue';
import VueScrollActive from 'vue-scrollactive';
import { transMixin } from './core/lang';
import './app.scss';

// Load Vue Components
require('./components/bootstrap');

// Import scrollspy
Vue.use(VueScrollActive);

new Vue({
  el: '#main_app',
  mixins: [transMixin],
});
