import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";

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
	},

	{
		path: "/customer/register",
		name: "CustomerRegister",

		component: () => import("../views/auth/register.vue"),
	},

	{
		path: "/customer/dashboard",
		name: "CustomerDashboard",

		component: () => import("../views/customer/dashboard"),
	},

	{
		path: "/customer/orders/add",
		name: "AddOrder",

		component: () => import("../views/customer/orders/add"),
	},

	{
		path: "/customer/orders/invoice/:id",
		name: "Invoice",

		component: () => import("../views/customer/orders/invoice"),
	},

	{
		path: "/customer/orders/view/:id",
		name: "Invoice",

		component: () => import("../views/customer/orders/invoice"),
	},
];

const router = new VueRouter({
	routes,
});

export default router;
