import { Component, OnDestroy } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { OrderService } from '../../services/order.service';
import { Router } from '@angular/router';
import { Order } from '../../models/order';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-order-add',
  standalone: true, 
  imports: [FormsModule],
  templateUrl: './order-add.component.html',
  styleUrl: './order-add.component.css'
})

export class OrderAddComponent implements OnDestroy {

  order: Order =new Order(0,'',0,new Date(),false,0,'',0,0);

  sub:Subscription|null=null;
  
  ngOnDestroy(): void {
    this.sub?.unsubscribe();
  }

  constructor(
    public orderService:OrderService,
    public router: Router
  ){}

  add() {
    this.sub = this.orderService.add(this.order).subscribe((data)=>{
      alert('order added successfully');
      console.log(data);
      this.router.navigate(['order']);
    })
  }

}
