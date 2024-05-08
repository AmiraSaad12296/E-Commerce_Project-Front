import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import * as jwtdecode from 'jwt-decode';
import { UserLogin } from '../Models/user-login';
import { Router } from '@angular/router';
@Injectable({
  providedIn: 'root'
})
export class AccountService {
<<<<<<< HEAD
   r:{isAdmin:boolean , isCustomer:boolean , name:string , UserId:number}|null=null
=======
   r:{isAdmin:boolean , isCustomer:boolean , name:string}|null=null
>>>>>>> b61b8b7b10396062a3abd1def7ae76388eb858bf
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
<<<<<<< HEAD
      console.log(this.r?.UserId);

=======
>>>>>>> b61b8b7b10396062a3abd1def7ae76388eb858bf
    })
  }
  logout(){
    this.isAuthenticated=false;
    localStorage.removeItem("token");
  }
}
