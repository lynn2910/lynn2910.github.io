<script lang="ts">
	import CompTitle from "$lib/components/presentation/but2/CompTitle.svelte";
	import FigureLink from "$lib/components/navigation/FigureLink.svelte";
	import FiguresCarousel from "$lib/components/navigation/FiguresCarousel.svelte";
	import {onMount} from "svelte";

	const comp_id = 'comp_1_opened_detail_id';

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
</script>

<CompTitle title="Compétence 1 - Réaliser un développement d’application"
           top_text="01 - 01"
           bottom_text="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore etdolore magna aliqua."/>

<a class="btn w-fit" href="#synthese_comp_1">
    <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px"
         class="fill-old-lace">
        <path d="M480-80 200-360l56-56 184 183v-647h80v647l184-184 56 57L480-80Z"/>
    </svg>
    Directement accéder à la synthèse
</a>

<details open={opened_details_id === 'ac_1'} class="group">
    <summary on:click|preventDefault={() => select_details('ac_1')} class="select-none cursor-none">
        <h3>AC 1 : Élaborer et implémenter les spécifications fonctionnelles et non fonctionnelles à partir des
            exigences</h3>
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960">
            <path d="M480-344 240-584l56-56 184 184 184-184 56 56-240 240Z"/>
        </svg>
    </summary>

    <div class="h-96">
        <FiguresCarousel figure_ids={[31, 32, 34, 35]}/>
    </div>

    <hr class="mb-3">

    <div class="text-justify">
        <p>
            J'ai activement contribué à l'<b>élaboration des spécifications techniques</b> du logiciel, avec pour
            objectif de définir son <b>périmètre fonctionnel</b>, de préciser les <b>besoins et fonctionnalités</b>, et
            d'établir des<b>fondations solides pour son évolutivité et sa maintenabilité</b>. Ce travail a exigé une<b>compréhension
            approfondie du processus</b>des comités d'engagement (CE) DSIL, ainsi qu'une immersion dans les méthodes de
            travail de la responsable Études & Développement concernant ces comités.
        </p>
        <br>
        <p>
            J'ai conçu un
            <FigureLink figure_id={35}>Modèle Logique de Données (MLD) complet</FigureLink>
            , en veillant à ce qu'il soit <b>évolutif</b> et
            capable d'intégrer de nouvelles fonctionnalités à l'avenir. Parallèlement, j'ai conçu une <b>maquette
            exhaustive avec Figma</b>. Pour cela, j'ai réutilisé la charte graphique existante de l'entreprise et me
            suis inspiré des outils internes à disposition des employés, tout en gardant à l'esprit les <b>workflows</b>.
            Le prototypage a également été un élément clé, permettant de simuler la navigation et les pop-ups pour
            tester la maquette comme lors d'une véritable démonstration. Cette maquette a été ajustée à plusieurs
            reprises, grâce aux <b>retours de l'équipe</b>, afin d'en améliorer l'<b>ergonomie</b> et le <b>workflow</b>
            (qui représente la suite des tâches ou opérations effectuées par une personne ou un système).
        </p>
        <br>
        <p>
            Dans le cadre de ces spécifications techniques, j'ai aussi mis en œuvre des outils de gestion de projet.<br>
            J'ai ainsi élaboré un
            <FigureLink figure_id={32}>diagramme de Gantt</FigureLink>
            et un <b>Kanban</b> en utilisant la méthode agile, l'ensemble étant géré via le logiciel YouTrack.
        </p>
        <br>
        <p></p>
    </div>
</details>

