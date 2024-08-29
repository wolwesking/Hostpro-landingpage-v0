<script>
	import Typing from '$lib/components/Global/Typing.svelte';
	const text = `$ ./create-server --game="Minecraft" --players=10 --region="EU-West"
    [Creating server... Done!]
    [Ready to play? Hit 'Launch Your Server' above!]`;
</script>

<div class="bg-base03 text-base0 flex min-h-screen flex-col items-center justify-center">
	<div class="max-w-3xl space-y-8 p-6 text-center">
		<h1 class="text-blue font-mono text-5xl font-bold">Welcome to Hostpro</h1>

		<h2 class="text-base1 font-mono text-xl lg:text-2xl">
			Ultra-Fast, Customizable Game Servers with the Power of a Terminal and the Fun of Retro Gaming.
		</h2>

		<h3 class="text-light-green font-mono text-lg lg:text-xl">&gt; _Start Your Game Server Adventure_</h3>

		<div class="flex justify-center space-x-4">
			<button
				class="bg-neon-cyan hover:bg-cyan text-dark-green px-6 py-2 font-mono text-lg font-semibold shadow-md transition-colors"
			>
				// Launch Your Server
			</button>

			<button
				class="bg-medium-green hover:bg-light-green text-dark-green px-6 py-2 font-mono text-lg font-semibold shadow-md transition-colors"
			>
				Learn More
			</button>
		</div>

		<p class="text-base1 font-mono text-lg lg:text-xl mt-4 mb-8 leading-relaxed">
			<span class="text-accent-yellow font-bold">⌛ Instant Setup, No Lag, Full Control.</span> <br />
			<span class="text-accent-blue">🎮 Host Your Favorite Games:</span> Minecraft, Rust, ARK, and More!
		</p>

		<span
			class="bg-violet text-base3 inline-block whitespace-nowrap rounded-full px-3 py-1 text-sm"
		>
			Trusted by Gamers Worldwide
		</span>

		<div class="mt-8">
			<Typing {text} />
		</div>
	</div>
</div>
