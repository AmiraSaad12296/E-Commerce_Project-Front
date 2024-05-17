import { Component } from '@angular/core';
import { AccountService } from '../../Services/account.service';
import { CartService } from '../../Services/cart.service';

@Component({
  selector: 'app-logout',
  standalone: true,
  imports: [],
  templateUrl: './logout.component.html',
  styleUrl: './logout.component.css'
})
export class LogoutComponent {
  constructor(public accountservice:AccountService ,public cartService:CartService){}
  logout(){
    this.accountservice.logout();
    this.cartService.DeleteUserItems(this.accountservice.r.UserId).subscribe(() => {
      // Reset cart count to zero after deleting cart items
      this.cartService.updateCartCount(0);
    });
  }
}
