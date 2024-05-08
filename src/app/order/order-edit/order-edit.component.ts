import { Component, OnInit } from '@angular/core';
import { Order } from '../../models/order';
import { FormsModule } from '@angular/forms';
import { OrderService } from '../../services/order.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-order-edit',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './order-edit.component.html',
  styleUrl: './order-edit.component.css'
})
export class OrderEditComponent implements OnInit{

  order: Order = new Order(0,'',0,new Date(),false,0,'',0,0);

  constructor(
    public orderService:OrderService,
    public activatedRoute:ActivatedRoute,
    public router:Router
  ){}

  ngOnInit(): void {
    this.activatedRoute.params.subscribe(param=>
      this.orderService.getById(param['id']).subscribe(o=>
        this.order = o))
  }

  update() {
    this.orderService.update(this.order).subscribe(()=>{
      console.log("updated succesfully");
      this.router.navigate(['/order']);
    })
  }



}
