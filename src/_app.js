// Bootstrap vendors
require('./bootstrap');
import Vue from 'vue';
import VueScrollActive from 'vue-scrollactive';

// Load Vue Components
require('./components/bootstrap');

// Import scrollspy
Vue.use(VueScrollActive);
import {transMixin} from './core/lang';
import {listenMixin} from './core/events';
new Vue({
    el: '#main_app',
    mixins: [transMixin,listenMixin],
    data:{
        isClipped: false
    },
    created(){
        this.listen('modal_open',()=>{
            this.isClipped = true;
        });
        this.listen('modal_close', () => {
            this.isClipped = false;
        });
    }
});
