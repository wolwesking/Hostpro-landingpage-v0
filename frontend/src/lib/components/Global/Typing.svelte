<script>
	import { onMount } from 'svelte';

	export let text;

	let displayedText = '';
	let index = 0;
	let cursorVisible = true;

	const typingSpeed = 50;

	function typeText() {
		if (index < text.length) {
			displayedText += text[index];
			index++;
			setTimeout(typeText, typingSpeed);
		} else {
			setInterval(() => (cursorVisible = !cursorVisible), 500);
		}
	}

	onMount(() => {
		typeText();
	});
</script>

<div class="text-terminal-green whitespace-pre-wrap bg-black p-4 min-h-28 font-mono leading-relaxed">
	{displayedText}
	<span class={`inline-block h-5 w-2 ${cursorVisible ? 'bg-terminal-green' : 'bg-black'}`}></span>
</div>

<style>
	.cursor-box {
		display: inline-block;
		width: 10px;
		height: 20px;
		background-color: #00ff00;
		animation: blink 1s steps(2, start) infinite; 
	}

	@keyframes blink {
		0%,
		100% {
			opacity: 1;
		}
		50% {
			opacity: 0;
		}
	}
</style>
