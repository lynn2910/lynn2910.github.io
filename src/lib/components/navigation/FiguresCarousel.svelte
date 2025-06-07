<script lang="ts">
	import SingleFigure from "$lib/components/navigation/SingleFigure.svelte";

	const {figure_ids}: { figure_ids: number[] } = $props();

	let index: number = $state(0);

	const totalFigures: number = $derived(figure_ids.length);
	const showedFigureID: number = $derived(figure_ids[index]);
	const allowPrev: boolean = $derived(index > 0);
	const allowNext: boolean = $derived(index < totalFigures - 1);

	function navigate_prev(): void {
		if (allowPrev) {
			index--;
		}
	}

	function navigate_next(): void {
		if (allowNext) {
			index++;
		}
	}
</script>

<div class="flex flex-row items-center justify-between w-full" style="height:inherit;">
    <button type="button" aria-label="previous figure"
            class="focus:outline-none focus:ring-2 focus:ring-old-lace disabled:opacity-50 disabled:cursor-not-allowed"
            onclick={() => navigate_prev()}
            disabled={!allowPrev}>
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960"
             class="fill-brown-coffee h-12 w-12 drop-shadow-lg">
            <path d="M560-240 320-480l240-240 56 56-184 184 184 184-56 56Z"/>
        </svg>
    </button>

    <div aria-live="polite" class="flex-grow flex items-center justify-center h-full">
        {#if figure_ids.length > 0}
            <SingleFigure figure_id={showedFigureID}/>
        {:else}
            <p class="text-old-lace">No figures to display.</p>
        {/if}
    </div>

    <button type="button" aria-label="next figure"
            class="focus:outline-none focus:ring-2 focus:ring-old-lace disabled:opacity-50 disabled:cursor-not-allowed"
            onclick={() => navigate_next()}
            disabled={!allowNext}>
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960"
             class="fill-brown-coffee h-12 w-12 drop-shadow-lg">
            <path d="M504-480 320-664l56-56 240 240-240 240-56-56 184-184Z"/>
        </svg>
    </button>
</div>