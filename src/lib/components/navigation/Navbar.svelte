<script lang="ts">
	import type {Snippet} from "svelte";
	import {onDestroy} from 'svelte';
	import {browser} from "$app/environment";

	const {
		left,
		main,
		right,
		hidden = false
	}: {
		top_padding?: string
		left?: Snippet,
		main: Snippet<{ closeNav: () => void }>,
		right?: Snippet,
		hidden?: boolean
	} = $props();

	let opened = $state(false);

	function toggleNav() {
		opened = !opened;
		updateOverflow();
	}

	function closeNav() {
		opened = false;
		updateOverflow();
	}

	function updateOverflow() {
		if (opened) {
			document.querySelector("html")!.style.overflow = "hidden";
			document.body.style.overflow = "hidden";
		} else {
			document.querySelector("html")!.style.overflow = "";
			document.body.style.overflow = "";
		}
	}

	onDestroy(() => {
		if (browser) {
			document.querySelector("html")!.style.overflow = "";
			document.body.style.overflow = "";
		}
	});
</script>

<nav class="overflow-hidden absolute w-full h-screen">
    <button
            class="fixed z-[45] max-sm:top-3 max-sm:left-3 sm:hidden p-2 h-10 w-10 rounded-full bg-brown-coffee hover:bg-sepia transition-colors duration-150 text-old-lace"
            onclick={toggleNav}
            aria-label={opened ? "Fermer la navigation" : "Ouvrir la navigation"}
    >
        {#if opened}
            ✖
        {:else}
            ☰
        {/if}
    </button>

    <div
            class="fixed w-full h-full max-w-screen max-h-screen z-40 bg-brown-coffee text-old-lace overflow-hidden
           sm:top-2 sm:w-[calc(100vw-1rem)] sm:mx-2 sm:h-14 sm:rounded-4xl sm:py-3 sm:px-6
           max-sm:transition-transform max-sm:duration-300 max-sm:ease-in-out
           "
            class:max-sm:-translate-x-full={!opened} class:max-sm:translate-x-0={opened} class:max-sm:top-0={opened}
            class:max-sm:left-0={opened}
            hidden={hidden}
    >
        {@render main({closeNav})}
    </div>

    {#if left}
        <div
                class={"overflow-hidden fixed z-40 left-5 sm:left-6 max-sm:top-16 sm:top-2 sm:h-14 flex flex-row items-center" + (!opened && ' max-sm:hidden')}
                hidden={hidden}
        >
            {@render left()}
        </div>
    {/if}

    {#if right}
        <div
                class={"overflow-hidden fixed z-40 max-sm:bottom-6 max-sm:left-1/2 max-sm:-translate-x-1/2 max-sm:h-fit sm:right-6 sm:top-2 sm:h-14 flex flex-row items-center " + (!opened && 'max-sm:hidden')}
                hidden={hidden}
        >
            {@render right()}
        </div>
    {/if}
</nav>
