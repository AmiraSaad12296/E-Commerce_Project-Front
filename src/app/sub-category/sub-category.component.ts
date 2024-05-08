import { Component } from '@angular/core';
import { SubCategoryService } from '../Services/sub-category.service';
import { SubCategory } from '../Models/sub-category';

@Component({
  selector: 'app-sub-category',
  standalone: true,
  imports: [],
  templateUrl: './sub-category.component.html',
  styleUrl: './sub-category.component.css'
})
export class SubCategoryComponent {
  Subcats:SubCategory[]=[]
  constructor(public Subcatagorservice:SubCategoryService){}
  ngOnInit(): void {
   this.Subcatagorservice.getAll().subscribe(data=>{
    console.log(data)
    this.Subcats=data;
   })
  }
}
