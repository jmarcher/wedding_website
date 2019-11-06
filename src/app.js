// Bootstrap vendors
require('./bootstrap');
import LangObject from './core/lang';
import Vue from 'vue';
// import collect from 'collect.js';
import moment from 'moment';
window.moment = moment;
// window.collect = collect;
window.events = new Vue();
window.flash = (message, type = 'success') => {
    window.events.$emit('flash', {
        message,
        type
    });
};
const weddingDate = moment([2021, 1, 2]);
// Load Vue Components
require('./components/bootstrap');

// Initialize Fontawesome for Vue
import { library } from '@fortawesome/fontawesome-svg-core'
import { faUserSecret, faUser } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
library.add(faUserSecret, faUser);
Vue.component('font-awesome-icon', FontAwesomeIcon);

Vue.config.productionTip = false;

import VueSCrollactive from 'vue-scrollactive';
// Import scrollspy
Vue.use(VueSCrollactive);

// import VueMouseParallax from 'vue-mouse-parallax';

// Vue.use(VueMouseParallax);
import { ParallaxContainer, ParallaxElement } from 'vue-mouse-parallax';

Vue.component('parallax-container', ParallaxContainer);
Vue.component('parallax-element', ParallaxElement);

const app = new Vue({
    el: '#main_app',
    methods: {
        trans: (key = null, replacements = null) => {
            return (new LangObject).get(key, replacements);
        }
    },
});