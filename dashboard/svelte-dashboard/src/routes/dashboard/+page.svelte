<script lang="ts">
	import { isAuthenticated, getCurrentUser } from '$lib/Authmanager';
	import { onMount } from 'svelte';
	let data: string;

	onMount(async () => {
		if (await isAuthenticated()) {
			let res = getCurrentUser();
			data = JSON.stringify(res);
		} else {
			data = 'No user loged in';
		}
	}); 
</script>

<h1>{data}</h1>
