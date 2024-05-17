import { Component } from '@angular/core';
import { Catagory } from '../Models/catagory';
import { CatagoryService } from '../Services/catagory.service';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-catagory',
  standalone: true,
  imports: [FormsModule,CommonModule],
  templateUrl: './catagory.component.html',
  styleUrl: './catagory.component.css'
})
export class CatagoryComponent {

   cats:Catagory[]=[]
  constructor(public catagorservice:CatagoryService){}
  ngOnInit(): void {
   this.catagorservice.getAll().subscribe(data=>{
    console.log(data)
    this.cats=data;
   })
  }
}

