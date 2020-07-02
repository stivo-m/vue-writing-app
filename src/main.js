import Vue from "vue";

import "./plugins/axios";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import VueConfirmDialog from "vue-confirm-dialog";

//bootstrap imports

//plugins
import "../src/assets/plugins/fontawesome-free/css/all.min.css";
import "../src/assets/plugins/tempusdominus-bootstrap-4/css/tempusdominus-bootstrap-4.min.css";

import "../src/assets/plugins/icheck-bootstrap/icheck-bootstrap.min.css";

import "../src/assets/plugins/jqvmap/jqvmap.min.css";
import "../src/assets/css/adminlte.min.css";
import "../src/assets/css/styles.css";

import "../src/assets/plugins/overlayScrollbars/css/OverlayScrollbars.min.css";
import "../src/assets/plugins/daterangepicker/daterangepicker.css";
import "../src/assets/plugins/summernote/summernote-bs4.css";

//js
import "jquery/src/jquery.js";
// import "../src/assets/plugins/jquery-ui/jquery-ui.min.js";
import "bootstrap/dist/js/bootstrap.min.js";

// import "../src/assets/plugins/chart.js/Chart.min.js";
// import "../src/assets/plugins/sparklines/sparkline.js";

//plugins
import "../src/assets/plugins/jqvmap/jquery.vmap.min.js";
import "../src/assets/plugins/jqvmap/maps/jquery.vmap.usa.js";
import "../src/assets/plugins/jquery-knob/jquery.knob.min.js";

// import "../src/assets/plugins/moment/moment.min.js";
import "moment";

import "../src/assets/plugins/daterangepicker/daterangepicker.js";
// import "../src/assets/plugins/tempusdominus-bootstrap-4/js/tempusdominus-bootstrap-4.min.js";
import "../src/assets/plugins/summernote/summernote-bs4.min.js";
import "../src/assets/plugins/overlayScrollbars/js/jquery.overlayScrollbars.min.js";
import "popper.js/dist/popper.min.js";
import "../src/assets/js/adminlte.min.js";

import { VueStripeCheckout } from "vue-stripe-checkout";

// Vue.use(
// 	VueStripeCheckout,
// 	"pk_test_51GulIbBJQCOzVUPo1wi9vSTHnZDYmuJzBCWfCID547QwCMKWsh8tWeVWmDDNRG7rWABkth0UQyqMfRnh2qx6diGM0027ljwiI8",
// );

Vue.config.productionTip = false;
Vue.use(VueConfirmDialog);
Vue.component("vue-confirm-dialog", VueConfirmDialog.default);

new Vue({
	router,
	store,
	render: (h) => h(App),
}).$mount("#app");
