export interface BoardYaml {
    directors: Director[];
    advisors:  Advisor[];
    former:    Former[];
}

export interface Advisor {
    name:     string;
    position: string;
}

export interface Director {
    name:     string;
    role:     string;
    position: string;
}

export interface Former {
    name: string;
}
