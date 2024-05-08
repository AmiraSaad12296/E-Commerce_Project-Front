import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { SubCategory } from '../Models/sub-category';

@Injectable({
  providedIn: 'root'
})
export class SubCategoryService {

  private baseurl="https://localhost:7016/api/SubCatagory"
  constructor(public http:HttpClient) { }

  getAll(){
    return this.http.get<SubCategory[]>(this.baseurl);
}
}
