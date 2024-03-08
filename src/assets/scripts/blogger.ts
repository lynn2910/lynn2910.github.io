interface BloggerArticle {
    /**
     * The article's content
     */
    markdown: string | null;
    /**
     * The article's url to get the content from
     */
    load_md_from_url: string | null;
    /**
     * Whether the article's content is preloaded, or to be fetched from the url
     */
    pre_loaded: boolean;

    /**
     * The article's title
     */
    name: string;
    /**
     * The article's path in the navigation
     */
    path: string;
}

interface BloggerNavigation {
    name: string,
    is_article: boolean,
    articles: BloggerArticle[],
    subs: Map<string, BloggerNavigation>
}

export type { BloggerArticle, BloggerNavigation }