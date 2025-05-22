<script lang="ts">
	import type {Snippet} from "svelte";

	const {
		top_padding = "top-6",
		left,
		main,
		right,
		hidden = false
	}: {
		top_padding?: string
		left?: Snippet,
		main: Snippet,
		right?: Snippet,
		hidden?: boolean
	} = $props();

</script>


<nav class="fixed z-40 top-2 w-[calc(100vw-1rem)] mx-2 h-14 py-3 px-6 rounded-4xl bg-brown-coffee text-old-lace"
     hidden={hidden}>
    {@render main()}
</nav>

{#if left}
    <div class={"fixed z-40 left-6 " + top_padding}>
        {@render left()}
    </div>
{/if}

{#if right}
    <div class={"fixed z-40 right-6 " + top_padding} hidden={hidden}>
        {@render right()}
    </div>
{/if}