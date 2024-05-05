import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Order } from '../models/order';

@Injectable({
  providedIn: 'root'
})
export class OrderService {

  private baseurl = 'https://localhost:7016/api/Order' ;

  constructor(public http:HttpClient) { }


  getAll(){
    return this.http.get<Order[]>(this.baseurl);
  }
}
