import Vue from "vue";
import App from "./App.vue";
import "./registerServiceWorker";
import router from "./router";
import store from "./store";
import Meta from 'vue-meta';
import { library } from "@fortawesome/fontawesome-svg-core";
import { faBars, faTimes, faAt } from "@fortawesome/free-solid-svg-icons";
import {
  faFacebook,
  faTwitter,
  faGithubAlt,
  faDev,
  faLinkedin,
  faFontAwesome,
} from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";

library.add(
  faFacebook,
  faTwitter,
  faGithubAlt,
  faDev,
  faLinkedin,
  faFontAwesome,
  faBars,
  faTimes,
  faAt
);

Vue.component("font-awesome-icon", FontAwesomeIcon);
Vue.use(Meta);

// import index css file
import "./assets/styles/index.css";

window.axios = require("axios");
Vue.config.productionTip = false;

new Vue({
  router,
  store,
  render: (h) => h(App),
}).$mount("#app");
