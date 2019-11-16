import Vue from 'vue';
// Initialize Fontawesome for Vue
import {library} from '@fortawesome/fontawesome-svg-core';
import {faCheckCircle, faEnvelope, faTimesCircle, faUser} from '@fortawesome/free-solid-svg-icons';
import {FontAwesomeIcon} from '@fortawesome/vue-fontawesome';
// Scroller
import 'intersection-observer'; // for cross-browser support
import Scrollama from 'vue-scrollama';

// Fontawesome
library.add(faUser, faEnvelope, faCheckCircle, faTimesCircle);
Vue.component('font-awesome-icon', FontAwesomeIcon);
Vue.config.productionTip = false;

Vue.component('index-component', require('./IndexComponent.vue').default);
Vue.component('countdown-component', require('./CountDownComponent.vue').default);
Vue.component('navbar-component', require('./NavBarComponent').default);

// Sections
Vue.component('single-section-component', require('./Sections/SectionPartial').default);
Vue.component('sections-component', require('./SectionsComponent').default);
Vue.component('about-us-component', require('./Sections/AboutUsComponent').default);
Vue.component('rsvp-component', require('./Sections/RsvpComponent').default);
Vue.component('what-to-do', require('./Sections/WhatToDoComponent.vue').default);

Vue.component('scrollama', Scrollama);
