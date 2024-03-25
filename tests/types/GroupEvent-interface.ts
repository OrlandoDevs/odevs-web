interface DevEvent {
    title: string;
    imageUrl: string;
    datetime: Date | string;
    duration: string;
    locationName?: string;
    locationUrl?: string;
    locationAddress?: string;
    description?: string;
    tags?: string[];
    priceInDollars: number;
}

interface EventYaml {
    eventGroups: GroupEvent[];
}

interface GroupEvent {
    host: string;
    banner_img?: string;
    events?: DevEvent[];
}

interface GroupEventFlat extends DevEvent {
    host: string;
    bannerImg?: string;
}