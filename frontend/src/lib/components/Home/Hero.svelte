<script>
	import Typing from '$lib/components/Global/Typing.svelte';
	const text = `$ ./create-server --game="Minecraft" --players=10 --region="EU-West"
		[Creating server... Done!]
		[Ready to play? Hit 'Start' below!]`;
	import { goto } from '$app/navigation';
</script>

<div
	class="bg-base03 text-base0 noselect flex min-h-screen flex-col items-center justify-center pt-20"
>
	<div class="max-w-4xl space-y-12 p-6 text-center lg:p-12">
		<div class="mb-4 bg-black p-5">
			<h1 class="text-terminal-green font-mono text-4xl font-bold md:text-5xl lg:text-6xl">
				&gt; Welcome to Hostpro
			</h1>
			<Typing {text} />
		</div>
		<div class="mb-6 flex justify-center space-x-4">
			<span
				class="bg-dark-green text-very-light-green rounded-full px-4 py-1 font-mono text-sm font-semibold shadow-md"
			>
				⚡ Fast Setup
			</span>
			<span
				class="bg-light-green text-dark-green rounded-full px-4 py-1 font-mono text-sm font-semibold shadow-md"
			>
				🛡️ Secure & Reliable
			</span>
			<span
				class="bg-dark-green text-very-light-green rounded-full px-4 py-1 font-mono text-sm font-semibold shadow-md"
			>
				⚡ 99.9% uptime
			</span>
		</div>
		<h2 class="text-very-light-green mb-6 font-mono text-lg md:text-xl lg:text-2xl">
			Ultra-Fast, Customizable Game Servers with the Power of a Terminal and the Fun of Retro
			Gaming.
		</h2>

		<button
			class="bg-light-green hover:bg-very-light-green text-dark-green transform px-6 py-3 font-mono text-lg font-semibold shadow-md transition-all duration-300 hover:-translate-y-1  hover:shadow-lg md:text-xl lg:text-2xl"
			on:click={()=>goto("#features")}
		>
			<h3 class="text-dark-green">
				<span>&gt;</span> See more
			</h3>
		</button>

		<p class="text-base1 font-mono text-lg leading-relaxed md:text-xl">
			<span class="text-accent-yellow font-bold">⌛ Instant Setup, No Lag, Full Control.</span>
			<br />
			<span class="text-accent-blue">🎮 Host Your Favorite Games:</span> Minecraft, Rust, ARK, and More!
		</p>
	</div>
</div>
