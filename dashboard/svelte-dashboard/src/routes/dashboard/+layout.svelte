<script lang="ts">
	import { goto } from "$app/navigation";
	import { logoutUser } from "$lib/server/Authmanager";
	import { onMount } from "svelte";
	import { page } from '$app/stores'; // Import the SvelteKit page store

	let showDropdown = false; // Toggle dropdown visibility
	let currentPage: string;

	const handleLogout = async () => {
		// Implement logout logic here
		goto("/");
		await logoutUser();
	};
	
	// Update currentPage based on the page store
	$: currentPage = $page.url.pathname;

	onMount(() => {
		// Initialize currentPage if needed
		currentPage = $page.url.pathname;
	});
</script>

<style>
	/* Additional styles if needed */
</style>

<div class="flex h-screen">
	<!-- Sidebar Navigation -->
	<aside class="bg-medium-green h-full w-64 p-4 fixed top-0 left-0 flex flex-col shadow-lg transition-transform duration-300 ease-in-out transform-gpu">
		<!-- Navigation Links -->
		<div class="flex flex-col pt-16 space-y-4">
			<a
				href="/dashboard/servers"
				class="flex items-center p-3 rounded-lg text-base3 hover:text-light-green hover:bg-dark-green transition-colors duration-300 ease-in-out
					{currentPage === '/dashboard/servers' ? 'bg-dark-green text-base3' : ''}"
			>
				<span class="font-semibold">Servers</span>
			</a>
			<a
				href="/dashboard/services"
				class="flex items-center p-3 rounded-lg text-base3 hover:text-light-green hover:bg-dark-green transition-colors duration-300 ease-in-out
					{currentPage === '/dashboard/services' ? 'bg-dark-green text-base3' : ''}"
			>
				<span class="font-semibold">Services</span>
			</a>
			<a
				href="/dashboard/subscriptions"
				class="flex items-center p-3 rounded-lg text-base3 hover:text-light-green hover:bg-dark-green transition-colors duration-300 ease-in-out
					{currentPage === '/dashboard/subscriptions' ? 'bg-dark-green text-base3' : ''}"
			>
				<span class="font-semibold">Subscriptions</span>
			</a>
		</div>
	</aside>

	<!-- Main Content -->
	<div class="flex-1 ml-64">
		<header class="bg-medium-green shadow-lg p-4 flex justify-end items-center">
			<div class="relative">
				<button
					class="flex items-center justify-center w-12 h-12 rounded-full bg-dark-green text-base3 font-bold focus:outline-none"
					on:click={() => (showDropdown = !showDropdown)}
				>
					U
				</button>

				{#if showDropdown}
					<div class="absolute right-0 mt-2 bg-base02 border border-base00 rounded-lg shadow-lg w-40">
						<button
							class="block w-full px-4 py-2 text-base1 hover:bg-base01 focus:outline-none"
							on:click={handleLogout}
						>
							Logout
						</button>
					</div>
				{/if}
			</div>
		</header>

		<!-- Main Content Area -->
		<main class="h-screen bg-base03">
			<slot></slot>
		</main>
	</div>
</div>
