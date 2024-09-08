import{_ as c}from"./project_view.css_vue_type_style_index_0_src_true_lang-hr7ZwhFf.js";import{d as l,o as n,c as i,a as e,t as r,b as d,e as m,w as p,f as h,g as s}from"./index-DO6xxhSe.js";const _=["href"],v={class:"link_head"},f={xmlns:"http://www.w3.org/2000/svg",width:"24",height:"24",viewBox:"0 0 24 24",style:{fill:"currentColor"}},g=e("path",{d:"M15 11.586V6h2V4a2 2 0 0 0-2-2H9a2 2 0 0 0-2 2v2h2v5.586l-2.707 1.707A.996.996 0 0 0 6 14v2a1 1 0 0 0 1 1h4v3l1 2 1-2v-3h4a1 1 0 0 0 1-1v-2a.996.996 0 0 0-.293-.707L15 11.586z"},null,-1),j=[g],b={key:0,class:"description"},x=l({__name:"TextLink",props:{link:String,name:String,description:String},setup(t){return(a,u)=>{var o;return n(),i("a",{href:t.link,class:"link",target:"_blank"},[e("div",v,[(n(),i("svg",f,j)),e("p",null,r(t.name),1)]),t.description&&((o=t.description)==null?void 0:o.length)>0?(n(),i("p",b,r(t.description),1)):d("",!0)],8,_)}}}),k=e("h1",{id:"top_title_aegis"},"Projet 'Aegis'",-1),q=e("p",null,[s("Le projet 'Aegis' est un projet open-source lancé avec un ami. Nous nous sommes lancés dans ce projet après avoir découvert le jeu "),e("span",{class:"quote"},'"Conflict Of Nations"'),s(". Nous avons énormément apprécié ce jeu de stratégie et le fait qu'on a pas besoin d'être tout le temps derrière notre écran, contrairement aux autres jeux similaires."),e("br"),s("Le problème était en revanche qu'on trouvait le jeu mal optimisé, il y avait toujours des latences sur l'interface même avec des machines qui font normalement tourné des jeux AAA en qualité Ultra avec des processeurs très puissants, et pourtant le jeu avait des latences dans l'affichage de la carte."),e("br"),s(" C'est pour cette raison que nous nous sommes donnés le défi de le refaire de zéro, tout en ajoutant notre petite touche personnelle.")],-1),A=e("h2",{id:"objectif"},"L'objectif",-1),L=e("div",{class:"h2"},[e("p",null,"La finalité du projet est un jeu de stratégie multijoueur en temps réel où les joueurs ne seront limités que par leur imagination."),e("p",null,"Bien qu'ambitieux, ce projet nous tient à coeur et nous sommes bien déterminer à atteindre sa finalité.")],-1),w=e("h2",{id:"fonctionnalites"},"Les fonctionnalités",-1),C={class:"h2"},N=e("p",null,"Les fonctionnalités prévues sont nombreuses, voici une liste non-exhaustive:",-1),P=e("ul",null,[e("li",null,"Héberger des parties sur son ordinateur"),e("li",null,'Pouvoir créer un "hub" avec plusieurs parties hébergé par ses soins'),e("li",null,"Personnalisation des cartes, unités et de chaque partie en général"),e("li",null,"Pouvoir installer des extensions et mods créer par la communauté"),e("li",null,"Pouvoir construire/améliorer les bâtiments dans ses villes"),e("li",null,"Controller ses unités au combat (contrôle de tir, rondes...)"),e("li",null,"Avoir des relations diplomatiques (communiqués de presse, autorisation de passage d'unités, ...)"),e("li",null,"Former des coalitions"),e("li",null,"... et bien plus")],-1),$=e("div",{class:"toast success"},[e("p",null,[e("strong",null,"Pour le moment, le projet est toujours en développement")])],-1),y=l({__name:"AegisProject",setup(t){const a=[{name:"Projet 'Aegis'",id:"top_title_aegis",level:1},{name:"L'objectif",id:"objectif",level:2},{name:"Les fonctionnalités",id:"fonctionnalites",level:2}];return(u,o)=>(n(),m(c,{title:"Aegis",headers:a},{default:p(()=>[k,q,A,L,w,e("div",C,[N,P,h(x,{link:"https://docs.google.com/document/d/1dsfTkvojfpJsAc3dTv9Z57oiGy8MNHK37MQ06_IDVA4/edit?usp=sharing",name:"Le cahier des charges",description:"Ce cahier des charges rédigé sur Google Docs comporte de nombreux informations sur les fonctionnalités et caractéristiques du projet"})]),$]),_:1}))}});export{y as default};