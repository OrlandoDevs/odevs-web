export interface GroupsYaml {
    group: Group[];
}

interface logo {
    src: string;
    alt_text?: string;
}

export interface Group {
    name: string;
    description?: string;
    meetup_url?: string;
    logo?: logo;
}
