<template>
	<div class="wrapper">
		<Navbar />
		<Sidenav />
		<div class="content-wrapper">
			<DashboardComponent />
		</div>
		<Footer />
	</div>
</template>

<script>
	import Footer from "../../components/shared/Footer";
	import Navbar from "../../components/shared/Navbar";
	import Sidenav from "../../components/shared/Sidenav";
	import DashboardComponent from "../../components/customer/index";
	export default {
		components: {
			Navbar,
			Sidenav,
			Footer,
			DashboardComponent,
		},
	};
</script>
