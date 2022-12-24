<script lang="ts">
	import '../app.css';
	import Icon from '@iconify/svelte';
</script>

<div class="app">
	<main>
		<slot />
	</main>

	<footer>
		<p class="flex flex-row items-center">
			<Icon icon="mdi:github" />
			<a class="font-bold font-mono underline" href="https://github.com/Tesohh/livemark">
				Tesohh/livemark</a
			>
		</p>
	</footer>
</div>

<style>
	.app {
		display: flex;
		flex-direction: column;
		min-height: 100vh;
	}

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
	}
</style>
