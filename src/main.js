// Bootstrap vendors
require("./bootstrap");
import Vue from "vue";
import VueScrollActive from "vue-scrollactive";
import { transMixin } from "./core/lang";
import { listenMixin } from "./core/events";
import VueLazyImageLoading from "vue-lazy-image-loading";
import "./app.scss";

// Load Vue Components
require("./components/bootstrap");

import Vue2TouchEvents from 'vue2-touch-events'
Vue.use(Vue2TouchEvents);
// Vue.use(Vue2TouchEvents, {
//     swipeTolerance: 100
// });

// Import scrollspy
Vue.use(VueScrollActive);

Vue.use(VueLazyImageLoading);

new Vue({
  el: "#main_app",
  mixins: [transMixin, listenMixin],
  data: {
    isClipped: false
  },
  created() {
    this.listen("modal_open", () => {
      this.isClipped = true;
    });
    this.listen("modal_close", () => {
      this.isClipped = false;
    });
  }
});
