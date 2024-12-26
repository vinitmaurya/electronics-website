import { Component } from '@angular/core';
import { ProductsService } from '../products/products.service';

@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [],
  providers: [ProductsService],
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.css'
})
export class FooterComponent {
  constructor(private productService: ProductsService) { }
}
