<template>
	<!-- Masthead-->
	<header class="masthead ">
		<div class="container h-100">
			<div
				class="row h-100 align-items-center justify-content-center text-center"
			>
				<div class="col-lg-10 align-self-end">
					<h1 class="text-uppercase text-white font-weight-bold">
						Stuck With Your Assignment?
					</h1>
					<hr class="divider my-4" />
				</div>
				<div class="col-lg-8 align-self-baseline">
					<p class="text-white-75 font-weight-light mb-5">
						Do not worry! We are Here to help you!
					</p>
				</div>
			</div>
		</div>

		<div class="calc">
			<form class="newOrder">
				<p class="heading">Calculate Average Price</p>
				<div class="callout callout-danger">
					<p>
						<i class="fas fa-info mr-5 blak-text"></i>
						Total Cost
						<b>${{ cost }}</b>
					</p>
				</div>
				<div class="form-group">
					<label for="pages">Number of Pages</label>
					<input
						type="number"
						required
						name="pages"
						min="1"
						@change="updatePages($event)"
						v-model="pages"
						value="1"
						class="form-control"
					/>
				</div>
				<div class="form-group">
					<label for="deadline">Deadline</label>
					<select
						required
						class="form-control custom-select"
						name="deadline"
						@change="getDeadline($event)"
					>
						<option selected>4 Hours</option>
						<option>6 Hours</option>
						<option>8 Hours</option>
						<option>12 Hours</option>
						<option>24 Hours</option>
						<option>36 Hours</option>
						<option>48 Hours</option>
					</select>
				</div>
				<div class="form-group">
					<label for="spacing">Paper Spacing</label>
					<select
						required
						class="form-control custom-select"
						name="spacing"
						@change="getSpacing($event)"
					>
						<option value="single">Single (500 Words / Page)</option>
						<option value="double" selected>Double (275 Words / Page)</option>
					</select>
				</div>

				<button class="btn btn-primary btn-xl btn-block text-white">
					Place Order
				</button>
			</form>
		</div>
	</header>
</template>

<script>
	export default {
		name: "HeroComponent",
		data() {
			return {
				cost: 0,
				pages: 1,
				deadline: "4 Hours",
				spacing: "Double (275 Words / Page)",
			};
		},
		created() {
			this.updatePrice();
		},

		mounted() {
			this.updatePrice();
		},
		methods: {
			getSpacing(e) {
				const selected =
					e.target.options[e.target.options.selectedIndex].innerText;
				this.spacing = selected;
				this.updatePrice();
			},
			getDeadline(e) {
				const selected =
					e.target.options[e.target.options.selectedIndex].innerText;
				this.deadline = selected;
				this.updatePrice();
			},

			updatePages(e) {
				const pages = e.target.value;
				if (pages <= 0) {
					console.log("pages should be more than 1");
					return;
				}
				this.pages = pages;
				this.updatePrice();
			},

			updatePrice() {
				const pages = this.pages;
				const [time, decorator] = this.deadline.split(" ");
				const [space, deco] = this.spacing.split(" (");
				let timeline;

				//all money values are in US $
				const base_cpp = 7.2;

				let totalCost = base_cpp;

				//calculate total cost based on deadline and spacing
				if (space === "Double") {
					totalCost = base_cpp;
				} else if (space === "Single") {
					totalCost += base_cpp;
				}

				if (time <= 4) {
					totalCost += base_cpp;
				} else if (time <= 6) {
					totalCost += 0.75 * base_cpp;
				} else if (time <= 8) {
					totalCost += 0.7 * base_cpp;
				} else if (time <= 12) {
					totalCost += 0.65 * base_cpp;
				} else if (time <= 24) {
					totalCost += 0.55 * base_cpp;
				}
				let cost = totalCost * pages;
				this.cost = cost.toFixed(2);
			},
		},
	};
</script>

<style scoped>
	.calc {
		max-width: 350px;
		min-width: 300px;
		margin: 1rem auto;
		margin-top: 2rem;
		border-radius: 10px;
		padding: 2rem 1.5rem;
		height: 500px;
	}
	.callout.callout-danger {
		border-left-color: #f4623a;
	}

	label,
	p.heading {
		color: white;
	}

	@media (min-width: 992px) {
		header.masthead {
			height: 100vh;
			min-height: 40rem;
			padding-top: 4.5rem;
			padding-bottom: 0;
			display: flex;
		}

		.calc {
			margin-right: 5rem;
			padding: 1rem 1.5rem;
			max-width: 400px;
			min-width: 350px;
			height: 500px;
		}
		header.masthead p {
			font-size: 1.15rem;
		}
		header.masthead h1 {
			font-size: 3rem;
		}
	}
	@media (min-width: 1200px) {
		header.masthead h1 {
			font-size: 3.5rem;
		}
	}
</style>
