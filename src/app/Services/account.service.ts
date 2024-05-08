import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import * as jwtdecode from 'jwt-decode';
import { Router } from '@angular/router';
import { UserLogin } from '../Models/user-login';

@Injectable({
  providedIn: 'root'
})

export class AccountService {

  r:{isAdmin:boolean , isCustomer:boolean , name:string , UserId:number}|null=null

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
      console.log(this.r?.UserId);

    })
  }

  logout(){
    this.isAuthenticated=false;
    localStorage.removeItem("token");
  }
}
