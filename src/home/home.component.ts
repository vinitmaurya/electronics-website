import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { ProductsService } from '../products/products.service';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [RouterModule],
  providers: [ProductsService],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {
  constructor(private productService: ProductsService) { }
}
