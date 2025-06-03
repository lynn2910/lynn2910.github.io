<script lang="ts">
	import {onMount, type Snippet} from "svelte";
	import {quintOut} from 'svelte/easing';
	import {slide, fade} from 'svelte/transition';


	let {title, main, details, icon}: {
		title: string,
		main: Snippet,
		details?: Snippet,
		icon?: Snippet
	} = $props();

	let show_popup = $state(false);

	onMount(() => {
		const search_params = new URLSearchParams(window.location.search);
		if (search_params.has('details') && search_params.get('details') === title) {
			show_popup = true;
		}
	})

	function openDetails() {
		const search_params = new URLSearchParams(window.location.search);
		search_params.set('details', title);
		history.pushState({}, '', `${window.location.pathname}?${search_params.toString()}${window.location.hash}`);
		show_popup = true;
		document.body.style.overflow = "hidden";
	}

	function closeDetails() {
		const search_params = new URLSearchParams(window.location.search);
		search_params.delete('details');
		history.pushState({}, '', `${window.location.pathname}?${search_params.toString()}${window.location.hash}`);

		show_popup = false;
		document.body.style.overflow = "";
	}
</script>

<div class="bg-old-lace hover:bg-old-lace border-2 border-transparent hover:border-brown-coffee rounded-xl rounded-b-xl h-96 w-1/6 min-w-56 max-w-1/6 flex flex-col transition-colors duration-100">
    <div class="bg-brown-coffee p-2 text-center rounded-t-lg text-old-lace h-16 flex flex-row items-center justify-center">
        <h2>{title}</h2>
    </div>

    <div class="mx-2 mt-3">
        {#if icon}
            <div class="w-full flex flex-row items-center justify-center py-3">
                {@render icon()}
            </div>
        {/if}

        {@render main()}
    </div>

    {#if details}
        <button type="button" class="btn mx-auto my-3 mt-auto w-fit" onclick={openDetails}>
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960"
                 class="fill-current h-6 w-6">
                <path d="M440-280h80v-240h-80v240Zm40-320q17 0 28.5-11.5T520-640q0-17-11.5-28.5T480-680q-17 0-28.5 11.5T440-640q0 17 11.5 28.5T480-600Zm0 520q-83 0-156-31.5T197-197q-54-54-85.5-127T80-480q0-83 31.5-156T197-763q54-54 127-85.5T480-880q83 0 156 31.5T763-763q54 54 85.5 127T880-480q0 83-31.5 156T763-197q-54 54-127 85.5T480-80Zm0-80q134 0 227-93t93-227q0-134-93-227t-227-93q-134 0-227 93t-93 227q0 134 93 227t227 93Zm0-320Z"/>
            </svg>
            Plus de détails
        </button>

        {#if show_popup}
            <div class="fixed z-20 top-0 left-0 w-screen h-screen bg-black/50"
                 onclick={() => closeDetails()}
                 transition:fade={{ duration: 150 }}></div>
            <div class="fixed z-30 top-1/12 left-0 w-full sm:w-5/6 h-11/12 bg-old-lace sm:rounded-r-xl p-4"
                 transition:slide={{ axis: 'x', duration: 300, easing: quintOut }}>
                {@render details()}
                <button class="absolute top-4 right-4 h-10 w-10 bg-brown-coffee text-old-lace p-2 rounded-full"
                        onclick={closeDetails} aria-label="close details">
                    <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px"
                         class="fill-current">
                        <path d="m256-200-56-56 224-224-224-224 56-56 224 224 224-224 56 56-224 224 224 224-56 56-224-224-224 224Z"/>
                    </svg>
                </button>
            </div>
        {/if}
    {/if}
</div>