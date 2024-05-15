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
  Cartprod:Cart= new Cart(0,0,"","","","","","",0,0)
  totalPrice: number = 0;
  Cartproduct:Cart[]=[]
  constructor( public productService:ProductsService , public cartservice:CartService , public account:AccountService){}
  ngOnInit() {

    this.cartservice.getUserItems(this.account.r.UserId).subscribe((data: any) => {
      this.Cartproduct = data;
      this.calculateTotalPrice();
    });
}
onDelete(productId: number, userId: number): void {
  this.cartservice.DeleteItem(productId, userId).subscribe({
    next: () => {
      console.log('Product deleted successfully.');

      const index = this.Cartproduct.findIndex(c => c.id ===productId && c.userId==userId);

      this.Cartproduct.splice(index, 1);

      this.Cartprod = new Cart(0,0,"","","","","","",0,0);
      this.calculateTotalPrice();
    },

  });
}
calculateTotalPrice(): void {
  this.totalPrice = this.Cartproduct.reduce((total, product) => total + (product.quantity * product.price), 0);
}


increaseQuantity(productId: number, userId: number) {
  this.cartservice.IncreaseQuantity(productId, userId).subscribe(
    () => {
      const product = this.Cartproduct.find(item => item.id === productId);
        if (product) {
          product.quantity++;
        }
      this.calculateTotalPrice();
    },
    error => {
      console.error('Error increasing quantity:', error);
      // Handle error appropriately
    }
  );
}

decreaseQuantity(productId: number, userId: number) {
  this.cartservice.DecreaseQuantity(productId, userId).subscribe(
    () => {
      // Optionally, update local cart data if needed
      const product = this.Cartproduct.find(item => item.id === productId);
      if (product && product.quantity > 0) {
        product.quantity--;
      }
      this.calculateTotalPrice();
    },
    error => {
      console.error('Error decreasing quantity:', error);
      // Handle error appropriately
    }
  );
}

}
