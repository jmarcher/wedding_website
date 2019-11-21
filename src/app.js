// Bootstrap vendors
require('./bootstrap');
import Vue from 'vue';
import VueScrollActive from 'vue-scrollactive';

// Load Vue Components
require('./components/bootstrap');

// Import scrollspy
Vue.use(VueScrollActive);

import {transMixin} from './core/lang';
const app = new Vue({
    el: '#main_app',
    mixins: [transMixin],
    methods: {
        stepEnterHandler({
            element,
            index,
            direction
        }) {
            // handle the step-event as required here
        }
    },
});
