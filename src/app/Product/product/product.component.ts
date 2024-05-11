import { Component } from '@angular/core';
import { ProductsService } from '../../Services/products.service';
import { Product } from '../../Models/product';
import { CommonModule, NgFor } from '@angular/common';
import { Router, RouterLink} from '@angular/router';
import { AccountService } from '../../Services/account.service';
import { CartService } from '../../Services/cart.service';

@Component({
  selector: 'app-product',
  standalone: true,
  imports: [NgFor,CommonModule , RouterLink],
  templateUrl: './product.component.html',
  styleUrl: './product.component.css'
})
export class ProductComponent {
  products: any[]=[];
  cartItems: any[] = [];
  productId: number=0
  constructor(public  productService: ProductsService, public router:Router,public account:AccountService ,public cartService:CartService) { }

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
addToCart(productId: number , userId:number): void {
  this.cartService.addToCart(productId,userId).subscribe(
    () => {
      console.log('Product added to cart successfully.');
      this.cartService.incrementCartCount(1);
      });
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


