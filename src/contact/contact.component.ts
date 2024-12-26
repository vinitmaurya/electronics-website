import { Component } from '@angular/core';
import { ProductsService } from '../products/products.service';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [],
  providers: [ProductsService],
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.css'
})
export class ContactComponent {
  constructor(private productService: ProductsService) { }
}
