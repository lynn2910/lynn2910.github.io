interface ProjectLink {
    type: string;
    url: string;
}

class Project {
    public score: number = 0;
    public name: string;
    public description: string;
    public links: ProjectLink[];
    public technologies: string[];

    constructor(name: string, description: string) {
        this.name = name;
        this.description = description;
        this.links = [];
        this.technologies = [];
    }

    setLinks(links: ProjectLink[]): Project {
        this.links = links;
        return this;
    }

    setTechnologies(technologies: string[]): Project {
        this.technologies = technologies;
        return this;
    }

    setScore(score: number): Project {
        this.score = score;
        return this;
    }
}

const SOURCE_HOST = document.location.origin;

interface ProjectStore {
    show: boolean,
    projects: Project[]
}

async function load_project_json(): Promise<ProjectStore | void> {
    return fetch(`${SOURCE_HOST}/public/assets/projects.json`)
        .then(
            async (response) =>
                parse_project_json(await response.json()),
            (error) => console.error(error)
        );
}

// FIXME optimiser ce merdier
function parse_project_json(json: any): ProjectStore {
    const projects: Project[] = [];
    for (const project of json.projects) {
        const links: ProjectLink[] = [];
        for (const link of project.links) {
            links.push({
                type: link.type,
                url: link.url
            });
        }
        const technologies: string[] = [];
        for (const technology of project.technologies) {
            technologies.push(technology);
        }
        projects.push(
            new Project(project.name, project.description)
                .setLinks(links)
                .setTechnologies(technologies)
                .setScore(project.score)
        );
    }
    return {
        show: json.show,
        projects: projects
    };

}

export {
    ProjectLink, Project,
    load_project_json
}