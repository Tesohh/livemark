<script lang="ts">
	export let text: string;
	const bracs = 'span class="text-theo-400 dark:text-theo-700"';
	text = text
		.replaceAll(/\*{2}([^*]+)\*{2}/g, `< ${bracs}>**</span><b>$1</b>< ${bracs}>**</span>`)
		.replaceAll(/\*{2}([^*]+)\*{2}/g, `< ${bracs}>**</span><b>$1</b>< ${bracs}>**</span>`);
</script>

<span>{@html text}</span>
