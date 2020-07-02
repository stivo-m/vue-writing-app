import axios from "axios";
const base_url = "http://localhost:5000/api/customers/orders";
const stripeUrl = "http://localhost:5000/api/customers/stripe";
const state = {
	orders: [],
	pending: [],
	orderErrors: [],
};
const getters = {
	getOrders: (state) => state.orders,
	getOrderErrors: (state) => state.orderErrors,
};
const actions = {
	//fetches orders from the api and updates them in the array
	setOrders: async ({ commit }) => {
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
	addOrder: async ({ commit }, orderDetails) => {
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
	getOrderById: async ({ commit }, id) => {
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

	payForOrder: async ({ commit }, order) => {
		commit("clearErrors");
		try {
			//attempt to pay
			const res = await axios.post(stripeUrl, order);
			const data = res.data;
			//commit("addOrder", data.data);

			commit("orderError", data.text);
			return data;
		} catch (error) {
			commit("orderError", error.response.data.text);
		}
	},

	// update order details
	updateOrder: async ({ commit }, id) => {},

	//deletes an order
	deleteOrder: async ({ commit }, id) => {
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
