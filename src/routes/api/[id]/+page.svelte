<script lang="ts">
	import type { PageData } from './$types';
	export let data: PageData;
</script>

<p class="text-5xl font-bold">{data.title}</p>
{data.content}
