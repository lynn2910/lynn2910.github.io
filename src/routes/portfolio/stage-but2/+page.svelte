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

	function handleTabClick(tab_id: string) {
		savoir_faire_active_tab = tab_id;
	}

	const figures = [
		{id: 1, url: '/images/but2/add_document_for_ce.png'},
		{id: 2, url: '/images/but2/calendar.png'},
		{id: 3, url: '/images/but2/calendar_add_project_from_list.png'},
		{id: 4, url: '/images/but2/calendar_dragging_card_whole.png'},
		{id: 5, url: '/images/but2/calendar_gestion_absents.png'},
		{id: 6, url: '/images/but2/calendar_list_projects.png'},
		{id: 7, url: '/images/but2/calendar_modalite_reunions.png'},
		{id: 8, url: '/images/but2/calendar_per_month_popup.png'},
		{id: 9, url: '/images/but2/calendar_popup_ce_details.png'},
		{id: 10, url: '/images/but2/calendar_title.png'},
		{id: 11, url: '/images/but2/fiche_project_edit_description.png'},
		{id: 12, url: '/images/but2/fiche_projet.png'},
		{id: 13, url: '/images/but2/fiche_projet_acteurs.png'},
		{id: 14, url: '/images/but2/fiche_projet_add_actor_query_list.png'},
		{id: 15, url: '/images/but2/fiche_projet_add_actor_select.png'},
		{id: 16, url: '/images/but2/fiche_projet_ce_infos.png'},
		{id: 17, url: '/images/but2/fiche_projet_date_demarrage.png'},
		{id: 18, url: '/images/but2/fiche_projet_historique_stades.png'},
		{id: 19, url: '/images/but2/fiche_projet_reste_a_faire.png'},
		{id: 21, url: '/images/but2/liste_projet.png'},
		{id: 22, url: '/images/but2/liste_projet_filtres.png'},
		{id: 23, url: '/images/but2/odj_excel.png'},
		{id: 24, url: '/images/but2/odj_preview.png'},
		{id: 25, url: '/images/but2/permament_members.png'},
		{id: 26, url: '/images/but2/rdd_excel.png'},
		{id: 27, url: '/images/but2/rdd_global.png'},
		{id: 28, url: '/images/but2/rdd_project.png'},
		{id: 29, url: '/images/but2/rdd_validated.png'},
		{id: 30, url: '/images/but2/recherche_acteurs.png'}
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
    <div class="flex flex-col md:flex-row gap-5 mx-5 sm:mx-10 md:mx-20 2xl:mx-56 items-stretch">
        <div>
            <PinkTitle title="Mon stage" subtitle="02-01"/>
            <p class="p-2 pl-4 text-justify">Mon stage chez Néolia a consisté à développer un logiciel de <b>dématérialisation
                pour
                les
                comités
                d’engagement de la DSIL</b>. L'objectif était <b>d'optimiser</b> ce processus en <b>simplifiant</b> les
                interactions et le workflow. Cette mission m'a permis d'acquérir de <b>nouveaux savoirs et savoir-faire
                    dans de nombreux domaines</b> enseignés au sein de ma formation et de découvrir les réalités du
                développement en entreprise, tout en renforçant mon <b>autonomie</b> et ma<b>rigueur</b>.</p>
        </div>

        <div class="flex items-center content-center px-2 py-1 bg-mountbatten-pink h-full w-full">
            <h2 class="text-center text-xl text-old-lace h-full">
                Dématérialisation du comité d'engagement DSIL
            </h2>
        </div>
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
                Voici des détails
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
                Voici des détails
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
                Voici des détails
            {/snippet}
        </MissionCard>
        <MissionCard title="Gérer les relevés de décision">
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
                Voici des détails
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
                Voici des détails
            {/snippet}
        </MissionCard>
    </div>
</div>

<!-- Savoir & savoir-faire -->
<div class="h-screen">
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