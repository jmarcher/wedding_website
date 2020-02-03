import Vue from "vue";
// Initialize Fontawesome for Vue
import { library } from "@fortawesome/fontawesome-svg-core";
import { faCheckCircle } from "@fortawesome/free-solid-svg-icons/faCheckCircle";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons/faEnvelope";
import { faBullhorn } from "@fortawesome/free-solid-svg-icons/faBullhorn";
import { faTimesCircle } from "@fortawesome/free-solid-svg-icons/faTimesCircle";
import { faUser } from "@fortawesome/free-solid-svg-icons/faUser";
import { faMapMarkedAlt } from "@fortawesome/free-solid-svg-icons/faMapMarkedAlt";
import { faAngleUp } from "@fortawesome/free-solid-svg-icons/faAngleUp";
import { faArchway } from "@fortawesome/free-solid-svg-icons/faArchway";
import { faHamburger } from "@fortawesome/free-solid-svg-icons/faHamburger";
import { faBiking } from "@fortawesome/free-solid-svg-icons/faBiking";
import { faTicketAlt } from "@fortawesome/free-solid-svg-icons/faTicketAlt";
import { faHeart } from "@fortawesome/free-solid-svg-icons/faHeart";
import { faCertificate } from "@fortawesome/free-solid-svg-icons/faCertificate";

import { faImages } from "@fortawesome/free-solid-svg-icons/faImages";
import { faWikipediaW } from "@fortawesome/free-brands-svg-icons/faWikipediaW";

import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";

// Fontawesome
library.add(
  faUser,
  faEnvelope,
  faCheckCircle,
  faTimesCircle,
  faWikipediaW,
  faMapMarkedAlt,
  faAngleUp,
  faArchway,
  faHamburger,
  faBiking,
  faHeart,
  faTicketAlt,
  faCertificate,
  faImages,
  faBullhorn
);
Vue.component("font-awesome-icon", FontAwesomeIcon);
Vue.config.productionTip = false;

// Directives
Vue.directive("visible", function(el, binding) {
  el.style.visibility = binding.value ? "visible" : "hidden";
});

Vue.component("index-component", require("./IndexComponent.vue").default);
// Vue.component(
//   "countdown-component",
//   require("./CountDownComponent.vue").default
// );
Vue.component("navbar-component", require("./NavBarComponent").default);

// Sections
Vue.component(
  "single-section-component",
  require("./Sections/SectionPartial").default
);
Vue.component("sections-component", require("./SectionsComponent").default);
Vue.component(
  "about-us-component",
  require("./Sections/AboutUsComponent").default
);
Vue.component("rsvp-component", require("./Sections/RsvpComponent").default);
// Vue.component(
//   "what-to-do",
//   require("./Sections/WhatToDoComponent.vue").default
// );

Vue.component("what-to-do-in-uruguay", require("./WhatToDoInUruguay").default);
Vue.component("what-to-do-in-germany", require("./WhatToDoInGermany").default);
Vue.component("venue-component", require("./Sections/VenueComponent").default);
Vue.component(
  "our-team-component",
  require("./Sections/OurTeamComponent.vue").default
);
