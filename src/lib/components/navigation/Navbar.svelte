<script lang="ts">
	import type {Snippet} from "svelte";

	const {
		top_padding = "sm:top-6",
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

	let opened = $state(false);

	function toggleNav() {
		opened = !opened;
	}
</script>

<button
        class="fixed z-50 max-sm:top-3 max-sm:left-3 sm:hidden p-2 h-10 w-10 rounded-full bg-brown-coffee text-old-lace"
        onclick={toggleNav}
        aria-label={opened ? "Fermer la navigation" : "Ouvrir la navigation"}
>
    {#if opened}
        ✖
    {:else}
        ☰
    {/if}
</button>

<nav
        class="fixed w-full h-full z-40 bg-brown-coffee text-old-lace
           sm:top-2 sm:w-[calc(100vw-1rem)] sm:mx-2 sm:h-14 sm:rounded-4xl sm:py-3 sm:px-6
           max-sm:transition-transform max-sm:duration-300 max-sm:ease-in-out
           "
        class:max-sm:-translate-x-full={!opened}
        class:max-sm:translate-x-0={opened}
        class:max-sm:top-0={opened}
        class:max-sm:left-0={opened}
        hidden={hidden}
>
    {@render main()}
</nav>

{#if left}
    <div
            class={"fixed z-40 left-5 sm:left-6 max-sm:top-16 sm:top-6 " + (!opened && 'max-sm:hidden')}
            hidden={hidden}
    >
        {@render left()}
    </div>
{/if}

{#if right}
    <div
            class={"fixed z-40 max-sm:bottom-6 max-sm:left-1/2 max-sm:-translate-x-1/2 max-sm:h-fit sm:right-6 " + top_padding + " " + (!opened && 'max-sm:hidden')}
            hidden={hidden}
    >
        {@render right()}
    </div>
{/if}
