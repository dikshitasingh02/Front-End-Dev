export interface Product {
    id: string;
    name: string;
    images: {url: string}[];
    price: number;
    category:string;
    size: string;
    kitchen: string;
    cuisine: string;
    isfeatured: boolean;
    isArchived: boolean;
    qty: number;
}