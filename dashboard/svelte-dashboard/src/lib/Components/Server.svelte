<script lang="ts">
	export let server: {
		id: string;
		name: string;
		ip: string;
		port: number; // Port as a separate property
		game: string;
		panelUrl: string;
		isRunning: boolean; // Added to determine if the server is running
	};

	const startServer = () => {
		// Logic to start the server
		alert(`Starting server ${server.name}`);
	};

	const restartServer = () => {
		// Logic to restart the server
		alert(`Restarting server ${server.name}`);
	};

	const stopServer = () => {
		// Logic to stop the server
		alert(`Stopping server ${server.name}`);
	};

	const copyToClipboard = (text: string) => {
		navigator.clipboard.writeText(text).then(() => {
			alert('Copied to clipboard!');
		}, () => {
			alert('Failed to copy to clipboard.');
		});
	};
</script>

<style>
	.server-info {
		flex: 1;
	}
	.server-actions {
		flex-shrink: 0;
		display: flex;
		justify-content: space-between;
	}
	
	.button {
		display: inline-block;
		padding: 0.5rem 1rem;
		font-weight: 600;
		text-align: center;
		border-radius: 0.375rem;
		cursor: pointer;
		transition: background-color 0.3s ease, transform 0.3s ease, text-decoration 0.3s ease;
	}
	.button:disabled {
		background-color: #6c757d; /* Gray color for disabled */
		cursor: not-allowed;
	}
</style>

<div class="bg-base02 p-4 mb-4 rounded-lg shadow-lg">
	<div class="flex items-center">
		<div class="server-info flex flex-col flex-1">
			<span class="text-xl font-bold text-base3">{server.name}</span>
			<span class="text-md text-terminal-green">IP: {server.ip}</span>
			<span class="text-md text-base1">Port: {server.port}</span>
		</div>
		<div class="server-actions flex space-x-2 ml-4">
			<button
				on:click={startServer}
				class="button bg-green text-white"
				disabled={server.isRunning}
			>
				Start
			</button>
			<button
				on:click={restartServer}
				class="button bg-yellow text-white"
				disabled={!server.isRunning}
			>
				Restart
			</button>
			<button
				on:click={stopServer}
				class="button bg-red text-white"
				disabled={!server.isRunning}
			>
				Stop
			</button>
		</div>
		<a
			href={server.panelUrl}
			target="_blank"
			class="button bg-blue text-white ml-4"
			on:click={() => copyToClipboard(server.panelUrl)}
		>
			Go to Panel
		</a>
	</div>
</div>
