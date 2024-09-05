<!-- PricingBlock.svelte -->
<script>
	export let title;
	export let gamePic;
	export let description = [];
	export let price;
	export let cta;
</script>

<div class="bg-base02 flex flex-col items-center rounded-lg p-6 shadow-lg">
	<h1 class="text-light-green mb-2 text-2xl font-bold">{title}</h1>

	<img
		src={gamePic}
		alt="Service picture"
		class="mb-3 max-h-32 rounded-lg object-cover shadow-md"
	/>

	<ul class="text-base1 mb-3 list-inside list-none text-left space-y-2">
		{#each description as point}
			<li class="flex items-start">
				<span class="text-accent-yellow mr-2">•</span> {point}
			</li>
		{/each}
	</ul>

	<p class="text-accent-yellow mb-4 text-lg font-semibold">{price} €/mo</p>

	<button
		on:click={cta}
		class="bg-neon-cyan hover:bg-cyan text-base03 rounded-lg px-6 py-2 font-bold shadow-md transition-colors duration-200"
	>
		Buy
	</button>
</div>
