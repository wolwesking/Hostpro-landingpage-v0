<script lang="ts">
	import ServerList from '$lib/Components/ServerList.svelte'; // Import the ServerList component

	let servers = [
		{
			id: '1',
			name: 'Server One',
			ip: '192.168.1.1',
			port: 8080,
			game: 'Game A',
			panelUrl: 'https://example.com/panel1',
			isRunning: true
		},
		{
			id: '2',
			name: 'Server Two',
			ip: '192.168.1.2',
			port: 9090,
			game: 'Game B',
			panelUrl: 'https://example.com/panel2',
			isRunning: false
		}
		// Add more server objects as needed
	];
</script>


<div class="p-1">
	<ServerList {servers} />
</div>
