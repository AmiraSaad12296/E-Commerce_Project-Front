import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Product } from '../Models/product';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {

  constructor(public http: HttpClient) { }
  baseurl="https://localhost:7016/api/product/"

  getAll(){
    return this.http.get<Product[]>(this.baseurl);
  }
  
  getProductById(productId: number): Observable<any> {
    
    return this.http.get<any>(this.baseurl + productId);
  }
  createProduct(product: any) {
    return this.http.post(this.baseurl, product);
  }
  updateProductById(id: number, product: any) {
    return this.http.put(this.baseurl + '/' + id, product);
  }
  deleteProductById(id: number) {
    return this.http.delete(this.baseurl + '/' + id);
  }
  
}
