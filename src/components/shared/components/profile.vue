<template>
	<section class="content mt-4">
		<div class="row">
			<div class="col-md-3">
				<!-- Profile Image -->
				<div class="card card-primary card-outline">
					<div class="card-body box-profile">
						<div class="text-center">
							<img
								class="profile-user-img img-fluid img-circle"
								src="https://cdn.humanitycrew.org/wp-content/uploads/media/2019/06/113634857-person-gray-photo-placeholder-man-in-t-shirt-on-gray-background.jpg"
								alt="User profile picture"
							/>
						</div>

						<h3 v-if="user" class="profile-username text-center">
							{{ user.name }}
						</h3>

						<p v-if="user" class="text-muted text-center center">
							<small>{{ user.email }}</small>
						</p>

						<ul class="list-group list-group-unbordered mb-3" v-if="count">
							<li class="list-group-item">
								<b>New Orders</b>
								<a class="float-right">{{ count.newOrders }}</a>
							</li>
							<li class="list-group-item">
								<b>Waiting Orders</b>
								<a class="float-right">{{ count.waiting }}</a>
							</li>
							<li class="list-group-item">
								<b>Completed Orders</b>
								<a class="float-right">{{ count.completed }}</a>
							</li>
							<li class="list-group-item">
								<b>Finished Orders</b>
								<a class="float-right">{{ count.finished }}</a>
							</li>
						</ul>

						<button @click="logoutUser" class="btn btn-danger btn-block">
							<b>Logout</b>
						</button>
					</div>
					<!-- /.card-body -->
				</div>
				<!-- /.card -->
			</div>
			<!-- /.col -->
			<div class="col-md-9">
				<div class="card">
					<div class="card-header p-2">
						<ul class="nav nav-pills">
							<li class="nav-item">
								<a class="nav-link active" href="#settings" data-toggle="tab"
									>Settings</a
								>
							</li>
						</ul>
					</div>
					<!-- /.card-header -->
					<div class="card-body">
						<div class="tab-content">
							<div class=" active tab-pane" id="settings">
								<form
									v-if="user"
									class="form-horizontal"
									@submit="updatePersonalDetails"
								>
									<div class="form-group row">
										<label for="inputName" class="col-sm-2 col-form-label"
											>Name</label
										>
										<div class="col-sm-10">
											<input
												type="text"
												id="name"
												class="form-control"
												:value="user.name"
												:v-model="newName"
												placeholder="Name"
											/>
										</div>
									</div>
									<div class="form-group row">
										<label for="inputEmail" class="col-sm-2 col-form-label"
											>Email</label
										>
										<div class="col-sm-10">
											<input
												type="email"
												id="email"
												class="form-control disabled"
												disabled
												:value="user.email"
											/>
										</div>
									</div>
									<div class="form-group row">
										<label for="number" class="col-sm-2 col-form-label"
											>Mobile Number</label
										>
										<div class="col-sm-10">
											<input
												type="number"
												class="form-control"
												id="number"
												:value="user.mobileNumber"
												:v-model="newMobileNumber"
											/>
										</div>
									</div>

									<div class="form-group row">
										<div class="offset-sm-2 col-sm-10">
											<button type="submit" class="btn btn-info float-right">
												Save
											</button>
										</div>
									</div>
								</form>
							</div>
							<!-- /.tab-pane -->
						</div>
						<!-- /.tab-content -->
					</div>
					<!-- /.card-body -->
				</div>
				<!-- /.nav-tabs-custom -->
			</div>
			<!-- /.col -->
		</div>
	</section>
</template>

<script>
	import { mapGetters, mapActions } from "vuex";
	export default {
		data() {
			return {
				user: this.getUser,
				newName: "",
				newPassword: "",
				newMobileNumber: "",
				count: {
					newOrders: "0",
					completed: "0",
					waiting: "0",
					finished: "0",
				},
			};
		},
		computed: {
			...mapGetters(["getUser", "getOrders"]),
		},

		methods: {
			...mapActions(["getUserDetails", "logout", "setError", "setOrders"]),
			logoutUser() {
				this.$confirm({
					title: "Logout",
					message: `Are you sure you want to Logout?`,
					button: {
						no: "No",
						yes: "Yes",
					},
					/**
					 * Callback Function
					 * @param {Boolean} confirm
					 */
					callback: (confirm) => {
						if (confirm) {
							this.logout();
							this.setError("You logged out successfully");
							this.$router.push("/customer");
						}
					},
				});
			},

			updatePersonalDetails(e) {
				e.preventDefault();
			},

			countOrders() {
				let newOrders = 0;
				let completed = 0;
				let waiting = 0;
				let finished = 0;

				this.getOrders.forEach((order) => {
					if (order.status === "pending") newOrders++;
					if (order.status === "completed") completed++;
					if (order.status === "waiting") waiting++;
					if (order.status === "finished") finished++;
				});

				this.count.newOrders = newOrders.toString();
				this.count.completed = completed.toString();
				this.count.waiting = waiting.toString();
				this.count.finished = finished.toString();
			},
		},

		async created() {
			this.user = await this.getUserDetails();
			await this.setOrders();
			this.countOrders();
		},
	};
</script>
