export interface Product {
    id: number;
    name: string;
    category: string;
    description: string;
    imageUrl: string;
    quantity: number;
    price?: number; // Optional price property
}