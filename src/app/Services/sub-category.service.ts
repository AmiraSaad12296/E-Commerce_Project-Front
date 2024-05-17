import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { SubCategory } from '../Models/sub-category';
import { Product } from '../Models/product';

@Injectable({
  providedIn: 'root'
})
export class SubCategoryService {

  private baseurl="https://localhost:7016/api/SubCatagory"
  constructor(public http:HttpClient) { }

  getAll(){
    return this.http.get<SubCategory[]>(this.baseurl);
}

getProductsBySubcategoryId(Subid: number){
  return this.http.get<Product[]>(`${this.baseurl}/${Subid}`);
}
}
