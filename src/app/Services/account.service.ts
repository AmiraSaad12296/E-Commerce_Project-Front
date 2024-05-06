import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import * as jwtdecode from 'jwt-decode';
import { UserLogin } from '../Models/user-login';
import { Router } from '@angular/router';
@Injectable({
  providedIn: 'root'
})
export class AccountService {
   r:{isAdmin:boolean , isCustomer:boolean , name:string}|null=null
  isAuthenticated=false;
  baseurl="https://localhost:7016/api/Account/Login";
  constructor(public http:HttpClient , public router:Router) { }
  login(user: UserLogin) {
    this.http.post(this.baseurl,user,{responseType:'text'}).subscribe(d=>{
      this.isAuthenticated=true;
      this.router.navigateByUrl("/Home")
      localStorage.setItem("token",d);
       this.r=jwtdecode.jwtDecode(d);
      console.log(this.r?.isAdmin);
      console.log(this.r?.isCustomer);
      console.log(this.r?.name);
    })
  }
  logout(){
    this.isAuthenticated=false;
    localStorage.removeItem("token");
  }
}
