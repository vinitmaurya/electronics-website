import { CommonModule } from '@angular/common';
import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ProductsService } from './products.service';
import { CartItem, Categories, ContactDetails, Product, SubCategory } from './products.model';
import { Category } from './products.enum';
import { HttpClient, HttpClientModule } from '@angular/common/http';

@Component({
  selector: 'app-products',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule, FormsModule],
  providers: [ProductsService],
  templateUrl: './products.component.html',
  styleUrl: './products.component.css'
})
export class ProductsComponent implements OnInit, OnDestroy {
  searchTerm: string = ''; // Search term for filtering
  selectedCategory: keyof Categories | 'All' = 'All'; // "All" is a possible value
  productData: Categories | undefined; // Holds all category and product data
  cart: CartItem[] = []; // Items added to the cart
  showEnquiryForm: boolean = false; // Flag to show/hide enquiry form
  contactDetails:ContactDetails = { mobile: '', email: '' }; // Object to hold contact details

  constructor(private productService: ProductsService) {}

  ngOnInit(): void {
    // Fetch product data on initialization
    this.productService.getProductListingData().subscribe(
      (data:Categories) => {
        this.productData = data;
        if (data) {
          this.selectedCategory = 'All'; // Default selection is "All"
        }
      },
      (err) => {
        console.error(err);
      }
    );
    this.cart = this.productService.getCartData;
  }
  ngOnDestroy(): void {
    this.productService.setCartData = this.cart;
  }
  // Filters products based on search term and selected category
  getFilteredProducts(): { [subCategory: string]: Product[] } | undefined {
    if (!this.productData) return undefined;

    const searchLower = this.searchTerm.toLowerCase();
    let filteredSubcategories: { [subCategory: string]: Product[] } = {};

    if (this.selectedCategory === 'All') {
      // If "All" category is selected, show products from all categories
      for (const category of Object.values(this.productData)) {
        for (const [subCategory, products] of Object.entries(category) ) {
          const filteredProducts = (products as Product[]).filter(
            (product: Product) =>
              product.name.toLowerCase().includes(searchLower)
            //  ||
            //   product.category.toLowerCase().includes(searchLower) ||
            //   product.subCategory.toLowerCase().includes(searchLower)
          );

          if (filteredProducts.length > 0) {
            filteredSubcategories[subCategory] = filteredProducts;
          }
        }
      }
    } else {
      // Otherwise, filter products for the selected category
      const categoryData = this.productData[this.selectedCategory];
      for (const [subCategory, products] of Object.entries(categoryData)) {
        const filteredProducts = products.filter(
          (product: Product) =>
            product.name.toLowerCase().includes(searchLower)
          //  ||
          //   product.category.toLowerCase().includes(searchLower) ||
          //   product.subCategory.toLowerCase().includes(searchLower)
        );

        if (filteredProducts.length > 0) {
          filteredSubcategories[subCategory] = filteredProducts;
        }
      }
    }

    return filteredSubcategories;
  }

  // Adds product to cart
  addToCart(product: Product, quantity: number): void {
    this.productService.addToCart(product,quantity);
  }

  // Removes product from cart
  removeFromCart(productId: number): void {
    this.productService.removeFromCart(productId);
  }

  // Placeholder for sending an enquiry
  submitEnquiry(): void {
    this.productService.submitEnquiry(this.contactDetails);
  }
}
