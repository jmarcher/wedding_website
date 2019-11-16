// Bootstrap vendors
require('./bootstrap');
import LangObject from './core/lang';
import Vue from 'vue';
// import collect from 'collect.js';
import moment from 'moment';
import VueSCrollactive from 'vue-scrollactive';
// Vue.use(VueMouseParallax);
import {ParallaxContainer, ParallaxElement} from 'vue-mouse-parallax';

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

// Import scrollspy
Vue.use(VueSCrollactive);

// import VueMouseParallax from 'vue-mouse-parallax';

Vue.component('parallax-container', ParallaxContainer);
Vue.component('parallax-element', ParallaxElement);

const app = new Vue({
    el: '#main_app',
    methods: {
        trans: (key = null, replacements = null) => {
            return (new LangObject).get(key, replacements);
        },
        stepEnterHandler({element, index, direction}) {
            // handle the step-event as required here
            console.log(element, index, direction)
        }
    },
});