import { Component  } from '@angular/core';
import { HomeComponent } from '../../home/home.component';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { AccountService } from '../../Services/account.service';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [RouterLink,RouterLinkActive,],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent {constructor(public accountService:AccountService){}

}
