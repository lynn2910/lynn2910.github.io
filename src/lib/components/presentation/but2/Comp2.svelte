<script lang="ts">
	import CompTitle from "$lib/components/presentation/but2/CompTitle.svelte";
	import {onMount} from "svelte";
	import FiguresCarousel from "$lib/components/navigation/FiguresCarousel.svelte";
	import FigureLink from "$lib/components/navigation/FigureLink.svelte";
	import {chart} from 'svelte-apexcharts?client';
	import SingleFigure from "$lib/components/navigation/SingleFigure.svelte";

	const comp_id = 'comp_2_opened_detail_id';

	let opened_details_id: string | null = $state("ac_1");

	onMount(() => {
		if (localStorage.getItem(comp_id)) {
			opened_details_id = localStorage.getItem(comp_id);
		}
	})

	function select_details(detail_id: string) {
		if (opened_details_id === detail_id) {
			opened_details_id = null;
			localStorage.removeItem(comp_id)
		} else {
			opened_details_id = detail_id;
			localStorage.setItem(comp_id, opened_details_id)
		}
	}

	// =======================================
	//
	//  CHART
	//
	// =======================================

	const options = {
		series: [
			{
				name: 'Sans optimisations',
				data: [4.2, 2.2, 1.7, 1.48]
			},
			{
				name: 'Avec batch query',
				data: [2.19, 0.93, 1.43, 1.41]
			},
			{
				name: 'Avec batch query et cache',
				data: [0.25, 0.13, 1.4, 1.35]
			},
			{
				name: 'Avec batch query, cache et index en bdd',
				data: [0.18, 0.09, 1.17, 1.21]
			},
		],
		chart: {
			height: 350,
			width: "100%",
			type: "bar",
			toolbar: {
				show: false
			}
		},
		plotOptions: {
			bar: {
				horizontal: false,
				columnWidth: '55%',
				borderRadius: 3,
				borderRadiusApplication: 'end'
			}
		},
		dataLabels: {
			enabled: false,
			formatter: function (val: number) {
				return val.toFixed(2) + " s";
			}
		},
		stroke: {
			show: true,
			width: 2,
			colors: ['transparent']
		},
		xaxis: {
			categories: ['Calendrier', 'Liste projets', 'Ordre du jour', 'Relevés de décisions'],
			title: {
				text: "Pages"
			}
		},
		yaxis: {
			title: {
				text: "Temps en secondes"
			}
		},
		fill: {
			opacity: 1
		},
		tooltip: {
			y: {
				formatter: function (val: number) {
					return val + " s";
				}
			}
		}
	};
</script>

<CompTitle title="Compétence 2 - Optimiser des applications"
           top_text="01 - 02"
           bottom_text="Proposer des applications optimisées (temps, précision, ressources) via la modélisation et des choix algorithmiques justifiés."/>

<a class="btn w-fit" href="#synthese_comp_2">
    <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px"
         class="fill-old-lace">
        <path d="M480-80 200-360l56-56 184 183v-647h80v647l184-184 56 57L480-80Z"/>
    </svg>
    Directement accéder à la synthèse
</a>

<details open={opened_details_id === 'ac_1'} class="group text-justify">
    <summary on:click|preventDefault={() => select_details('ac_1')} class="select-none cursor-none">
        <h3>AC 1 : Choisir des structures de données complexes adaptées au problème</h3>
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960">
            <path d="M480-344 240-584l56-56 184 184 184-184 56 56-240 240Z"/>
        </svg>
    </summary>

    <div class="h-96">
        <FiguresCarousel figure_ids={[2, 13]}/>
    </div>

    <hr class="mb-3">

    <div>
        <p>
            Lors de ma mission, j'ai été confronté à la nécessité de traiter de <b>nombreuses tâches complexes et
            gourmandes en ressources</b>. Un exemple concret a été la
            <FigureLink figure_id={2}>gestion du calendrier</FigureLink>
            , où, à partir d'une liste initiale de projets planifiés, il a fallu les
            <FigureLink figure_id={2}>organiser par mois</FigureLink>
            , puis
            <FigureLink figure_id={13}>classifier les acteurs par rôle et par projet</FigureLink>
            .
        </p>
        <br>
        <p>
            Pour adresser ces problématiques d'optimisation, j'ai eu recours à des <b>tableaux associatifs</b>
            (<b>équivalents aux <i>hashmaps</i> en PHP</b>) et des listes, en utilisant intelligemment les index pour
            assurer un <b>accès très rapide aux données</b>. Cette approche a non seulement permis de structurer
            efficacement l'information, mais également de la préparer de manière optimale pour le <i>templating</i>.
        </p>
        <br>
        <p>
            Cette expérience m'a également permis d'expérimenter diverses <b>techniques d'optimisation</b>. L'objectif
            était d'obtenir un résultat "global" en traitant et en triant ces informations de manière <b>hautement
            efficace, de l'ordre de <code>O(n)</code></b>. Cette méthode a permis d'éviter de multiples petites requêtes
            d'accès aux données, qui auraient été beaucoup plus coûteuses en termes de performances.
        </p>
    </div>
