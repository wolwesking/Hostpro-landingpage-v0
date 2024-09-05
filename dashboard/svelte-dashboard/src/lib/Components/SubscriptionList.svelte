<script lang="ts">
	import SubscriptionBlock from './SubscriptionBlock.svelte';
	export let subscriptions: { id: string; name: string; status: string; daysLeft: number; serverName: string; }[] = [];
</script>

<style>
	/* Optional: If you need any additional styling */
</style>

<main class="p-6 bg-base03 min-h-screen">
	<h1 class="text-2xl font-bold mb-6 text-base3">My Subscriptions</h1>

	{#if subscriptions.length === 0}
		<p class="text-base1">You have no active subscriptions.</p>
	{:else}
		{#each subscriptions as subscription}
			<SubscriptionBlock {subscription} />
		{/each}
	{/if}
</main>
