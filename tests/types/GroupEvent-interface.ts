interface DevEvent {
    title: string;
    imageUrl: string;
    datetime: Date;
    duration: string;
    locationName: string;
    priceInDollars: number;
}

interface GroupEvent {
    host: string;
    banner_img?: string;
    events?: DevEvent[];
}