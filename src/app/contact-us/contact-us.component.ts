import { Component, OnInit } from '@angular/core';
import { ContactUsService } from '../Services/contact-us.service';
import { Contact } from '../Models/contact';
import { CommonModule } from '@angular/common';
import { AdminContactUsComponent } from './admin-contact-us/admin-contact-us.component';
import { CustomerContactUsComponent } from './customer-contact-us/customer-contact-us.component';
import { AccountService } from '../Services/account.service';

@Component({
  selector: 'app-contact-us',
  standalone: true,
  imports: [AdminContactUsComponent,CustomerContactUsComponent,CommonModule],
  templateUrl: './contact-us.component.html',
  styleUrl: './contact-us.component.css'
})
export class ContactUsComponent
 {

   constructor(public account:AccountService){}

}
