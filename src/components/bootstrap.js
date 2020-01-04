import Vue from 'vue';
// Initialize Fontawesome for Vue
import {
    library
} from '@fortawesome/fontawesome-svg-core';
import {
    faCheckCircle,
    faEnvelope,
    faTimesCircle,
    faUser,
    faMapMarkedAlt,
    faAngleUp,
    faArchway,
    faHamburger,
    faBiking,
    faTicketAlt,
    faHeart,
} from '@fortawesome/free-solid-svg-icons';
import {
    faWikipediaW
} from '@fortawesome/free-brands-svg-icons';
import {
    FontAwesomeIcon
} from '@fortawesome/vue-fontawesome';

// import Vue2TouchEvents from 'vue2-touch-events'
// Vue.use(Vue2TouchEvents);

// Fontawesome
library.add(
    faUser, faEnvelope, faCheckCircle, faTimesCircle, faWikipediaW, faMapMarkedAlt, faAngleUp, faArchway, faHamburger, faBiking, faHeart, faTicketAlt
);
Vue.component('font-awesome-icon', FontAwesomeIcon);
Vue.config.productionTip = false;

// Directives
Vue.directive('visible', function (el, binding) {
    el.style.visibility = binding.value ? 'visible' : 'hidden';
});

Vue.component('index-component', require('./IndexComponent.vue').default);
Vue.component('countdown-component', require('./CountDownComponent.vue').default);
Vue.component('navbar-component', require('./NavBarComponent').default);

// Sections
Vue.component('single-section-component', require('./Sections/SectionPartial').default);
Vue.component('sections-component', require('./SectionsComponent').default);
Vue.component('about-us-component', require('./Sections/AboutUsComponent').default);
Vue.component('rsvp-component', require('./Sections/RsvpComponent').default);
Vue.component('what-to-do', require('./Sections/WhatToDoComponent.vue').default);
Vue.component('venue-component', require('./Sections/VenueComponent').default);

