<script lang="ts">
	import CompTitle from "$lib/components/presentation/but2/CompTitle.svelte";

	let opened_details_id: string | null = $state("ac_1");

	function select_details(detail_id: string) {
		if (opened_details_id === detail_id) {
			opened_details_id = null;
		} else {
			opened_details_id = detail_id;
		}
	}
</script>

<CompTitle title="Compétence 2 - Optimiser des applications"
           top_text="01 - 02"
           bottom_text="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore etdolore magna aliqua."/>


<details open={opened_details_id === 'ac_1'} class="group">
    <summary on:click|preventDefault={() => select_details('ac_1')} class="select-none cursor-none">
        <h3>AC 1 : Choisir des structures de données complexes adaptées au problème</h3>
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960">
            <path d="M480-344 240-584l56-56 184 184 184-184 56 56-240 240Z"/>
        </svg>
    </summary>

    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore etdolore magna
    aliqua.
</details>

<details open={opened_details_id === 'ac_2'} class="group">
    <summary on:click|preventDefault={() => select_details('ac_2')} class="select-none cursor-none">
        <h3>AC 2 : Utiliser des techniques algorithmiques adaptées pour des problèmes complexes</h3>
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960">
            <path d="M480-344 240-584l56-56 184 184 184-184 56 56-240 240Z"/>
        </svg>
    </summary>

    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore etdolore magna
    aliqua.
</details>

<details open={opened_details_id === 'ac_3'} class="group">
    <summary on:click|preventDefault={() => select_details('ac_3')} class="select-none cursor-none">
        <h3>AC 3 : Comprendre les enjeux et moyens de sécurisation des données et du code</h3>
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960">
            <path d="M480-344 240-584l56-56 184 184 184-184 56 56-240 240Z"/>
        </svg>
    </summary>

    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore etdolore magna
    aliqua.
</details>

<details open={opened_details_id === 'ac_4'} class="group">
    <summary on:click|preventDefault={() => select_details('ac_4')} class="select-none cursor-none">
        <h3>AC 4 : Évaluer l'impact environnemental et sociétal des solutions proposées</h3>
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960">
            <path d="M480-344 240-584l56-56 184 184 184-184 56 56-240 240Z"/>
        </svg>
    </summary>

    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore etdolore magna
    aliqua.
</details>