<details open={opened_details_id === 'ac_2'} class="group">
    <summary on:click|preventDefault={() => select_details('ac_2')} class="select-none cursor-none">
        <h3>AC 2 : Appliquer des principes d’accessibilité et d’ergonomie</h3>
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960">
            <path d="M480-344 240-584l56-56 184 184 184-184 56 56-240 240Z"/>
        </svg>
    </summary>

    <div class="h-96">
        <FiguresCarousel figure_ids={[37, 36]}/>
    </div>

    <hr class="mb-3">

    <div class="text-justify">
        <p>
            L'application des principes d'<b>ergonomie</b> a constitué une part essentielle de mon travail lors de la
            conception de la maquette. J'ai porté une attention particulière à la <b>variété des utilisateurs</b> – y
            compris
            les non-informaticiens – qui allaient interagir avec le logiciel final. Les retours de l'équipe ont été
            cruciaux et m'ont permis d'affiner plusieurs aspects, notamment la <b>structure générale de certaines pages,
            l'emplacement d'informations clés, et la pertinence ou l'ajout de certains éléments et données</b>.
        </p>
        <br>
        <p>
            Côté code, j'ai veillé à appliquer les <b>règles de standardisation HTML, CSS et JavaScript</b>, ainsi que
            les <b>règles d'accessibilité</b>. Cette démarche a permis de garantir que le logiciel puisse être utilisé
            par un public plus large, incluant des personnes malvoyantes. De plus, j'ai légèrement <b>retravaillé
            l'ergonomie de certains éléments existants</b> au sein du framework pour les harmoniser avec le style global
            du site, assurant ainsi une expérience utilisateur cohérente et agréable.
        </p>
    </div>
</details>

<details open={opened_details_id === 'ac_3'} class="group">
    <summary on:click|preventDefault={() => select_details('ac_3')} class="select-none cursor-none">
        <h3>AC 3 : Adopter de bonnes pratiques de conception et de programmation</h3>
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960">
            <path d="M480-344 240-584l56-56 184 184 184-184 56 56-240 240Z"/>
        </svg>
    </summary>

    <div class="h-96">
        <FiguresCarousel figure_ids={[35, 33, 29, 24, 22, 11]}/>
    </div>

    <hr class="mb-3">

    <div>
        <p>
            Tout au long du développement, j'ai eu l'opportunité d'appliquer le <b>modèle architectural MVC</b>, utilisé
            au sein du framework maison de l'entreprise. Dès le début du projet, j'ai mis en place des <b>règles
            strictes de nommage</b> (pour les variables, les commentaires, et les commits), des principes d'<b>ergonomie
            du code</b>et une<b>architecture logicielle rigoureuse</b>, tout en conservant une flexibilité nécessaire
            aux solutions techniques. Cette approche a été essentielle pour maintenir une <b>cohérence</b> sur
            l'ensemble du programme, ce qui s'est avéré particulièrement bénéfique pour le <b>débogage</b> et la <b>transmission
            des connaissances</b>.
        </p>
        <br>
        <p>
            J'ai également apporté de <b>nombreuses améliorations au framework maison</b> de Néolia. J'ai notamment
            corrigé un<b>bug dans le système de templating des fichiers HTML</b>, qui provoquait des collisions de
            variables. Plus significativement, j'ai partiellement <b>recodé le routeur</b>, responsable de
            l'acheminement des requêtes (URLs) vers les contrôleurs appropriés. L'ancien système ne gérait pas les query
            strings (par exemple,<code>/search?q=hello</code> aurait recherché un contrôleur nommé <code>"search?q=hello"</code>).
            J'ai donc implémenté une <b>différenciation des <i>query strings</i></b>, indispensable pour le système de
            filtrage que j'ai développé.
        </p>
        <br>
        <p>
            Un autre défi a été la résolution d'un <b>bug avec l'éditeur de texte riche TinyMCE</b>, largement utilisé
            par l'entreprise sur d'autres projets, y compris
            <FigureLink figure_id={11}>dans mon projet</FigureLink>
            . Cet éditeur entrait en collision avec une librairie JavaScript
            <i>legacy</i>
            qu'il n'était pas envisageable de retirer ou de modifier. Après des recherches approfondies, notamment via
            une mise à jour de TinyMCE, j'ai trouvé une version compatible qui n'introduisait aucun changement majeur,
            résolvant ainsi le conflit sans impacter l'existant.
        </p>
        <br>
        <p>
            Enfin, j'ai pu implémenter un <b>nouveau système modulable d'envoi de courriels</b> et un système <b>globalisé
            de génération de
            <FigureLink figure_id={29}>documents Excel</FigureLink>
        </b>. Ce dernier module permet de modifier très facilement le thème, les
            couleurs, les noms et de générer des documents complexes avec un minimum d'effort, le tout sans dégradation
            des performances.
        </p>
    </div>

