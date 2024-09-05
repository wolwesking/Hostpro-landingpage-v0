<script lang="ts">
	import Server from './Server.svelte'; // Import the Server component

	export let servers: {
		id: string;
		name: string;
		ip: string;
		port: number;
		game: string;
		panelUrl: string;
		isRunning: boolean;
	}[];
</script>

<style>
	.server-list {
		display: flex;
		flex-direction: column;
		gap: 1rem;
	}
</style>

<div class="server-list p-4">
	{#each servers as server}
		<Server {server} />
	{/each}
</div>
