export interface Product {
    id: number;
    name: string;
    category: string;           // Category the product belongs to (e.g., ACTIVE_COMPONENTS)
    subCategory: string;        // Subcategory within the category (e.g., Relays, Diodes)
    description: string;        // Description of the product
    imageUrl: string;           // Image URL for the product
    quantity: number;           // Available quantity of the product
    price: number;              // Price of the product
}
export interface CartItem {
    product: Product;
    quantity: number;
}
export interface SubCategory {
    [subCategory: string]: Product[];  // Dynamic key for each subcategory containing an array of products
}
export interface Categories {
    ACTIVE_COMPONENTS: SubCategory;
    PASSIVE_COMPONENTS: SubCategory;
    SENSORS: SubCategory;
    POWER_ELECTRONICS: SubCategory;
    LEDs: SubCategory;
    CIRCUIT_PROTECTION: SubCategory;
}
export interface ContactDetails{
    mobile:string,
    email:string
}