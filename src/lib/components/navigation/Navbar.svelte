<script lang="ts">
	import type {Snippet} from "svelte";

	const {
		left,
		main,
		right,
		hidden = false
	}: {
		left?: Snippet,
		main: Snippet,
		right?: Snippet,
		hidden?: boolean
	} = $props();

</script>


<nav class="absolute top-2 w-[calc(100vw-1rem)] mx-2 h-14 py-3 px-6 rounded-4xl bg-brown-coffee text-old-lace"
     hidden={hidden}>
    {@render main()}
</nav>

{#if left}
    <div class="absolute top-6 left-7">
        {@render left()}
    </div>
{/if}

{#if right}
    <div class="absolute top-5 right-5" hidden={hidden}>
        {@render right()}
    </div>
{/if}