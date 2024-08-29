<script>
	import Typing from '$lib/components/Global/Typing.svelte';
	const text = `$ ./create-server --game="Minecraft" --players=10 --region="EU-West"
		[Creating server... Done!]
		[Ready to play? Hit 'Launch Your Server' above!]`;
</script>

<div class="bg-base03 text-base0 flex min-h-screen flex-col items-center justify-center noselect">
	<div class="max-w-4xl space-y-12 p-6 text-center lg:p-12">
		<div class="mb-4 bg-black p-5">
			<h1 class="text-terminal-green font-mono text-4xl font-bold md:text-5xl lg:text-6xl">
				&gt Welcome to Hostpro
			</h1>
			<Typing {text} />
		</div>

		<h2 class="text-very-light-green mb-6 font-mono text-lg md:text-xl lg:text-2xl">
			Ultra-Fast, Customizable Game Servers with the Power of a Terminal and the Fun of Retro
			Gaming.
		</h2>
		<div class="mb-8 flex flex-col md:flex-row md:justify-center md:space-x-4">
			<button
				class="bg-light-green hover:bg-very-light-green text-dark-green px-8 py-3 font-mono text-lg font-semibold shadow-md transition-colors"
			>
				Play
			</button>
		</div>
		<button>
			<h3 class="text-light-green font-mono text-lg hover:underline md:text-xl lg:text-2xl">
				&gt; _Start Your Game Server Adventure_
			</h3>
		</button>

		<p class="text-base1 mb-8 font-mono text-lg leading-relaxed md:text-xl">
			<span class="text-accent-yellow font-bold">⌛ Instant Setup, No Lag, Full Control.</span>
			<br />
			<span class="text-accent-blue">🎮 Host Your Favorite Games:</span> Minecraft, Rust, ARK, and More!
		</p>
	</div>
</div>
