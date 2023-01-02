<script lang="ts">
	import type { ActionData } from './$types';
	export let data: ActionData;
</script>

<form action="?/register" method="post">
	<div>
		<label for="username">Username</label>
		<input type="text" id="username" name="username" required />
	</div>

	<div>
		<label for="username">Username</label>
		<input type="text" id="username" name="username" required />
	</div>

	<button type="submit">Register</button>
</form>
