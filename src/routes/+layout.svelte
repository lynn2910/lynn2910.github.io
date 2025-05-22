<script lang="ts">
	import '../app.css';
	import {page} from '$app/state'
	import {base} from '$app/paths'
	import Navbar from "$lib/components/navigation/Navbar.svelte";
	import Cursor from "$lib/components/Cursor.svelte";

	let {children} = $props();

	const hideNavbarForPages = [
		/^\/portfolio/
	];

	let shouldHideNavbar = $derived(hideNavbarForPages.some((p) => p.test(page.url.pathname)));
	let marginTop = $derived(shouldHideNavbar ? '' : 'mt-16');


	const leftLinks = [
		{name: 'github', href: 'https://github.com/lynn2910', target: '_blank'},
		{name: 'email', href: 'mailto:cedric.colin35@gmail.com'}
	]
</script>

<Cursor/>

<Navbar hidden={shouldHideNavbar}>
    {#snippet left()}
        <a href="{base}" class="font-semibold text-old-lace" title="Page d'accueil" aria-label="Page d'accueil">
            <svg data-v-99c4ad3f="" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 56 52"
                 class="fill-none w-6 h-6">
                <path data-v-99c4ad3f=""
                      d="M55.06 23.528L46.5729 15.0544V5.26584C46.5729 3.49594 45.1364 2.06158 43.3611 2.06158C41.5899 2.06158 40.1534 3.49594 40.1534 5.26584V8.64504L33.8341 2.3355C30.7098 -0.782202 25.2776 -0.776672 22.1604 2.34114L0.939536 23.528C-0.313179 24.7812 -0.313179 26.809 0.939536 28.0603C2.19282 29.3132 4.22777 29.3132 5.4806 28.0603L26.6994 6.87288C27.3907 6.18635 28.609 6.18635 29.2966 6.87085L50.5191 28.0603C51.1484 28.6868 51.9688 28.9984 52.789 28.9984C53.611 28.9984 54.4328 28.6865 55.0601 28.0603C56.3133 26.8092 56.3133 24.7814 55.06 23.528Z"
                      class="fill-current"></path>
                <path data-v-99c4ad3f=""
                      d="M29.1025 13.4548C28.4933 12.8484 27.5069 12.8484 26.8996 13.4548L8.45626 31.8174C8.16508 32.1073 8 32.5031 8 32.9161V46.3091C8 49.4519 10.5586 52 13.7142 52H22.8455V37.9163H33.1545V52H42.2859C45.4414 52 48 49.4519 48 46.3092V32.9161C48 32.5031 47.8364 32.1073 47.5437 31.8174L29.1025 13.4548Z"
                      class="fill-current"></path>
            </svg>
        </a>
    {/snippet}

    {#snippet main()}

        <div class="flex flex-row items-center justify-center my-auto gap-10 w-full">
            <a href="{base}/portfolio/stage-but2">Portfolio stage BUT2</a>
        </div>

    {/snippet}

    {#snippet right()}
        <div class="flex flex-row items-center justify-end gap-2">
            {#each leftLinks as link}
                <a href={link.href} aria-label="link-to-{link.name}" target={link.target || '_parent'}
                   class="flex flex-row items-center cursor-pointer group select-none hover:text-paynes-gray">
                    <p class="font-semibold mr-2">{link.name.toUpperCase()}</p>
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960"
                         class="fill-current w-5 group-hover:-translate-y-1 transition duration-100 ease-in-out">
                        <path d="m256-240-56-56 384-384H240v-80h480v480h-80v-344L256-240Z"/>
                    </svg>
                </a>
            {/each}
        </div>
    {/snippet}
</Navbar>

<div class={'' + marginTop}>
    {@render children()}
</div>