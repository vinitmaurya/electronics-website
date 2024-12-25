import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { Categories } from "./products.model";
@Injectable({
    providedIn: 'root'
})
export class ProductsService {
    private dataPath = '/assets/products-listing.json';

    constructor(private http: HttpClient) { }

    public getProductListingData(): Observable<Categories> {
        return this.http.get<Categories>(this.dataPath);
    }
}