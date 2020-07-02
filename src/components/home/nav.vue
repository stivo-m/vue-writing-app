<template>
	<!-- Navigation-->
	<nav
		class="navbar navbar-expand-lg navbar-light fixed-top py-3 "
		id="mainNav"
	>
		<div class="container">
			<a class="navbar-brand js-scroll-trigger" href="#page-top"
				>Curtsy Writings</a
			>
			<button
				class="navbar-toggler navbar-toggler-right"
				type="button"
				data-toggle="collapse"
				data-target="#navbarResponsive"
				aria-controls="navbarResponsive"
				aria-expanded="false"
				aria-label="Toggle navigation"
			>
				<span class="navbar-toggler-icon"></span>
			</button>
			<div class="collapse navbar-collapse" id="navbarResponsive">
				<ul class="navbar-nav ml-auto my-2 my-lg-0">
					<li v-if="!user" class="nav-item">
						<router-link class="nav-link " to="/customer">Login</router-link>
					</li>

					<li v-if="!user" class="nav-item">
						<router-link class="nav-link jr" to="/customer/register"
							>Register</router-link
						>
					</li>

					<li v-if="user" class="nav-item">
						<router-link class="nav-link jr" to="/customer/dashboard"
							>My Dashboard</router-link
						>
					</li>
				</ul>
			</div>
		</div>
	</nav>
</template>

<script>
	import { mapGetters, mapActions } from "vuex";
	export default {
		name: "commonNav",
		data() {
			return {
				user: this.getUser,
			};
		},

		computed: {
			...mapGetters(["getUser"]),
		},

		methods: {
			...mapActions(["getUserDetails"]),
		},

		async created() {
			this.user = await this.getUserDetails();
		},
	};
</script>
