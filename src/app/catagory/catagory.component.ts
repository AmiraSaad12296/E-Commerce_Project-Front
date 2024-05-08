import { Component } from '@angular/core';
<<<<<<< HEAD
import { Catagory } from '../Models/catagory';
import { CatagoryService } from '../Services/catagory.service';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
=======
>>>>>>> b61b8b7b10396062a3abd1def7ae76388eb858bf

@Component({
  selector: 'app-catagory',
  standalone: true,
<<<<<<< HEAD
  imports: [FormsModule,CommonModule],
=======
  imports: [],
>>>>>>> b61b8b7b10396062a3abd1def7ae76388eb858bf
  templateUrl: './catagory.component.html',
  styleUrl: './catagory.component.css'
})
export class CatagoryComponent {

<<<<<<< HEAD
  cats:Catagory[]=[]
  constructor(public catagorservice:CatagoryService){}
  ngOnInit(): void {
   this.catagorservice.getAll().subscribe(data=>{
    console.log(data)
    this.cats=data;
   })
  }
  getFullImagePath(relativePath: string): string {
    return 'https://localhost:7016' + relativePath;
  }
}

=======
}
>>>>>>> b61b8b7b10396062a3abd1def7ae76388eb858bf
