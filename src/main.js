// Bootstrap vendors
import "./app.scss";

require("./bootstrap");
import Vue from "vue";
import VueScrollActive from "vue-scrollactive";
import { transMixin } from "./core/lang";
import { listenMixin } from "./core/events";
import Constants from "@/core/constants";

// Load Vue Components
require("./components/bootstrap");

import Vue2TouchEvents from "vue2-touch-events";
Vue.use(Vue2TouchEvents, {
  swipeTolerance: 100,
  diableClick: true
});


import VueNativeNotification from 'vue-native-notification'

Vue.use(VueNativeNotification, {
  // Automatic permission request before
  // showing notification (default: true)
  requestOnNotify: true
});

Vue.notification.requestPermission();

// Import scrollspy
Vue.use(VueScrollActive);

import Pusher from 'pusher-js';

var pusher = new Pusher('defcc2d42d3e39591f1e', {
  cluster: 'eu',
  forceTLS: true
});

var channel = pusher.subscribe('jur');
channel.bind('notification', function (data) {
  app.notify(data);
});

const app = new Vue({
  el: "#main_app",
  mixins: [transMixin, listenMixin],
  data: {
    isClipped: false,
    emails: {
      lisa: Constants.EMAIL_LISA,
      valentin: Constants.EMAIL_VALENTIN
    }
  },
  methods: {
    notify({ title, body }) {
      this.$notification.show(title, {
        body,
      }, {});
    }
  },
  created() {
    this.listen("modal_open", () => {
      this.isClipped = true;
    });
    this.listen("modal_close", () => {
      this.isClipped = false;
    });
    import('./notification').then((notify) => {
      const notifications = new notify.default;
      if(!notifications.wasAlreadyNotified()){
        this.notify(notifications.getNotification(this.get_locale));
      }
    });
  }
});
