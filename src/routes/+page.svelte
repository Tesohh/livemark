<script lang="ts">
	import Nav from '$lib/components/Nav.svelte';
	import Link from '$lib/components/Link.svelte';
</script>

<Nav>
	<Link href="https://github.com/Tesohh/livemark">GitHub</Link>
	<Link href="about">About</Link>
</Nav>
<div class="absolute top-0 min-h-screen ml-8 flex items-center">
	<div class="flex flex-col">
		<span class="text-6xl font-bold">
			<span class="text-theo-400 dark:text-theo-700">#</span> Livemark</span
		>
		<span class="text-2xl"
			>the <span class="text-theo-400 dark:text-theo-700">__</span><span class="italic"
				>markdown</span
			><span class="text-theo-400 dark:text-theo-700">__</span> editor that reacts</span
		>
	</div>
</div>
