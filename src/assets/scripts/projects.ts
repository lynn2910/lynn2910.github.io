interface ProjectDeclaration {
    properties: string;
    md: string;
    score: number;
}

interface ProjectProperties {
    name: string;
    description: string;
    links: Link[],
    skills: string[]
}

interface Link {
    type: string,
    url: string
}

async function get_projects(): Promise<ProjectDeclaration[]> {
    return new Promise((resolve, reject) => {
        fetch(`${document.location.origin}/projects/declaration.json`)
            .then(
                (r) => r.json().then(resolve, reject),
                reject
            )
    })
}

async function get_project_properties(declaration: ProjectDeclaration): Promise<ProjectProperties | null> {
    return new Promise((resolve, reject) => {
        fetch(`${document.location.origin}/projects/${declaration.properties}`)
            .then(
                function(r) {
                    if (r.status === 404)
                        return resolve(null)
                    else
                        r.json().then(resolve, reject)
                },
                reject
            )
    })
}

async function get_project_markdown(declaration: ProjectDeclaration): Promise<string> {
    return new Promise((resolve, reject) => {
        fetch(`${document.location.origin}/projects/${declaration.md}`)
            .then(
                (r) => r.text().then(resolve, reject),
                reject
            )
    })
}


export type { ProjectProperties, ProjectDeclaration, Link }
export { get_projects, get_project_properties, get_project_markdown }
