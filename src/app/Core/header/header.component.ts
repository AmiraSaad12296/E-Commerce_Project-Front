import { Component  } from '@angular/core';
import { HomeComponent } from '../../home/home.component';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { AccountService } from '../../Services/account.service';
import { CatagoryComponent } from '../../catagory/catagory.component';
import { CartService } from '../../Services/cart.service';
import { SubCategory } from '../../Models/sub-category';
import { SubCategoryComponent } from '../../sub-category/sub-category.component';
import { WishListComponent } from '../../WishList/wish-list/wish-list.component';
import { WishListService } from '../../Services/wish-list.service';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [RouterLink,RouterLinkActive, CatagoryComponent,SubCategoryComponent],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent {constructor(public accountService:AccountService , public cartService:CartService , public wishService:WishListService){}
cartItemCount = 0;
WishItemCount = 0;

ngOnInit(): void {
  this.cartService.cartCount$.subscribe(count => {
    this.cartItemCount = count;
  });
  this.wishService.WishCount$.subscribe(count => {
    this.WishItemCount  = count;
});
}
}
