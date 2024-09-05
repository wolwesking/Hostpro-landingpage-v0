<script lang="ts">
	import SubscriptionList from '$lib/Components/SubscriptionList.svelte';

	// Mock data for example purposes
	let subscriptions = [
		{
			id: '1',
			name: 'Premium Plan',
			status: 'Active',
			daysLeft: 15, // Number of days left
			serverName: 'Server Alpha' // Associated server name
		},
		{
			id: '2',
			name: 'Basic Plan',
			status: 'Expired',
			daysLeft: 0, // Number of days left
			serverName: 'Server Beta' // Associated server name
		}
		// Add more subscription objects here with the same structure
	];
</script>

<SubscriptionList {subscriptions} />
