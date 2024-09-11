<!-- PriceSection.svelte -->
<script>
	import { goto } from '$app/navigation';
    import PricingBlock from './PriceBlock.svelte';

    // Sample data for demonstration; replace with actual props or data source
    export let blocks = [
        {
            title: "Basic",
            gamePic: "/satisfactory-icon.png",
            description: [
                "2gb ram",
                "1 vcore",
                "10gb ssd",
            ],
            price: "4.00",
            cta: () => {
            },
        },
        {
            title: "Recomended",
            gamePic: "/satisfactory-icon.png",
            description: [
                "6gb ram",
                "2 vcore",
                "20gb ssd",
            ],
            price: "9.00",
            cta: () => alert("CS:GO Server Purchased!"),
        },
        {
            title: "High Performance",
            gamePic: "/satisfactory-icon.png",
                description: [
                    "12gb ram",
                    "4 vcore",
                    "50gb ssd",
                ],
                price: "18.00",
            cta: () => alert("Rust Server Purchased!"),
        },
    ];
</script>

<section class="bg-base03 py-28 px-6" id="pricing">
    <div class="mx-auto max-w-4xl text-center">
        <a href="#pricing">
			<h2 class="text-very-light-green noselect mb-10 font-mono text-3xl font-bold hover:underline">
				&gt; Satisfactory
			</h2></a
		>
        <p class="text-base1 text-xl pb-6">Choose the server that fits your needs</p>
    </div>

    <div class="mx-auto max-w-6xl grid grid-cols-1 gap-8 px-4 sm:px-8 md:grid-cols-2 lg:grid-cols-3">
        {#each blocks as block}
            <PricingBlock 
                title={block.title}
                gamePic={block.gamePic}
                description={block.description}
                price={block.price}
                cta={block.cta}
            />
        {/each}
    </div>
    <div class="mx-auto max-w-4xl text-center mt-9">
        <p class="text-base1 text-md">You can change the subscription type any time</p>
    </div>

</section>
