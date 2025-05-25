<script lang="ts">
	import Navbar from "$lib/components/navigation/Navbar.svelte";
	import {base} from "$app/paths";
	import But2Grid from "$lib/components/illustrations/But2Grid.svelte";
	import PinkTitle from "$lib/components/presentation/PinkTitle.svelte";

	const links: { href: string, name: string }[] = [
		{href: '#entreprise', name: "Entreprise"},
		{href: '#mission', name: "Mission"},
		{href: '#savoir_faire', name: "Savoir-faire"},
	]
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

    {#snippet main()}
        <div class="flex flex-col overflow-hidden sm:flex-row gap-10 h-full w-full items-center content-center justify-center">
            {#each links as link}
                <a class="no-underline hover:underline" href={link.href}>{link.name}</a>
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

    <!--    <div class="grid grid-cols-1 sm:grid-cols-4 ">-->
    <!--        <div class="col-span-full sm:col-span-1 flex flex-col gap-5">-->

    <!--        </div>-->

    <!--        -->
    <!--    </div>-->
</div>

<div>
    <h2 id="mission" class="text-4xl text-center my-16">Mission</h2>
</div>

<div>
    <h2 id="savoir_faire" class="text-4xl text-center my-16">Savoir & savoir-faire</h2>
</div>