</details>

<details open={opened_details_id === 'ac_2'} class="group text-justify">
    <summary on:click|preventDefault={() => select_details('ac_2')} class="select-none cursor-none">
        <h3>AC 2 : Utiliser des techniques algorithmiques adaptées pour des problèmes complexes</h3>
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960">
            <path d="M480-344 240-584l56-56 184 184 184-184 56 56-240 240Z"/>
        </svg>
    </summary>


    <div class="h-96">
        <FiguresCarousel figure_ids={[38, 39]}/>
    </div>

    <hr class="mb-3">

    <div>
        <p>
            Une des fonctionnalités essentielles requises était la <b>gestion des acteurs des projets</b>, s'appuyant
            sur l'annuaire d'entreprise, le <b>LDAP</b>. Après une première implémentation, un problème majeur est
            rapidement apparu : des <b>temps de chargement de page excessivement longs</b>, atteignant jusqu'à 4
            secondes pour le calendrier.
        </p>
        <br>
        <p>
            Une analyse approfondie a identifié deux coupables principaux : le <b>LDAP</b> et les <b>multiples requêtes
            individuelles à la base de données</b>. Prenons l'exemple du calendrier pour illustrer le problème. Avec le
            jeu de données mis à ma disposition, il y avait <code>36</code> projets planifiés, chacun impliquant en
            moyenne <code>5</code> acteurs.
        </p>
        <br>
        <p>
            Le simple fait de récupérer la liste des acteurs générait environ <code>24 ms</code> par requête, soit un
            total de <code>864 ms</code>(<code>0,8 s</code>) pour tous les projets. Cependant, l'intégration du LDAP
            augmentait considérablement ce temps. Une requête à l'annuaire prend en moyenne <code>16 ms</code>. Pour nos
            <code>180</code> acteurs (<code>36 projets * 5 acteurs/projet</code>), cela représentait <code>2880
            ms</code> (<code>2,8 s</code>) de requêtes LDAP supplémentaires. Ce problème de performance était récurrent
            sur toutes les pages faisant appel aux informations des acteurs.
        </p>
        <br>
        <p>
            Pour y remédier, j'ai recherché et mis en œuvre trois solutions clés : les <b>requêtes par lots</b> (<b>batch
            queries</b>), la <b>mise en cache</b> et l'utilisation des <b>index</b>.
        </p>
        <hr class="my-2">
        <div class="flex flex-col sm:flex-row gap-5 mt-5">
            <div class="flex-1/3 flex flex-col">
                <p>
                    Les <b>requêtes par lots</b> reposent sur un principe simple : au lieu d'interroger la base de
                    données projet par projet, je récupère ma liste complète de projets et demande à la base de données
                    de me renvoyer <b>tous les acteurs associés à ces projets en une seule requête</b>. Ainsi, les<code>180</code>
                    acteurs sont récupérés globalement, et le filtrage ainsi que l'attribution aux projets respectifs
                    sont ensuite effectués directement dans le code, ce qui ne prend que <i>quelques millisecondes</i>.
                    Juste avant de "<i>projeter</i>" les acteurs dans leurs projets, leurs informations détaillées (nom,
                    initiales, etc.) sont récupérées de manière optimisée.
                </p>

                <a href="https://fr.wikipedia.org/wiki/Traitement_par_lots" target="_blank"
                   class="btn w-fit my-auto">
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor"
                         class="bi bi-wikipedia" viewBox="0 0 16 16">
                        <path d="M8.835 3.003c.828-.006 2.688 0 2.688 0l.033.03v.288q0 .12-.133.12c-.433.02-.522.063-.68.29-.087.126-.258.393-.435.694l-1.52 2.843-.043.089 1.858 3.801.113.031 2.926-6.946q.152-.42-.044-.595c-.132-.114-.224-.18-.563-.195l-.275-.014a.16.16 0 0 1-.096-.035.1.1 0 0 1-.046-.084v-.289l.042-.03h3.306l.034.03v.29q0 .117-.133.117-.65.03-.962.281a1.64 1.64 0 0 0-.488.704s-2.691 6.16-3.612 8.208c-.353.672-.7.61-1.004-.019A224 224 0 0 1 8.044 8.81c-.623 1.285-1.475 3.026-1.898 3.81-.411.715-.75.622-1.02.019-.45-1.065-1.131-2.519-1.817-3.982-.735-1.569-1.475-3.149-1.943-4.272-.167-.4-.293-.657-.412-.759q-.18-.15-.746-.18Q0 3.421 0 3.341v-.303l.034-.03c.615-.003 3.594 0 3.594 0l.034.03v.288q0 .119-.15.118l-.375.016q-.483.02-.483.288-.002.125.109.4c.72 1.753 3.207 6.998 3.207 6.998l.091.023 1.603-3.197-.32-.71L6.24 5.095s-.213-.433-.286-.577l-.098-.196c-.387-.77-.411-.82-.865-.88-.137-.017-.208-.035-.208-.102v-.304l.041-.03h2.853l.075.024v.303q0 .104-.15.104l-.206.03c-.523.04-.438.254-.09.946l1.057 2.163 1.17-2.332c.195-.427.155-.534.074-.633-.046-.055-.202-.144-.54-.158l-.133-.015a.16.16 0 0 1-.096-.034.1.1 0 0 1-.045-.085v-.288l.041-.03Z"/>
                    </svg>
                    Voir la définition sur Wikipédia
                </a>
            </div>
            <div class="flex-1/3">
                <SingleFigure figure_id={38} show_text={false}/>
            </div>
        </div>
        <div class="flex flex-col sm:flex-row gap-5 mt-5">
            <div class="flex-1/3 flex flex-col">
                <p>
                    Concernant les accès répétés au LDAP, un <b>double système de cache</b> a été implémenté. Un <b>premier
                    cache en base de données</b> permet de stocker durablement les noms, prénoms et initiales des
                    acteurs. Un <b>deuxième cache, cette fois en mémoire dans le code</b>, gère les situations où les
                    informations d'un acteur ne sont pas encore présentes dans le cache. Dans ce cas, toutes les
                    demandes de mise en cache sont stockées. Une fois que le LDAP répond avec les données et que la base
                    de données a été mise à jour avec ces informations, le cache en mémoire est également mis à jour
                    pour répondre à toutes les requêtes en attente.
                </p>
            </div>
            <div class="flex-1/3">
                <SingleFigure figure_id={39} show_text={false}/>
            </div>
        </div>
        <br>
        <p>
            Enfin, l'<b>utilisation d'index</b> a été une optimisation cruciale, bien que moins visible de prime abord.
            Elle s'est avérée particulièrement efficace pour accélérer les recherches sur des champs spécifiques
            comme les noms de projets, les initiales et les noms d'acteurs, réduisant significativement les
            temps d'accès lors des requêtes de filtrage.
        </p>

        <h2 class="mt-4 text-2xl">Voici une comparaison des différentes optimisations appliquées sur chaque page</h2>

        <div use:chart={options}/>
    </div>
