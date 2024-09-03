<script>
	// State to track which FAQ is open
	let openIndex = -1;

	// Toggles the FAQ answer visibility
	const toggleFaq = (index) => {
		openIndex = openIndex === index ? -1 : index;
	};

	// Sample FAQs - adjust the questions and answers as needed
	const faqs = [
		{
			question: 'How do I set up my server?',
			answer:
				'Setting up your server is easy! Simply choose your game, configure the settings, and launch. Our intuitive control panel guides you through each step.'
		},
		{
			question: 'What are the pricing options?',
			answer:
				'We offer flexible pricing plans to fit your needs. Choose from Basic, Pro, or Elite plans with varying features and resources.'
		},
		{
			question: 'Can I customize my server settings?',
			answer:
				'Absolutely! Our platform allows full customization of server settings, mods, and plugins to create the exact experience you want.'
		},
		{
			question: 'Do you offer a money-back guarantee?',
			answer:
				"Yes, we provide a 7-day money-back guarantee on all plans. If you're not satisfied, simply contact our support team for a full refund."
		},
		{
			question: 'How quickly can I get my server online?',
			answer:
				"Servers are set up instantly upon purchase. You'll be online and ready to play within minutes."
		},
		{
			question: 'Is there support for modded servers?',
			answer:
				'Yes, we fully support modded servers. You can easily add mods, custom maps, and plugins through our control panel.'
		},
		{
			question: 'Can I upgrade or downgrade my plan later?',
			answer:
				'You can change your plan at any time. Simply adjust your subscription in your account settings, and the changes will take effect immediately.'
		}
	];
</script>

<section class="bg-base03 text-base0 px-4 py-16">
	<div class="container mx-auto max-w-4xl">
		<h2 class="text-very-light-green mb-12 text-center font-mono text-3xl font-bold">
			Frequently Asked Questions
		</h2>
		<div class="space-y-4">
			{#each faqs as { question, answer }, index}
				<button
					class="bg-base02 hover:bg-base01 cursor-pointer rounded-lg p-6 transition-colors"
					on:click={() => toggleFaq(index)}
				>
					<h3 class="text-light-green flex justify-between font-mono text-xl font-bold">
						{question}
						<span
							class={`text-neon-cyan transition-transform ${
								openIndex === index ? 'rotate-180' : ''
							}`}
						>
							⌄
						</span>
					</h3>
					{#if openIndex === index}
						<p class="text-base1 mt-4 font-mono transition-opacity">{answer}</p>
					{/if}
				</button>
			{/each}
		</div>
	</div>
</section>

<style>
	/* Rotate icon animation */
	.rotate-180 {
		transform: rotate(180deg);
	}
</style>
