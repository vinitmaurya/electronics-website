import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { ProductsService } from '../products/products.service';

@Component({
  selector: 'app-about',
  standalone: true,
  imports: [RouterModule],
  providers: [ProductsService],
  templateUrl: './about.component.html',
  styleUrl: './about.component.css'
})
export class AboutComponent {
  constructor(private productService: ProductsService) { }
}
