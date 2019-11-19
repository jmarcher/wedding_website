// Bootstrap vendors
require('./bootstrap');
import LangObject from './core/lang';
import Vue from 'vue';
import moment from 'moment';
import VueScrollActive from 'vue-scrollactive';

window.moment = moment;

const weddingDate = moment([2021, 1, 2]);

// Load Vue Components
require('./components/bootstrap');

// Import scrollspy
Vue.use(VueScrollActive);


const app = new Vue({
    el: '#main_app',
    methods: {
        trans: (key = null, replacements = null) => {
            return (new LangObject).get(key, replacements);
        },
        stepEnterHandler({
            element,
            index,
            direction
        }) {
            // handle the step-event as required here
        }
    },
});
