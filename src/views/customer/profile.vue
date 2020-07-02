<template>
	<div class="wrapper">
		<Navbar />
		<Sidenav />

		<div class="content-wrapper">
			<ProfileComponent />
		</div>
		<Footer />
	</div>
</template>

<script>
	import Footer from "../../components/shared/Footer";
	import Navbar from "../../components/shared/Navbar";
	import Sidenav from "../../components/shared/Sidenav";
	import ProfileComponent from "../../components/shared/components/profile";
	// import Notif from "../../components/shared/notification";
	export default {
		components: {
			Navbar,
			Sidenav,
			Footer,
			ProfileComponent,
			// Notif,
		},
	};
</script>
