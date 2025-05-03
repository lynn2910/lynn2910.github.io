<script lang="ts">
	import type {Snippet} from "svelte";

	const {main, right, hidden = false}: { main: Snippet, right?: Snippet, hidden?: boolean } = $props()
</script>

<nav class="absolute top-2 w-[50vw] mx-[25vw] border-2 border-tan bg-tan/50 rounded-4xl px-4 py-2"
     hidden={hidden}>
    {@render main()}
</nav>

{#if right}
    <div class="absolute top-5 right-5" hidden={hidden}>
        {@render right()}
    </div>
{/if}