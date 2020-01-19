// Bootstrap vendors
require('./bootstrap');
import Vue from 'vue';
import VueScrollActive from 'vue-scrollactive';
import { transMixin } from './core/lang';
import './app.scss';

// Load Vue Components
require('./components/bootstrap');

import Vue2TouchEvents from 'vue2-touch-events'
Vue.use(Vue2TouchEvents);
// Vue.use(Vue2TouchEvents, {
//     swipeTolerance: 100
// });

// Import scrollspy
Vue.use(VueScrollActive);

new Vue({
  el: '#main_app',
  mixins: [transMixin],
});