</details>

<details open={opened_details_id === 'ac_4'} class="group">
    <summary on:click|preventDefault={() => select_details('ac_4')} class="select-none cursor-none">
        <h3>AC 4 : Vérifier et valider la qualité de l’application par les tests</h3>
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960">
            <path d="M480-344 240-584l56-56 184 184 184-184 56 56-240 240Z"/>
        </svg>
    </summary>

    <div>
        <p>
            La <b>vérification et la validation de la qualité</b> ont constitué un processus concret et particulièrement
            important tout au long de ma mission. J'ai eu l'opportunité d'échanger régulièrement avec mes collègues sur
            l'avancement du projet, et nos <b>réunions régulières</b> ont permis d'intégrer des modifications bienvenues
            au fur
            et à mesure. Ces ajustements pouvaient être de petits détails, comme la précision que les comités
            d'engagement concernaient le service "DSIL" ou l'ajout d'informations spécifiques. Mais ils incluaient aussi
            des changements plus conséquents, à l'image de la refonte du système de "Tâches" en un système de "<b>Reste
            à faire</b>", qui permet désormais d'inclure des textes plus longs et détaillés, et non plus de simples
            notes courtes.
        </p>
        <br>
        <p>
            Les techniques de débogage mises en œuvre ont été directes : j'ai utilisé des messages dans la console,
            l'inspecteur d'éléments du navigateur, et j'ai eu recours au <b>développement en binôme</b> (<b>pair
            developing</b>) avec mon tuteur pour les bugs les plus récalcitrants. Un exemple notable fut un problème
            d'importation de la librairie TinyMCE, dont le code était mystérieusement tronqué.
        </p>
        <br>
        <p>
            À la fin de chaque semaine, je consacrais systématiquement une à deux heures à une <b>vérification
            approfondie</b>
            de l'existant. Cela incluait de passer en revue ce qui avait été fait et de m'assurer que mes
            implémentations étaient <b>correctement intégrées et fonctionnelles</b>.
        </p>
        <br>
        <p>
            J'ai rapidement saisi l'importance des <b>revues par les pairs</b>. Les échanges avec Paul, Aristote,
            Jonathan et Stévann ont été d'une aide précieuse. Leurs retours m'ont permis de corriger de nombreux aspects
            rapidement et de découvrir des solutions que je n'aurais pas envisagées seul.
        </p>
    </div>
</details>

<hr class="my-7">

<p id="synthese_comp_1">
    En synthèse, j'ai développé une <b>solide expertise dans l'élaboration et l'implémentation de spécifications
    fonctionnelles et techniques</b>, de la conception de <b>Modèles Logiques de Données (MLD)</b> évolutifs à la
    création de<b>maquettes UI/UX interactives sur Figma</b>, en intégrant les retours utilisateurs pour affiner
    l'ergonomie et les workflows. J'ai acquis une <b>maîtrise des principes d'ergonomie et d'accessibilité</b>, en
    concevant des interfaces intuitives et en appliquant les standards de code (HTML, CSS, JavaScript) pour une
    expérience utilisateur optimale. Ma capacité à <b>adopter de bonnes pratiques de conception et de programmation</b>
    s'est affirmée à travers l'application du modèle MVC, la normalisation du code, l'amélioration du framework maison,
    et la résolution de problèmes complexes (comme les collisions de librairies), menant à des solutions modulables et
    performantes. Enfin, j'ai perfectionné mes compétences en <b>vérification et validation de la qualité</b>, en
    intégrant des techniques de débogage, en valorisant les revues par les pairs, et en effectuant des contrôles
    rigoureux pour garantir la robustesse et la fiabilité de l'application avant son déploiement.
</p>