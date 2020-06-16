import axios from "axios";
const base_url = "http://localhost:5000/api/auth/";

const state = {
	user: {},
	errors: [],
	isAuthenticating: false,
	isAuthenticated: false,
};
const getters = {
	getUser: (state) => state.orders,
	getErrors: (state) => state.errors,
	getAuthState: (state) => state.isAuthenticating,
};
const actions = {
	login: async ({ commit }, userData) => {
		try {
			commit("clearErrors");
			commit("setAuthenticatingState", true);
			const res = await axios.post(base_url, userData);
			const user = res.data;

			//TODO: Store user token in localstorage
			localStorage.setItem("token", user.token);

			//commit changes
			commit("setUser", user.user);
			commit("setAuthenticatingState", false);
			return user.user;
		} catch (error) {
			if (!error.response) {
				// network error
				const errorStatus = "Please Check your internet Connection ";
				console.log("Please check your internet connection.");
				commit("error", errorStatus);
			} else {
				commit("setAuthenticatingState", false);
				localStorage.removeItem("token");
				commit("error", error.response.data.text);
			}
		}
	},

	register: async ({ commit }, userData) => {
		try {
			commit("clearErrors");
			commit("setAuthenticatingState", true);
			const res = await axios.post(base_url + "/register", userData);
			const user = res.data;

			//TODO: Store user token in localstorage
			localStorage.setItem("token", user.token);

			//commit changes
			commit("setUser", user.user);
			commit("setAuthenticatingState", false);
		} catch (error) {
			commit("setAuthenticatingState", false);
			localStorage.removeItem("token");
			commit("error", error.response.data.text);
		}
	},

	getUserDetails: async ({ commit }) => {
		try {
			commit("setAuthenticatingState", true);
			//set headers
			const config = {
				headers: {
					"Content-type": "Application/json",
					"x-writing-key": localStorage.getItem("token"),
				},
			};

			const res = await axios.get(base_url + "user", config);
			const user = res.data;

			//commit changes
			commit("setUser", user);
			return user;
		} catch (error) {
			commit("setAuthenticatingState", false);
			localStorage.removeItem("token");
		}
	},

	logout: async ({ commit }) => {
		commit("clearErrors");
		localStorage.removeItem("token");
		commit("setUser", "");
	},

	setError: ({ commit }, error) => {
		commit("clearErrors");
		commit("error", error);
	},

	setAuthState: ({ commit }, status) => {
		commit("clearErrors");
		commit("setAuthenticatingState", status);
	},
};
const mutations = {
	setUser: (state, user) => {
		if (!user) {
			state.user = null;
			state.isAuthenticating = false;
			state.isAuthenticated = false;
			return;
		}
		state.user = user;
		state.isAuthenticated = true;
		state.isAuthenticating = false;
	},
	error: (state, error) => state.errors.push(error),
	clearErrors: (state) => (state.errors = []),

	setAuthenticatingState: (state, value) => {
		state.isAuthenticating = value;
	},
};

export default {
	state,
	getters,
	actions,
	mutations,
};
