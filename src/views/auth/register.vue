<template>
	<body class="hold-transition register-page">
		<div class="register-box">
			<div class="register-logo">
				<a href=""><b>Curtsy</b> Writing</a>
			</div>

			<div class="card">
				<div class="card-body register-card-body">
					<p class="login-box-msg">Register a new account</p>
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
								type="text"
								name="name"
								v-model="name"
								class="form-control"
								placeholder="Full name"
							/>
							<div class="input-group-append">
								<div class="input-group-text">
									<span class="fas fa-user"></span>
								</div>
							</div>
						</div>
						<div class="input-group mb-3">
							<input
								type="email"
								name="email"
								v-model="email"
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
						<div class="input-group mb-3">
							<input
								type="password"
								name="confirmPassword"
								v-model="confirmPassword"
								class="form-control"
								placeholder="Retype password"
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
									<input
										type="checkbox"
										id="agreeTerms"
										name="terms"
										value="agree"
									/>
									<span class="spacer"></span>
									<label for="agreeTerms">
										I agree to the <a href="#">terms</a>
									</label>
								</div>
							</div>
							<!-- /.col -->
							<div class="col-4">
								<button type="submit" class="btn btn-primary btn-block">
									Register
								</button>
							</div>
							<!-- /.col -->
						</div>
					</form>

					<router-link to="/customer" class="text-center"
						>Already a member, login?</router-link
					>
				</div>
				<!-- /.form-box -->
			</div>
			<!-- /.card -->
		</div>
		<!-- /.register-box -->
	</body>
</template>

<script>
	import { mapGetters, mapActions } from "vuex";
	export default {
		name: "RegisterView",
		data() {
			return {
				name: "",
				email: "",
				password: "",
				confirmPassword: "",
			};
		},

		methods: {
			...mapActions(["register", "setError"]),

			onSubmit(e) {
				e.preventDefault();

				//validation checking
				if (
					!this.email ||
					!this.name ||
					!this.password ||
					!this.confirmPassword
				) {
					this.setError("One or More fields is empty");
					return console.log("One or More fields is empty");
				}
				if (this.password.length < 6) {
					this.setError("Password must be more than 6 characters");
					return;
				}
				if (this.password != this.confirmPassword) {
					this.setError("Passwords did not match");
					return console.log("Passwords did not match");
				}
				//if all tests are passed, proceed to register the user
				const user = {
					name: this.name,
					email: this.email,
					password: this.password,
					role: "customer",
				};

				this.register(user)
					.then((currentUser) => {
						if (currentUser) {
							//console.log(currentUser);
							this.$router.push("/customer/dashboard");
							return;
						} else {
							this.setError("Action cannot be completed at this time");
							console.log("User is Null");
						}
					})
					.catch((err) => console.log(err));
			},
		},

		computed: {
			...mapGetters(["getUser", "getErrors", "getAuthState"]),
		},
	};
</script>
