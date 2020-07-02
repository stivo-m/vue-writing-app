<template>
	<!-- Main Sidebar Container -->
	<aside class="main-sidebar sidebar-dark-primary elevation-4">
		<!-- Brand Logo -->
		<a href="index3.html" class="brand-link">
			<span class="brand-text font-weight-light">Customer Dashoard</span>
		</a>

		<!-- Sidebar -->
		<div class="sidebar">
			<!-- Sidebar user panel (optional) -->
			<div class="user-panel mt-3 pb-3 mb-3 d-flex">
				<div class="image">
					<img
						src="https://cdn.humanitycrew.org/wp-content/uploads/media/2019/06/113634857-person-gray-photo-placeholder-man-in-t-shirt-on-gray-background.jpg"
						class="img-circle elevation-2"
						alt="User Image"
					/>
				</div>
				<div class="info">
					<a href="#" v-if="user" class="d-block text-light">{{ user.name }}</a>
					<small v-if="user" class="d-block text-light">{{ user.email }}</small>
				</div>
			</div>
			<div class="block">
				<button
					v-if="user"
					@click="logoutUser"
					class="btn btn-danger btn-block btn-sm"
				>
					<b>Logout</b>
				</button>
				<hr />
			</div>
			<!-- Sidebar Menu -->
			<nav class="mt-2">
				<ul
					class="nav nav-pills nav-sidebar flex-column"
					data-widget="treeview"
					role="menu"
					data-accordion="false"
				>
					<!-- Add icons to the links using the .nav-icon class
          with font-awesome or any other icon font library-->

					<li
						v-for="(link, index) in links"
						:key="index"
						:class="[
							'{{link.children}}'
								? 'nav-item has-treeview menu-open'
								: 'nav-item',
						]"
					>
						<router-link
							:class="link.link == route ? 'nav-link active' : 'nav-link'"
							:to="link.link"
						>
							<i class="nav-icon" :class="link.icon"></i>
							<p>
								{{ link.title }}
								<i v-if="link.children" class="right fas fa-angle-left"></i>
								<!-- <span class="right badge badge-danger">New</span> -->
							</p>
						</router-link>

						<ul v-if="link.children" class="nav nav-treeview">
							<li v-for="(child, i) in link.children" :key="i" class="nav-item">
								<router-link
									:to="child.link"
									:class="
										child.link == $router.currentRoute.fullPath
											? 'nav-link active'
											: 'nav-link'
									"
								>
									<i class="far fa-circle nav-icon"></i>
									<p>{{ child.title }}</p>
								</router-link>
							</li>
						</ul>
					</li>
				</ul>
			</nav>
			<!-- /.sidebar-menu -->
		</div>
		<!-- /.sidebar -->
	</aside>
</template>

<script>
	import { mapGetters, mapActions } from "vuex";
	export default {
		name: "Sidenav",
		data() {
			return {
				user: this.getUser,
				route: null,

				links: [
					{
						title: "Dashboard",
						icon: "fas fa-tachometer-alt",
						link: "/customer/dashboard",
					},

					{
						title: "Orders",
						icon: "fas fa-copy",
						link: "",

						children: [
							{
								title: "New Order",
								link: "/customer/orders/add",
							},
							{
								title: "Pending Orders",
								link: "/customer/orders/pending",
							},
							{
								title: "Completed Orders",
								link: "/customer/orders/completed",
							},
							{
								title: "Waiting Approval",
								link: "/customer/orders/waiting",
							},

							{
								title: "Finished Orders",
								link: "/customer/orders/finished",
							},
						],
					},

					{
						title: "Settings",
						icon: "fas fa-cog",
						link: "/customer/settings",
					},
				],
			};
		},

		computed: {
			...mapGetters(["getUser"]),
		},

		methods: {
			...mapActions(["getUserDetails", "logout", "setError"]),
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
