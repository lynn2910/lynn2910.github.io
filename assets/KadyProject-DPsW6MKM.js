import{_ as t}from"./project_view.css_vue_type_style_index_0_src_true_lang-hr7ZwhFf.js";import{d as a,e as o,w as u,o as i,a as e,g as s}from"./index-DO6xxhSe.js";const l=e("h1",{id:"top"},"Le projet 'Kady'",-1),r=e("p",null,'Née pendant la période de confinement, Kady est un projet de Bot Discord visant à fournir des outils pour toutes les communautés basées sur la plateforme "Discord".',-1),d=e("p",null,[s("Le nom vient du livre "),e("a",{href:"https://books.google.fr/books/about/Illuminae.html?id=OO4rvgAACAAJ&source=kp_book_description&redir_esc=y",target:"_blank"},'"Illuminae"'),s(", le projet étant la continuité d'un précédent bot qui a été conçu spécifiquement conçu pour une communauté. Ce projet a été envisagé après des demandes des utilisateurs.")],-1),p=e("h2",{id:"functionalities"},"Les fonctionnalités",-1),m=e("div",{class:"h2"},[e("p",null,"Voici une liste des fonctionnalités:"),e("ul",null,[e("li",null,"Faire passer aux nouveaux arrivants un captcha généré automatiquement"),e("li",null,"Générer une image/envoyer un message pré-défini pour tout les nouveaux membres"),e("li",null,"Un système de récompenses basant sur le nombre de messages envoyés"),e("li",null,"Gagner des points (cookies) en utilisant ses fonctionnalités et gagner des petits cadeaux"),e("li",null,"Modérer la communauté (expulser, bannir, avertir etc...)"),e("li",null,"Jouer à des minis jeux"),e("li",null,"Des petites commandes utiles (calcule d'une expression mathématique, voir les informations sur un utilisateur, ...)")])],-1),c=e("h2",{id:"dev"},"Le développement",-1),v=e("div",{class:"h2"},[e("p",null,"Le développement a commencé en 2020 avec les technologies suivantes: "),e("ul",null,[e("li",null,"NodeJS"),e("li",null,"JavaScript"),e("li",null,"MariaDB")]),e("p",null,"Après quelques mois de développement, une première version a été mise en production. Cependant, nous avons alors remarqué une utilisation anormalement élevée de la mémoire et des latences, ce qui n'avait pas du tout observé en développement."),e("p",null,"Des analyses ont été faites, et nous avons finis par trouver la cause: La librairie 'Discord.js'."),e("p",null,"Cette librairie a la très mauvaise habitude de mettre en mémoire absolument tout. Un message envoyé il y a une semaine? Hop en mémoire."),e("p",null,"Nous avions alors deux choix: Faire un fork de Discord.js et changer le système (le plus simple) ou recoder de zéro avec nos besoins spécifiques uniquement (clairement le plus dure)"),e("p",null,"Des semaines de discussions ont été nécessaires, et nous avons finalement fait le choix de recommencer de zéro en Rust."),e("h3",{id:"why_rust"},"Pourquoi le Rust?"),e("div",{class:"h3"},[e("p",null,"Le Rust est un langage de programmation bas-niveau au même titre que le C et C++, cependant, sa puissance vient de sa gestion de la mémoire."),e("p",null,"En effet, en C et C++, la gestion de la mémoire relève en partie de la chance, une toute petite erreur et c'est fini. Le Rust, lui, a adopté une approche différente du problème et permet d'assurer l'intégrité de la mémoire."),e("p",null,"Face au JavaScript, ce n'est pas comparable, cependant nous avons remarqué que, là où le JavaScript requiert beaucoup de sessions de débogages, nous sommes nettement plus productifs en Rust.")]),e("h3",{id:"advantages_strategy"},"Les avantages de cette stratégie"),e("div",{class:"h3"},[e("p",null,"Nous avons précédemment mentionnés que nous sommes nettement plus productifs en Rust qu'en JavaScript. Cela s'applique par le fait que le Rust est si stricte que, quand le programme compile sans erreur, nous sommes certains que le programme fonctionnera!"),e("p",null,`Le Rust nous "force" (d'une certaine manière) à gérer tout les cas découlant d'une action. Le développement est alors plus long, mais à la fin, nous n'avons pas une phase de test qui dure des jours, le code étant également plus lisible et compréhensible.`)])],-1),f=e("h2",{id:"actually"},"Le projet aujourd'hui",-1),h=e("div",{class:"h2"},[e("p",null,"Aujourd'hui, tout les développeurs sont à l'université ou travaillent activement. Cette situation nous laisse beaucoup moins de temps à consacrer au développement de Kady, et nous avons malheureusement dû arrêter, notamment car les projets universitaires deviennent de plus en plus long et complexes, rendant le développement de Kady très limité."),e("p",null,"Il faut également prendre en compte le fait que l'équipe de développeurs derrière Discord rajoutent de plus en plus de fonctionnalités qui rendent les bots moins utiles. On a également remarqué que de plus en plus de développeurs passent leurs bots vers des versions payantes, alors nous sommes incertains du futur de Kady, face à des bots qui engrangent des milliers d'euros et peuvent payer des modèles d'IAs, mais aussi des dizaines de développeurs, là où nous ne sommes qu'une petite équipe de passionnés qui n'a aucun financement dédié au projet. (Il faut le dire, tout vient de notre poche)"),e("p",null,"Dans son état actuel, la version améliorée (avec le Rust) n'est toujours pas officiellement sortie, cependant nous comptons reprendre le développement à terme.")],-1),j=a({__name:"KadyProject",setup(g){const n=[{name:"Le projet 'Kady'",id:"top",level:1},{name:"Les fonctionnalités",id:"functionalities",level:2},{name:"Le développement",id:"dev",level:2},{name:"Pourquoi le Rust?",id:"why_rust",level:3},{name:"Les avantages de cette stratégie",id:"advantages_strategy",level:3},{name:"Le projet aujourd'hui",id:"actually",level:2}];return(_,q)=>(i(),o(t,{title:"Kady",headers:n},{default:u(()=>[l,r,d,p,m,c,v,f,h]),_:1}))}});export{j as default};
