<template>
	<div class="alert alert-dismissible" :class="type">
		<button type="button" class="close" data-dismiss="alert" aria-hidden="true">
			×
		</button>
		<h5><i class="icon fas fa-check"></i> {{ title }}</h5>
		{{ message }}
	</div>
</template>

<script>
	export default {
		name: "notif",
		props: {
			type: String,
			title: String,
			message: String,
		},
	};
</script>

<style scoped>
	.alert {
		position: fixed;
		top: 80px;
		right: 8px;
		z-index: 10;
	}
</style>
