<template>
	<body class="hold-transition login-page">
		<div class="login-box">
			<div class="register-logo">
				<a href=""><b>Curtsy</b> Writing</a>
			</div>
			<div class="card">
				<div class="card-body login-card-body">
					<p v-if="route === '/customer'" class="login-box-msg">
						Please Login Below to Proceed
					</p>
					<p v-if="route === '/admin'" class="login-box-msg">Admin Login</p>

					<div
						v-for="error in getErrors"
						:key="error"
						class="alert alert-danger alert-dismissible"
					>
						<button
							type="button"
							class="close"
							data-dismiss="alert"
							aria-hidden="true"
						>
							&times;
						</button>
						{{ error }}
					</div>

					<form v-on:submit="onSubmit">
						<div class="input-group mb-3">
							<input
								type="email"
								v-model="email"
								name="email"
								class="form-control"
								placeholder="Email"
							/>
							<div class="input-group-append">
								<div class="input-group-text">
									<span class="fas fa-envelope"></span>
								</div>
							</div>
						</div>
						<div class="input-group mb-3">
							<input
								type="password"
								name="password"
								v-model="password"
								class="form-control"
								placeholder="Password"
							/>
							<div class="input-group-append">
								<div class="input-group-text">
									<span class="fas fa-lock"></span>
								</div>
							</div>
						</div>
						<div class="row">
							<div class="col-8">
								<div class="icheck-primary">
									<input type="checkbox" id="remember" />
									<span class="spacer"></span>
									<label for="remember">Remember Me</label>
								</div>
							</div>
							<!-- /.col -->
							<div class="col-4">
								<button
									:disabled="getAuthState"
									type="submit"
									class="btn btn-primary btn-block"
								>
									<span v-if="!getAuthState">Sign In</span>
									<div
										v-if="getAuthState"
										class="spinner-border text-light"
										role="status"
									>
										<span class="sr-only">Loading...</span>
									</div>
								</button>
							</div>
							<!-- /.col -->
						</div>
					</form>

					<div class="c-only" v-if="route === '/customer'">
						<p class="mb-1">
							<a href="forgot-password.html">I forgot my password</a>
						</p>
						<p class="mb-0">
							<router-link to="customer/register" class="text-center"
								>I am New, Create an account</router-link
							>
						</p>
					</div>
				</div>
				<!-- /.login-card-body -->
			</div>
		</div>
	</body>
</template>

<script>
	import { mapGetters, mapActions } from "vuex";
	export default {
		name: "LoginView",
		data() {
			return {
				email: "",
				password: "",
				user: this.getUser,
				errors: [this.getErrors],
				route: null,
			};
		},

		methods: {
			...mapActions(["login", "getUserDetails", "setError"]),

			onSubmit(e) {
				e.preventDefault();

				// validation check

				if (!this.email) {
					this.setError("Email field is required");
					return;
				}

				if (!this.password) {
					this.setError("Password field is required");
					return;
				}

				if (this.password.length < 6) {
					this.setError("Password must be more than 6 characters");
					return;
				}
				const role = this.route.split("/")[1];
				const user = {
					email: this.email,
					password: this.password,
					role: role,
				};

				this.login(user)
					.then((currentUser) => {
						if (currentUser) {
							currentUser.role === "customer"
								? this.$router.push("/customer/dashboard")
								: this.$router.push("/admin/dashboard");

							return;
						} else {
							console.log("User is Null");
						}
					})
					.catch((err) => console.log(err));
			},
		},

		computed: {
			...mapGetters(["getUser", "getErrors", "getAuthState"]),
		},

		async created() {
			this.user = await this.getUserDetails();
			this.route = this.$router.currentRoute.fullPath;
		},

		watch: {
			$route() {
				this.route = this.$router.currentRoute.fullPath;
			},
		},
	};
</script>
