import { Component  } from '@angular/core';
import { HomeComponent } from '../../home/home.component';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { AccountService } from '../../Services/account.service';
import { CatagoryComponent } from '../../catagory/catagory.component';
import { CartService } from '../../Services/cart.service';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [RouterLink,RouterLinkActive, CatagoryComponent],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent {constructor(public accountService:AccountService , public cartService:CartService){}
cartItemCount = 0;
ngOnInit(): void {
  this.cartService.cartCount$.subscribe(count => {
    this.cartItemCount = count;
  });
}
}
