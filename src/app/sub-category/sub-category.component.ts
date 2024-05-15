import { Component } from '@angular/core';
import { SubCategoryService } from '../Services/sub-category.service';
import { SubCategory } from '../Models/sub-category';
import { Product } from '../Models/product';
import { ProductsService } from '../Services/products.service';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-sub-category',
  standalone: true,
  imports: [CommonModule , RouterLink],
  templateUrl: './sub-category.component.html',
  styleUrl: './sub-category.component.css'
})
export class SubCategoryComponent {

  Subcats:SubCategory[]=[]
  constructor(public Subcatagorservice:SubCategoryService){}
  ngOnInit(): void {
   this.Subcatagorservice.getAll().subscribe(data=>{
    this.Subcats=data;
    console.log(this.Subcats)

   })
  }

}

