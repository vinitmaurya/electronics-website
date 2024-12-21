import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { Product } from './products.model';
import { CartItem } from './cart.model';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-products',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule, FormsModule],
  templateUrl: './products.component.html',
  styleUrl: './products.component.css'
})
export class ProductsComponent {
  searchTerm: string = ''; // Search term for filtering products
  products: Product[] = [ // Sample products array
    { id: 1, name: 'Resistor', category: 'Passive Components', description: 'High resistance', imageUrl: 'assets/resistor.jpg', quantity: 1 },
    { id: 2, name: 'Capacitor', category: 'Passive Components', description: 'Capacitance 100uF', imageUrl: 'assets/capacitor.jpg', quantity: 1 },
    { id: 3, name: 'Transistor', category: 'Active Components', description: 'NPN Transistor', imageUrl: 'assets/transistor.jpg', quantity: 1 },
    { id: 4, name: 'Inductor', category: 'Passive Components', description: 'Inductance 100mH', imageUrl: 'assets/inductor.jpg', quantity: 1 },
    { id: 5, name: 'LED Light', category: 'LEDs', description: 'Red LED', imageUrl: 'assets/led.jpg', quantity: 1 },
    { id: 6, name: 'Thermistor', category: 'Sensors', description: 'NTC Thermistor', imageUrl: 'assets/thermistor.jpg', quantity: 1 },
    { id: 7, name: 'Power Supply', category: 'Power Electronics', description: 'DC 5V Power Supply', imageUrl: 'assets/power-supply.jpg', quantity: 1 },
    { id: 8, name: 'Fuse', category: 'Circuit Protection', description: '5A Fuse', imageUrl: 'assets/fuse.jpg', quantity: 1 },
  ];

  cart: CartItem[] = []; // Array to store items added to the cart

  // Filters products based on the search term
  getFilteredProducts(): Product[] {
    return this.products.filter((product: Product) => {
      return (
        product.name.toLowerCase().includes(this.searchTerm.toLowerCase()) ||
        product.description.toLowerCase().includes(this.searchTerm.toLowerCase())
      );
    });
  }

  // Checks if any product in the category matches the search term
  isCategoryVisible(category: string): boolean {
    const filteredProducts: Product[] = this.getFilteredProducts();
    return filteredProducts.some((product: Product) => product.category === category);
  }

  // Adds the product to the cart with the specified quantity
  addToCart(product: Product, quantity: number): void {
    const existingItem: CartItem | undefined = this.cart.find(
      (item: CartItem) => item.product.id === product.id
    );

    if (existingItem) {
      existingItem.quantity += quantity;
    } else {
      this.cart.push({ product, quantity });
    }
  }

  // Removes the product from the cart
  removeFromCart(productId: number): void {
    this.cart = this.cart.filter((item: CartItem) => item.product.id !== productId);
  }

  // Returns the total quantity of products in the cart
  getTotalQuantity(): number {
    return this.cart.reduce((total: number, item: CartItem) => total + item.quantity, 0);
  }

  // Returns the total price of products in the cart
  getTotalPrice(): number {
    return this.cart.reduce((total: number, item: CartItem) => total + (item.product.price || 0) * item.quantity, 0);
  }

  // Placeholder for sending an enquiry
  sendEnquiry(): void {
    console.log('Enquiry sent');
  }
}