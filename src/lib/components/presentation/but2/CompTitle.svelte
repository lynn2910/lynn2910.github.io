<script lang="ts">
	const {title, top_text, bottom_text}: {
		title: string,
		top_text?: string,
		bottom_text?: string
	} = $props();
</script>

<div class="w-full my-7 relative">

    <div class="absolute top-0 left-0 w-full h-20 bg-old-lace -z-10"></div>

    <div class="py-2 px-3">
        {#if top_text}
            {top_text}
        {/if}
        <h2 class="text-3xl">{title}</h2>
    </div>

    {#if bottom_text}
        <p class="mt-2 border-l-4 border-l-brown-coffee pl-2">{bottom_text}</p>
    {/if}
</div>