</details>

<details open={opened_details_id === 'ac_3'} class="group text-justify">
    <summary on:click|preventDefault={() => select_details('ac_3')} class="select-none cursor-none">
        <h3>AC 3 : Comprendre les enjeux et moyens de sécurisation des données et du code</h3>
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960">
            <path d="M480-344 240-584l56-56 184 184 184-184 56 56-240 240Z"/>
        </svg>
    </summary>

    <div>
        <p>
            La <b>sécurisation de l'application</b> a représenté un enjeu majeur tout au long du développement. Il était
            essentiel de protéger les données et de garantir l'intégrité du système contre les menaces potentielles.
        </p>
        <br>
        <p>
            Ma première ligne de défense a été la <b>sanitisation rigoureuse des données en entrée</b>. Qu'il s'agisse
            de textes, de nombres ou d'autres types d'informations, j'ai mis en place des <b>conditions strictes</b>
            pour chaque donnée soumise par l'utilisateur. J'ai également porté une attention particulière à la <b>détection
            de scripts HTML malveillants</b> dans les champs de texte enrichi, comme les descriptions de projets ou les
            décisions des comités d'engagement DSIL. Pour ce faire, j'ai eu recours aux <b>expressions régulières
            (Regex)</b>, qui sont des séquences de caractères formant un motif de recherche puissant. Par exemple,
            l'expression<code>/&lt;\/?script[^&gt;]*&gt;/gm</code> m'a permis de détecter efficacement les balises de
            script ouvrantes ou fermantes, tout en ignorant les attributs qui leur seraient éventuellement associés,
            empêchant ainsi l'injection de code malicieux (Ce n'est évidemment pas la seule vérification).
        </p>
        <br>
        <p>
            En complément de la sécurisation des entrées, j'ai mis en place un <b>système de gestion des permissions
            strict sur chaque route de l'application</b>. Cela signifie que l'accès aux fonctionnalités et aux données
            est conditionné par le rôle de l'utilisateur, et que seules les actions nécessaires sont autorisées pour
            chaque profil. Cette approche par "moindre privilège" garantit que même en cas de tentative d'accès non
            autorisé, le périmètre des actions possibles est fortement limité.
        </p>
    </div>
