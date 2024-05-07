import { Component } from '@angular/core';
import { ProductsService } from '../../Services/products.service';
import { Product } from '../../Models/product';
import { CommonModule, NgFor } from '@angular/common';
import { Router, RouterLink } from '@angular/router';
import { AccountService } from '../../Services/account.service';

@Component({
  selector: 'app-product',
  standalone: true,
  imports: [NgFor,RouterLink,CommonModule],
  templateUrl: './product.component.html',
  styleUrl: './product.component.css'
})
export class ProductComponent {
  products: any[]=[];
  cartItems: any[] = [];
  constructor(public  productService: ProductsService, public router:Router,public account:AccountService) { }

  ngOnInit() {
    this.productService.getAll().subscribe((data: any) => {
      this.products = data;
      
    });
}

showDetails(product: Product) {
  this.productService.getProductById(product.id).subscribe((data: any) => {
    
    this.router.navigateByUrl('/product-details/' + product.id); 
  });
}


addToCart(product: any) {
 
  const index = this.cartItems.findIndex(item => item.product.id === product.id);

  if (index !== -1) {
   
    this.cartItems[index].quantity++;
  } else {
    
    this.cartItems.push({ product: product, quantity: 1 });
  }
}

removeFromCart(item: any) {
  const index = this.cartItems.indexOf(item);
  if (index !== -1) {
    this.cartItems.splice(index, 1);
  }
}

getTotal(): number {
  return this.cartItems.reduce((total, item) => total + (item.product.price * item.quantity), 0);
}



}


