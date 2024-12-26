import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { CartItem, Categories, ContactDetails, Product } from "./products.model";
@Injectable({
    providedIn: 'root'
})
export class ProductsService {
    private dataPath = '/assets/products-listing.json';
    private cartData: CartItem[] = [];
    constructor(private http: HttpClient) { }
    get getCartData() {
        return this.cartData;
    }
    set setCartData(data:CartItem[]){
        this.cartData  = data;
    }
    public getProductListingData(): Observable<Categories> {
        return this.http.get<Categories>(this.dataPath);
    }
    addToCart(product: Product, quantity: number): void {
        const existingItem = this.cartData.find((item) => item.product.id === product.id);
        if (existingItem) {
            existingItem.quantity += quantity;
        } else {
            this.cartData.push({ product, quantity });
        }
    }

    // Removes product from cart
    removeFromCart(productId: number): void {
        this.cartData = this.cartData.filter((item) => item.product.id !== productId);
    }

    submitEnquiry(contactDetails: ContactDetails): void {
        const enquiryData = {
            contact: contactDetails,
            products: this.cartData,
        };
        console.log(enquiryData);
    }
}