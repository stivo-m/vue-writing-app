import Vue from "vue";
import Vuex from "vuex";
import customer from "./modules/customer";
import admin from "./modules/admin";
import auth from "./modules/auth";

Vue.use(Vuex);

export default new Vuex.Store({
	modules: {
		auth,
		customer,
		admin,
	},
});
