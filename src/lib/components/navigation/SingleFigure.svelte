<script lang="ts">
	import {type Figure, get_figures, open_single_figure} from "$lib/figures.svelte";

	const {
		figure_id,
		show_hover_effect = true,
		show_text = true
	}: {
		figure_id: number,
		show_hover_effect?: boolean,
		show_text?: boolean
	} = $props();

	const figure: Figure | undefined = $derived(get_figures().find(f => f.id === figure_id));
</script>

<div class="w-full max-w-full h-auto max-h-full rounded-xl text-center m-0 p-0">
    {#if figure}
        <button type="button" class="group relative" onclick={() => open_single_figure(figure_id)}>
            <img class="object-fill max-h-[31vh]" src={figure.url} alt={figure.text || figure.url}>

            {#if show_hover_effect}
                <div class="hidden flex-row items-center justify-center absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-center h-full w-full bg-black/50 figure-overlay">
                    <p class="my-auto text-old-lace font-title text-8xl font-medium italic">Agrandir</p>
                </div>
            {/if}
        </button>
        {#if show_text}
            <p>Figure {figure_id}: {figure.text}</p>
        {/if}
    {:else}
        <div class="w-full h-20 bg-brown-coffee">
            <p class="text-old-lace font-bold">Impossible de charger la figure.</p>
        </div>
    {/if}
</div>

<style>
    .group:hover > .figure-overlay {
        display: flex;
    }
</style>