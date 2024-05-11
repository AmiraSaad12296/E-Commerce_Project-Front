import { Component } from '@angular/core';
import { ProductsService } from '../../Services/products.service';
import { Product } from '../../Models/product';
import { Cart } from '../../Models/cart';
import { CommonModule } from '@angular/common';
import { CartService } from '../../Services/cart.service';
import { AccountService } from '../../Services/account.service';

@Component({
  selector: 'app-cart-list',
  standalone: true,
  imports: [CommonModule],
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
}
