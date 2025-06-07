<script lang="ts">
	import {open_single_figure} from '$lib/figures.svelte'

	const {figure_id}: { figure_id: number } = $props();
</script>

<button type="button" onclick={() => open_single_figure(figure_id)}
        class="group inline-flex flex-row items-center gap-0.5">
    <span class="font-bold group-hover:underline">
        <slot>Figure {figure_id}</slot>
    </span>
    <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px"
         class="fill-brown-coffee">
        <path d="m256-240-56-56 384-384H240v-80h480v480h-80v-344L256-240Z"/>
    </svg>
</button>