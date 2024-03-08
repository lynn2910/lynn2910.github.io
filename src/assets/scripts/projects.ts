interface ProjectDeclaration {
    properties: ProjectProperties;
    md: string;
    score: number;
    path: string;
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

type TreeFolder = Record<string, TreeNode>

type TreeNode = {
    articles: ProjectDeclaration[],
    folders: TreeFolder
}

function get_all_articles(root: TreeNode): ProjectDeclaration[] {
    const articles: ProjectDeclaration[] = [];

    // Parcourir les articles du noeud actuel
    articles.push(...root.articles);

    // Parcourir les dossiers du noeud actuel
    for (const key in root.folders) {
        const folder = root.folders[key];
        articles.push(...get_all_articles(folder));
    }

    return articles;
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

async function get_project_markdown(declaration: ProjectDeclaration): Promise<string> {
    return new Promise((resolve, reject) => {
        fetch(`${document.location.origin}/projects/${declaration.md}`)
            .then(
                (r) => r.text().then(resolve, reject),
                reject
            )
    })
}


export type { ProjectProperties, ProjectDeclaration, Link, TreeFolder, TreeNode }
export { get_projects, get_project_markdown, get_all_articles }