</details>

<details open={opened_details_id === 'ac_4'} class="group text-justify">
    <summary on:click|preventDefault={() => select_details('ac_4')} class="select-none cursor-none">
        <h3>AC 4 : Évaluer l'impact environnemental et sociétal des solutions proposées</h3>
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960">
            <path d="M480-344 240-584l56-56 184 184 184-184 56 56-240 240Z"/>
        </svg>
    </summary>

    <p>
        L'évaluation de l'impact environnemental et sociétal des solutions développées n'est pas toujours une
        composante directe du développement logiciel, mais elle est intrinsèquement liée aux choix techniques et
        architecturaux. Bien que mon rôle principal ait été axé sur l'implémentation fonctionnelle et la
        performance, j'ai abordé cette dimension de manière indirecte mais significative.
    </p>
    <br>
    <p>
        Un des aspects majeurs a été l'<b>optimisation des performances et la réduction de la consommation de
        ressources</b>. En diminuant drastiquement les temps de chargement des pages et le nombre de requêtes à la base
        de données et au LDAP, comme détaillé plus haut, j'ai directement contribué à une <b>meilleure efficacité
        énergétique</b> du serveur. Moins de requêtes et de traitements intensifs signifient une charge serveur réduite,
        ce qui se traduit par une<b>consommation électrique moindre</b> et, par extension, un impact environnemental
        diminué.
    </p>
    <br>
    <p>
        Sur le plan sociétal, l'amélioration de l'<b>ergonomie</b> et de l'<b>accessibilité</b> a un impact direct sur
        l'expérience utilisateur. Rendre l'application plus intuitive et plus rapide à utiliser permet aux employés, y
        compris les non-informaticiens, de travailler plus efficacement. Cela <b>réduit la frustration, améliore la
        productivité</b> et <b>favorise une meilleure acceptation de l'outil</b>. En centralisant la gestion des projets
        et des comités, l'application facilite la collaboration et la transparence, contribuant à une <b>meilleure
        organisation interne</b> et à une <b>réduction du temps perdu</b> en communications dispersées. De plus, la
        fiabilisation et la sécurisation des données renforcent la confiance des utilisateurs dans le système, assurant
        que les informations cruciales des projets sont protégées.
    </p>
</details>

<p id="synthese_comp_2">
    En synthèse, j'ai acquis une expérience solide dans l'<b>optimisation d'applications</b>, en commençant par la
    capacité à <b>choisir des structures de données complexes et adaptées</b> (tableaux associatifs, listes avec
    indexation intelligente) pour gérer des tâches gourmandes en ressources et atteindre une efficacité
    en<code>O(n)</code> . J'ai ensuite appliqué des <b>techniques algorithmiques avancées</b> pour résoudre des
    problèmes de performance critiques, notamment en implémentant des requêtes par lots, un double système de cache, et
    l'utilisation d'index pour remédier aux lenteurs du LDAP et aux requêtes multiples. Parallèlement, j'ai acquis une
    compréhension approfondie des <b>enjeux et moyens de sécurisation des données et du code</b>, mettant en œuvre la
    sanitisation des entrées (via Regex), une gestion stricte des permissions et un stockage sécurisé des informations.
    Enfin, j'ai pris conscience de l'<b>impact environnemental et sociétal</b> de mes solutions, reconnaissant que
    l'optimisation des performances contribue à une meilleure efficacité énergétique et que l'amélioration de
    l'ergonomie et de la fiabilité favorise l'adoption et la productivité des utilisateurs.
</p>