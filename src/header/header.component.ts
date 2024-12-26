import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { ProductsService } from '../products/products.service';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [RouterModule],
  providers: [ProductsService],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent {
  isMenuOpen = false;
  constructor(private productService: ProductsService) { }
  toggleMenu() {
    this.isMenuOpen = !this.isMenuOpen;
  }
  hideMenu() {
    this.isMenuOpen = false;
  }
}
