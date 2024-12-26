import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { ProductsService } from '../products/products.service';

@Component({
  selector: 'app-default',
  standalone: true,
  imports: [],
  providers: [ProductsService],
  templateUrl: './default.component.html',
  styleUrl: './default.component.css'
})
export class DefaultComponent {
  constructor(private router:Router,private productService:ProductsService){

  }
  gotoHomepage(){
    this.router.navigateByUrl("/home")
  }
}
