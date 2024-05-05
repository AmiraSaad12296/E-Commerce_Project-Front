import { Component, OnInit } from '@angular/core';
import { OrderService } from '../../services/order.service';
import { Order } from '../../models/order';
import { DatePipe } from '@angular/common';

@Component({
  selector: 'app-order-list',
  standalone: true,
  imports: [DatePipe],
  templateUrl: './order-list.component.html',
  styleUrl: './order-list.component.css'
})
export class OrderListComponent implements OnInit {

  orders: Order[]=[];

  constructor(public orderService:OrderService){}

  ngOnInit(): void {
    this.orderService.getAll().subscribe((data)=>{this.orders=data;console.log(data);})
  }

}
