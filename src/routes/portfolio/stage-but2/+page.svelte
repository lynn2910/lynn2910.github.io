<script lang="ts">
	import Navbar from "$lib/components/navigation/Navbar.svelte";
	import {base} from "$app/paths";
	import But2Grid from "$lib/components/illustrations/But2Grid.svelte";
	import PinkTitle from "$lib/components/presentation/PinkTitle.svelte";
	import MissionCard from "$lib/components/presentation/MissionCard.svelte";
	import TabsContainer, {type Tab} from "$lib/components/navigation/TabsContainer.svelte";
	import Comp1 from "$lib/components/presentation/but2/Comp1.svelte";
	import Comp2 from "$lib/components/presentation/but2/Comp2.svelte";
	import {set_figures} from "$lib/figures.svelte";
	import SingleFigure from "$lib/components/navigation/SingleFigure.svelte";
	import {onMount} from "svelte";

	const links: { href: string, name: string }[] = [
		{href: '#entreprise', name: "Entreprise"},
		{href: '#mission', name: "Mission"},
		{href: '#savoir_faire', name: "Savoir-faire"},
	];

	const savoir_faire_tabs: Tab[] = [
		{name: "Compétence 1", id: "comp_1"},
		{name: "Compétence 2", id: "comp_2"}
	];

	let savoir_faire_active_tab: string = $state(savoir_faire_tabs[0]?.id);

	onMount(() => {
		if (localStorage.getItem("active_but2_savoir_tab")) {
			savoir_faire_active_tab = localStorage.getItem("active_but2_savoir_tab")!;
		}
	})

	function handleTabClick(tab_id: string) {
		savoir_faire_active_tab = tab_id;
		localStorage.setItem("active_but2_savoir_tab", tab_id)
	}

	const figures = [
		{id: 1, url: '/images/but2/add_document_for_ce.png', text: "Interface d'ajout d'un support de présentation"},
		{id: 2, url: '/images/but2/calendar.png', text: "Vue d'ensemble du calendrier des comités d'engagement DSIL"},
		{id: 3, url: '/images/but2/calendar_add_project_from_list.png'},
		{
			id: 4,
			url: '/images/but2/calendar_dragging_card_whole.png',
			text: "Vue d'ensemble du calendrier quand on déplace une carte déjà existante dans le calendrier"
		},
		{
			id: 5,
			url: '/images/but2/calendar_gestion_absents.png',
			text: "Interface de gestion des membres absents pour un comité d'engagement DSIL"
		},
		{id: 6, url: '/images/but2/calendar_list_projects.png', text: "Liste des projets dans le calendrier"},
		{
			id: 7,
			url: '/images/but2/calendar_modalite_reunions.png',
			text: "Interface de gestion des modalités de réunion d'un comité d'engagement DSIL"
		},
		{
			id: 8,
			url: '/images/but2/calendar_per_month_popup.png',
			text: "Menu déroulant permettant d'afficher/effectuer des actions en rapport avec un comité d'engagement DSIL précis"
		},
		{
			id: 9,
			url: '/images/but2/calendar_popup_ce_details.png',
			text: "Popup des détails d'un projet dans un comité d'engagement DSIL"
		},
		{id: 10, url: '/images/but2/calendar_title.png', text: "Barre de titre du calendrier"},
		{
			id: 11,
			url: '/images/but2/fiche_project_edit_description.png',
			text: "Interface de modification de la fiche projet"
		},
		{id: 12, url: '/images/but2/fiche_projet.png', text: "Vue d'ensemble d'une fiche de projet typique"},
		{id: 13, url: '/images/but2/fiche_projet_acteurs.png', text: "Affichage des acteurs d'un projet"},
		{
			id: 14,
			url: '/images/but2/fiche_projet_add_actor_query_list.png',
			text: "Sélection du nouveau acteur depuis une recherche dans l'annuaire de l'entreprise"
		},
		{
			id: 15,
			url: '/images/but2/fiche_projet_add_actor_select.png',
			text: "Sélection du rôle du nouveau acteur dans le projet"
		},
		{
			id: 16,
			url: '/images/but2/fiche_projet_ce_infos.png',
			text: "Zone de la fiche projet dédiée à la modification des informations du comité d'engagement associé."
		},
		{
			id: 17,
			url: '/images/but2/fiche_projet_date_demarrage.png',
			text: "Modification de la date de démarrage d'un projet"
		},
		{
			id: 18,
			url: '/images/but2/fiche_projet_historique_stades.png',
			text: "Historique des stades de vie d'un projet, avec les dates derniers comités d'engagement"
		},
		{id: 19, url: '/images/but2/fiche_projet_reste_a_faire.png', text: "Interface des restes à faire d'un projet"},
		{id: 21, url: '/images/but2/liste_projet.png', text: "Vue d'ensemble de la liste des projets"},
		{
			id: 22,
			url: '/images/but2/liste_projet_filtres.png',
			text: "Vue d'ensemble de la liste des projets, avec les filtres"
		},
		{id: 23, url: '/images/but2/odj_preview.png', text: "Prévisualisation d'un ordre du jour"},
		{id: 24, url: '/images/but2/odj_excel.png', text: "Document excel d'un ordre du jour généré automatiquement"},
		{id: 25, url: '/images/but2/permament_members.png'},
		{id: 26, url: '/images/but2/rdd_global.png', text: "Organisation de la page de saisie des décisions"},
		{id: 27, url: '/images/but2/rdd_project.png', text: "Exemple de décisions rentrées dans le système"},
		{
			id: 28,
			url: '/images/but2/rdd_validated.png',
			text: "Décisions d'un projet, une fois que celles-ci ont été validées définitivement"
		},
		{
			id: 29,
			url: '/images/but2/rdd_excel.png',
			text: "Document excel d'un relevé de décisions, généré automatiquement"
		},
		{id: 30, url: '/images/but2/recherche_acteurs.png'},
		{
			id: 31,
			url: '/images/but2/mysql_workbench.png',
			text: "Logiciel 'MySQL Workbench', permettant d'interagir avec la base de donnée."
		},
		{
			id: 32,
			url: '/images/but2/gantt.png',
			text: "Partie du diagramme de Gantt réalisé afin de suivre l'avancement du projet."
		},
		{
			id: 33,
			url: '/images/but2/exemple_code_php_querying.png',
			text: "Exemple de code permettant d'enregistrer ou modifier un acteur qui participe aux comités d'engagement, avec les requêtes en base de données."
		},
		{
			id: 34,
			url: '/images/but2/methodologie_specs_techniques.png',
			text: "Définition de la méthodologie qui sera appliquée pour le projet, dans le cadre des spécifications techniques du projet."
		},
		{
			id: 35,
			url: '/images/but2/mcd.png',
			text: "Vue d'ensemble du modèle conceptuel de données."
		},
		{
			id: 36,
			url: '/images/but2/maquette_calendrier_finie.png',
			text: "Version finale du calendrier dans la maquette."
		},
		{
			id: 37,
			url: '/images/but2/maquette_calendrier_v1.png',
			text: "Première version dans la maquette du calendrier."
		},
		{
			id: 38,
			url: '/images/but2/batch_queries.png',
			text: "Schéma de démonstration de la technique d'optimisation des requêtes par lot."
		},
		{
			id: 39,
			url: '/images/but2/ldap_cache.png',
			text: "Schéma de démonstration de la technique de mise en cache des acteurs."
		}
	];

	set_figures(figures);
