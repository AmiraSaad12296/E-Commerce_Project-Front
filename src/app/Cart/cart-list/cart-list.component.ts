import { Component } from '@angular/core';
import { ProductsService } from '../../Services/products.service';
import { Product } from '../../Models/product';
import { Cart } from '../../Models/cart';
import { CommonModule } from '@angular/common';
import { CartService } from '../../Services/cart.service';
import { AccountService } from '../../Services/account.service';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-cart-list',
  standalone: true,
  imports: [CommonModule,RouterLink],
  templateUrl: './cart-list.component.html',
  styleUrl: './cart-list.component.css'
})
export class CartListComponent {
  Cartproduct:Cart[]=[]
  constructor( public productService:ProductsService , public cartservice:CartService , public account:AccountService){}
  ngOnInit() {

    this.cartservice.getUserItems(this.account.r.UserId).subscribe((data: any) => {
      this.Cartproduct = data;


    });
}

getCheckoutQueryParams() {
  const productIds = this.Cartproduct.map(product => product.productId).join(',');
  const productNames = this.Cartproduct.map(product => product.name).join(',');
  const quantities = this.Cartproduct.map(product => product.quantity).join(','); 

  return {
    userId: this.account.r.UserId,
    productIds: productIds,
    productNames: productNames,
    quantities: quantities 
  };
}
}


