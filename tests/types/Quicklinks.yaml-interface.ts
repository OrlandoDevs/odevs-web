export interface QuicklinksYaml {
    links: Link[];
}

export interface Link {
    title:  string;
    url:    string;
    logo:   string;
    logo2?: string;
}
