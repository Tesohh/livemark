<script lang="ts">
	import '../app.css';
	// import Icon from '@iconify/svelte';
</script>

<div class="bg-theo-100 dark:bg-theo-900 text-theo-900 dark:text-theo-100 min-h-screen p-10">
	<main>
		<slot />
	</main>

	<footer />
</div>

<style>
	/* .app {
		display: flex;
		flex-direction: column;
		min-height: 100vh;
	} */
	/*
	main {
		flex: 1;
		display: flex;
		flex-direction: column;
		padding: 1rem;
		width: 100%;
		max-width: 64rem;
		margin: 0 auto;
		box-sizing: border-box;
	}

	footer {
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
		padding: 12px;
	}

	@media (min-width: 480px) {
		footer {
			padding: 12px 0;
		}
	} */
</style>
