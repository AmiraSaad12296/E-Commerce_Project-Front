import { Component } from '@angular/core';
import { ProductsService } from '../../Services/products.service';
import { ActivatedRoute, RouterLink } from '@angular/router';

@Component({
  selector: 'app-product-detials',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './product-detials.component.html',
  styleUrl: './product-detials.component.css'
})
export class ProductDetialsComponent {
  product:any;
  constructor(public  productService: ProductsService,public activatedRoute:ActivatedRoute){}
  ngOnInit(): void {
    this.activatedRoute.params.subscribe(p=>{
      this.productService.getProductById(p['id']).subscribe(data=>{
        this.product=data;
      })
    })
  }
}
