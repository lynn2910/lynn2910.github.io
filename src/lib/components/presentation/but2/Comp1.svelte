<script lang="ts">
	import CompTitle from "$lib/components/presentation/but2/CompTitle.svelte";
	import {open_figures} from "$lib/figures.svelte";

	let opened_details_id: string | null = $state("ac_1");

	function select_details(detail_id: string) {
		if (opened_details_id === detail_id) {
			opened_details_id = null;
		} else {
			opened_details_id = detail_id;
		}
	}

</script>

<CompTitle title="Compétence 1 - Réaliser un développement d’application"
           top_text="01 - 01"
           bottom_text="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore etdolore magna aliqua."/>

<p on:click={() => open_figures([1])}>Ouvrir les figures</p>

<details open={opened_details_id === 'ac_1'} class="group">
    <summary on:click|preventDefault={() => select_details('ac_1')} class="select-none cursor-none">
        <h3>AC 1 : Élaborer et implémenter les spécifications fonctionnelles et non fonctionnelles à partir des
            exigences</h3>
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960">
            <path d="M480-344 240-584l56-56 184 184 184-184 56 56-240 240Z"/>
        </svg>
    </summary>

    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore etdolore magna
    aliqua.
</details>

<details open={opened_details_id === 'ac_2'} class="group">
    <summary on:click|preventDefault={() => select_details('ac_2')} class="select-none cursor-none">
        <h3>AC 2 : Appliquer des principes d’accessibilité et d’ergonomie</h3>
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960">
            <path d="M480-344 240-584l56-56 184 184 184-184 56 56-240 240Z"/>
        </svg>
    </summary>

    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore etdolore magna
    aliqua.
</details>

<details open={opened_details_id === 'ac_3'} class="group">
    <summary on:click|preventDefault={() => select_details('ac_3')} class="select-none cursor-none">
        <h3>AC 3 : Adopter de bonnes pratiques de conception et de programmation</h3>
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960">
            <path d="M480-344 240-584l56-56 184 184 184-184 56 56-240 240Z"/>
        </svg>
    </summary>

    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore etdolore magna
    aliqua.
</details>

<details open={opened_details_id === 'ac_4'} class="group">
    <summary on:click|preventDefault={() => select_details('ac_4')} class="select-none cursor-none">
        <h3>AC 4 : Vérifier et valider la qualité de l’application par les tests</h3>
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960">
            <path d="M480-344 240-584l56-56 184 184 184-184 56 56-240 240Z"/>
        </svg>
    </summary>

    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore etdolore magna
    aliqua.
</details>