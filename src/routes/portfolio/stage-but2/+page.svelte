<script lang="ts">
	import Navbar from "$lib/components/navigation/Navbar.svelte";
	import {base} from "$app/paths";
</script>

<Navbar top_padding="top-4.5">
    {#snippet left()}
        <a href={base || '/'}
           class="flex flex-row items-center gap-2 py-1 px-2 pr-3 rounded-4xl select-none border-2 border-old-lace text-old-lace cursor-pointer hover:bg-old-lace/25">
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" class="bi bi-arrow-left"
                 viewBox="0 0 16 16">
                <path fill-rule="evenodd"
                      d="M15 8a.5.5 0 0 0-.5-.5H2.707l3.147-3.146a.5.5 0 1 0-.708-.708l-4 4a.5.5 0 0 0 0 .708l4 4a.5.5 0 0 0 .708-.708L2.707 8.5H14.5A.5.5 0 0 0 15 8"/>
            </svg>
            <p>Accueil</p>
        </a>
    {/snippet}

    {#snippet main()}
        <div class="flex flex-row gap-10 justify-center w-full">
            A B C

            <p>{base}</p>
        </div>
    {/snippet}
</Navbar>