export interface StreamOwner {
    id: number;
    name: string;
    slug: string;
}
export interface Stream {
    id: number;
    owner: StreamOwner;
    name: string;
    slug: string;
    rating: number;
    hidden: boolean;
    thumbnail: string;
    start_at: number;
    restream: boolean;
    promoted: boolean;
    active: boolean;
    online: boolean;
    tv: boolean;
    selected: number;
}
