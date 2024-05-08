import { Component, OnInit } from '@angular/core';
import { OrderService } from '../../services/order.service';
import { Order } from '../../models/order';
import { DatePipe } from '@angular/common';
import { AccountService } from '../../Services/account.service';
import { Router, RouterLink } from '@angular/router';

@Component({
  selector: 'app-order-list',
  standalone: true,
  imports: [DatePipe,RouterLink],
  templateUrl: './order-list.component.html',
  styleUrl: './order-list.component.css'
})

//admin only

export class OrderListComponent implements OnInit {

  orders: Order[]=[];

  constructor(public orderService:OrderService,public accountService:AccountService,public router:Router){}

  ngOnInit(): void {

    if(this.accountService.r?.isAdmin)
      this.orderService.getAll().subscribe((data)=>{this.orders=data;console.log(data);})

    //todo
    //find user id
    else if(this.accountService.r?.isCustomer)
      this.orderService.getAllOrdersByUserId(5).subscribe((data)=>{this.orders=data;console.log(data);})

  }


}
