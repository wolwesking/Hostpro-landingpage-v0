<script>
	import { goto } from '$app/navigation';

	const navigateTo = (path) => {
		goto('/prices/' + path);
	};
</script>

<section class="bg-base03 text-base0 px-4 py-20" id="games">
	<div class="container mx-auto max-w-6xl">
		<a href="#games">
			<h2
				class="text-very-light-green noselect mb-12 text-center font-mono text-3xl font-bold hover:underline"
			>
				&gt; Game Titles & Compatibility
			</h2>
		</a>
		<div class="flex flex-wrap justify-center gap-6">
			<!-- Minecraft -->
			<!-- <button
				class="bg-base02 hover:bg-base01 max-w-xs flex-1 cursor-pointer rounded-lg p-6 text-center transition-colors"
				on:click={() => navigateTo('minecraft')}
			>
				<img src="/minecraft-icon.png" alt="Minecraft" class="mx-auto mb-4 h-24 w-24" />
				<h3 class="text-light-green font-mono text-xl font-bold">Minecraft</h3>
				<p class="text-base1 mt-2 font-mono">Customizable Mods & Plugins</p>
			</button> -->

			<!-- Rust -->
			<!-- <button
				class="bg-base02 hover:bg-base01 max-w-xs flex-1 cursor-pointer rounded-lg p-6 text-center transition-colors"
				on:click={() => navigateTo('rust')}
			>
				<img src="/rust-icon.png" alt="Rust" class="mx-auto mb-4 h-24 w-24" />
				<h3 class="text-light-green font-mono text-xl font-bold">Rust</h3>
				<p class="text-base1 mt-2 font-mono">Custom Server Configurations</p>
			</button> -->

			<!-- ARK -->
			<!-- <button
				class="bg-base02 hover:bg-base01 max-w-xs flex-1 cursor-pointer rounded-lg p-6 text-center transition-colors"
				on:click={() => navigateTo('ark')}
			>
				<img src="/ark-icon.png" alt="ARK: Survival Evolved" class="mx-auto mb-4 h-24 w-24" />
				<h3 class="text-light-green font-mono text-xl font-bold">ARK</h3>
				<p class="text-base1 mt-2 font-mono">Full Mod Support</p>
			</button> -->

			<!-- Valheim -->
			<!-- <button
				class="bg-base02 hover:bg-base01 max-w-xs flex-1 cursor-pointer rounded-lg p-6 text-center transition-colors"
				on:click={() => navigateTo('valheim')}
			>
				<img src="/valheim-icon.png" alt="Valheim" class="mx-auto mb-4 h-24 w-24" />
				<h3 class="text-light-green font-mono text-xl font-bold">Valheim</h3>
				<p class="text-base1 mt-2 font-mono">Custom Server Settings</p>
			</button> -->

			<!-- 7 Days to Die -->
			<!-- <button
				class="bg-base02 hover:bg-base01 max-w-xs flex-1 cursor-pointer rounded-lg p-6 text-center transition-colors"
				on:click={() => navigateTo('7days')}
			>
				<img src="/7days-icon.png" alt="7 Days to Die" class="mx-auto mb-4 h-24 w-24" />
				<h3 class="text-light-green font-mono text-xl font-bold">7 Days to Die</h3>
				<p class="text-base1 mt-2 font-mono">Advanced Modding Support</p>
			</button> -->

			<!-- Dark and Darker -->
			<!-- <button
				class="bg-base02 hover:bg-base01 max-w-xs flex-1 cursor-pointer rounded-lg p-6 text-center transition-colors"
				on:click={() => navigateTo('dark-and-darker')}
			>
				<img src="/dark-and-darker-icon.png" alt="Dark and Darker" class="mx-auto mb-4 h-24 w-24" />
				<h3 class="text-light-green font-mono text-xl font-bold">Dark and Darker</h3>
				<p class="text-base1 mt-2 font-mono">Configurable Game Modes</p>
			</button> -->

			<!-- Terraria -->
			<!-- <button
				class="bg-base02 hover:bg-base01 max-w-xs flex-1 cursor-pointer rounded-lg p-6 text-center transition-colors"
				on:click={() => navigateTo('terraria')}
			>
				<img src="/terraria-icon.png" alt="Terraria" class="mx-auto mb-4 h-24 w-24" />
				<h3 class="text-light-green font-mono text-xl font-bold">Terraria</h3>
				<p class="text-base1 mt-2 font-mono">Extensive Mod Support</p>
			</button> -->

			<!-- Space Engineers -->
			<!-- <button
				class="bg-base02 hover:bg-base01 max-w-xs flex-1 cursor-pointer rounded-lg p-6 text-center transition-colors"
				on:click={() => navigateTo('space-engineers')}
			>
				<img src="/space-engineers-icon.png" alt="Space Engineers" class="mx-auto mb-4 h-24 w-24" />
				<h3 class="text-light-green font-mono text-xl font-bold">Space Engineers</h3>
				<p class="text-base1 mt-2 font-mono">Customizable Server Settings</p>
			</button> -->

			<!-- Garry's Mod -->
			<!-- <button
				class="bg-base02 hover:bg-base01 max-w-xs flex-1 cursor-pointer rounded-lg p-6 text-center transition-colors"
				on:click={() => navigateTo('gmod')}
			>
				<img src="/gmod-icon.png" alt="Garry's Mod" class="mx-auto mb-4 h-24 w-24" />
				<h3 class="text-light-green font-mono text-xl font-bold">Garry's Mod</h3>
				<p class="text-base1 mt-2 font-mono">Full Modding Capabilities</p>
			</button> -->

			<!-- Satisfactory -->
			<button
				class="bg-base02 hover:bg-base01 max-w-xs flex-1 cursor-pointer rounded-lg p-6 text-center transition-colors"
				on:click={() => navigateTo('#pricing')}
			>
				<img src="/satisfactory-icon.png" alt="Satisfactory" class="mx-auto mb-4 h-24 w-24" />
				<h3 class="text-light-green font-mono text-xl font-bold">Satisfactory</h3>
				<p class="text-base1 mt-2 font-mono">Custom Game Modes</p>
			</button>
			<div
				class="bg-base02 max-w-xs flex-1 cursor-pointer rounded-lg p-6 text-center transition-colors"
			>
				<p class="text-base1 mb-2 font-mono text-lg md:text-xl">Can't find your game?</p>
				<p class="text-base1 mb-4 font-mono text-lg md:text-xl">Request it on our Discord server</p>
				<a
					href="#"
					class="bg-neon-cyan hover:bg-cyan text-base03 inline-block rounded-lg px-6 py-3 font-mono text-lg font-semibold shadow-md transition-colors"
				>
					Join
				</a>
			</div>
		</div>
	</div>
</section>
