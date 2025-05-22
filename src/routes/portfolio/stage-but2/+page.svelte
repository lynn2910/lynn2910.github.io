<script lang="ts">
	import Navbar from "$lib/components/navigation/Navbar.svelte";
	import {base} from "$app/paths";
	import But2Grid from "$lib/components/illustrations/But2Grid.svelte";

	const links: { href: string, name: string }[] = [
		{href: '#', name: "Entreprise"},
		{href: '#', name: "Mission"},
		{href: '#', name: "Savoir-faire"},
	]
</script>

<Navbar>
    {#snippet left()}
        <a href={base || '/'}
           class="h-fit flex flex-row items-center gap-2 py-1 px-2 pr-3 rounded-4xl select-none border-2 border-old-lace text-old-lace cursor-pointer hover:bg-old-lace/25">
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" class="bi bi-arrow-left"
                 viewBox="0 0 16 16">
                <path fill-rule="evenodd"
                      d="M15 8a.5.5 0 0 0-.5-.5H2.707l3.147-3.146a.5.5 0 1 0-.708-.708l-4 4a.5.5 0 0 0 0 .708l4 4a.5.5 0 0 0 .708-.708L2.707 8.5H14.5A.5.5 0 0 0 15 8"/>
            </svg>
            <p>Accueil</p>
        </a>
    {/snippet}

    {#snippet main()}
        <div class="flex flex-col overflow-hidden sm:flex-row gap-10 h-full w-full items-center content-center justify-center">
            {#each links as link}
                <a class="hover:underline" href={link.href}>{link.name}</a>
            {/each}
        </div>
    {/snippet}
</Navbar>

<div class="w-screen h-screen relative">
    <!-- Grid -->
    <div class="absolute z-0 top-1/2 left-1/3 -translate-x-1/2 -translate-y-1/2">
        <But2Grid/>
    </div>
    <!-- Title -->
    <div class="absolute z-0 top-2/5 left-2/5 font-title font-extrabold">
        <h1 class="text-7xl ">Mon portfolio de stage</h1>
        <div class="relative text-6xl font-bold ml-64 mt-5 w-fit">
            <div class="absolute -bottom-1.5 mt-2 h-3 px-2 w-full bg-mountbatten-pink"></div>
            <h2>Cédric COLIN</h2>
        </div>
    </div>
    <!-- Paragraphe -->
    <p class="bg-old-lace absolute z-0 left-10 p-3 bottom-12 w-4/6">
        Bienvenue sur mon portfolio de stage de 2e année de BUT Informatique ! Je suis ravi de vous embarquer
        dans mon expérience en entreprise. Vous découvrirez un aperçu des connaissances que j'ai pu consolider pendant
        ma formation, notamment à travers le projet concret sur lequel j'ai travaillé. Mais au-delà de cette mission, ce
        portfolio mettra également en lumière comment ce stage a été l'occasion de mobiliser et de développer des
        savoirs-faire essentielles de ma formation. Alors, préparez-vous à explorer les savoir-faire que j'ai acquis et
        mis en œuvre durant ce stage passionnant !</p>
</div>

