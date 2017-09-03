import { Stream } from './stream.model';

export interface Current {
    id: number;
    slug: string;
    name: string;
    subCategories: any[];
    contentAmount: number;
    weight?: any;
}

export interface Category {
    parent?: any;
    current: Current;
}

export interface StreamReq {
    category: Category;
    content: Array<Stream>;
}
