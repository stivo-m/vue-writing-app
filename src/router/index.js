import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";
import store from "../store/index";

Vue.use(VueRouter);

const routes = [
	{
		path: "/",
		name: "Home",
		component: Home,
	},
	{
		path: "/customer",
		name: "CustomerLogin",

		component: () => import("../views/auth/login.vue"),
		meta: {
			hideForAuth: true,
		},
	},

	{
		path: "/customer/register",
		name: "CustomerRegister",

		component: () => import("../views/auth/register.vue"),
		meta: {
			hideForAuth: true,
		},
	},

	{
		path: "/customer/dashboard",
		name: "CustomerDashboard",

		component: () => import("../views/customer/dashboard"),
		meta: {
			requiresAuth: true,
		},
	},

	{
		path: "/customer/orders/add",
		name: "AddOrder",

		component: () => import("../views/customer/orders/add"),
		meta: {
			requiresAuth: true,
		},
	},

	{
		path: "/customer/orders/pending",
		name: "pending",

		component: () => import("../views/customer/orders/orders"),
		meta: {
			requiresAuth: true,
		},
	},

	{
		path: "/customer/orders/completed",
		name: "completed",

		component: () => import("../views/customer/orders/orders"),
		meta: {
			requiresAuth: true,
		},
	},
	{
		path: "/customer/orders/waiting",

		name: "waiting",

		component: () => import("../views/customer/orders/orders"),
		meta: {
			requiresAuth: true,
		},
	},

	{
		path: "/customer/orders/pay/success/:id",

		name: "pay success",

		component: () => import("../views/customer/orders/paysuccess"),
		meta: {
			requiresAuth: true,
		},
	},
	{
		path: "/customer/orders/finished",
		name: "finished",

		component: () => import("../views/customer/orders/orders"),
		meta: {
			requiresAuth: true,
		},
	},
	{
		path: "/customer/orders/invoice/:id",
		name: "Invoice",

		component: () => import("../views/customer/orders/invoice"),
		meta: {
			requiresAuth: true,
		},
	},

	{
		path: "/customer/orders/view/:id",
		name: "ViewPage",

		component: () => import("../views/customer/orders/view"),
		meta: {
			requiresAuth: true,
		},
	},

	{
		path: "/customer/settings",
		name: "SettingsPage",

		component: () => import("../views/customer/profile"),
		meta: {
			requiresAuth: true,
		},
	},

	//ADMIN ROUTES

	{
		path: "/admin",
		name: "AdminLogin",

		component: () => import("../views/auth/login.vue"),
		meta: {
			hideForAuth: true,
		},
	},
];

const router = new VueRouter({
	routes,
});

router.beforeEach((to, from, next) => {
	if (to.meta.requiresAuth) {
		// this route requires auth, check if logged in
		// if not, redirect to login page.
		if (to.path !== "/login" && localStorage.getItem("token") == null) {
			store.dispatch("setError", "You must login first");
			next({ name: "CustomerLogin" });
		} else {
			next(); // go to wherever I'm going
		}
	} else {
		next(); // does not require auth, make sure to always call next()!
	}

	if (to.matched.some((record) => record.meta.hideForAuth)) {
		if (localStorage.getItem("token") != null) {
			next({ name: "CustomerDashboard" });
		} else {
			next();
		}
	} else {
		next();
	}
});
export default router;