</script>

<svelte:head>
    <title>Portfolio de stage | BUT2 2024-2025</title>
</svelte:head>

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

    {#snippet main({closeNav})}
        <div class="flex flex-col overflow-hidden sm:flex-row gap-10 h-full w-full items-center content-center justify-center">
            {#each links as link}
                <a class="no-underline hover:underline" href={link.href} onclick={closeNav}>{link.name}</a>
            {/each}
        </div>
    {/snippet}
</Navbar>

<!-- Home -->
<div class="w-full h-screen relative">
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

<!-- Entreprise -->
<div>
    <h2 id="entreprise" class="text-4xl text-center mt-3 mb-16">Entreprise</h2>

    <div class="flex flex-col lg:flex-row gap-5 mx-5 sm:mx-10 md:mx-20 2xl:mx-56">
        <div class="flex flex-col gap-5">

            <img src="/images/neolia_logo.png" loading="eager"
                 class="w-64 lg:w-full"
                 alt="Logo Néolia"/>

            <div>
                <PinkTitle title="" subtitle="01-03"/>
                <p class="ml-3 mt-3 mb-5 text-justify">
                    Durant ce stage chez Néolia, j'ai eu la chance d'être encadré par <b>Paul Meyer</b>, responsable
                    d'application, dont le tutorat a été précieux pour mon apprentissage et le développement de mes
                    compétences.
                </p>

                <a href="https://www.neolia.fr/" target="_blank" class="btn max-lg:hidden">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor"
                         class="bi bi-link-45deg " viewBox="0 0 16 16">
                        <path d="M4.715 6.542 3.343 7.914a3 3 0 1 0 4.243 4.243l1.828-1.829A3 3 0 0 0 8.586 5.5L8 6.086a1 1 0 0 0-.154.199 2 2 0 0 1 .861 3.337L6.88 11.45a2 2 0 1 1-2.83-2.83l.793-.792a4 4 0 0 1-.128-1.287z"/>
                        <path d="M6.586 4.672A3 3 0 0 0 7.414 9.5l.775-.776a2 2 0 0 1-.896-3.346L9.12 3.55a2 2 0 1 1 2.83 2.83l-.793.792c.112.42.155.855.128 1.287l1.372-1.372a3 3 0 1 0-4.243-4.243z"/>
                    </svg>
                    Lien vers le site web
                </a>
            </div>
        </div>

        <div class="flex flex-col gap-5">
            <div>
                <PinkTitle title="A propos" subtitle="01-01"/>
                <p class="ml-3 mt-3 mb-5 text-justify">Néolia, au cœur des enjeux du <b>logement social</b>, est une
                    entreprise
                    profondément ancrée dans des valeurs d'accessibilité et de service public. Son action contribue
                    significativement à <b>améliorer le quotidien</b> de nombreux foyers <b>dans l’est de la France</b>.

                    Mon expérience au sein de Néolia, pendant ces 2 mois m'a permis de découvrir un environnement où
                    <b>l'humain</b> et <b>l'impact social</b> sont au centre des préoccupations.</p>
            </div>

            <div>
                <PinkTitle title="L'équipe" subtitle="01-02"/>
                <p class="ml-3 mt-3 mb-5 text-justify">
                    J'ai eu la chance d'intégrer une équipe dynamique et compétente au sein de la <b>DSIL</b> (Direction
                    du
                    Service Informatique et Logistique) de <b>Néolia</b>. Mes collègues au quotidien étaient <b>Paul
                    MEYER</b>(notre responsable d'application et mon tuteur), <b>Aristote MUTOMBO</b> , <b>Stevan
                    CAMOZZI</b> et <b>Magalie BARTHOULOT-SPADA</b>. Travailler aux côtés de chacun m'a permis d'acquérir
                    des
                    perspectives différentes et de développer une compréhension plus globale des enjeux du service.

                    Au sein de la DSIL, l'équipe de développement joue un rôle clé en concevant et en déployant des
                    solutions logicielles agiles et adaptées aux demandes spécifiques des services internes de Néolia,
                    allant de petits outils ponctuels à des applications de taille modérée.
                </p>
            </div>
        </div>
    </div>
</div>

<!-- Mission -->
<div>
    <h2 id="mission" class="text-4xl text-center my-16">Mission</h2>

    <!-- Description mission -->
    <div class="flex flex-col gap-5 mx-5 sm:mx-10 md:mx-20 2xl:mx-56 items-stretch">
        <div class="flex flex-col md:flex-row gap-5">
            <div>
                <PinkTitle title="Mon stage" subtitle="02-01"/>
                <p class="p-2 pl-4 text-justify">Mon stage chez Néolia a consisté à développer un logiciel de <b>dématérialisation
                    pour
                    les
                    comités
                    d’engagement de la DSIL</b>. L'objectif était <b>d'optimiser</b> ce processus en <b>simplifiant</b>
                    les
                    interactions et le workflow. Cette mission m'a permis d'acquérir de <b>nouveaux savoirs et
                        savoir-faire
                        dans de nombreux domaines</b> enseignés au sein de ma formation et de découvrir les réalités du
                    développement en entreprise, tout en renforçant mon <b>autonomie</b> et ma<b>rigueur</b>.</p>
            </div>

            <div class="flex items-center content-center px-2 py-1 bg-mountbatten-pink h-full w-full">
                <h2 class="text-center text-xl text-old-lace h-full">
                    Dématérialisation du comité d'engagement DSIL
                </h2>
            </div>
        </div>


        <p class="text-justify pl-4">
            Les Comités d'Engagement sont au cœur de la gouvernance des projets chez Néolia. Ces réunions mensuelles,
            composées de membres clés de la direction, sont l'instance décisionnelle qui détermine si un projet est prêt
            à franchir une nouvelle étape de son cycle de vie. C'est une démarche primordiale pour la validation et la
            bonne avancée de nos initiatives.
        </p>
    </div>

    <div class="flex flex-row flex-wrap mt-16 gap-5 mx-5 sm:mx-10 justify-center content-stretch w-fit">
        <MissionCard title="Suivi des projets">
            {#snippet main()}
                <ul class="list-disc ml-4">
                    <li>Suivi de la vie des projets</li>
                    <li>Exportation des projets</li>
                    <li>Faciliter le suivi des projets</li>
                </ul>
            {/snippet}

            {#snippet icon()}
                <img src="/svg/but2/suivi_projet_but2.svg" alt="Suivi des projets">
            {/snippet}

            {#snippet details()}
                <div class="max-h-full overflow-y-auto">
                    <h2 class="text-3xl">Suivi des projets</h2>
                    <div class="pt-7 px-4 text-justify leading-8">
                        <p>
                            Les comités d'engagement sont la pierre angulaire de la vie des projets. En suivant les
                            comités d'engagement d'un projet, il est possible de retracer toute sa vie : ses stades
                            successifs, la date de passage d'un stade à l'autre, et d'avoir une vision globale de son
                            évolution. Ce module permet également de gérer les acteurs impliqués, de suivre le reste à
                            faire, et bien plus encore.
                        </p>
                        <div class="flex flex-col sm:flex-row gap-10 mt-5">
                            <div class="flex-1/2">
                                <hr class="my-3">
                                <p>
                                    Une partie dédiée à la Gestion des Projets a donc été intégrée au système. Une page
                                    de
                                    recherche spécifique permet de consulter la liste de toutes les fiches projets.
                                    Cette
                                    recherche peut être affinée grâce à un filtre avancé qui inclut plusieurs critères :
                                    des
                                    mots-clés, le mois et/ou l'année du dernier comité d'engagement, les stades
                                    spécifiques, le
                                    chef de projet informatique, et le chef de projet métier.

                                    Les fiches projets offrent une vue détaillée de chaque initiative. Elles permettent
                                    de
                                    consulter l'historique des stades parcourus par le projet et d'accéder à la
                                    description du
                                    stade sélectionné. Elles affichent également les acteurs assignés au projet et
                                    intègrent un
                                    système de "todo" pour la gestion du reste à faire. Enfin, les fiches projets
                                    permettent de
                                    modifier ou de résumer les informations relatives aux comités d'engagement associés,
                                    et
                                    affichent le relevé de décision une fois qu'il a été saisi.
                                </p>
                                <SingleFigure figure_id={21}/>
                            </div>
                            <div class="flex-1/2 flex flex-col gap-0.5">
                                <SingleFigure figure_id={12}/>
                                <SingleFigure figure_id={22}/>
                            </div>
                        </div>
                    </div>
                </div>
            {/snippet}
        </MissionCard>
        <MissionCard title="Gestion du calendrier">
            {#snippet main()}
                <ul class="list-disc ml-4">
                    <li>Définir les thèmes pour chaque projet</li>
                    <li>Configurer chaque comité</li>
                    <li>Exporter le calendrier au format Excel</li>
                </ul>
            {/snippet}

            {#snippet icon()}
                <img src="/svg/but2/calendar_management_but2.svg" alt="Gestion du calendrier">
            {/snippet}

            {#snippet details()}
                <div class="max-h-full overflow-y-auto">
                    <h2 class="text-3xl">Gestion du calendrier</h2>
                    <div class="pt-7 px-4 text-justify leading-8">
                        <p>
                            Ce module a pour objectif d'organiser et de faciliter la gestion des comités d'engagement
                            mensuels. Il offre une plateforme centralisée pour planifier les réunions, définir les
                            ordres du jour et configurer les détails logistiques, garantissant ainsi un déroulement
                            fluide et efficace des comités.
                        </p>
                        <div class="flex flex-col sm:flex-row gap-10 mt-5">
                            <div class="flex-1/2">
                                <hr class="my-3">
                                <p>
                                    Chaque mois, un nouveau comité d'engagement est créé dans le système. Le responsable
                                    Etudes
                                    & Développement peut accéder à la liste des thèmes à aborder lors de ce comité.
                                    Il/Elle peut
                                    également définir l'ordre de présentation de ces
                                    thèmes, assurant ainsi une cohérence avec les priorités du moment.

                                    Le module permet également de configurer chaque comité de manière précise. Le
                                    responsable
                                    Etudes & Développement peut
                                    spécifier le lieu de la réunion, ajouter un lien Teams pour les participants à
                                    distance, et
                                    indiquer si le présentiel et/ou le distanciel sont autorisés. De plus, pour chaque
                                    sujet ou
                                    "CE" (comité d'engagement), il est possible de modifier les informations de passage,
                                    notamment le temps estimé pour discuter du sujet et le(s) support(s) de
                                    présentation.
                                </p>
                                <hr class="my-3">
                                <p>
                                    Afin de faciliter l'analyse et le partage des informations, un système d'exportation
                                    est
                                    intégré. Les utilisateurs peuvent exporter le calendrier complet des comités
                                    d'engagement,
                                    incluant tous les détails configurés, vers un fichier EXCEL. Cela permet aux
                                    utilisateurs de
                                    manipuler/transmettre les données selon leurs besoins et de les intégrer dans
                                    d'autres
                                    outils si
                                    nécessaire.
                                </p>
                            </div>
                            <div class="flex-1/2 flex flex-col gap-5">
                                <SingleFigure figure_id={2}/>
                                <SingleFigure figure_id={4}/>
                            </div>
                        </div>
                    </div>
                </div>
            {/snippet}
        </MissionCard>
        <MissionCard title="Génération des ordres du jour">
            {#snippet main()}
                <ul class="list-disc ml-4">
                    <li>Automatiser ce processus chronophage</li>
                    <li>Exporter les ordres du jour au format Excel</li>
                    <li>Transmission des ordres du jour par mail</li>
                </ul>
            {/snippet}

            {#snippet icon()}
                <img src="/svg/but2/odj_but2.svg" alt="Gestion des ordres du jour">
            {/snippet}

            {#snippet details()}
                <div class="max-h-full overflow-y-auto">
                    <h2 class="text-3xl">Génération des ordres du jour</h2>
                    <div class="pt-7 px-4 text-justify leading-8">
                        <p>
                            Les ordres du jour sont des documents essentiels pour les comités d'engagement.
                            Historiquement, ces tableurs Excel étaient préparés et envoyés manuellement par e-mail aux
                            différents acteurs participants au comité, tels que les directions et les chefs de projets.
                            Ils contiennent des informations cruciales sur les projets qui seront abordés (nom, acteur,
                            temps estimé, support de présentation, etc.), ainsi que l'heure de passage de chaque projet,
                            l'heure de début du comité et l'heure de fin prévue.
                        </p>
                        <div class="flex flex-row gap-10 mt-5">
                            <div class="flex-1/2">
                                <hr class="my-3">
                                <p>
                                    Auparavant, la saisie de ces données était une tâche entièrement manuelle,
                                    principalement
                                    effectuée par Magalie, la responsable Études & Développement. Ce processus s'avérait
                                    particulièrement chronophage et fastidieux, nécessitant une attention constante pour
                                    éviter
                                    les erreurs.

                                    Ce nouveau module a complètement automatisé ce processus. Désormais, grâce à la date
                                    et
                                    l'heure de début du comité d'engagement, ainsi qu'à la liste ordonnée des thèmes qui
                                    y
                                    seront abordés, le tableau de l'ordre du jour est généré automatiquement. Cette
                                    automatisation permet un gain de temps considérable et réduit drastiquement les
                                    risques
                                    d'erreur.
                                </p>
                                <hr class="my-3">
                                <p>
                                    Le module offre également la possibilité de prévisualiser les ordres du jour via une
                                    page
                                    dédiée, où il est possible de sélectionner et d'afficher l'ordre du jour souhaité.
                                    Une fois
                                    vérifié, le document Excel généré peut être téléchargé directement depuis
                                    l'interface, prêt
                                    à être diffusé aux participants.
                                </p>
                            </div>
                            <div class="flex-1/2 flex flex-col gap-5">
                                <SingleFigure figure_id={23}/>
                                <SingleFigure figure_id={24}/>
                            </div>
                        </div>
                    </div>
                </div>
            {/snippet}
        </MissionCard>
        <MissionCard title="Gestion des relevés de décision">
            {#snippet main()}
                <ul class="list-disc ml-4">
                    <li>Saisir le relevé des décisions</li>
                    <li>Exporter les relevés au format Excel</li>
                    <li>Transmission par mail aux acteurs</li>
                </ul>
            {/snippet}

            {#snippet icon()}
                <img src="/svg/but2/rdd_but2.svg" alt="Gestion des relevés de décisions">
            {/snippet}

            {#snippet details()}
                <div class="max-h-full overflow-y-auto">
                    <h2 class="text-3xl">Gestion des relevés de décision</h2>
                    <div class="pt-7 px-4 text-justify leading-8 w-full">
                        <p>
                            Une fois le comité d'engagement terminé, il est crucial de consigner les décisions prises
                            pour chaque projet. Ce processus inclut la validation du passage d'un projet au stade
                            suivant, ou la confirmation de son maintien au stade actuel. C'est également à ce moment que
                            le prochain comité d'engagement est programmé pour chaque projet concerné.
                        </p>

                        <div class="flex flex-col sm:flex-row gap-10 mt-5 w-full">
                            <div class="flex-1/2">
                                <hr class="my-3">
                                <p>
                                    Ce procédé se déroule dans une page dédiée, où l'utilisateur retrouve la liste des
                                    thèmes
                                    abordés lors du comité. Il est possible de naviguer facilement d'un thème à l'autre
                                    pour
                                    saisir les informations. Lorsqu'un thème est sélectionné, un résumé du projet
                                    s'affiche.
                                    L'utilisateur peut alors saisir la date et l'heure du prochain CE prévu pour ce
                                    projet,
                                    ainsi que le stade auquel il passera. Il est important de noter qu'il est possible
                                    de
                                    définir un stade sans qu'il soit nécessairement lié à un comité d'engagement. Les
                                    décisions
                                    elles-mêmes sont saisies dans un éditeur de texte riche (TinyMCE), offrant une
                                    flexibilité
                                    pour la mise en forme et la rédaction détaillée.
                                </p>
                                <hr class="my-3">
                                <p>
                                    Une fois que toutes les décisions ont été renseignées pour l'ensemble des thèmes, le
                                    relevé
                                    de décision peut être <b>validé définitivement</b>. Cette validation a deux
                                    conséquences
                                    importantes : elle <b>empêche toute modification ultérieure</b> du relevé,
                                    garantissant
                                    l'intégrité des informations, et elle autorise l'envoi du mail récapitulatif (cette
                                    fonctionnalité étant prévue pour une implémentation future).
                                </p>
                                <SingleFigure figure_id={29}/>
                            </div>
                            <div class="flex-1/2 flex flex-col gap-5 h-full max-h-full overflow-y-scroll">
                                <SingleFigure figure_id={26}/>
                                <SingleFigure figure_id={27}/>
                            </div>
                        </div>

                    </div>
                </div>
            {/snippet}
        </MissionCard>
        <MissionCard title="Héberger les supports de documents">
            {#snippet main()}
                <ul class="list-disc ml-4">
                    <li>Héberger les supports de présentation</li>
                    <li>Améliorer l’accès des documents aux acteurs</li>
                </ul>
            {/snippet}

            {#snippet icon()}
                <img src="/svg/but2/documents_but2.svg" alt="Gestion des supports de documents">
            {/snippet}

            {#snippet details()}
                <div class="max-h-full overflow-y-auto">
                    <h2 class="text-3xl">Héberger les supports de documents</h2>
                    <div class="pt-7 px-4 text-justify leading-8 w-full">
                        <div class="flex flex-col sm:flex-row gap-10">
                            <div class="flex-1/2">
                                <p>
                                    Historiquement, les supports de documents liés aux projets et aux comités
                                    d'engagement
                                    étaient stockés sur le lecteur partagé "L:", un disque dur réseau accessible à
                                    l'ensemble de
                                    l'entreprise. Bien que très utilisé pour le partage de fichiers, ce système
                                    présentait des
                                    limites en termes de centralisation et de gestion intégrée des informations.
                                </p>
                                <hr class="my-3">
                                <p>
                                    L'objectif de ce nouveau module est de remplacer complètement ce système de stockage
                                    externe
                                    et d'intégrer l'hébergement des documents directement au sein de l'application.
                                    Désormais,
                                    tous les supports de documents seront gérés et accessibles via l'interface de
                                    l'application,
                                    garantissant une meilleure organisation, une traçabilité accrue et une accessibilité
                                    simplifiée pour les utilisateurs.
                                </p>
                                <br>
                                <SingleFigure figure_id={1}/>
                            </div>
                            <div class="flex-1/2 flex flex-col gap-5">
                                <SingleFigure figure_id={9}/>
                            </div>
                        </div>
                    </div>
                </div>
            {/snippet}
        </MissionCard>
    </div>
</div>

<!-- Savoir & savoir-faire -->
<div class="pb-50">
    <h2 id="savoir_faire" class="text-4xl text-center my-16">Savoir & savoir-faire</h2>

    <div class="mx-5 sm:mx-10 md:mx-20 2xl:mx-56 mb-10">
        <TabsContainer activeTabId={savoir_faire_active_tab} on_tab_clicked={handleTabClick} tabs={savoir_faire_tabs}>
            {#if savoir_faire_active_tab === "comp_1"}
                <Comp1/>
            {:else}
                <Comp2/>
            {/if}
        </TabsContainer>
    </div>
</div>