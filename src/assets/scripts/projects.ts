interface ProjectDeclaration {
  properties: ProjectProperties;
  /// The path from "@/components/projects/" to the Vue.js component with no extension :)
  content_path: string;
  url: string;
  score: number;
  dates?: Dates
}

interface ProjectProperties {
  name: string;
  description: string;
  links: Link[],
  skills: string[]
}

interface Link {
  type: LinkType,
  url: string
}

type LinkType = "website" | "gitlab" | "github" | "discord" | "sound";

interface Dates {
  start: Date,
  end: Date | null,

  ended: boolean,
}


export type { ProjectProperties, ProjectDeclaration, Link }