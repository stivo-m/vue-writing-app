<template>
	<div class="home" id="page-top">
		<Nav />
		<Hero />
		<div class="page">
			<About />
			<Showcase />
			<Testimonials />
		</div>
	</div>
</template>

<script>
	import Nav from "../components/home/nav";
	import Hero from "../components/home/hero";
	import About from "../components/home/about";
	import Showcase from "../components/home/showcase";
	import Testimonials from "../components/home/testimonials";

	let page, navElement;

	export default {
		name: "Home",
		components: {
			Nav,
			Hero,
			About,
			Showcase,
			Testimonials,
		},

		mounted() {
			page = document.querySelector(".page");
			navElement = document.querySelector("#mainNav");
			var navbar = new IntersectionObserver(
				function(entries) {
					// isIntersecting is true when element and viewport are overlapping
					// isIntersecting is false when element and viewport don't overlap
					if (entries[0].isIntersecting === true) {
						navElement.classList.add("navbar-scrolled");
					} else {
						navElement.classList.remove("navbar-scrolled");
					}
				},
				{ threshold: [0] },
			);

			navbar.observe(page);
		},
	};
</script>
