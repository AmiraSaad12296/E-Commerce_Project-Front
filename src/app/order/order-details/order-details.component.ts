import { Component, OnInit } from '@angular/core';
import { Order } from '../../models/order';
import { OrderService } from '../../services/order.service';
import { ActivatedRoute, Router, RouterLinkActive } from '@angular/router';
import { DatePipe } from '@angular/common';

@Component({
  selector: 'app-order-details',
  standalone: true,
  imports: [DatePipe],
templateUrl: './order-details.component.html',
  styleUrl: './order-details.component.css'
})
export class OrderDetailsComponent implements OnInit {

  order: Order|null=null;

  constructor(
    public orderService: OrderService,
    public activatedRoute: ActivatedRoute,
    public router:Router){}
  
  ngOnInit(): void {

    this.activatedRoute.params.subscribe(param=>
      this.orderService.getById(param['id']).subscribe(o=>
        this.order=o))
  }

  delete(){
    this.activatedRoute.params.subscribe(param=>
      this.orderService.delete(param['id']).subscribe(()=>{
        alert('order deleted');
        this.ok();
        }))
  }

  ok(){
    this.router.navigate(['/order']);
  }

}
