interface Event {
    title: string;
    imageUrl?: string | null;
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
    events?: Event[];
}

interface GroupEventFlat extends Event {
    host: string;
    bannerImg?: string;
}