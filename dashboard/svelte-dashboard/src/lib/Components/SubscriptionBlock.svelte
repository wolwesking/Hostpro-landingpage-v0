<script lang="ts">
	export let subscription: {
		id: string;
		name: string;
		status: string;
		daysLeft: number; // Added field for days left
		serverName: string; // Added field for server name
	};

	const handleCancel = () => {
		// Handle the cancel logic
		alert(`Canceling subscription ${subscription.name}`);
	};
</script>

<style>
	/* Optional: If you need any additional styling */
</style>

<div class="bg-base02 shadow-lg rounded-lg p-4 mb-4 flex flex-col">
	<div class="flex justify-between mb-4">
		<div class="flex flex-col flex-1">
			<h2 class="text-lg font-semibold text-base3">{subscription.name}</h2>
			<p class="text-base1">Status: {subscription.status}</p>
			<p class="text-base1">Server: {subscription.serverName}</p>
		</div>
		<button
			on:click={handleCancel}
			class="bg-red text-base3 px-4 py-2 rounded hover:bg-red-dark focus:outline-none transition"
		>
			Cancel
		</button>
	</div>
	<p class="text-base1">Days Left: {subscription.daysLeft}</p>
</div>
