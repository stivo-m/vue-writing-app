import axios from "axios";
const base_url = "api/admin/orders";
const customers_url = "api/admin/customers";
const state = {
	orders: [],
	customers: [],
	orderErrors: [],
};
const getters = {
	getAdminOrders: (state) => state.orders,
	adminGetCustomers: (state) => state.customers,
};
const actions = {
	//get all customers from the db
	adminSetCustomers: async ({ commit }) => {
		//set headers
		const config = {
			headers: {
				"Content-type": "Application/json",
				"x-writing-key": localStorage.getItem("token"),
			},
		};
		const res = await axios.get(customers_url, config);
		const data = res.data;
		commit("adminSetCustomers", data);
	},
	//fetches orders from the api and updates them in the array
	adminSetOrders: async ({ commit }) => {
		//set headers
		const config = {
			headers: {
				"Content-type": "Application/json",
				"x-writing-key": localStorage.getItem("token"),
			},
		};
		const res = await axios.get(base_url, config);
		const data = res.data;
		commit("setOrders", data);
	},

	//adds a new order to the system
	adminAddOrder: async ({ commit }, orderDetails) => {
		commit("clearErrors");
		try {
			//set headers
			const config = {
				headers: {
					"Content-type": "Application/json",
					"x-writing-key": localStorage.getItem("token"),
				},
			};

			//attempt to add an order
			const res = await axios.post(base_url, orderDetails, config);
			const data = res.data;
			commit("addOrder", data.data);
			console.log(data.data);
			return data.data;
		} catch (error) {
			commit("orderError", error.response.data.text);
		}
	},

	//dets a single order
	adminSetOrderById: async ({ commit }, id) => {
		commit("clearErrors");
		try {
			//set headers
			const config = {
				headers: {
					"Content-type": "Application/json",
					"x-writing-key": localStorage.getItem("token"),
				},
			};

			//attempt to get an order
			const res = await axios.get(base_url + "/" + id, config);
			const data = res.data;
			//TODO:return the order
			commit("addOrder", data);
			return data;
		} catch (error) {
			console.log(error);
			commit("orderError", error.response.data.text);
		}
	},

	// update order details
	adminUpdateOrder: async ({ commit }, id) => {},

	//deletes an order
	adminDeleteOrder: async ({ commit }, id) => {
		//attempt to delete from db
		console.log("deleting order");
		const res = await axios
			.delete(base_url + "/" + id)
			.catch((err) => console.log("Delete Error: " + err));
		console.log(" order deleted from db");
		const data = res.data;
		console.log("  deleting from local db");
		//delete the order from the list of orders in local db
		const ords = state.orders.filter((order) => order._id != id);
		console.log(" order deleted from local db");
		commit("setOrders", ords);

		//console.log(data);
		//return data;
	},
};
const mutations = {
	setOrders: (state, orders) => (state.orders = orders),
	adminSetCustomers: (state, customers) => (state.customers = customers),
	addOrder: (state, order) => state.orders.unshift(order),
	orderError: (state, error) => state.orderErrors.push(error),
	clearErrors: (state) => (state.orderErrors = []),
};

export default {
	state,
	getters,
	actions,
	mutations,
};
