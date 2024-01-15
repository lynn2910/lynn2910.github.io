import {load_project_json} from "./projects.js";

document.addEventListener('DOMContentLoaded', function(){
    // Init skills table
    init_skills_table();

    // Load projects
    load_projects()
        .then(
            () => console.log("Projects loaded"),
            (error) => console.error(error)
        );
})

//
//
// Projects loader
//
//

const PROJECTS_ON_MAIN_PAGE: number = 2;

async function load_projects(){
    let projects = await load_project_json();

    console.log(projects)

    if (!projects || !projects.show) {
        document.getElementById("project_container").innerHTML = "<p class='no_project'>Aucun projet à afficher pour le moment</p>";
        return;
    }

    let shown_projects = projects.projects.sort((a, b) => a.score + b.score).slice(0, PROJECTS_ON_MAIN_PAGE);
    console.log(shown_projects)

}



//
//
//  SKILLS TABLE
//
//


function init_skills_table(){
    document.querySelectorAll("#skills_selector li")
        .forEach(function(li){
            let id = li.id;

            // define the skills
            li.addEventListener("click", function(){
                open_skill_box(id);
            })
        })
}


const BOX_DISPLAY: string = "grid";

function open_skill_box(id: string) {
    // Close every box and open the good one
    (document.querySelectorAll(".box") as NodeListOf<HTMLElement>)
        .forEach(function(box) {
            if (!box.classList.contains(id)) {
                box.style["display"] = "";
            } else if (box.style["display"] != BOX_DISPLAY) {
                box.style["display"] = BOX_DISPLAY;
            }
        });

    // Un-select every title
    (document.querySelectorAll("#skills_selector li") as NodeListOf<HTMLElement>)
        .forEach(function(li){
            if (id === li.id && !li.classList.contains("selected")) {
                li.classList.add("selected")
            } else {
                li.classList.remove("selected")
            }
        })
}